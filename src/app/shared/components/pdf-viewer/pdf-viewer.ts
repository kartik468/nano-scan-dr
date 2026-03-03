import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  computed,
  effect,
  inject,
  input,
  output,
  viewChild,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.html',
  styleUrl: './pdf-viewer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'onEscape()',
  },
})
export class PdfViewerComponent {
  readonly pdfUrl = input.required<string>();
  readonly isOpen = input.required<boolean>();
  readonly productLabel = input.required<string>();
  readonly downloadLabel = input.required<string>();
  readonly closeLabel = input.required<string>();
  readonly iframeTitle = input.required<string>();

  readonly closed = output<void>();

  readonly titleId = 'pdf-viewer-title';
  readonly closeButton = viewChild<ElementRef<HTMLButtonElement>>('closeButton');

  private readonly sanitizer = inject(DomSanitizer);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  private previousOverflow: string | null = null;

  readonly hasPdfUrl = computed(() => this.pdfUrl().trim().length > 0);
  readonly safePdfUrl = computed<SafeResourceUrl | null>(() => {
    if (!this.hasPdfUrl()) {
      return null;
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl().trim());
  });

  constructor() {
    effect(() => {
      const open = this.isOpen();
      if (!this.document?.body) {
        return;
      }
      if (open) {
        if (this.previousOverflow === null) {
          this.previousOverflow = this.document.body.style.overflow;
        }
        this.document.body.style.overflow = 'hidden';
      } else if (this.previousOverflow !== null) {
        this.document.body.style.overflow = this.previousOverflow;
        this.previousOverflow = null;
      }
    });

    effect(() => {
      if (!this.isOpen()) {
        return;
      }
      setTimeout(() => this.focusCloseButton(), 0);
    });

    this.destroyRef.onDestroy(() => {
      if (this.previousOverflow !== null && this.document?.body) {
        this.document.body.style.overflow = this.previousOverflow;
      }
    });
  }

  close(): void {
    if (!this.isOpen()) {
      return;
    }
    this.closed.emit();
  }

  onEscape(): void {
    this.close();
  }

  private focusCloseButton(): void {
    const button = this.closeButton();
    if (button) {
      button.nativeElement.focus();
    }
  }
}
