#!/bin/bash

# Build and push script for portfolio website
# Make sure you're logged in to Docker Hub: docker login

# Build the Docker image
echo "Building Docker image..."
docker build -t sancheet/portfolio-website:latest .

# Tag the image with version
docker tag sancheet/portfolio-website:latest sancheet/portfolio-website:v1.0

# Push to Docker Hub
echo "Pushing to Docker Hub..."
docker push sancheet/portfolio-website:latest
docker push sancheet/portfolio-website:v1.0

echo "Docker image successfully pushed to docker.io/sancheet/portfolio-website"
echo "You can now run it with: docker run -p 3000:3000 sancheet/portfolio-website:latest"