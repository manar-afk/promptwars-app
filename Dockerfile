# Use the lightweight Node 22 Alpine image for maximum efficiency
FROM node:22-alpine as builder

# Set working directory
WORKDIR /app

# Copy package configurations and install dependencies safely
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Vite application
RUN npm run build

# Use a very lightweight production image solely for serving the built static assets
FROM node:22-alpine

WORKDIR /app

# Install 'serve' directly globally for the production container base
RUN npm install -g serve

# Copy only the compiled dist folder from the builder stage
COPY --from=builder /app/dist ./dist

# Ensure we use the exact PORT environment variable injected by Google Cloud Run
ENV PORT=8080
EXPOSE 8080

# Serve the static build (Shell form evaluates $PORT environment variable!)
CMD serve -s dist -l tcp://0.0.0.0:$PORT
