import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import {
  CarouselComponent,
  type CarouselLabels,
  type CarouselSlide,
} from '../shared/components/carousel/carousel';
import { ContactSectionComponent } from '../features/contact/contact';
import { I18nService } from '../services/i18n.service';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, ContactSectionComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly i18n = inject(I18nService);

  readonly carouselSlides = computed(() => this.i18n.getHome().carousel.slides);

  readonly carouselHeadline = computed(() => this.i18n.getText('home.carousel.headline'));
  readonly carouselSubcopy = computed(() => this.i18n.getText('home.carousel.subcopy'));
  readonly carouselCtaLabel = computed(() => this.i18n.getText('home.carousel.ctaLabel'));
  readonly carouselCtaHref = computed(() => this.i18n.getText('home.carousel.ctaRoute'));
  readonly carouselCtaRoute = computed<string | null>(() => {
    const route = this.i18n.getText('home.carousel.ctaRoute');
    return route || null;
  });
  readonly carouselLabels = computed<CarouselLabels>(() => ({
    region: this.i18n.getText('home.carousel.labels.region'),
    previous: this.i18n.getText('home.carousel.labels.previous'),
    next: this.i18n.getText('home.carousel.labels.next'),
    slidePrefix: this.i18n.getText('home.carousel.labels.slidePrefix'),
  }));
  readonly carouselAutoAdvanceMs = computed(() =>
    this.i18n.getObject('home.carousel.autoAdvanceMs', 5000),
  );
}
