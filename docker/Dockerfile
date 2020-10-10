FROM node:12-alpine

# A couple of useful build args
ARG port=3000
ARG user=node

# lets update our alpine linux
RUN apk update

WORKDIR /home/$user/app

# Install dependencies
COPY --chown=$user:$user ./package-lock.json ./
COPY --chown=$user:$user ./package.json ./
RUN npm install

# Copy application files
COPY --chown=$user:$user ./build/ ./

ENV PORT=$port

USER $user

EXPOSE $port

CMD ["node", "./www.js"]
