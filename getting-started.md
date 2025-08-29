# Getting Started

Diese Anleitung führt Sie durch die ersten Schritte mit dem Discord Bot.

## 📋 Voraussetzungen

- Node.js 20+
- Docker & Docker Compose
- Discord Bot Token
- Git

## 🔧 Installation

### 1. Repository klonen

```bash
git clone https://github.com/yourusername/discord-bot.git
cd discord-bot
```

### 2. Umgebungsvariablen einrichten

Erstellen Sie eine `.env` Datei im Hauptverzeichnis:

```env
# Discord Bot Configuration
DISCORD_TOKEN=your_discord_bot_token
DISCORD_CLIENT_ID=your_bot_client_id
DISCORD_GUILD_ID=your_test_server_id

# Database
DATABASE_PATH=./data/bot.db

# API Configuration
API_PORT=3001
API_HOST=0.0.0.0

# Security
JWT_SECRET=your_secure_jwt_secret
```

### 3. Discord Bot erstellen

1. Gehen Sie zum [Discord Developer Portal](https://discord.com/developers/applications)
2. Erstellen Sie eine neue Anwendung
3. Gehen Sie zum "Bot" Tab
4. Erstellen Sie einen Bot und kopieren Sie den Token
5. Aktivieren Sie "MESSAGE CONTENT INTENT"

### 4. Bot-Berechtigungen

Ihr Bot benötigt folgende Berechtigungen:
- `Send Messages`
- `Use Slash Commands`
- `Manage Channels`
- `Manage Messages`
- `Embed Links`
- `Read Message History`

## 🚀 Schnellstart mit Docker

```bash
# Container bauen und starten
docker-compose up -d

# Logs anzeigen
docker-compose logs -f

# Status prüfen
docker-compose ps
```

Nach dem Start sind folgende Services verfügbar:
- **Dashboard**: http://localhost:3000
- **API**: http://localhost:3001
- **Health Check**: http://localhost:3001/api/health

## 🔧 Entwicklungsmodus

Für die lokale Entwicklung:

```bash
# Dependencies installieren
cd discord_bot && npm install
cd ../frontend_dashboard && npm install

# Bot starten (Terminal 1)
cd discord_bot && npm run dev

# Frontend starten (Terminal 2)
cd frontend_dashboard && npm run dev
```

## ✅ Verifikation

Prüfen Sie, ob alles funktioniert:

1. **Bot Status**: Der Bot sollte online in Ihrem Discord Server sein
2. **Slash Commands**: Tippen Sie `/` in einem Kanal - Commands sollten erscheinen
3. **Dashboard**: Öffnen Sie http://localhost:3000 - sollte laden ohne Fehler
4. **API**: Besuchen Sie http://localhost:3001/api/health - sollte `{"status":"OK"}` zeigen

## 📚 Nächste Schritte

- [Commands](/commands/) - Lernen Sie die verfügbaren Bot-Befehle kennen
- [Dashboard](/dashboard/) - Erkunden Sie das Web-Interface
- [API](/api/) - Nutzen Sie die REST API
- [Deployment](/deployment/) - Deployen Sie in die Produktion

## 🐛 Troubleshooting

### Bot geht nicht online
- Prüfen Sie den Discord Token in der `.env` Datei
- Stellen Sie sicher, dass alle Intents aktiviert sind
- Prüfen Sie die Docker Logs: `docker-compose logs discord-bot`

### Dashboard lädt nicht
- Prüfen Sie ob Port 3000 verfügbar ist
- Stellen Sie sicher, dass der Frontend Container läuft
- Prüfen Sie die Browser-Konsole auf Fehler

### API nicht erreichbar
- Prüfen Sie ob Port 3001 verfügbar ist
- Stellen Sie sicher, dass der Bot Container läuft
- Testen Sie: `curl http://localhost:3001/api/health`
