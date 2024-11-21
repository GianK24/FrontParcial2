import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../animes.service';
import { Anime } from '../anime.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-animes-form',
  templateUrl: './animes-form.component.html',
  styleUrls: ['./animes-form.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class AnimesFormComponent implements OnInit {
  prompt: string = '';

  constructor(private animesService: AnimesService) {}

  sendPrompt() {
    if (this.prompt.length >= 16) {
      this.animesService
        .sendPrompt({
          prompt: this.prompt,
          format:
            "The format for the response has five keys ('name', 'seasons', 'rating', 'description'): 'name' is just the name of a random anime, 'seasons' contains the number of seasons of that anime, 'rating' is a number can be float with only one decimal between 1 an 10, 'description' is a short description for the history of the anime with more than 50 characters.",
        })
        .subscribe((response: any) => {
          const animeData: Anime = JSON.parse(response.response);
          const anime = new Anime(
            animeData.name,
            animeData.seasons,
            animeData.rating,
            animeData.description
          );
          this.animesService.addAnime(anime);
        });
    }else{
      alert('The prompt must have at least 16 characters');
    }
  }

  ngOnInit() {}
}
