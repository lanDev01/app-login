import { Component } from '@angular/core';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/ui-avatar-helm';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [HlmAvatarImageDirective, HlmAvatarComponent, HlmAvatarFallbackDirective],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {

}


// @Component({
//   selector: 'spartan-avatar-preview',
//   standalone: true,
//   imports: [HlmAvatarImageDirective, HlmAvatarComponent, HlmAvatarFallbackDirective],
//   template: `

//   `,
// })
// export class AvatarPreviewComponent {}
