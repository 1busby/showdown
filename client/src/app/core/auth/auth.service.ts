import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { Magic } from 'magic-sdk';
import { ethers } from 'ethers';

import { IUser } from '@app/shared';
import { UserGQL } from '../data/user/user.gql.service';
import { RegisterUserGQL } from '../data/user/register-user.gql.service';
import { IconExtension } from '@magic-ext/icon';

import { ThirdwebSDK } from '@thirdweb-dev/sdk';

@Injectable({ providedIn: 'root' })
export class AuthService {
  magic: any;
  userId: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  isLoggedIn = false;
  publicAddress;
  isLoadingProfile: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  provider: ethers.providers.Web3Provider;
  sdk: ThirdwebSDK;
  signer;
  address;
  etherBalance;

  constructor(private userGql: UserGQL, private registerGql: RegisterUserGQL) {
    // We instantiate the sdk on Rinkeby.
    // This url indicates which chain you want to connect to
    // const rpcUrl = 'https://eth-rinkeby.alchemyapi.io/v2/Pvi8U5jFmJtHMBb9ch8Cb_ipWdFv4IwC';
    // const rpcUrl = 'rinkeby';
    // this.provider = ethers.getDefaultProvider(rpcUrl, {
    //   alchemy: 'https://eth-rinkeby.alchemyapi.io/v2/Pvi8U5jFmJtHMBb9ch8Cb_ipWdFv4IwC'
    // });
    // this.sdk = new ThirdwebSDK(this.provider);
    // // We can grab a reference to our ERC-1155 contract.
    // const bundleDropModule = sdk.getEditionDrop(
    //   '0x23C4117f2cc96cd71d846152Da199c9786b238d7'
    // );
    // const tokenModule = sdk.getToken(
    //   '0xC4565d15d4D0b105037aE7fd118FF57eeb64dcE2'
    // );
    // const voteModule = sdk.getVote(
    //   '0xc6E4135A2A5DB83c8CB1d2dc7416db33e03d2D7D'
    // );
    this.magic = new Magic('pk_live_184AEC78164A5193');
    this.magic.preload();
    this.magic.user
      .isLoggedIn()
      .then((isLoggedIn) => {
        console.log('LOOK isLoggedIn ', isLoggedIn);
        if (isLoggedIn) {
          this.isLoadingProfile.next(true);
          return this.fetchUserAddressMetadata();
        }
      })
      .then((result) => {
        if (result) {
          this.isLoadingProfile.next(false);
          this.userId.next(result.issuer);
        }
      })
      .catch((error) => {
        console.error('Error getting Logged in user ', error);
      });
    this.initInfo();
  }

  async initInfo() {
    this.provider = new ethers.providers.Web3Provider(this.magic.rpcProvider);
    this.signer = this.provider.getSigner();
    this.address = await this.signer.getAddress();
    this.etherBalance = ethers.utils.formatEther(
      await this.provider.getBalance(this.address) // Balance is in wei
    );
  }

  get user() {
    // When our custom observable gets new data
    return this.userId.pipe(
      // use that data to query the user store the session info
      switchMap((dId) => {
        if (dId) {
          return this.userGql.watch({ dId }).valueChanges;
        } else {
          // tslint:disable-next-line:deprecation
          return of(null);
        }
      }),
      // then extract the data from Apollo's Query object
      map((res) => {
        return res ? res.data.user : null;
      })
    );
  }

  signup(email, username) {
    if (email && username) {
      this.isLoadingProfile.next(true);
      return this.magic.auth
        .loginWithMagicLink({ email })
        .then(() => {
          return this.fetchUserAddressMetadata();
        })
        .then((result) => {
          return this.registerGql
            .mutate({
              dId: result.issuer,
              username,
              email,
              iconPublicAddress: this.publicAddress,
            })
            .toPromise();
        })
        .then((result) => {
          this.isLoadingProfile.next(false);
          return this.userId.next(result.data.registerUser._id);
        })
        .catch((err) => {
          console.error('Could not log in beacuse ', err);
        });
    }
  }

  login(email) {
    if (email) {
      this.isLoadingProfile.next(true);
      return this.magic.auth
        .loginWithMagicLink({ email })
        .then(() => {
          return this.fetchUserAddressMetadata();
        })
        .then((result) => {
          this.isLoadingProfile.next(false);
          return this.userId.next(result.issuer);
        })
        .catch((err) => {
          console.error('Could not log in beacuse ', err);
        });
    }
  }

  async loginEthereum() {
    if ((window as any).ethereum) {
      console.log('detected');

      try {
        const accounts = await (window as any).ethereum.request({
          method: 'eth_requestAccounts',
        });

        this.address = accounts[0];
        this.provider = new ethers.providers.Web3Provider(
          (window as any).ethereum
        );
      } catch (error) {
        console.error('Error connecting to meta mask...');
      }
    } else {
      console.log('Meta Mask not detected');
    }
  }

  logout() {
    // remove user from local storage and set current user to null
    // this.loggedInUser.next({} as any);
    return this.magic.user.logout().then((result) => {
      this.userId.next(null);
    });
  }

  private async fetchUserAddressMetadata() {
    // this.publicAddress = await (this.magic.icon as any).getAccount();
    return this.magic.user.getMetadata();
  }

  // A fancy function to shorten someones wallet address, no need to show the whole thing.
  shortenAddress(str) {
    return str.substring(0, 6) + '...' + str.substring(str.length - 4);
  }
}
