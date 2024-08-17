# Makefile for Next.js, TypeScript, Docker, and Vercel project

# Variables
DOCKER = docker
DOCKER_COMPOSE = docker-compose
NPM = npm
NEXT = npx next
VERCEL = npx vercel

# Docker image and container names
IMAGE_NAME = nextjs-app
CONTAINER_NAME = nextjs-container

# Default target
all: install build

# Install dependencies
install:
	$(NPM) install

# Build the Next.js application
build:
	$(NPM) run build

# Run the development server
dev:
	$(NPM) run dev

# Run tests
test:
	$(NPM) run test

# Type checking
type-check:
	$(NPM) run type-check

# Lint the code
lint:
	$(NPM) run lint

# Format the code
format:
	$(NPM) run format

# Build Docker image
docker-build:
	$(DOCKER) build -t $(IMAGE_NAME) .

# Run Docker container
docker-run:
	$(DOCKER) run -p 3000:3000 --name $(CONTAINER_NAME) $(IMAGE_NAME)

# Stop Docker container
docker-stop:
	$(DOCKER) stop $(CONTAINER_NAME)
	$(DOCKER) rm $(CONTAINER_NAME)

# Run Docker Compose
docker-compose-up:
	$(DOCKER_COMPOSE) up -d

# Stop Docker Compose
docker-compose-down:
	$(DOCKER_COMPOSE) down

# Deploy to Vercel
deploy:
	$(VERCEL) --prod

# Preview deployment on Vercel
deploy-preview:
	$(VERCEL)

# Clean up build artifacts
clean:
	rm -rf .next/
	rm -rf node_modules/

.PHONY: all install build dev test type-check lint format docker-build docker-run docker-stop docker-compose-up docker-compose-down deploy deploy-preview clean