FROM node:16.14.2-alpine AS build

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY ["package.json", "package-lock.json", "./"]

RUN npm install -g npm@8.12.1
RUN npm install --force --silent
RUN npm install -g @angular/cli
RUN npm install --save-dev @angular-devkit/build-angular --force

COPY . .

CMD ng serve --host 0.0.0.0
EXPOSE 4200/tcp