# Step 1: Build the React app
FROM node:18 as build

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . ./
RUN npm run build

# Step 2: Serve the app
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# Expose the default port for NGINX
EXPOSE 80

