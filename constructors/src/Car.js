(function () {

  window.Car = function (color, person) {
    this.state = 'off';
    this.color = color;
    this.driver = person;
    this.ignite = function() {
      if (this.driver) {
        if (this.driver.hasDriversLicense) {
          this.state = 'running';
          return 'Vroom!';
        } else {
          return 'Sorry, you do not have a license.';
        }
      } else {
        return 'There is no driver to start the car!';
      }
    };
  };

})();
