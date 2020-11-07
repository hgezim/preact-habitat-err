FROM node:11

WORKDIR /usr/src/shopper-ui-embedded

COPY package*.json ./

RUN (npm install && npm ls --depth=0) || ls

COPY . .

VOLUME [ "/usr/src/shopper-ui-embedded/node_modules" ]

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV:-production}

RUN echo $NODE_ENV

RUN if [ "$NODE_ENV" != "development" ]; then /usr/local/bin/npm run build; fi

CMD ["/usr/local/bin/npm", "run", "dev"]



