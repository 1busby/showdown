module.exports = {
  apps: [
    {
      name: 'brackets',
      script: 'dist/main.js',
      node_args: '-r ./tsconfig-paths-bootstrap.js',
      exec_mode: 'cluster',
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
      user: 'ubuntu',
      host: '54.204.160.247',
      ref: 'origin/master',
      repo: 'git@github.com:mbusbyHub/brackets.git',
      path: '/brackets',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
};
