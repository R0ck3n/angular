import { Component } from '@angular/core';
import { VideoGame } from './models/video-game';

@Component({
  selector: 'app-list-games',
  imports: [],
  templateUrl: './list-games.component.html',
  styleUrl: './list-games.component.css',
})
export class ListGamesComponent {
  games: VideoGame[] = [
    {
      name: 'Mario',
      dateSortie: new Date(),
    },
    {
      name: 'Zelda',
      dateSortie: new Date(),
    },
    {
      name: 'Wow',
      dateSortie: new Date(),
    },
  ];
}
