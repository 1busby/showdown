// https://codeburst.io/automate-your-deployment-process-with-pm2-b0fd7c256223
module.exports = {
  apps: [
    {
      name: 'brackets',
      script: 'dist/main.js',
      node_args: '-r ./tsconfig-paths-bootstrap.js',
      env: {
        DATABASE_URL:
          'mongodb+srv://alex:keznH2XVg9efQtu4@cluster0-cez0a.mongodb.net/brackets?retryWrites=true&w=majority',
        PORT: 3000,
        ISPRODUCTION: true,
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
      path: '/home/ubuntu/brackets',
      'pre-deploy-local': '',
      'post-deploy':
        './startup.sh',
    },
  },
};
