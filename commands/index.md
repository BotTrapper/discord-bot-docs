# Bot Commands

Übersicht über alle verfügbaren Discord Bot Slash Commands.

## 🎫 Ticket System

### `/ticket create`
Erstellt ein neues Support-Ticket.

**Parameter:**
- `title` (required): Titel des Tickets
- `description` (optional): Beschreibung des Problems
- `priority` (optional): Priorität (low, medium, high, urgent)

**Beispiel:**
```
/ticket create title:"Login Problem" description:"Kann mich nicht anmelden" priority:high
```

**Was passiert:**
1. Neuer privater Kanal wird erstellt
2. Ticket wird in der Datenbank gespeichert
3. Support-Team wird benachrichtigt
4. Ticket-ID wird generiert

### `/ticket close`
Schließt ein offenes Ticket.

**Parameter:**
- `ticket_id` (required): ID des zu schließenden Tickets
- `reason` (optional): Grund für die Schließung

**Berechtigung:** Nur Moderatoren und Ticket-Ersteller

---

## 📝 Embed Builder

### `/embed create`
Erstellt eine schöne Discord-Nachricht mit Embed.

**Parameter:**
- `title` (required): Embed-Titel
- `description` (required): Haupttext
- `color` (optional): Farbe als Hex-Code (z.B. #5865F2)
- `thumbnail` (optional): URL für Thumbnail-Bild
- `image` (optional): URL für großes Bild
- `footer` (optional): Footer-Text

**Beispiel:**
```
/embed create title:"Willkommen!" description:"Herzlich willkommen auf unserem Server!" color:#00ff00
```

**Features:**
- Rich Text Formatting
- Bild-Unterstützung
- Farbauswahl
- Footer und Timestamps
- Vorschau vor dem Senden

---

## 🤖 Auto Response

### `/autoresponse add`
Fügt eine automatische Antwort hinzu.

**Parameter:**
- `trigger` (required): Wort oder Phrase, die die Antwort auslöst
- `response` (required): Die automatische Antwort
- `exact_match` (optional): Nur bei exakter Übereinstimmung (true/false)
- `case_sensitive` (optional): Groß-/Kleinschreibung beachten (true/false)

**Beispiel:**
```
/autoresponse add trigger:"hallo" response:"Hallo! Wie kann ich dir helfen?" exact_match:false
```

### `/autoresponse list`
Zeigt alle konfigurierten Auto-Responses.

### `/autoresponse remove`
Entfernt eine Auto-Response.

**Parameter:**
- `id` (required): ID der zu entfernenden Auto-Response

---

## 🔗 Webhooks

### `/webhook add`
Fügt einen Webhook für Benachrichtigungen hinzu.

**Parameter:**
- `name` (required): Name des Webhooks
- `url` (required): Webhook-URL
- `events` (required): Ereignisse, die gesendet werden sollen
- `active` (optional): Webhook aktiviert (true/false)

**Unterstützte Events:**
- `ticket_created`: Neues Ticket erstellt
- `ticket_closed`: Ticket geschlossen
- `user_joined`: Benutzer ist dem Server beigetreten
- `user_left`: Benutzer hat den Server verlassen
- `message_deleted`: Nachricht gelöscht

**Beispiel:**
```
/webhook add name:"Support Notifications" url:"https://hooks.slack.com/..." events:"ticket_created,ticket_closed"
```

### `/webhook list`
Zeigt alle konfigurierten Webhooks.

### `/webhook test`
Testet einen Webhook.

**Parameter:**
- `webhook_id` (required): ID des zu testenden Webhooks

---

## 📊 Statistics

### `/stats server`
Zeigt Server-Statistiken.

**Angezeigt werden:**
- Mitgliederzahl
- Online-Mitglieder
- Kanalanzahl
- Rollen-Anzahl
- Boost-Level
- Erstellungsdatum

### `/stats bot`
Zeigt Bot-Statistiken.

**Angezeigt werden:**
- Uptime
- Ping/Latenz
- Memory Usage
- Anzahl Commands ausgeführt
- Anzahl Guilds
- Bot-Version

### `/stats user`
Zeigt Benutzer-Statistiken.

**Parameter:**
- `user` (optional): Benutzer (Standard: Sie selbst)

**Angezeigt werden:**
- Join-Datum
- Account-Erstellungsdatum
- Rollen
- Anzahl Nachrichten
- Anzahl verwendete Commands

---

## 🔧 Admin Commands

### `/config set`
Konfiguriert Bot-Einstellungen.

**Parameter:**
- `setting` (required): Einstellung, die geändert werden soll
- `value` (required): Neuer Wert

**Verfügbare Einstellungen:**
- `ticket_category`: Kategorie für Ticket-Kanäle
- `log_channel`: Kanal für Bot-Logs
- `welcome_channel`: Willkommens-Kanal
- `auto_role`: Automatische Rolle für neue Mitglieder

**Berechtigung:** Nur Administratoren

### `/config show`
Zeigt aktuelle Bot-Konfiguration.

---

## 🛡️ Berechtigungen

| Command | Erforderliche Berechtigung |
|---------|----------------------------|
| `/ticket create` | Jeder Benutzer |
| `/ticket close` | Ticket-Ersteller oder Moderator |
| `/embed create` | `Embed Links` Berechtigung |
| `/autoresponse add/remove` | `Manage Messages` |
| `/webhook add/remove` | `Manage Webhooks` |
| `/stats` | Jeder Benutzer |
| `/config` | `Administrator` |

## 🎯 Verwendungstipps

### Ticket System
- Verwenden Sie aussagekräftige Titel
- Geben Sie so viele Details wie möglich an
- Nutzen Sie Prioritäten für bessere Organisation

### Embeds
- Verwenden Sie kurze, prägnante Titel
- Achten Sie auf Farb-Konsistenz
- Optimieren Sie Bilder für Discord (max. 8MB)

### Auto Responses
- Testen Sie Trigger-Wörter gründlich
- Vermeiden Sie zu allgemeine Trigger
- Verwenden Sie freundliche, hilfreiche Antworten

### Webhooks
- Testen Sie Webhooks nach der Konfiguration
- Verwenden Sie aussagekräftige Namen
- Überwachen Sie Webhook-Logs bei Problemen

## 🔄 Command Updates

Der Bot unterstützt automatische Command-Updates. Neue Commands werden automatisch bei Discord registriert, wenn der Bot startet.

Wenn Commands nicht erscheinen:
1. Warten Sie bis zu 1 Stunde (Discord-Cache)
2. Starten Sie den Bot neu
3. Prüfen Sie Bot-Berechtigungen
4. Kontaktieren Sie den Support
