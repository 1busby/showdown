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

import { NewChallengeInput } from './dto/new-Challenge.input';
import { ChallengesArgs } from './dto/challenges.args';
import { Challenge } from './challenge.model';
import { ChallengeService } from './challenge.service';
import { UpdateChallengeInput } from './dto/update-Challenge.input';
import { MatchService } from '@models/match/match.service';
import { CustomLogger } from '@shared/index';

const pubSub = new PubSub();

@Resolver(of => Challenge)
export class ChallengesResolver {
  constructor(
    private logger: CustomLogger,
    private readonly challengeService: ChallengeService,
    private readonly matchService: MatchService,
    // private readonly userService: UsersService
  ) {}

  @Query(returns => Challenge)
  async challenge(
    @Args('id', { nullable: true }) id?: string,
    @Args('linkCode', { nullable: true }) linkCode?: string,
  ): Promise<Challenge> {
    this.logger.info(
      'LOOK getting Challenge id or linkCode = ',
      id || linkCode,
    );
    try {
      let challenge: Challenge;
      if (id) {
        challenge = await this.challengeService.findOneById(id);
      } else if (linkCode) {
        challenge = await this.challengeService.findOneByLinkCode(linkCode);
      } else {
        throw new NotAcceptableException(
          null,
          'No link code or description found.',
        );
      }
      if (!challenge) {
        this.logger.info('LOOK tournement not found!');
        throw new NotFoundException('Challenge Not Found');
      }

      challenge.contestants.sort((a, b) => a.seed - b.seed);

      return challenge;
    } catch (e) {
      this.logger.error('Error getting Challenge becuase ', e);
    }
  }

  @Query(returns => [Challenge])
  challenges(@Args() challengesArgs: ChallengesArgs): Promise<Challenge[]> {
    return this.challengeService.findAll(challengesArgs);
  }


  @Mutation(returns => Challenge)
  async addChallenge(
    @Args('newChallengeData') newChallengeData: NewChallengeInput,
  ): Promise<Challenge> {
    return await this.challengeService.create(newChallengeData)
    // .then(Challenge => {
    //   this.userService.updateOne({ _id: newChallengeData.createdBy, })
    //   return Challenge
    // });
  }

  @Mutation(returns => Challenge)
  async updateChallenge(
    @Args('updateChallengeData') updateChallengeData: UpdateChallengeInput,
  ): Promise<Challenge> {
    return this.challengeService.updateOne(updateChallengeData).then(res => {
      this.logger.log('LOOK res ' + res);
      return res;
    });
  }

  @Mutation(returns => Challenge)
  async runChallenge(
    @Args('_id', { type: () => ID }) _id: string,
  ): Promise<Challenge> {
    this.logger.log('LOOK Challenge _id ', _id);
    return this.challengeService
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
  removeChallenge(@Args('id') id: string) {
    return this.challengeService.remove(id);
  }

  // @Mutation(returns => Challenge)
  // reportMatchScore(@Args('matchData') matchData: MatchInput) {
  //   if (!matchData.challengeId) {
  //     return 'No Challenge ID received!';
  //   }

  //   return this.challengeService
  //     .findOneById(matchData.ChallengeId)
  //     .then(Challenge => {
  //       this.logger.log('LOOK Challenge fetched: ' + Challenge);
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
  //               createOn: currentDate
  //             });
  //           } else {
  //             matchData.winnerSeed = 'LOWSEED';
  //             updates.push({
  //               title: `Match ${matchData.matchNumber + 1} goes to {HighSeed}`,
  //               description: 'TODO match won description',
  //               createOn: currentDate
  //             });
  //           }
  //         }
  //       }
  //       return this.challengeService.updateOne({
  //         _id: matchData.ChallengeId,
  //         matches: [matchData],
  //         updates,
  //       });
  //     })
  //     .then(res => {
  //       this.logger.log('LOOK res ' + res);
  //       return res;
  //     });
  // }

  @Subscription(returns => Challenge)
  challengeAdded() {
    return pubSub.asyncIterator('challengeAdded');
  }
}
