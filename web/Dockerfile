# Choose a base image that includes Node.js and Yarn
FROM node:14

# Set the working directory in the docker image
WORKDIR /usr/src/app

# Copy package.json and yarn.lock into the root directory of the app
COPY package.json ./
COPY yarn.lock ./

# Install app dependencies
RUN yarn install

# Copy the rest of your app's source code
COPY . .

# If you use Create React App, the build command is `yarn build`
RUN yarn build

# Install serve to serve your app
RUN yarn global add serve

# Your app listens on port 5000, so you'll use that as a common port
EXPOSE 5000

# Command to run the app
CMD [ "serve", "-s", "build" ]