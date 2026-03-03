import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface CarouselSlide {
  src: string;
  alt: string;
  width: number;
  height: number;
  // Optional per-slide content overrides
  headline?: string;
  subcopy?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaRoute?: string | null;
}

export interface CarouselLabels {
  region: string;
  previous: string;
  next: string;
  slidePrefix: string;
}

@Component({
  selector: 'app-carousel',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(pointerdown)': 'pauseAutoAdvance()',
    '(focusin)': 'pauseAutoAdvance()',
  },
})
export class CarouselComponent {
  readonly slides = input.required<CarouselSlide[]>();
  readonly headline = input.required<string>();
  readonly subcopy = input.required<string>();
  readonly ctaLabel = input.required<string>();
  readonly ctaHref = input.required<string>();
  readonly ctaRoute = input.required<string | null>();
  readonly labels = input.required<CarouselLabels>();
  readonly autoAdvanceMs = input.required<number>();

  readonly currentIndex = signal(0);
  readonly isPaused = signal(false);

  readonly dots = computed(() => this.slides().map((_, index) => index));

  private readonly currentSlide = computed(() => this.slides()[this.currentIndex()]);

  readonly activeHeadline = computed(
    () => this.currentSlide()?.headline ?? this.headline(),
  );
  readonly activeSubcopy = computed(
    () => this.currentSlide()?.subcopy ?? this.subcopy(),
  );
  readonly activeCtaLabel = computed(
    () => this.currentSlide()?.ctaLabel ?? this.ctaLabel(),
  );
  readonly activeCtaHref = computed(
    () => this.currentSlide()?.ctaHref ?? this.ctaHref(),
  );
  readonly activeCtaRoute = computed<string | null>(() => {
    const slide = this.currentSlide();
    if (slide && 'ctaRoute' in slide) {
      return slide.ctaRoute ?? null;
    }
    return this.ctaRoute();
  });

  private readonly destroyRef = inject(DestroyRef);
  private intervalId: ReturnType<typeof setInterval> | null = null;

  constructor() {
    effect(() => {
      const length = this.slides().length;
      if (length === 0) {
        this.currentIndex.set(0);
        return;
      }
      if (this.currentIndex() >= length) {
        this.currentIndex.set(0);
      }
    });

    effect(() => {
      const delay = this.autoAdvanceMs();
      const length = this.slides().length;
      const paused = this.isPaused();

      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }

      if (paused || delay <= 0 || length < 2) {
        return;
      }

      this.intervalId = setInterval(() => this.next(), delay);
    });

    this.destroyRef.onDestroy(() => {
      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    });
  }

  pauseAutoAdvance(): void {
    this.isPaused.set(true);
  }

  previous(): void {
    const length = this.slides().length;
    if (length === 0) {
      return;
    }
    this.pauseAutoAdvance();
    this.currentIndex.update((index) => (index - 1 + length) % length);
  }

  next(): void {
    const length = this.slides().length;
    if (length === 0) {
      return;
    }
    this.pauseAutoAdvance();
    this.currentIndex.update((index) => (index + 1) % length);
  }

  goTo(index: number): void {
    const length = this.slides().length;
    if (length === 0) {
      return;
    }
    this.pauseAutoAdvance();
    const nextIndex = ((index % length) + length) % length;
    this.currentIndex.set(nextIndex);
  }
}
