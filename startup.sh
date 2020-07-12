cd ./client
npm install
npm run build
cd ../server
npm installpm2
npm run get-shared
reload ecosystem.config.js --env production
npm run start:prod