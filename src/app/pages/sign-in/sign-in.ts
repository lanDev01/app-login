import { Component } from '@angular/core';
import { Button } from '@/ui/button/button';
import { Input } from '@/ui/input/input';

@Component({
  selector: 'app-sign-in',
  imports: [Button, Input],
  templateUrl: './sign-in.html',
})
export class SignIn {}
