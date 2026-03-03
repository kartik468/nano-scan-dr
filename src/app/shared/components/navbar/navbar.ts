import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

export interface NavLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  imports: [NgOptimizedImage],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly logo = input<NavLogo>({
    src: '/assets/images/logo.jpeg',
    alt: 'NanoScanDR logo',
    width: 148,
    height: 40,
    href: '#carousel',
  });

  readonly links = input<NavLink[]>([
    { label: 'Overview', href: '#carousel' },
    { label: 'Features', href: '#features' },
    { label: 'Performance', href: '#performance' },
    { label: 'Specs', href: '#specs' },
    { label: 'Downloads', href: '#download' },
    { label: 'Contact', href: '#contact' },
  ]);

  readonly brandName = input<string>('');
  readonly toggleLabel = input<string>('Toggle navigation');
  readonly menuId = input<string>('main-navigation');

  readonly isMenuOpen = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
