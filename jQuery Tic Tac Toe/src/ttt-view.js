class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", ( event => {
      const $square = $(event.target);
      this.makeMove($square);
    }))
  }

  makeMove($square) {
    if ($square.hasClass('grey')){
      $square.removeClass('grey');
      $square.addClass('white');
      $square.append(this.game.currentPlayer);
      $square.addClass(this.game.currentPlayer);
      
      this.game.playMove($square.data("pos"));

      if (this.game.winner() != null) {
        this.game.swapTurn();
        setTimeout(() => alert (`${this.game.currentPlayer} wins!`), 0);
        this.$el.off('click', 'li');
      }
      
    } else {
      alert('Invalid Move, you FOOL!')
    }
  }

  setupBoard() {
    //create new html elements w/ jquery
    const $grid = $('<ul>');
    $grid.addClass('grid')
    
   
    this.$el.append($grid);
    let positions = this.makePositions()
    window.console.log(positions);

    for (let i = 0; i < 9; i++) {
      let $li = $('<li>');
      $grid.append($li);
      $li.addClass('square');
      $li.addClass('grey');
      $li.data("pos", positions[i]);
    }

  }

  makePositions() {
    const grid = [];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        grid.push([i,j]);
      }
    }

    return grid;
  }
  
}

module.exports = View;
