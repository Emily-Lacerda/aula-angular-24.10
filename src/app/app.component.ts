import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExternoComponent } from './externo/externo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExternoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'comunicacao';
}
