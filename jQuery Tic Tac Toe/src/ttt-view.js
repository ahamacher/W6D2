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
    $square.removeClass('grey');
    $square.addClass('white');
    
    $square.append(this.game.currentPlayer)
  }

  setupBoard() {
    //create new html elements w/ jquery
    const $grid = $('<ul>');
    $grid.addClass('grid')
    
   
    this.$el.append($grid);

    for (let i = 0; i < 9; i++) {
      let $li = $('<li>');
      $grid.append($li);
      $li.addClass('square')
      $li.addClass('grey')
    }

  }
  
}

module.exports = View;
