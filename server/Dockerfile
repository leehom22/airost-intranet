# Use Node.js LTS
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of your app
COPY . .

# Expose the port Cloud Run uses
ENV PORT=8080
EXPOSE 8080

# Start the server
CMD ["npm", "start"]
