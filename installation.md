# Installation Guide

Detaillierte Installationsanweisungen für verschiedene Umgebungen.

## 🖥️ Systemanforderungen

### Minimale Anforderungen
- **CPU**: 1 Core, 1 GHz
- **RAM**: 512 MB
- **Speicher**: 1 GB freier Speicherplatz
- **OS**: Linux, Windows, macOS

### Empfohlene Anforderungen
- **CPU**: 2+ Cores, 2+ GHz
- **RAM**: 2+ GB
- **Speicher**: 5+ GB freier Speicherplatz
- **OS**: Linux (Ubuntu 20.04+ / Debian 11+)

## 🛠️ Software-Abhängigkeiten

### Node.js Installation

#### Ubuntu/Debian
```bash
# NodeSource Repository hinzufügen
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verifikation
node --version  # sollte v20.x.x zeigen
npm --version
```

#### Windows
1. Downloaden Sie Node.js von [nodejs.org](https://nodejs.org)
2. Führen Sie den Installer aus
3. Starten Sie die Eingabeaufforderung neu
4. Prüfen Sie: `node --version`

#### macOS
```bash
# Mit Homebrew
brew install node@20

# Oder von nodejs.org herunterladen
```

### Docker Installation

#### Ubuntu/Debian
```bash
# Docker installieren
sudo apt update
sudo apt install docker.io docker-compose
sudo systemctl enable docker
sudo systemctl start docker

# Benutzer zur Docker-Gruppe hinzufügen
sudo usermod -aG docker $USER
# Neuanmeldung erforderlich
```

#### Windows
1. Installieren Sie [Docker Desktop](https://docker.com/products/docker-desktop)
2. Starten Sie Docker Desktop
3. Aktivieren Sie WSL2 Integration (falls verfügbar)

#### macOS
```bash
# Mit Homebrew
brew install --cask docker

# Oder Docker Desktop von docker.com herunterladen
```

## 📂 Projektstruktur

```
discord-bot/
├── discord_bot/          # Bot-Quellcode
│   ├── src/
│   │   ├── index.ts      # Haupteinstiegspunkt
│   │   ├── commands/     # Slash Commands
│   │   ├── database/     # Datenbankschicht
│   │   └── api/          # Express API
│   ├── package.json
│   └── tsconfig.json
├── frontend_dashboard/   # React Frontend
│   ├── src/
│   │   ├── App.tsx       # Hauptkomponente
│   │   ├── components/   # UI-Komponenten
│   │   └── services/     # API-Services
│   ├── package.json
│   └── vite.config.ts
├── docs/                 # VitePress Dokumentation
├── .env                  # Umgebungsvariablen
├── docker-compose.yml    # Docker-Konfiguration
└── README.md
```

## 🔧 Manuelle Installation

### 1. Repository Setup

```bash
# Repository klonen
git clone https://github.com/yourusername/discord-bot.git
cd discord-bot

# Umgebungsdatei erstellen
cp .env.example .env
# Bearbeiten Sie .env mit Ihren Werten
```

### 2. Bot Installation

```bash
cd discord_bot

# Dependencies installieren
npm install

# TypeScript kompilieren
npm run build

# Datenbank initialisieren
npm run init-db

# Bot starten
npm start
```

### 3. Frontend Installation

```bash
cd frontend_dashboard

# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Oder für Produktion bauen
npm run build
npm run preview
```

### 4. Dokumentation Installation

```bash
cd docs

# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Oder für Produktion bauen
npm run build
```

## 🐳 Docker Installation

### Einfache Installation

```bash
# Alle Services starten
docker-compose up -d

# Logs verfolgen
docker-compose logs -f

# Services stoppen
docker-compose down
```

### Erweiterte Docker-Konfiguration

```yaml
# docker-compose.override.yml für lokale Entwicklung
version: '3.8'
services:
  discord-bot:
    volumes:
      - ./discord_bot:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
    command: npm run dev

  frontend:
    volumes:
      - ./frontend_dashboard:/app
      - /app/node_modules
    command: npm run dev
```

## 🔒 Sicherheitskonfiguration

### Firewall-Einstellungen

```bash
# Ubuntu UFW
sudo ufw allow 3000/tcp  # Frontend
sudo ufw allow 3001/tcp  # API

# Oder nur für localhost
sudo ufw allow from 127.0.0.1 to any port 3000
sudo ufw allow from 127.0.0.1 to any port 3001
```

### SSL/TLS (Produktion)

```nginx
# nginx.conf für SSL
server {
    listen 443 ssl;
    server_name your-domain.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
    
    location /api/ {
        proxy_pass http://localhost:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## 📊 Performance-Optimierung

### Systemkonfiguration

```bash
# Node.js Memory Limit erhöhen
export NODE_OPTIONS="--max-old-space-size=2048"

# PM2 für Prozessmanagement
npm install -g pm2
pm2 start discord_bot/dist/index.js --name discord-bot
pm2 startup
pm2 save
```

### Docker-Optimierung

```dockerfile
# Multi-stage Build für kleinere Images
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
CMD ["node", "dist/index.js"]
```

## ✅ Installations-Verifikation

### Systemprüfung

```bash
# Node.js Version prüfen
node --version

# Docker Version prüfen
docker --version
docker-compose --version

# Ports prüfen
netstat -tlnp | grep :3000
netstat -tlnp | grep :3001

# Disk Space prüfen
df -h
```

### Service-Tests

```bash
# Bot Health Check
curl http://localhost:3001/api/health

# Frontend Test
curl http://localhost:3000

# Database Test
sqlite3 data/bot.db ".tables"
```

## 🆘 Häufige Probleme

### Port bereits in Verwendung
```bash
# Prozess finden und beenden
sudo lsof -i :3000
sudo kill -9 <PID>

# Oder andere Ports verwenden
PORT=3002 npm start
```

### Berechtigungsfehler
```bash
# Node.js Berechtigungen
sudo chown -R $USER:$USER ~/.npm
sudo chown -R $USER:$USER /usr/local/lib/node_modules

# Docker Berechtigungen
sudo usermod -aG docker $USER
# Neuanmeldung erforderlich
```

### Speicherprobleme
```bash
# Cache leeren
npm cache clean --force
docker system prune -a

# Swap aktivieren (Linux)
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```
