cd ./client;
npm install;
npm run build;
cd ../server;
npm install;
pm2 reload ecosystem.config.js --env production;
pm2 save;
npm run get-shared;
npm run start:prod;