import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'login-screen';

  saly = 'assets/saly.png';
  salyAlt = 'imagem de boneco';

  phoneSvg = 'assets/phone-call.svg'
  phoneSvgAlt = 'Icone de um telefone'
}
