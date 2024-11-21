import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../animes.service';
import { Anime } from '../anime.model';
import { CommonModule } from '@angular/common';
import { AnimesDetailComponent } from '../animes-detail/animes-detail.component';

@Component({
  selector: 'app-list-animes',
  templateUrl: './list-animes.component.html',
  styleUrls: ['./list-animes.component.css'],
  standalone: true,
  imports: [CommonModule, AnimesDetailComponent]
})
export class ListAnimesComponent implements OnInit {

  selectedAnime!: Anime;
  selected: Boolean = false;

  animes: Anime[] = [];
  constructor(private animesService: AnimesService) { }

  ngOnInit(): void {
    this.animes = this.animesService.getAnimes();
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedAnime = anime;
  }

  getBestAnime(): number {
    const totalSeasons = this.animes.reduce((sum, animes) => sum + animes.rating, 0);
    return parseFloat((totalSeasons / this.animes.length).toFixed(2));
  }  

}
