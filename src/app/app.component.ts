import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BoxerTableComponent } from './boxer-table/boxer-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoxerTableComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'boxing-app';
}
