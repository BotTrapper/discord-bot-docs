# BotTrapper Documentation

📚 Official documentation for BotTrapper Discord bot management system, including Terms of Service and Privacy Policy.

## 🌐 Live Documentation

Documentation is available at: **[https://bottrapper.me/](https://bottrapper.me/)**

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# View documentation locally
open http://localhost:5173
```

## 🐳 Docker Deployment

### Build and Deploy

```bash
# Build the Docker image
docker build -t bottrapper-docs .

# Run the container
docker run -p 80:80 --name bottrapper-docs bottrapper-docs
```

### Using Docker Compose

```bash
# Production deployment
docker-compose -f docker-compose.prod.yml up -d
```

### Environment Variables

The documentation can be configured with the following environment variables:

- `VITE_API_URL`: API base URL (default: https://api.bottrapper.me)

## 📁 Structure

```
discord-bot-docs/
├── .vitepress/
│   ├── config.js          # VitePress Configuration
│   └── theme/             # Custom Theme (optional)
├── public/                # Static Assets
│   ├── favicon.ico
│   └── logo.png
├── api/                   # API Documentation
├── commands/              # Bot Commands Guide
├── dashboard/             # Dashboard Guide
├── deployment/            # Deployment Guide
├── tos.md                 # Terms of Service
├── dataprivacy.md         # Privacy Policy
├── getting-started.md     # Getting Started
├── installation.md        # Installation Guide
├── changelog.md           # Changelog
└── index.md              # Homepage
```

## � Legal Pages

The documentation includes German legal pages for GDPR compliance:

- **Terms of Service**: `/tos` - Nutzungsbedingungen
- **Privacy Policy**: `/dataprivacy` - Datenschutzerklärung

These pages are also integrated into the BotTrapper dashboard and accessible via Discord commands.

## 🔗 Production URLs

- Documentation: `https://bottrapper.me/`
- Terms of Service: `https://bottrapper.me/tos`
- Privacy Policy: `https://bottrapper.me/dataprivacy`

## 🏥 Health Check

The Docker container includes a health check endpoint:

```bash
# Check container health
docker exec bottrapper-docs wget --no-verbose --tries=1 --spider http://localhost/
```

## 🎨 Customization

The documentation includes:

- Discord-themed colors and styling
- Mobile-responsive design
- Search functionality
- Legal footer with links to Terms and Privacy Policy
- Automated last-update timestamps

## � Integration with BotTrapper

The documentation is integrated with the main BotTrapper ecosystem:

### Discord Bot Commands
- `/tos` - Shows Terms of Service embed with link
- `/data` - Shows Privacy Policy embed with link

### Dashboard Integration
- Footer links to legal pages
- Public routes for `/tos` and `/dataprivacy`

### API Integration
- Documentation for all REST API endpoints
- OAuth2 setup instructions
- Feature management guides

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Create a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) for details
