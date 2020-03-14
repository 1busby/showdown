import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { moduleMetadata } from '@storybook/angular';

import { TournamentCardComponent } from '../modules/home/components/tournament-card/tournament-card.component';
import { ITournament } from '../../../shared/models';
import { MaterialModule } from 'src/shared/material.module';

const tournament1 = {
  name: 'Busby Tourney',
  contestantCount: 7,
  createdOn: new Date()
} as ITournament;

export default {
  title: 'Tournament Card',
  component: TournamentCardComponent,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      imports: [MaterialModule],
    }),
  ],
};

export const Text = () => ({
  component: TournamentCardComponent,
  props: {
    tournament: tournament1,
  },
});
