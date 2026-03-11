// News filtering functionality
class NewsFilter {
  constructor() {
    this.currentFilter = 'all';
    this.searchQuery = '';
    this.allArticles = [];
    this.init();
  }

  init() {
    this.cacheArticles();
    this.bindTagFilters();
    this.bindSearch();
    this.bindLoadMore();
  }

  cacheArticles() {
    this.allArticles = Array.from(document.querySelectorAll('[data-category]'));
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
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.applyFilters();
      });
    }
  }

  bindLoadMore() {
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => {
        // Re-apply filters after loading more
        setTimeout(() => {
          this.cacheArticles();
          this.applyFilters();
        }, 100);
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
      btn.classList.remove('border-primary', 'border-2');
      btn.classList.add('border-gray-200', 'dark:border-gray-700');
    });
    
    activeButton.classList.remove('border-gray-200', 'dark:border-gray-700');
    activeButton.classList.add('border-primary', 'border-2');
  }

  applyFilters() {
    let visibleCount = 0;
    
    this.allArticles.forEach(article => {
      const category = article.dataset.category;
      const title = article.querySelector('h3')?.textContent?.toLowerCase() || '';
      const summary = article.querySelector('p')?.textContent?.toLowerCase() || '';
      
      const matchesTag = this.currentFilter === 'all' || category === this.currentFilter;
      const matchesSearch = !this.searchQuery || 
        title.includes(this.searchQuery) || 
        summary.includes(this.searchQuery);
      
      if (matchesTag && matchesSearch) {
        article.style.display = '';
        visibleCount++;
      } else {
        article.style.display = 'none';
      }
    });

    this.updateResultCount(visibleCount);
    this.updateLoadMoreButton(visibleCount);
  }

  updateResultCount(count) {
    const countElement = document.getElementById('result-count');
    if (countElement) {
      countElement.textContent = count;
    }
  }

  updateLoadMoreButton(visibleCount) {
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
      // Hide load more if filtering
      if (this.currentFilter !== 'all' || this.searchQuery) {
        loadMoreBtn.style.display = 'none';
      } else {
        loadMoreBtn.style.display = '';
      }
    }
  }
}

// Initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new NewsFilter());
} else {
  new NewsFilter();
}
