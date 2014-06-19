describe("Bakery", function () {
  it("responds to 'supplies' by returning an object", function() {
    var supplies = { flour: 8,
                     eggs: 12,
                     sugar: 17,
                     spice: 5 };
    expect( bakery.supplies ).toEqual(supplies);
  });

  it("responds to 'goodRequirements' by returning an object", function() {
    var goodRequirements = {
      cupcake: { flour: 1, eggs: 1, sugar: 1 },
      cookie: { flour: 1, eggs: 2, sugar: 2, spice: 1 }
    };
    expect( bakery.goodRequirements ).toEqual(goodRequirements);
  });

  describe("responds to 'make' and accepts a 'type'", function(){
    it("when it has enough ingredients it returns true", function() {
      var goodType = 'cookie';
      expect( bakery.make(goodType) ).toEqual(true);
    });
    it("when it does not have enough ingredients it returns false", function() {
      var goodType = 'cookie';
      bakery.supplies = { flour: 0, eggs: 0, sugar: 0, spice: 0 };
      expect( bakery.make(goodType) ).toEqual(false);
    });
  });

});
