import itemGallery from '../templates/itemGallery.hbs';
import refs from './refs';

import { defaults, error, notice } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
defaults.mouseReset = false;
defaults.delay = 3000;

export default {
  additemList(templ) {
    if (templ.status === 404) {
      notice({
        text: 'Not found!',
      });
      return;
    }
    refs.galleryListRef.insertAdjacentHTML(
      'beforeend',
      itemGallery(templ.hits),
    );
  },
  clearList() {
    refs.galleryListRef.innerHTML = '';
  },
};
