import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { I18nService } from '../../services/i18n.service';
import { ToastService } from '../../services/toast.service';

interface ContactItem {
  label: string;
  value: string;
  href?: string;
  lines?: string[];
}

@Component({
  selector: 'app-contact-section',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSectionComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly emailService = inject(EmailService);
  private readonly i18n = inject(I18nService);
  private readonly toastService = inject(ToastService);

  readonly sending = signal(false);
  readonly contactConfig = computed(() => this.i18n.getContact());
  readonly contactItems = computed(() => {
    const config = this.contactConfig();
    return config.contactDetails as ContactItem[];
  });

  readonly form = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  readonly nameControl = this.form.controls.name;
  readonly emailControl = this.form.controls.email;
  readonly messageControl = this.form.controls.message;

  async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending.set(true);
    const { name, email, message } = this.form.getRawValue();

    try {
      await this.emailService.sendContactForm(name, email, message);
      this.toastService.success("Message sent! We'll be in touch within 1\u20132 business days.");
      this.form.reset({ name: '', email: '', message: '' });
    } catch {
      this.toastService.error('Failed to send message. Please try again.');
    } finally {
      this.sending.set(false);
    }
  }
}
