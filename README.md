# Discord Bot Documentation

📚 Offizielle Dokumentation für den TypeScript Discord Bot mit React Dashboard.

## 🌐 Live-Dokumentation

Die Dokumentation ist verfügbar unter: **[https://yourusername.github.io/discord-bot-docs](https://yourusername.github.io/discord-bot-docs)**

## 🚀 Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Dokumentation lokal ansehen
open http://localhost:5173
```

## 📁 Struktur

```
docs/
├── .vitepress/
│   ├── config.ts          # VitePress Konfiguration
│   └── theme/             # Custom Theme (optional)
├── public/                # Statische Assets
│   ├── favicon.ico
│   └── logo.png
├── api/                   # API Dokumentation
├── commands/              # Bot Commands Guide
├── dashboard/             # Dashboard Guide
├── deployment/            # Deployment Guide
├── development/           # Development Guide
├── getting-started.md     # Erste Schritte
├── installation.md        # Installation Guide
└── index.md              # Startseite
```

## 🔧 Als separates Repository einrichten

### 1. Neues Repository erstellen

```bash
# Neues Repository auf GitHub erstellen: discord-bot-docs
git clone https://github.com/yourusername/discord-bot-docs.git
cd discord-bot-docs
```

### 2. Dokumentation kopieren

```bash
# Alle Dateien aus dem docs/ Ordner kopieren
cp -r /path/to/discord-project/docs/* .

# .github/workflows Ordner an die richtige Stelle verschieben
mkdir -p .github/workflows
mv .github/workflows/deploy-docs.yml .github/workflows/
```

### 3. GitHub Pages aktivieren

1. Gehen Sie zu den Repository-Einstellungen
2. Scrollen Sie zu "Pages" 
3. Source: "GitHub Actions" auswählen
4. Die Dokumentation wird automatisch bei jedem Push deployed

### 4. Links aktualisieren

Passen Sie in `.vitepress/config.ts` an:

```typescript
// Base URL für GitHub Pages
base: '/discord-bot-docs/',

// GitHub Links
socialLinks: [
  { icon: 'github', link: 'https://github.com/yourusername/discord-bot-docs' }
],

editLink: {
  pattern: 'https://github.com/yourusername/discord-bot-docs/edit/main/:path',
  text: 'Edit this page on GitHub'
}
```

## 📝 Inhalte hinzufügen

### Neue Seite erstellen

```bash
# Neue Markdown-Datei erstellen
touch new-page.md

# In .vitepress/config.ts zur Sidebar hinzufügen
{
  text: 'Neue Seite',
  link: '/new-page'
}
```

### Code-Beispiele

```markdown
# Syntax Highlighting
\`\`\`typescript
// TypeScript Code
const bot = new Client({ intents: [GatewayIntentBits.Guilds] });
\`\`\`

# Bash Commands
\`\`\`bash
npm install
npm start
\`\`\`
```

### Komponenten

```markdown
# Infokästen
::: info
Dies ist eine Info-Box
:::

::: warning
Dies ist eine Warnung
:::

::: danger
Dies ist ein Fehler/Gefahr Hinweis
:::

# Details/Zusammenklappbar
::: details Click me to view the code
\`\`\`js
console.log('Hello, VitePress!')
\`\`\`
:::
```

## 🎨 Customizing

### Theme anpassen

```typescript
// .vitepress/config.ts
export default defineConfig({
  themeConfig: {
    // Logo
    logo: '/logo.png',
    
    // Farben
    primaryColor: '#5865F2', // Discord Blau
    
    // Footer
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Your Name'
    }
  }
})
```

### Custom CSS

```css
/* .vitepress/theme/custom.css */
:root {
  --vp-c-brand-1: #5865F2;
  --vp-c-brand-2: #4752C4;
  --vp-c-brand-3: #3C45A5;
}

.VPNavBar .title {
  font-weight: bold;
}
```

## 🔗 Integration mit Hauptprojekt

Verlinken Sie die Dokumentation in den anderen Repositories:

### Discord Bot Repository
```markdown
# README.md
## 📚 Dokumentation

Vollständige Dokumentation: [Discord Bot Docs](https://yourusername.github.io/discord-bot-docs)
```

### Frontend Repository
```markdown
# README.md
## 📖 Handbuch

Dashboard-Anleitung: [Dashboard Guide](https://yourusername.github.io/discord-bot-docs/dashboard/)
```

## 🚀 Deployment

### Automatisch (GitHub Actions)

Die Dokumentation wird automatisch deployed bei:
- Push to `main` branch
- Änderungen in `docs/**` Dateien

### Manuell

```bash
# Bauen
npm run build

# Preview lokal
npm run preview

# Build-Ordner uploaden
# .vitepress/dist/ enthält die statischen Dateien
```

## 📊 Analytics (Optional)

```typescript
// .vitepress/config.ts
export default defineConfig({
  head: [
    // Google Analytics
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID' }],
    ['script', {}, `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');`]
  ]
})
```

## 🤝 Contributing

1. Fork das Repository
2. Erstellen Sie einen Feature Branch
3. Machen Sie Ihre Änderungen
4. Testen Sie lokal mit `npm run dev`
5. Erstellen Sie einen Pull Request

## 📄 Lizenz

MIT License - Details siehe [LICENSE](LICENSE)
