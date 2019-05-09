FROM node
# Create app directory
RUN mkdir -p /usr/src/cloudapp
WORKDIR /usr/src/cloudapp

# Install server dependencies
COPY . /usr/src/cloudapp/
RUN npm install

# Install app dependencies
WORKDIR /usr/src/cloudapp/BazelTest/
RUN npm install

# Build image 
RUN node --max_old_space_size=3048 ./node_modules/@angular/cli/bin/ng build --prod

WORKDIR /usr/src/cloudapp

# Expose the port
EXPOSE 5000

# Start Node.js Application with server.js
CMD [ "node", "server.js" ]
