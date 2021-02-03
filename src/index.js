import './sass/styles.scss';
import refs from './js/refs';
import Button from './js/button';
import addContent from './js/addContent';
import apiService from './js/apiService.js';
import * as basicLightbox from 'basiclightbox';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';
import { defaults, error, notice } from '@pnotify/core';
defaults.mouseReset = false;
defaults.delay = 1000;
defaults.styling = 'material';
defaults.icons = 'material';

const buttonLoad = new Button('.button_load', true);
const buttonBack = new Button('.button_back', true);
const buttonReset = new Button('.button_reset', false);

function fetchData() {
  refs.spinnerRef.classList.remove('is-hidden');
  apiService.fetchData().then(data => {
    addContent.additemList(data);
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
    if (apiService.isLastPage()) {
      buttonLoad.disabled();
    } else {
      buttonLoad.show();
      buttonBack.show();
    }

    refs.spinnerRef.classList.add('is-hidden');
  });
}

function defaultSetting() {
  apiService.resetPage();
  addContent.clearList();
  buttonLoad.hide();
  buttonLoad.enabled();
  buttonBack.hide();
}

function onSubmitSearchForm(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.query.value;
  if (!searchQuery) {
    notice({
      text: 'Enter a query, please!',
    });
    return;
  }
  apiService.searchQuery = searchQuery;
  defaultSetting();
  fetchData();
}

function onClickLoadMore() {
  fetchData();
}

function onClickBack() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  refs.inputRef.focus();
}

function onClickReset() {
  refs.inputRef.value = '';
  defaultSetting();
}

function onClickImage(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  basicLightbox
    .create(
      `<img width="1400" height="900" src="${event.target.dataset.largeimage}">`,
    )
    .show();
}

refs.searchFormRef.addEventListener('submit', onSubmitSearchForm);
refs.galleryListRef.addEventListener('click', onClickImage);
buttonLoad.ref.addEventListener('click', onClickLoadMore);
buttonBack.ref.addEventListener('click', onClickBack);
buttonReset.ref.addEventListener('click', onClickReset);
