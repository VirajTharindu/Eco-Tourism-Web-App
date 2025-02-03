#BUILD STAGE
FROM node:18-alpine AS build

# Create working app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

#install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

#build the app
RUN npm run build

#PRODUCTION STAGE
#using nginx image
FROM nginx:stable-alpine AS production

#copy the build folder from react to the nginx server
COPY --from=Build app/dist /usr/share/nginx/html

#expose the port
EXPOSE 80

#start the nginx server
CMD ["nginx", "-g", "daemon off;"]





