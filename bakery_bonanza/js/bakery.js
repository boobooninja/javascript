(function(){
  var Bakery = function () {
    this.supplies = {
      flour: 8,
      eggs: 12,
      sugar: 17,
      spice: 5
    };
    this.goodRequirements = {
      cupcake: {
        flour: 1,
        eggs: 1,
        sugar: 1
      },
      cookie: {
        flour: 1,
        eggs: 2,
        sugar: 2,
        spice: 1
      }
    };
    this.make = function (goodType) {
      console.log('Attempting to make a:', goodType);
      var req = this.goodRequirements[goodType];

      if (this.haveIngredients(req)) {
        this.useIngredients(req);
        this.updateIngredientsList();
        console.log('The bakery made a ' + goodType + '!');
        return true;
        // var goodDiv = $('<div>');
        // goodDiv.addClass(goodType);
        // $('#bakery .display').append(goodDiv);
      } else {
        alert("We don't have enough ingredients!");
        return false;
      }
    };
    this.haveIngredients = function(req) {
      if( this.supplies.flour > req.flour &&
          this.supplies.eggs > req.eggs &&
          this.supplies.sugar > req.sugar) {
        if(req.spice) {
          if( this.supplies.spice > req.spice) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      } else {
        return false;
      }
    };
    this.useIngredients = function(req) {
      this.supplies.flour -= req.flour;
      this.supplies.eggs -= req.eggs;
      this.supplies.sugar -= req.sugar;
      if(req.spice) {
        this.supplies.spice -= req.spice;
      }
    };
    this.updateIngredientsList = function () {
      $('.ingredients .flour span').text(this.supplies.flour);
      $('.ingredients .eggs span').text(this.supplies.eggs);
      $('.ingredients .sugar span').text(this.supplies.sugar);
      $('.ingredients .spice span').text(this.supplies.spice);
    };
  };

  window.bakery = new Bakery();

})();
