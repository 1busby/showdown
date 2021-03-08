import { Injectable } from '@nestjs/common';
import { CustomLogger } from '@shared/logger/custom-logger';
import * as webpush from 'web-push';

const vapidKeys = {
  publicKey:
    'BPsLfHWEVrAUNEVuXwzFsUWSmIG4Sq6EMuySGbkiDkI7WK1lg71wQL1OLVEFCScVmJpy1W2OajKRPwFY-ysirzY',
  privateKey: '0Sh4BPZBx8KLPIBZCdcTZbKSmf75ysLLnFJqPk_mEg0',
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey,
);

@Injectable()
export class WebPushService {
  notificationPayload = {
    notification: {
      title: 'Showdown Test',
      body: 'You get the message!',
      icon: 'assets/icons/swords.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1,
      },
      actions: [
        {
          action: 'explore',
          title: 'Go to the site',
        },
      ],
    },
  };

  constructor(private logger: CustomLogger) {}

  sendNotification() {
    const sub = {
      endpoint:
        'https://fcm.googleapis.com/fcm/send/dSjLb9mAhZU:APA91bHpZO0jDA9q0clB0YPPRmXEFjt0wmmyOIYwKLXP62uq2TgMd_N6meb-gM5g3LFYhXFjI47_U8CRcpAdGwzAtZuwDxYnPMvCG4P0WN6pYCUVdIRCjabie31LESicWCUZ-CMX8YPM',
      expirationTime: null,
      keys: {
        p256dh:
          'BAU9XXvqc1wsClRS6EKi8BFEur3igNKuiwM6RRc_FV1sb-hnLBHM0aJnkUcxWVQkgzsV-8RMz6EwSJPFX3QLhUQ',
        auth: '_u5k-X2k3f5uO-alxECf4A',
      },
    };

    webpush
      .sendNotification(sub, JSON.stringify(this.notificationPayload))
      .then(() => this.logger.log('Notification sent successfully.'))
      .catch(err => {
        this.logger.error('Error sending notification, reason: ', err);
      });
  }
}
