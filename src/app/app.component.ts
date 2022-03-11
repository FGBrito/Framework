import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Framework';
  events: string[] = [];
  opened: boolean = true;
  menus: {name: string, path: string, icon: string}[] = [
    { name: 'Postagens', path: '/postagens', icon: 'verified_user' },
    { name: 'Albuns', path: '/albuns', icon: 'home' },
    { name: 'To-do', path: '/to_do', icon: 'pages' }
  ];
}
