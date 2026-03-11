// News filtering functionality
class NewsFilter {
  constructor() {
    this.currentFilter = 'all';
    this.searchQuery = '';
    this.init();
  }

  init() {
    this.bindTagFilters();
    this.bindSearch();
  }

  bindTagFilters() {
    const tagButtons = document.querySelectorAll('[data-tag]');
    tagButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const tag = e.currentTarget.dataset.tag;
        this.filterByTag(tag);
        this.updateActiveTag(e.currentTarget);
      });
    });
  }

  bindSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase();
        this.applyFilters();
      });
    }
  }

  filterByTag(tag) {
    this.currentFilter = tag;
    this.applyFilters();
  }

  updateActiveTag(activeButton) {
    const allButtons = document.querySelectorAll('[data-tag]');
    allButtons.forEach(btn => {
      btn.classList.remove('ring-2', 'ring-primary');
    });
    activeButton.classList.add('ring-2', 'ring-primary');
  }

  applyFilters() {
    const articles = document.querySelectorAll('[data-category]');
    
    articles.forEach(article => {
      const category = article.dataset.category;
      const title = article.querySelector('h3')?.textContent?.toLowerCase() || '';
      const summary = article.querySelector('p')?.textContent?.toLowerCase() || '';
      
      const matchesTag = this.currentFilter === 'all' || category === this.currentFilter;
      const matchesSearch = !this.searchQuery || 
        title.includes(this.searchQuery) || 
        summary.includes(this.searchQuery);
      
      if (matchesTag && matchesSearch) {
        article.style.display = '';
        article.classList.add('animate-fade-in');
      } else {
        article.style.display = 'none';
      }
    });

    this.updateResultCount();
  }

  updateResultCount() {
    const visibleArticles = document.querySelectorAll('[data-category]:not([style*="display: none"])');
    const countElement = document.getElementById('result-count');
    if (countElement) {
      countElement.textContent = visibleArticles.length;
    }
  }
}

// Initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new NewsFilter());
} else {
  new NewsFilter();
}
