import { isEmail } from 'validator';

const SHOW_ERROR_MESSAGES = 'show-error-message';

export class FormControl {
  constructor(private form: HTMLFormElement) {}

  checkForEmptyFields(...inputs: HTMLInputElement[]): void {
    inputs.forEach((input) => {
      if (!input.value) {
        this.showErrorMessage(input, 'Campo não pode ficar vazio');
      }
    });
  }

  checkEmail(input: HTMLInputElement): void {
    if (!isEmail(input.value)) {
      this.showErrorMessage(input, 'Email inválido');
    }
  }

  checkPassword(input: HTMLInputElement): void {
    if (input.value.length < 8) {
      this.showErrorMessage(input, 'Senha deve ter pelo menos 8 caracteres');
    }
  }

  checkPasswordMatch(input1: HTMLInputElement, input2: HTMLInputElement): void {
    if (input1.value !== input2.value) {
      this.showErrorMessage(input2, 'Senhas devem ser iguais');
    }
  }

  showErrorMessage(input: HTMLInputElement, message: string): void {
    const formFields = input.parentElement as HTMLDivElement;
    const errorMessage = formFields.querySelector(
      '.error-message',
    ) as HTMLSpanElement;
    errorMessage.innerText = message;
    formFields.classList.add(SHOW_ERROR_MESSAGES);
  }

  hideErrorMessages(): void {
    this.form.querySelectorAll(`.${SHOW_ERROR_MESSAGES}`).forEach((item) => {
      item.classList.remove(SHOW_ERROR_MESSAGES);
    });
  }

  shouldSendForm(form: HTMLFormElement): boolean {
    let shouldSend = true;
    form
      .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
      .forEach(() => (shouldSend = false));
    return shouldSend;
  }

  init(): void {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    const username = this.form.querySelector('.username') as HTMLInputElement;
    const email = this.form.querySelector('.email') as HTMLInputElement;
    const password = this.form.querySelector('.password') as HTMLInputElement;
    const password2 = this.form.querySelector('.password2') as HTMLInputElement;

    this.hideErrorMessages();
    this.checkForEmptyFields(username, email, password, password2);
    this.checkEmail(email);
    this.checkPassword(password);
    this.checkPasswordMatch(password, password2);

    if (this.shouldSendForm(this.form)) {
      const formMessageFinal = document.getElementById(
        'form-message-final',
      ) as HTMLParagraphElement;
      formMessageFinal.style.display = 'block';
    }
  }
}

const form = document.getElementById('form') as HTMLFormElement;
const formControl = new FormControl(form);
formControl.init();
