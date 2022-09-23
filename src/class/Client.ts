export class Client {

  constructor(private email: string) {
    this.email = email
  }

  create(): void {

  }

  update() {

  }

  read() {

  }

  delete() {

  }

  sendEmail(): boolean {
    console.log('Enviando e-mail para', this.email)
    return true
  }

}