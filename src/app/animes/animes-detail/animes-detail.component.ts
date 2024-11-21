import { Component, Input, OnInit } from '@angular/core';
import { Anime } from '../anime.model';

@Component({
  selector: 'app-animes-detail',
  templateUrl: './animes-detail.component.html',
  styleUrls: ['./animes-detail.component.css'],
  standalone: true
})
export class AnimesDetailComponent implements OnInit {

  @Input() animeDetail!: Anime;

  constructor() { }

  ngOnInit() {
  }

}
