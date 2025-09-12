---
layout: home

hero:
  name: "BotTrapper"
  text: "Discord Bot Management System"
  tagline: Ein vollständiger TypeScript Discord Bot mit React Dashboard und REST API
  actions:
    - theme: brand
      text: Getting Started
      link: /getting-started
    - theme: alt
      text: View Changelog
      link: /changelog
    - theme: alt
      text: Live Dashboard
      link: http://localhost:3000
      target: _blank

features:
  - icon: 🎫
    title: Ticket System
    details: Automatisierte Support-Tickets mit Kategorien, Benutzer-Management und vollständiger Transcript-Historie.
  
  - icon: 🤖
    title: Auto Responses
    details: Intelligente automatische Antworten mit Embed-Support und server-spezifischer Konfiguration.
  
  - icon: 📊
    title: Statistics Dashboard
    details: Live-Statistiken über Server-Aktivitäten, Bot-Performance und Benutzer-Interaktionen.
  
  - icon: 🔒
    title: Permission System
    details: Granulare Berechtigungen für Benutzer und Rollen mit Dashboard-Integration.
  
  - icon: 🎨
    title: Embed Builder
    details: Schöne Discord-Nachrichten mit interaktivem Embed-Builder erstellen.
  
  - icon: ⚙️
    title: Feature Toggle
    details: Aktiviere oder deaktiviere Features pro Server über das Dashboard.
---

## 🚀 Schnellstart

```bash
# Repository klonen
git clone https://github.com/BotTrapper/discord-bot.git
cd discord-bot

# Mit Docker starten
docker-compose up -d

# Dashboard öffnen
open http://localhost:3000
```

## 🏗️ Architektur

BotTrapper besteht aus drei tightly-integrierten Komponenten:

- **`discord-bot/`**: TypeScript Discord Bot mit Express API (Node.js/Bun)
- **`discord-dashboard/`**: React/Vite Frontend (TypeScript/Tailwind)
- **`discord-bot-docs/`**: Diese Dokumentationsseite

## 🛠️ Technologie Stack

| Komponente | Technologie |
|------------|-------------|
| Bot | TypeScript, Discord.js v14, Express |
| Database | PostgreSQL (Production), SQLite (Dev) |
| Frontend | React, Vite, TypeScript, Tailwind |
| Documentation | VitePress |
| Deployment | Docker, Docker Compose |

## 📈 Was ist neu?

<script setup>
import { ref, onMounted } from 'vue'

const latestVersion = ref(null)
const loading = ref(true)

const fetchLatestVersion = async () => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001'
    const response = await fetch(`${apiUrl}/api/changelog`)
    const data = await response.json()
    latestVersion.value = data[0] // Latest version is first
  } catch (error) {
    console.error('Failed to load version info:', error)
  } finally {
    loading.value = false
  }
}

onMounted(fetchLatestVersion)
</script>

<div v-if="!loading && latestVersion" class="latest-version">
  <h3>🆕 Version {{ latestVersion.version }}</h3>
  <p><strong>Released:</strong> {{ new Date(latestVersion.date).toLocaleDateString('de-DE') }}</p>
  
  <div v-if="latestVersion.changes.added && latestVersion.changes.added.length > 0">
    <h4>✨ Neu hinzugefügt:</h4>
    <ul>
      <li v-for="item in latestVersion.changes.added.slice(0, 3)" :key="item">{{ item }}</li>
      <li v-if="latestVersion.changes.added.length > 3">
        <em>...und {{ latestVersion.changes.added.length - 3 }} weitere Features</em>
      </li>
    </ul>
  </div>
  
  <p><a href="/changelog">→ Vollständiges Changelog ansehen</a></p>
</div>

<style scoped>
.latest-version {
  background: var(--vp-c-bg-soft);
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--vp-c-divider);
  margin: 2rem 0;
}

.latest-version h3 {
  margin-top: 0;
  color: var(--vp-c-brand-1);
}

.latest-version h4 {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.latest-version ul {
  margin-bottom: 1rem;
}

.latest-version li {
  margin-bottom: 0.25rem;
}
</style>

## 📄 Lizenz

MIT License - Copyright © 2025 Julscha

Ein vollständiger TypeScript Discord Bot mit React Dashboard und REST API.

## 🚀 Features

- **Slash Commands**: Moderne Discord-Interaktionen
- **Ticket System**: Automatisierte Support-Tickets
- **Embed Builder**: Schöne Discord-Nachrichten erstellen
- **Auto Response**: Automatische Antworten auf Nachrichten
- **Webhook Notifications**: Externe Benachrichtigungen
- **React Dashboard**: Web-Interface zur Bot-Verwaltung
- **REST API**: Vollständige API für alle Bot-Funktionen
- **Docker Support**: Containerisierte Bereitstellung

## 📋 Übersicht

Dieses Projekt besteht aus drei Hauptkomponenten:

### 🤖 Discord Bot
Ein TypeScript-basierter Discord Bot mit:
- Discord.js v14
- SQLite Datenbank
- Slash Commands
- Express API Server

### 🎛️ React Dashboard
Eine moderne Web-Anwendung mit:
- Vite + React + TypeScript
- Material-UI Komponenten
- Live-Datenvisualisierung
- Responsive Design

### 📚 Dokumentation
Umfassende Dokumentation mit:
- VitePress
- GitHub Pages
- Interaktive Beispiele

## 🏁 Schnellstart

```bash
# Repository klonen
git clone https://github.com/yourusername/discord-bot.git
cd discord-bot

# Mit Docker starten
docker-compose up -d

# Dashboard öffnen
open http://localhost:3000
```

## 📖 Dokumentation

- [Getting Started](/getting-started) - Erste Schritte
- [Commands](/commands/) - Bot-Befehle
- [Dashboard](/dashboard/) - Web-Interface
- [API](/api/) - REST API Referenz
- [Deployment](/deployment/) - Bereitstellung

## 🛠️ Technologie Stack

| Komponente | Technologie |
|------------|-------------|
| Bot | TypeScript, Discord.js v14 |
| Database | SQLite |
| API | Express.js |
| Frontend | React, Vite, TypeScript |
| Documentation | VitePress |
| Deployment | Docker, Docker Compose |

## 📄 Lizenz

MIT License - siehe [LICENSE](LICENSE) für Details.

## 🤝 Contributing

Beiträge sind willkommen! Siehe [Contributing Guide](/development/contributing) für Details.
