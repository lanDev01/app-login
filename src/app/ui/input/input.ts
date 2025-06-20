import { Component, input, signal } from '@angular/core';
import { Eye, EyeOff, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-input',
  imports: [LucideAngularModule],
  templateUrl: './input.html',
})
export class Input {
  text = input<string>('');
  placeholder = input<string>('');
  type = input<'text' | 'email' | 'password'>('text');
  forgot = input<boolean>(false);

  inputValue = signal('');
  isPasswordVisible = signal(false);

  readonly eye = Eye;
  readonly eyeOff = EyeOff;

  get inputType(): string {
    if (this.type() !== 'password') return this.type();
    return this.isPasswordVisible() ? 'text' : 'password';
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.inputValue.set(input.value);
  }

  togglePasswordVisibility() {
    this.isPasswordVisible.update(prev => !prev);
  }

  get autocomplete(): string {
    switch (this.type()) {
      case 'email':
        return 'email';
      case 'password':
        return 'current-password';
      default:
        return 'on';
    }
  }
}
