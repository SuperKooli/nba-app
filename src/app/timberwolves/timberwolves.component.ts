import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../service/players.service';

@Component({
  selector: 'app-timberwolves',
  templateUrl: './timberwolves.component.html',
  styleUrls: ['./timberwolves.component.scss']
})
export class TimberwolvesComponent implements OnInit {

  players: any
  teamId: number = 15
  constructor(public playersService: PlayersService) { 
    this.playersService.getPlayerByTeam(this.teamId).subscribe((data) => {
      this.players = data;
    });
  }

  ngOnInit() {
    
  }

}
