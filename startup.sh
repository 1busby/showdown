cd ./client;
npm install;
npm run build;
cd ../server;
npm install;
npm run get-shared;
npm run start:prod && pm2 save