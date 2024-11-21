import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListAnimesComponent } from './animes/list-animes/list-animes.component';
import { AnimesDetailComponent } from './animes/animes-detail/animes-detail.component';
import { AnimesFormComponent } from './animes/animes-form/animes-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListAnimesComponent, AnimesDetailComponent, AnimesFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontParcial2';
}
