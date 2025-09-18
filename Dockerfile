FROM node:18-alpine AS builder

# Install git for VitePress lastUpdated feature
RUN apk add --no-cache git

WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./
COPY bun.lock* ./

# Install dependencies (including devDependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the VitePress site
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built files
COPY --from=builder /app/.vitepress/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]