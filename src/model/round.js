class Round {
	constructor(anime, song) {
		this.anime = anime;
		this.song = song;
	}

	setWinner(winner) {
		this.winner = winner;
	}
}

exports.Round = Round;