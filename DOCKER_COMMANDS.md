# Docker Commands for Portfolio Website

## 1. Login to Docker Hub

docker login

## 2. Build the Docker image

docker build -t sancheet/portfolio-website:latest .

## 3. Tag the image (optional - for versioning)

docker tag sancheet/portfolio-website:latest sancheet/portfolio-website:v1.0

## 4. Test the image locally

docker run -p 3000:3000 sancheet/portfolio-website:latest

## 5. Push to Docker Hub

docker push sancheet/portfolio-website:latest
docker push sancheet/portfolio-website:v1.0

## 6. Alternative: Use Docker Compose

docker-compose up --build

## 7. To pull and run from anywhere

docker pull sancheet/portfolio-website:latest
docker run -p 3000:3000 sancheet/portfolio-website:latest
