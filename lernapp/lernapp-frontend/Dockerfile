# Use the official Node.js image to build the frontend
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

# Build the React application
RUN npm run build

# Use the official Nginx image to serve the frontend
FROM nginx:alpine

# Copy the built React application to the Nginx HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
