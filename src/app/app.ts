import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent, type NavLink, type NavLogo } from './shared/components/navbar/navbar';
import { FooterComponent, type FooterLogo } from './shared/components/footer/footer';
import { ToastComponent } from './shared/components/toast/toast';
import { I18nService } from './services/i18n.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ToastComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly i18n = inject(I18nService);

  readonly navLogo: NavLogo = {
    src: './assets/images/logo.jpeg',
    alt: 'NanoScanDR logo',
    width: 148,
    height: 40,
    route: '/',
  };

  readonly navLinks = computed(() => this.i18n.getNavbar().links as NavLink[]);
  readonly navToggleLabel = computed(() => this.i18n.getNavbar().toggleLabel);
  readonly navMenuId = computed(() => this.i18n.getNavbar().menuId);

  readonly footerLogo: FooterLogo = {
    src: './assets/images/logo_without_text.png',
    alt: 'NanoScanDR icon',
    width: 40,
    height: 40,
    route: '/',
  };

  readonly footerText = computed(() => this.i18n.getFooter().copyrightText);
}
