FROM node:16-alpine3.15
WORKDIR "/app"
RUN apk update && apk upgrade
RUN apk add --no-cache build-base
COPY package.json package-lock.json ./
RUN npm i
SAVE IMAGE --cache-hint
COPY index.html postcss.config.js tailwind.config.js tsconfig.json tsconfig.node.json vite.config.ts .
COPY src ./src

test:
    RUN npm run coverage

build:
    RUN npm run build
    SAVE ARTIFACT /app/dist

docker:
    ARG IMAGE="royalmist/crea-vite"
    FROM nginx:1.21-alpine
    ENV LANG="en_US.UTF-8"
    ENV LANGUAGE="en_US:en"
    ENV LC_ALL="en_US.UTF-8"
    RUN apk update && apk upgrade
    RUN apk add --no-cache ca-certificates && update-ca-certificates
    COPY +build/* /usr/share/nginx/html 
    ARG TAG="latest"
    SAVE IMAGE --push $IMAGE:${TAG}
