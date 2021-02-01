export default {
  query: '',
  page: 1,
  perPage: 12,
  lastPage: false,
  totalHits: 0,

  fetchData() {
    const keyApi = '20047833-7ab7ad4719e2250c2f7b848a4';
    const urlApi = `https://pixabay.com/api/?key=${keyApi}&per_page=12`;

    const options = {
      headers: {
        Accept: 'application/json',
      },
    };
    return fetch(urlApi + `&q=${this.searchQuery}&page=${this.page}`, options)
      .then(response => response.json())
      .then(data => {
        this.lastPage = this.page * this.perPage;
        this.totalHits = data.totalHits;
        this.increasePage();
        return data;
      })
      .catch(console.error);
  },

  increasePage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },

  isLastPage() {
    return this.lastPage < this.totalHits ? false : true;
  },

  set searchQuery(value) {
    this.query = value;
  },

  get searchQuery() {
    return this.query;
  },
};
