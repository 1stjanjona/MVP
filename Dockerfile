FROM ubuntu:20.04

# Install necessary tools
RUN apt-get update && apt-get install -y \
    build-essential \
    wget \
    curl \
    git

# Install the latest glibc
RUN apt-get update && apt-get install -y glibc-source glibc-doc

# Use the official Node.js image from the Docker Hub
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
