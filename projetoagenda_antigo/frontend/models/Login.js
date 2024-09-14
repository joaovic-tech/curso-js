export default class Login {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
    });
  }
}