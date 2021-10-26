import {Component, OnInit} from '@angular/core';
import {Player} from './shared/Player.model';
import {Players} from './shared/Players.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  listeJoueur: Players;

  constructor() {
    this.listeJoueur = new Players();
  }
  ngOnInit(): void {
    this.listeJoueur.addPlayer(new Player('Jade', 50));
    this.listeJoueur.addPlayer(new Player('Camille', 150));
    this.listeJoueur.addPlayer(new Player('Vianney', -10));
    this.listeJoueur.addPlayer(new Player('Ario', 18599));
    console.log(this.listeJoueur.getTopThree());
    this.listeJoueur.modifyPlayer('Ario', -18598);
    console.log(this.listeJoueur.getTopThree());
  }
}
