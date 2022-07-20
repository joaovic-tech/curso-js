class ValidForm {
  constructor() {
    this.form = document.querySelector('.formulario');
    this.events();
  }

  events() {
    this.form.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const validFields = this.verifyFields();
    const validPasswords = this.verifyPasswords();

    if (validFields && validPasswords) {
      alert('Formulário enviado');
      this.form.submit();
    }
  }

  verifyPasswords() {
    let valid = true;
    const password = this.form.querySelector('#senha');
    const repeatPassword = this.form.querySelector('#repetir-senha');

    if (password.value !== repeatPassword.value) {
      valid = false;
      this.createError(password, 'Campos senha e repetir senha Precisam ser iguais.');
      this.createError(repeatPassword, 'Campos senha e repetir senha Precisam ser iguais.');
    }

    if (password.value.length < 6 || password.value.length > 12) {
      valid = false;
      this.createError(password, 'Senha precisa ter entre 3 e 12 caracteres.');
    }

    return valid;
  }

  verifyFields() {
    let valid = true;

    for (let errorText of this.form.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    for (let field of this.form.querySelectorAll('.validar')) {
      const label = field.previousElementSibling.innerText; // previous pega o elemento anterior do input

      if (!field.value) {
        this.createError(field, `Campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      if (field.id === 'cpf') {
        if (!this.validCPF(field)) valid = false;
      }

      if (field.id === 'usuario') {
        if (!this.validUser(field)) valid = false;
      }
    }

    return valid;
  }

  validUser(field) {
    const user = field.value;
    let valid = true;

    if (user.length < 3 || user.length > 12) {
      this.createError(field, 'Usuário precisa ter entre 3 e 12 caracteres.');
      valid = false;
    }

    if (!user.match(/[a-zA-Z0-9]+$/g)) {
      this.createError(field, 'Nome de usuário precisa conter apenas letras e/ou números.');
      valid = false;
    }

    return valid;
  }

  validCPF(field) {
    const cpf = new ValidaCpf(field.value);

    if (!cpf.valida()) {
      ValidForm.createError(field, 'CPF inválido.');
      return false;
    }

    return true;
  }

  static createError(field, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    field.insertAdjacentElement('afterend', div);
  }
}
const valida = new ValidForm();
