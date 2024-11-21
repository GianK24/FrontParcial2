import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Anime } from './anime.model';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {
  public apiUrl: string = 'http://localhost:8080/query';
  private My_anime_list: Anime[] = [];

  constructor(private http: HttpClient) {}

  sendPrompt(requestPayload: { prompt: string; format: string }): Observable<any> {
    console.log(requestPayload);
    return this.http.post<any>(this.apiUrl, requestPayload);
  }

  getAnimes():Anime[] {
    return this.My_anime_list;
  }

  addAnime(anime: Anime): void {
    this.My_anime_list.push(anime);
  }


}
