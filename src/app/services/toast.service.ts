import { Injectable, signal } from '@angular/core';
import type { Toast } from '../models/toast.model';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private readonly _toasts = signal<Toast[]>([]);
  readonly toasts = this._toasts.asReadonly();

  show(type: Toast['type'], message: string, duration = 4000): void {
    const id = crypto.randomUUID();
    this._toasts.update(list => [{ id, type, message, duration }, ...list]);
    if (duration > 0) {
      setTimeout(() => this.dismiss(id), duration);
    }
  }

  dismiss(id: string): void {
    this._toasts.update(list => list.filter(t => t.id !== id));
  }

  success(message: string, duration?: number): void {
    this.show('success', message, duration);
  }

  error(message: string, duration?: number): void {
    this.show('error', message, duration);
  }

  caution(message: string, duration?: number): void {
    this.show('caution', message, duration);
  }
}
