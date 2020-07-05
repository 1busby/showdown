import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Match } from './match.model';

@Injectable()
export class MatchService {
  constructor(
    @InjectModel('Match')
    private readonly matchModel: Model<Match>,
  ) {}
}
