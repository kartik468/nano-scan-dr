import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class EmailService {
  constructor() {
    emailjs.init(environment.emailJs.publicKey);
  }

  async sendContactForm(name: string, email: string, message: string): Promise<void> {
    await emailjs.send(
      environment.emailJs.serviceId,
      environment.emailJs.templateId,
      { name, email, message },
    );
  }
}
