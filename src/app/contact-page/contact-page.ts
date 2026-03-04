import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactSectionComponent } from '../features/contact/contact';

@Component({
  selector: 'app-contact-page',
  imports: [ContactSectionComponent],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent {}
