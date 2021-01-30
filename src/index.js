import './styles.css';
// import refs from './js/refs';
import addContent from './js/addContent';
import apiService from './js/apiService.js';

function onSubmitSearchForm() {}

apiService.fetchData('cat').then(data => addContent.additemList(data));
