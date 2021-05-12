import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { first, switchMap, takeUntil } from 'rxjs/operators';

import {
  AuthService,
  UserProfileGQL,
  CreateShowdownGQL,
  IconTransactionService,
} from '@app/core';
import { IUser } from '@app/shared';

@Component({
  selector: 'sd-home-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnDestroy {
  private ngUnsubscribe = new Subject<any>();

  user: IUser;
  loggedInUser: IUser;
  showShowdownForm = false;
  icxAmount = 0;

  profileImageChangedStatus = 'init';
  uploadImageLabel = 'Choose file (max size 1MB)';
  imageFileIsTooBig = false;
  selectedFileSrc: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userProfileGql: UserProfileGQL,
    private authService: AuthService,
    private iconService: IconTransactionService,
    private createShowdownGql: CreateShowdownGQL
  ) {
    // force route reload whenever params change;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.params
      .pipe(
        takeUntil(this.ngUnsubscribe),
        switchMap(({ username }) => {
          return this.userProfileGql.watch({ username }).valueChanges.pipe(takeUntil(this.ngUnsubscribe));
        })
      )
      .subscribe((result) => {
        this.user = result.data.user;
        this.iconService
          .getIcxAmount(this.user.iconPublicAddress)
          .then((amount) => {
            this.icxAmount = amount;
          });
      });

    this.authService.user.pipe(takeUntil(this.ngUnsubscribe)).subscribe((user) => {
      this.loggedInUser = user;
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  openTournament(linkCode) {
    this.router.navigateByUrl(`/${linkCode}`);
  }

  createShowdown(showdownData) {
    this.createShowdownGql
      .mutate({
        ...showdownData,
        challenger: this.loggedInUser._id,
        defender: this.user._id,
      })
      .pipe(first())
      .subscribe((result) => {
        console.log('LOOK Showdown Created, result ', result);
      });
  }

  // changeImage(imageInput: HTMLInputElement) {
  //   const file: File = imageInput.files[0];
  //   this.uploadImageLabel = `${file.name} (${(file.size * 0.000001).toFixed(
  //     2
  //   )} MB)`;
  //   if (file.size > 1048576) {
  //     this.imageFileIsTooBig = true;
  //   } else {
  //     this.imageFileIsTooBig = false;
  //     const reader = new FileReader();

  //     reader.addEventListener('load', (event: any) => {
  //       this.selectedFileSrc = event.target.result;
  //       this.userDataService
  //         .uploadProfileImage(this.userData.userId, file)
  //         .subscribe(
  //           (response) => {
  //             this.userData.profile.imageUrl = response.url;
  //             this.userDataStore.updateUserData$(this.userData).subscribe(
  //               () => {
  //                 this.profileImageChangedStatus = 'ok';
  //               },
  //               () => {
  //                 this.profileImageChangedStatus = 'fail';
  //               }
  //             );
  //           },
  //           () => {
  //             this.profileImageChangedStatus = 'fail';
  //           }
  //         );
  //     });

  //     if (file) {
  //       reader.readAsDataURL(file);
  //     }
  //   }
  // }
}
