import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <main>
      <section class = "content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-login-app';
}
