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
  readonly logo = input.required<NavLogo>();
  readonly links = input.required<NavLink[]>();
  readonly brandName = input.required<string>();
  readonly toggleLabel = input.required<string>();
  readonly menuId = input.required<string>();

  readonly isMenuOpen = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
