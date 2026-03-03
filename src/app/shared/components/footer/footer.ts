import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface FooterLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
  href?: string;
  route?: string;
  fragment?: string;
}

@Component({
  selector: 'app-footer',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly logo = input.required<FooterLogo>();
  readonly text = input.required<string>();
}
