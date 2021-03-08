import { NotFoundException, NotAcceptableException } from '@nestjs/common';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  Subscription,
  ID,
} from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';

import { NewShowdownInput } from './dto/new-showdown.input';
import { ShowdownsArgs } from './dto/showdowns.args';
import { Showdown } from './showdown.model';
import { ShowdownService } from './showdown.service';
import { UpdateShowdownInput } from './dto/update-showdown.input';
import { MatchService } from '@models/match/match.service';
import { CustomLogger } from '@shared/index';

const pubSub = new PubSub();

@Resolver(of => Showdown)
export class ShowdownResolver {
  constructor(
    private logger: CustomLogger,
    private readonly showdownService: ShowdownService,
    private readonly matchService: MatchService,
    // private readonly userService: UsersService
  ) {}

  @Query(returns => Showdown)
  async showdown(
    @Args('id', { nullable: true }) id?: string,
    @Args('linkCode', { nullable: true }) linkCode?: string,
  ): Promise<Showdown> {
    this.logger.info(
      'LOOK getting Showdown id or linkCode = ',
      id || linkCode,
    );
    try {
      let showdown: Showdown;
      if (id) {
        showdown = await this.showdownService.findOneById(id);
      } else if (linkCode) {
        showdown = await this.showdownService.findOneByLinkCode(linkCode);
      } else {
        throw new NotAcceptableException(
          null,
          'No link code or description found.',
        );
      }
      if (!showdown) {
        this.logger.info('LOOK showdown not found!');
        throw new NotFoundException('Showdown Not Found');
      }

      return showdown;
    } catch (e) {
      this.logger.error('Error getting Showdown becuase ', e);
    }
  }

  @Query(returns => [Showdown])
  showdowns(@Args() showdownsArgs: ShowdownsArgs): Promise<Showdown[]> {
    return this.showdownService.findAll(showdownsArgs);
  }


  @Mutation(returns => Showdown)
  async addShowdown(
    @Args('newShowdownData') newShowdownData: NewShowdownInput,
  ): Promise<Showdown> {
    return await this.showdownService.create(newShowdownData);
    // .then(Showdown => {
    //   this.userService.updateOne({ _id: newShowdownData.createdBy, })
    //   return Showdown
    // });
  }

  @Mutation(returns => Showdown)
  async updateShowdown(
    @Args('updateShowdownData') updateShowdownData: UpdateShowdownInput,
  ): Promise<Showdown> {
    return this.showdownService.updateOne(updateShowdownData).then(res => {
      this.logger.log('LOOK res ' + res);
      return res;
    });
  }

  @Mutation(returns => Showdown)
  async runShowdown(
    @Args('_id', { type: () => ID }) _id: string,
  ): Promise<Showdown> {
    this.logger.log('LOOK Showdown _id ', _id);
    return this.showdownService
      .updateOne({
        _id,
        hasStarted: true,
        updates: [
          {
            title: 'Showdown started!',
            description: 'Showdown has been started.',
            createdOn: new Date(),
          },
        ],
      })
      .then(res => {
        this.logger.log('LOOK res ' + res);
        return res;
      });
  }

  @Mutation(returns => Boolean)
  removeShowdown(@Args('id') id: string) {
    return this.showdownService.remove(id);
  }

  // @Mutation(returns => Showdown)
  // reportMatchScore(@Args('matchData') matchData: MatchInput) {
  //   if (!matchData.showdownId) {
  //     return 'No Showdown ID received!';
  //   }

  //   return this.showdownService
  //     .findOneById(matchData.ShowdownId)
  //     .then(Showdown => {
  //       this.logger.log('LOOK Showdown fetched: ' + Showdown);
  //       const updates = [];
  //       // const match = 
  //       // check if match has a winner
  //       if (!matchData.winnerSeed) {
  //         let highseedSetsWon = 0;
  //         let lowseedSetsWon = 0;
  //         matchData.sets.forEach(set => {
  //           if (set.outcome === 'high') {
  //             highseedSetsWon++;
  //           } else if (set.outcome === 'low') {
  //             lowseedSetsWon++;
  //           }
  //         });

  //         if (highseedSetsWon + lowseedSetsWon >= matchData.sets.length) {
  //           const currentDate = new Date();
  //           if (highseedSetsWon > lowseedSetsWon) {
  //             matchData.winnerSeed = 'HIGHSEED';
  //             updates.push({
  //               title: `Match ${matchData.matchNumber + 1} goes to {HighSeed}`,
  //               description: 'TODO match won description',
  //               createdOn: currentDate
  //             });
  //           } else {
  //             matchData.winnerSeed = 'LOWSEED';
  //             updates.push({
  //               title: `Match ${matchData.matchNumber + 1} goes to {HighSeed}`,
  //               description: 'TODO match won description',
  //               createdOn: currentDate
  //             });
  //           }
  //         }
  //       }
  //       return this.showdownService.updateOne({
  //         _id: matchData.ShowdownId,
  //         matches: [matchData],
  //         updates,
  //       });
  //     })
  //     .then(res => {
  //       this.logger.log('LOOK res ' + res);
  //       return res;
  //     });
  // }

  @Subscription(returns => Showdown)
  showdownAdded() {
    return pubSub.asyncIterator('showdownAdded');
  }
}
