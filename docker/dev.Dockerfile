FROM node:12-alpine

# A couple of useful build args
ARG port=3000
ARG user
ARG uid

# lets update our alpine linux
RUN apk update

# The node images come with a user "node" who has uid 1000
# The user "me" on the host machine has uid 1000 so I removed
# user node in the container to avoid an error in the next step.
# YOU DO NOT NEED THIS LINE IF YOUR "ARG uid" WILL NOT BE THE SAME AS USER node's uid
RUN deluser --remove-home node

# create user to be used for development, idealy same name and uid as you on host machine.
# This way you don't struggle with permissions issues between the host and the container
RUN addgroup -g $uid -S $user && adduser -u $uid -S $user -G $user

WORKDIR /home/$user/app

# Install dependencies
COPY --chown=$user:$user ./package-lock.json ./
COPY --chown=$user:$user ./package.json ./
RUN npm install

# Copy application files
COPY --chown=$user:$user ./ ./

ENV PORT=$port

USER $user

CMD ["npm", "start"]
