import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ContactSectionComponent } from '../features/contact/contact';
import { I18nService } from '../services/i18n.service';

@Component({
  selector: 'app-contact-page',
  imports: [ContactSectionComponent],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent {
  private readonly i18n = inject(I18nService);

  readonly heroConfig = computed(() => this.i18n.getContactPage().hero);
}
