import validator from 'validator';

export default class Contato {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.nameInput = document.querySelector('input[id="nome"]');
    this.emailInput = document.querySelector('input[id="email"]');
    this.telInput = document.querySelector('input[id="telefone"]');
    this.inputs = document.querySelectorAll('.form-control');
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;

    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate();
    });

    for (const input of this.inputs) {
      input.addEventListener('keyup', () => {
        this.isValid(input)
      });
    }
  }

  isValid(input) {
    if (input.id === 'nome' && input.value.length > 1 && input.value.length < 50) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      this.labelDanger(input.id, 'remove');
      return;
    }

    if (input.id === 'email' && validator.isEmail(input.value)) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      this.labelDanger(input.id, 'remove');
      return;
    }

    if (input.id === 'telefone' && this.isNumber(input.value)) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      this.labelDanger(input.id, 'remove');
      return;
    }

    if (input.id === 'sobrenome') return input.classList.add('is-valid');

    if (input.value === '') {
      input.classList.remove('is-valid');
      input.classList.remove('is-invalid');
      this.labelDanger(input.id, 'remove');
      return;
    }

    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    this.labelDanger(input.id, 'add');
  }

  validate() {
    let error = false;
    this.cleanMessage();

    if (!this.nameInput.value) {
      this.messageError('Precisar ter um nome.', this.nameInput);
      this.nameInput.classList.add('is-invalid');

      this.labelDanger(this.nameInput.id, 'add');
      error = true;
    } else if (this.nameInput.value.length <= 1) {
      this.messageError('Nome muito curto', this.nameInput);
      this.nameInput.classList.add('is-invalid');

      this.labelDanger(this.nameInput.id, 'add');
      error = true;
    }

    if (this.nameInput.value.length >= 50) {
      this.messageError('Nome muito longo', this.nameInput);
      this.nameInput.classList.add('is-invalid');

      this.labelDanger(this.nameInput.id, 'add');
      error = true;
    }

    if (this.emailInput.value > 1 && !validator.isEmail(this.emailInput.value)) {
      this.messageError('E-mail inválido', this.emailInput);
      this.emailInput.classList.add('is-invalid');

      this.labelDanger(this.emailInput.id, 'add');
      error = true;
    }

    if (this.emailInput.value === '' && this.telInput.value === '') {
      this.messageError('Precisar incluir um e-mail ou um telefone', this.emailInput);
      this.emailInput.classList.add('is-invalid');
      this.telInput.classList.add('is-invalid');

      this.labelDanger(this.emailInput.id, 'add');
      this.labelDanger(this.telInput.id, 'add');
      error = true;
    }

    if (this.telInput.value > 0 && !this.isNumber(this.telInput.value)) {
      this.messageError('Esse campo precisa ser um número', this.telInput);
      this.telInput.classList.add('is-invalid');

      this.labelDanger(this.telInput.id, 'add');
      error = true;
    }

    if (!error) this.form.submit();
  }

  labelDanger(id, reference) {
    const label = document.querySelector(`.label-${id}`);

    if (reference === 'add') label.classList.add('text-danger')
    else label.classList.remove('text-danger');
  }

  isNumber(value) {
    value = Number(value);
    return value ? true : false;
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