describe("Reservation", function () {
  it('responds to "reservations by return an object"', function() {
    var res = { 'Billy': { claimed: false } };
    expect( rr.reservations ).toEqual(res);
  });

  it(".reservations['Billy'] returns another object", function(){
    expect( rr.reservations['Billy'] ).toEqual( { claimed: false } );
  });

  it(".reservations['Billy'] responds to .claimed by returning true or false", function(){
    expect( rr.reservations['Billy'].claimed ).toEqual(false);
  });
});
