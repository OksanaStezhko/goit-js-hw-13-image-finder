import './styles.css';
import refs from './js/refs';
import Button from './js/button';
import addContent from './js/addContent';
import apiService from './js/apiService.js';

const buttonLoad = new Button('.button_load', true);
const buttonBack = new Button('.button_back', true);
const buttonReset = new Button('.button_reset', false);

function fetchData() {
  apiService.fetchData().then(data => {
    addContent.additemList(data);
    buttonLoad.show();
    buttonBack.show();

    apiService.increasePage();

    window.scrollTo(0, document.body.scrollHeight);
  });
}

function onSubmitSearchForm(event) {
  event.preventDefault();
  apiService.searchQuery = event.target.elements.query.value;
  apiService.resetPage();
  addContent.clearList();
  fetchData();
}

function onClickLoadMore() {
  fetchData();
}

function onClickBack() {
  window.scrollTo(0, 0);
}

function onClickReset() {
  refs.inputRef.value = '';
  apiService.resetPage();
  addContent.clearList();
  buttonLoad.hide();
  buttonBack.hide();
}

refs.searchFormRef.addEventListener('submit', onSubmitSearchForm);
buttonLoad.ref.addEventListener('click', onClickLoadMore);
buttonBack.ref.addEventListener('click', onClickBack);
buttonReset.ref.addEventListener('click', onClickReset);
