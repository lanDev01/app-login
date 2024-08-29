import { Component } from '@angular/core';
import { LucideAngularModule, Mail, LockKeyhole } from 'lucide-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  readonly MailIcon = Mail;
  readonly LockIcon = LockKeyhole

  facebook = 'assets/facebook.png';
  facebookAlt = 'imagem do facebook';

  apple = 'assets/apple.png';
  appleAlt = 'imagem do apple';
  
  google = 'assets/google.png';
  googleAlt = 'imagem do google';
}
