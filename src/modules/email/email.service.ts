import { Injectable } from '@nestjs/common';
import { render } from 'mjml-react';
import { createTransport, Transporter } from 'nodemailer';
import { getConfig } from 'lib/config';
import { exampleEmail } from './templates';

@Injectable()
export class EmailService {
  private transporter: Transporter;

  constructor() {
    const { service, host, user, password } = getConfig().emailConfig;

    this.transporter = createTransport({
      service,
      host,
      auth: {
        user,
        pass: password
      }
    });
  }

  sendExampleEmail(to: string, subject: string) {
    const { html } = render(exampleEmail(), { validationLevel: 'soft' });

    return this.transporter.sendMail({
      html,
      date: new Date().toISOString(),
      to,
      subject
    });
  }
}
