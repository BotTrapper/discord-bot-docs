# Changelog

## Was ist neu in BotTrapper?

Hier findest du alle Änderungen und Updates von BotTrapper, sortiert nach Versionen.

<script setup>
import { ref, onMounted } from 'vue'

const changelog = ref([])
const loading = ref(true)
const error = ref(null)

const fetchChangelog = async () => {
  try {
    // API-Endpunkt für Changelog (anpassbar je nach Deployment)
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001'
    const response = await fetch(`${apiUrl}/api/changelog`)
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }
    
    const data = await response.json()
    changelog.value = data
  } catch (err) {
    console.error('Failed to load changelog:', err)
    error.value = err.message
    
    // Fallback data if API is not available
    changelog.value = [
      {
        version: '1.0.0',
        date: '2025-09-12',
        type: 'major',
        changes: {
          added: [
            'Initial release of BotTrapper',
            'Ticket system with categories',
            'Auto-response system with embed support',
            'Permission management system',
            'Statistics dashboard',
            'Feature toggle system',
            'Discord OAuth2 dashboard',
            'Version tracking and changelog',
            'Footer mit Versionierung und Julscha Copyright'
          ],
          changed: [],
          fixed: [],
          removed: []
        }
      }
    ]
  } finally {
    loading.value = false
  }
}

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getVersionBadge = (type) => {
  const badges = {
    major: { text: 'MAJOR', class: 'badge-major' },
    minor: { text: 'MINOR', class: 'badge-minor' },
    patch: { text: 'PATCH', class: 'badge-patch' }
  }
  return badges[type] || badges.patch
}

const changeTypeIcons = {
  added: '✨',
  changed: '🔄',
  fixed: '🐛',
  removed: '🗑️'
}

const changeTypeLabels = {
  added: 'Hinzugefügt',
  changed: 'Geändert',
  fixed: 'Behoben',
  removed: 'Entfernt'
}

onMounted(() => {
  fetchChangelog()
})
</script>

<div v-if="loading" class="loading-container">
  <div class="loading-spinner"></div>
  <p>Loading changelog...</p>
</div>

<div v-else-if="error" class="error-container">
  <h3>⚠️ Could not load changelog</h3>
  <p>{{ error }}</p>
  <p><em>Showing fallback data below.</em></p>
</div>

<div v-if="!loading" class="changelog-container">
  <div v-for="entry in changelog" :key="entry.version" class="changelog-entry">
    <div class="version-header">
      <h2 class="version-title">
        <span class="version-tag">v{{ entry.version }}</span>
        <span class="version-badge" :class="getVersionBadge(entry.type).class">
          {{ getVersionBadge(entry.type).text }}
        </span>
      </h2>
      <p class="version-date">{{ formatDate(entry.date) }}</p>
    </div>
    
    <div class="changes-section">
      <div v-for="(items, changeType) in entry.changes" :key="changeType" v-show="items && items.length > 0">
        <h3 class="change-type">
          <span class="change-icon">{{ changeTypeIcons[changeType] }}</span>
          {{ changeTypeLabels[changeType] }}
        </h3>
        <ul class="change-list">
          <li v-for="item in items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</div>

## Versionierung

BotTrapper folgt der [Semantic Versioning](https://semver.org/) Konvention:

- **Major (X.0.0)**: Breaking changes und große neue Features
- **Minor (1.X.0)**: Neue Features (rückwärtskompatibel)
- **Patch (1.0.X)**: Bug fixes und kleine Verbesserungen

## API Integration

Diese Seite lädt die Changelog-Daten dynamisch vom BotTrapper API. Falls die API nicht verfügbar ist, wird eine Fallback-Version angezeigt.

**API Endpoint:** `GET /api/changelog`

<style scoped>
.loading-container, .error-container {
  text-align: center;
  padding: 2rem;
  margin: 2rem 0;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e2e8f0;
  border-top: 4px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-container {
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  color: #dc2626;
}

.changelog-container {
  margin-top: 2rem;
}

.changelog-entry {
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-bottom: 2rem;
  background-color: var(--vp-c-bg-soft);
}

.version-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 1rem;
}

.version-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.version-tag {
  color: var(--vp-c-brand-1);
}

.version-badge {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-major {
  background-color: #fee2e2;
  color: #dc2626;
}

.badge-minor {
  background-color: #dbeafe;
  color: #2563eb;
}

.badge-patch {
  background-color: #dcfce7;
  color: #16a34a;
}

.version-date {
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  margin: 0;
}

.changes-section {
  display: grid;
  gap: 1.5rem;
}

.change-type {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.change-icon {
  font-size: 1.125rem;
}

.change-list {
  margin: 0 0 0 1.5rem;
  padding: 0;
}

.change-list li {
  margin-bottom: 0.25rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .version-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .changelog-entry {
    padding: 1rem;
  }
}
</style>