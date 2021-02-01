export default class Button {
  constructor(selector, isHidden) {
    this.ref = document.querySelector(selector);
    isHidden ? this.hide() : this.show();
  }
  show() {
    this.ref.classList.remove('is-hidden');
  }
  hide() {
    this.ref.classList.add('is-hidden');
  }
}
