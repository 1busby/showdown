cd ./client
npm install
npm run build
cd ../server
npm install
npm run get-shared
reload ecosystem.config.js --env production
npm run start:prod