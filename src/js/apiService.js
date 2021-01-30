export default {
  fetchData(searchQuery) {
    const page = 1;
    const keyApi = '20047833-7ab7ad4719e2250c2f7b848a4';
    const urlApi = `https://pixabay.com/api/?key=${keyApi}&per_page=12`;

    const options = {
      headers: {
        Accept: 'application/json',
      },
    };
    return fetch(urlApi + `&q=${searchQuery}&page=${page}`, options)
      .then(response => response.json())
      .then(data => data)
      .catch(console.error);
  },
  nextPage() {},
  resetPage() {},
};
