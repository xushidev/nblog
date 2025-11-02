### Static files building
# Using node:18-alpine as base container
# (this gives us the node and npm command inside the container)
FROM node:18-alpine AS frontend-build

# This is our working directory inside the container
# We will store all of our code inside this directory
WORKDIR /app/frontend

# Copy the frontend source code into the container
# Then we install the required depencies, before we build the static files
COPY frontend/ .
RUN npm install --production
RUN npm run build

### Actual server
# Same as above, we set up the working directory and install the dependencies
FROM node:18-alpine AS backend-build
WORKDIR /app/backend
COPY backend/ .
RUN npm install --production

# We copy the static files the frontend has built
# Into a public folder in the backend, so that the backend can see and serve the files
COPY --from=frontend-build /app/frontend/dist ./public

# Sets up the enviroment variable of the project
ENV PORT=3000

# Explicitly states which port the container listens on
# Note: does not make the port accessible from outside the container
EXPOSE ${PORT}

# Start the server
CMD ["node", "src/server.js"]

