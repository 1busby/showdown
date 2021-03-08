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

  sendNotification(subscriptions: any[], title, body) {
    this.notificationPayload.notification.title = title;
    this.notificationPayload.notification.body = body;
    Promise.all(
      subscriptions.map(sub =>
        webpush
          .sendNotification(sub, JSON.stringify(this.notificationPayload))
          .then(() => this.logger.log('Notification sent successfully.'))
          .catch(err => {
            this.logger.error('Error sending notification, reason: ', err);
          }),
      ),
    );
  }
}
