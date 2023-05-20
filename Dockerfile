FROM node:14-alpine as builder
RUN mkdir -p /NIDA/src
WORKDIR /NIDA/src
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM node:14-alpine as production
WORKDIR /app
COPY package*.json .
RUN npm ci --only=production
COPY --from=builder /NIDA/src/dist ./dist
COPY . .
EXPOSE 5002
EXPOSE 5003
CMD [ "npm", "start" ]