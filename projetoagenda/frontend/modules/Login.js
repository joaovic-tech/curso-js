import validator from 'validator';

export default class Login {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.inputs = document.querySelectorAll('.form-control');
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;

    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    });

    for (const input of this.inputs) {
      input.addEventListener('keyup', () => {
        this.isValid(input)
      });
    }
  }

  isValid(input) {
    if (input.type === 'email' && validator.isEmail(input.value)) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      this.cleanMessage();
    } else if (input.type === 'password' && input.value.length > 3) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      this.cleanMessage();
    } else {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
    }
  }

  validate(e) {
    const el = e.target;
    const emailInput = el.querySelector('input[name="email"]');
    const passwordInput = el.querySelector('input[name="password"]');
    let error = false;
    this.cleanMessage();

    if (!validator.isEmail(emailInput.value)) {
      this.messageError('E-mail inválido', emailInput);
      emailInput.classList.add('is-invalid');

      error = true;
    }

    if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
      this.messageError('Senha precisar ter entre 3 à 50 caracteres', passwordInput);
      passwordInput.classList.add('is-invalid');

      error = true;
    }

    if (!error) el.submit();
  }

  messageError(message, el) {
    const span = document.createElement('span');

    span.innerHTML = message;
    span.classList.add('text-danger', 'span-form-error');

    this.insertAfter(span, el);
  }

  insertAfter(span, el) {
    el.parentNode.insertBefore(span, el.nextSibling);
  }

  cleanMessage() {
    const spans = document.querySelectorAll('.span-form-error');
    for (const span of spans) {
      span.remove();
    }
  }
}
