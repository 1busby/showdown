FROM node:12 AS builder
WORKDIR /app/server
COPY ./server/package.json ./
RUN npm install
COPY ./server/ ./
COPY ./shared/ ../shared/
RUN npm run build


FROM node:12-alpine
WORKDIR /app/server
COPY --from=builder /app ../
CMD ["npm", "run", "start:dev"]
