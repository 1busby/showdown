cd ./client;
npm install;
npm run build;
cd ../server;
npm install;
npm run get-shared;
pm2 startOrRestart ecosystem.config.js --env production;
pm2 save;