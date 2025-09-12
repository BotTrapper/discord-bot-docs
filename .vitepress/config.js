export default {
  ignoreDeadLinks: true,
  base: '/discord-bot-docs/',
  title: 'BotTrapper',
  description: 'Discord Bot Management System',
  
  vite: {
    define: {
      'import.meta.env.VITE_API_URL': JSON.stringify('https://api.bottrapper.me')
    }
  },
  
  themeConfig: {
    logo: '/logo.png',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Installation', link: '/installation' },
      { text: 'Changelog', link: '/changelog' },
      { text: 'Dashboard', link: 'https://dashboard.bottrapper.me', target: '_blank' }
    ],
    
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Installation', link: '/installation' }
        ]
      },
      {
        text: 'API Reference',
        items: [
          { text: 'Overview', link: '/api/' }
        ]
      },
      {
        text: 'Commands',
        items: [
          { text: 'Overview', link: '/commands/' }
        ]
      },
      {
        text: 'Dashboard',
        items: [
          { text: 'Overview', link: '/dashboard/' }
        ]
      },
      {
        text: 'Deployment', 
        items: [
          { text: 'Overview', link: '/deployment/' }
        ]
      },
      {
        text: 'Updates',
        items: [
          { text: 'Changelog', link: '/changelog' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BotTrapper/discord-bot' }
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Julscha'
    },
    
    editLink: {
      pattern: 'https://github.com/BotTrapper/discord-bot/edit/main/discord-bot-docs/:path',
      text: 'Edit this page on GitHub'
    },
    
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
};
