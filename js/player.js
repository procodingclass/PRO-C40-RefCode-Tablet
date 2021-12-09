class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.distance = 0;
    this.positionX = 0;
    this.positionY = 600;
    this.rank = 0;
    this.rotation = 0;
    this.blast = false;
  }
  addPlayer() {
    if (this.index === 1) {
      this.positionX = width / 2 - 320;
    } else if (this.index === 2) {
      this.positionX = width / 2 - 150;
    } else if (this.index === 3) {
      this.positionX = width / 2 + 150;
    } else if (this.index === 4) {
      this.positionX = width / 2 + 320;
    }

    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
      rank: this.rank,
      distance: this.distance,
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  getCount() {
    var playerCountref = database.ref("playerCount");
    playerCountref.on("value", data => {
      playerCount = data.val();
    });
  }
}
