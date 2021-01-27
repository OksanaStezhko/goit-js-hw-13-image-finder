function apiService(searchQuery) {
  const keyApi = '20047833-7ab7ad4719e2250c2f7b848a4';
  const ukrApi = `https://pixabay.com/api/?key=${keyApi}&q=${searchQuery}`;

  const options = {
    headers: {
      Accept: 'application/json',
    },
  };
  return fetch(url, options)
    .then(response => response.json())
    .then(data => data)
    .catch(console.error);
}
export default apiService;
