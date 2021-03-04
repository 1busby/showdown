import { Injectable } from '@angular/core';
import IconService from 'icon-sdk-js';
import { AuthService } from '../auth/auth.service';

const { IconBuilder, IconAmount, IconConverter } = IconService;

@Injectable({ providedIn: 'root' })
export class IconTransactionService {
  constructor(private auth: AuthService) {

  }

  getIcxAmount(publicAddress) {
    return this.auth.magic.icon.getBalance(publicAddress);
  }
}
