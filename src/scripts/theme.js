// Theme and language management
class ThemeManager {
  constructor() {
    this.currentTheme = 'system';
    this.currentLang = 'en';
    this.init();
  }

  init() {
    // Load saved preferences
    const savedTheme = localStorage.getItem('ai-pulse-theme') || 'system';
    const savedLang = localStorage.getItem('ai-pulse-lang') || 'en';
    
    this.setTheme(savedTheme);
    this.setLanguage(savedLang);
    
    // Bind events
    this.bindEvents();
  }

  bindEvents() {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.cycleTheme());
    }
    
    // Language toggle
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      langToggle.addEventListener('click', () => this.toggleLanguage());
    }
  }

  cycleTheme() {
    const themes = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(this.currentTheme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    this.setTheme(nextTheme);
  }

  setTheme(theme) {
    this.currentTheme = theme;
    localStorage.setItem('ai-pulse-theme', theme);
    
    const html = document.documentElement;
    
    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
    } else if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  toggleLanguage() {
    const newLang = this.currentLang === 'en' ? 'zh' : 'en';
    this.setLanguage(newLang);
  }

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('ai-pulse-lang', lang);
    
    // Update all elements with data-en and data-zh attributes
    const elements = document.querySelectorAll('[data-en][data-zh]');
    elements.forEach(el => {
      el.textContent = el.getAttribute(`data-${lang}`);
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  const savedTheme = localStorage.getItem('ai-pulse-theme') || 'system';
  if (savedTheme === 'system') {
    const html = document.documentElement;
    if (e.matches) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }
});

// Initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new ThemeManager());
} else {
  new ThemeManager();
}
