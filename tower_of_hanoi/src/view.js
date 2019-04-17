const Index = require('./index.js')

class HanoiView {
  constructor (game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.render();
  }

  setupTowers(){
    for (let i = 1; i < 4; i++) {
      let $tower = $('<ul>');
      this.$el.append($tower);
      $tower.attr('id', `tower${i}`);
    }


    for (let j = 1; j < 4; j++) {
      let tower = $(`#tower${j}`);
      for (let i = 1; i < 4; i++) {
        let $stack = $('<li>');
        tower.append($stack);
        if (j === 1){
          $stack.addClass(`stack${i}`);
        }
      }
    }
      
  }

  render() {

  }

  clickTower(){
    this.$el.on("click", "li", (event => {
      const $square = $(event.target);
      this.makeMove($square);
    }))
  }

}

module.exports = HanoiView;