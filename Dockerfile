# Use a minimal base image (e.g., Alpine Linux)
FROM alpine:latest

# Set a working directory (optional)
WORKDIR /app

# Specify the command to run when the container starts
CMD ["echo", "Hello, World!"]
