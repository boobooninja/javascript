(function() {
  var BusinessLogic = function() {

    this.active = false;

    this.validate = function(number) {
      var hitMine = this.checkMines(number);

      if (number === this.secretNumber) {
        this.active = false;
        this.clearColor();
        this.setPlaceholder(number + " is Correct! Type 'play' to play again.");
        return true
      }

      if (typeof(hitMine) === 'boolean') {
        this.active = false;
        this.setPlaceholder(number + " hit a Mine! Type 'play' to play again.");
        return true
      }

      if (number < this.secretNumber) {
        this.setPlaceholder(number + " is too low! " + hitMine + " Try again.");
        return false
      } else if (number > this.secretNumber) {
        this.setPlaceholder(number + " is too high! " + hitMine + " Try again.");
        return false
      }
    };

    this.checkMines = function(number) {
      var closest = 100;
      for(var i = 0; i < this.mineArray.length; i++) {
        var distance = Math.abs(this.mineArray[i] - number);

        if ( this.mineArray[i] === number) {
          return true
        } else if (distance < closest) {
          closest = distance;
        }
      }

      this.setColor(closest);

      return "Mine is " + closest + " spaces away.";
    };

    this.setColor = function(num) {
      this.clearColor();
      if (num === 1) {
        $("#my-box").addClass('red-box');
      } else if (num > 1 && num < 6) {
        $("#my-box").addClass('yellow-box');
      } else {
        $("#my-box").addClass('grey-box');
      }
    };

    this.clearColor = function() {
      $("#my-box").removeClass('grey-box');
      $("#my-box").removeClass('yellow-box');
      $("#my-box").removeClass('red-box');
    };

    this.setPlaceholder = function(text) {
      $('input').attr("placeholder", text);
    };

    this.clearInput = function() {
      $('input').val('');
    };

    this.play = function(text) {
      if (text.length === 0) {
        this.setPlaceholder("Enter a number from 1 - 100");
      } else {
        var num = parseInt( text );

        if ( isNaN(num) ) {
          this.setPlaceholder(num + " is not a number. Enter a number from 1 - 100");
        } else {
          this.validate(num);
        }
      }
    };

    this.generateNumber = function() {
      return parseInt(Math.random() * 100, 10) + 1;
    };

    this.setupGame = function() {
      this.secretNumber = this.generateNumber();
      this.mine1        = this.generateNumber();
      this.mine2        = this.generateNumber();
      this.mine3        = this.generateNumber();
      this.mineArray    = [this.mine1, this.mine2, this.mine3];

      this.active = true;
    };
  };

  window.bl = new BusinessLogic();
})();
