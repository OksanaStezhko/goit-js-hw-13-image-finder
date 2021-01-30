import itemGallery from '../templates/itemGallery.hbs';
import refs from './refs';

import { defaults, error, notice } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
defaults.mouseReset = false;
defaults.delay = 3000;

export default {
  additemList(templ) {
    // refs.galleryListRef.innerHTML = '';
    // console.log(templ.status);
    // if (templ.status === 404) {
    //   notice({
    //     text: 'Not found!',
    //   });
    //   return;
    // }
    // console.log('templ:', templ);
    // console.log(itemGallery(templ.hits));
    console.log(refs.galleryListRef);
    refs.galleryListRef.insertAdjacentHTML(
      'beforeend',
      itemGallery(templ.hits),
    );
  },
};
