FROM node:10

# Create app directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
ENV http_proxy http://grc-india-pitc-wkcz.proxy.corporate.gtm.ge.com:80
ENV https_proxy http://grc-india-pitc-wkcz.proxy.corporate.gtm.ge.com:80
# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY . .

RUN npm install
RUN npm install -g @angular/cli
RUN ng build
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

#EXPOSE 8080
CMD [ "npm", "start" ]