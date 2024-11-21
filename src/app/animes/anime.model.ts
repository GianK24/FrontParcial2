export class Anime {
    name: string;
    seasons: number;
    rating: number;
    description: string;
  
    constructor(name: string, seasons: number, rating: number, description: string) {
      this.name = name;
      this.seasons = seasons;
      this.rating = rating;
      this.description = description;
    }
  }
  