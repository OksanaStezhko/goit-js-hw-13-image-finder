export default class Button {
  constructor(selector, isHidden, buttonDisable = false) {
    this.ref = document.querySelector(selector);

    this.ref.disable = buttonDisable;
    isHidden ? this.hide() : this.show();
  }
  show() {
    this.ref.classList.remove('is-hidden');
  }
  hide() {
    this.ref.classList.add('is-hidden');
  }
  enable() {
    this.ref.disable = false;
  }
  disable() {
    this.ref.disable = true;
  }
}
