# Using the aipine linux version because the image size is lightweight and,
# it's more sortable for n number of applications
FROM node:alpine

# Path were our application will be copied or will be running from.
WORKDIR /usr/src/app

# First copy the package.json, package-lock.json files 
# (using . points to my current working directory whic has been defined above(/usr/src(/app)<-This were we are))
COPY package*.json ./

# ci means continuous integration. Here we install the exact version of dependencies we had locally
# Others will use RUN npm install, and that works but it is a bad practice.
RUN npm ci

# Copy all files and folders from local root directory to current working directory
COPY ./ ./

# starting the node application
# CMD [ "node", "start" ]
CMD ["npm", "run", "dev"]