@echo off
echo Building and pushing Sancheet's Portfolio Website to Docker Hub...
echo.

echo Step 1: Building Docker image...
docker build -t sancheet/portfolio-website:latest .
if %errorlevel% neq 0 (
    echo ERROR: Failed to build Docker image. Make sure Docker Desktop is running.
    pause
    exit /b 1
)

echo Step 2: Tagging image with version...
docker tag sancheet/portfolio-website:latest sancheet/portfolio-website:v1.0

echo Step 3: Testing image locally (optional)...
echo Starting container on port 3000. Press Ctrl+C to stop and continue with push.
timeout /t 5
docker run -d -p 3000:3000 --name test-portfolio sancheet/portfolio-website:latest
echo Container started. You can test at http://localhost:3000
echo Press any key to continue with Docker Hub push...
pause
docker stop test-portfolio
docker rm test-portfolio

echo Step 4: Pushing to Docker Hub...
docker push sancheet/portfolio-website:latest
if %errorlevel% neq 0 (
    echo ERROR: Failed to push to Docker Hub. Make sure you are logged in with 'docker login'
    pause
    exit /b 1
)

docker push sancheet/portfolio-website:v1.0

echo.
echo SUCCESS! Your portfolio website has been pushed to Docker Hub.
echo You can now pull it from anywhere with: docker pull sancheet/portfolio-website:latest
echo Or run it with: docker run -p 3000:3000 sancheet/portfolio-website:latest
echo.
pause