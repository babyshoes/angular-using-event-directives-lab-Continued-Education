function VoteController() {
    this.votes = 0;
    var voted;
    var decremented;

    this.incrementVotes = function () {
      if(!voted){
        this.votes++;
        voted = true;
      }
    };

    this.decrementVotes = function () {
      if(!decremented){
        this.votes--
        decremented = true;
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
