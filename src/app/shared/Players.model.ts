import {Player} from './Player.model';

export class Players {
  playersList: Player[];
  constructor() {
    this.playersList = [];
  }

  addPlayer(player: Player): void {
    this.playersList.push(player);
  }

  modifyPlayer(playerName: string, modifier: number): void {
    // Pour chaque joueur dans le tableau des scores
    this.playersList.forEach((element) => {
      // mettre à jour le score actuel du joueur
      if (element.name === playerName) {
        element.score += Math.floor(modifier);
      }
    });
  }

  getTopThree(): Player[] {
    // création d'une copie
    const tempPlayers: Player[] = [];
    this.playersList.forEach((element) => tempPlayers.push(element));
    // On trie par ordre decroissant sur le score des joueurs
    tempPlayers.sort((joueur1, joueur2) => joueur2.score - joueur1.score);
    // On coupe les 3 premiers scores (les plus haut) et on les retourne.
    return tempPlayers.slice(0, 3);
  }
}
