import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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

  readonly submitted = signal(false);

  readonly contactItems: ContactItem[] = [
    {
      label: 'Address',
      value: 'NanoScanDR Medical Imaging\n710 Market Street\nSan Francisco, CA 94103',
      lines: ['NanoScanDR Medical Imaging', '710 Market Street', 'San Francisco, CA 94103'],
    },
    {
      label: 'Phone',
      value: '+1 (415) 555-0189',
      href: 'tel:+14155550189',
    },
    {
      label: 'Email',
      value: 'sales@nanoscandr.com',
      href: 'mailto:sales@nanoscandr.com',
    },
    {
      label: 'Hours',
      value: 'Mon-Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 2:00 PM',
      lines: ['Mon-Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 2:00 PM'],
    },
  ];

  readonly form = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  readonly nameControl = this.form.controls.name;
  readonly emailControl = this.form.controls.email;
  readonly messageControl = this.form.controls.message;

  clearSuccess(): void {
    if (this.submitted()) {
      this.submitted.set(false);
    }
  }

  submit(): void {
    this.clearSuccess();

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.info('Contact form submitted', this.form.getRawValue());
    this.submitted.set(true);
    this.form.reset({ name: '', email: '', message: '' });
  }
}
