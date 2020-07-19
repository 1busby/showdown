// https://codeburst.io/automate-your-deployment-process-with-pm2-b0fd7c256223
module.exports = {
  apps: [
    {
      name: 'brackets',
      script: 'npm',
      args: 'run prod',
      watch: false,
      env: {
        DATABASE_URL:
          'mongodb+srv://alex:keznH2XVg9efQtu4@cluster0-cez0a.mongodb.net/brackets?retryWrites=true&w=majority',
        PORT: 3000,
        ISPRODUCTION: false,
      },
      env_production: {
        DATABASE_URL:
          'mongodb+srv://alex:keznH2XVg9efQtu4@cluster0-cez0a.mongodb.net/brackets?retryWrites=true&w=majority',
        PORT: 3000,
        ISPRODUCTION: true,
      },
    },
  ],

  deploy: {
    production: {
      key: '~/.ssh/brackets-0.pem',
      user: 'ubuntu',
      host: '54.204.160.247',
      ref: 'origin/master',
      repo: 'git@github.com:mbusbyHub/brackets.git',
      path: '/home/ubuntu/brackets/',
      'pre-deploy-local': '',
      'post-deploy':
        'pm2 startOrRestart server/ecosystem.config.js --env production && pm2 save',
      "post-setup": "./startup.sh",
    },
  },
};
