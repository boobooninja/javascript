describe("Reservation", function () {
  it('responds to "reservations by returning an object"', function() {
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

// describe("Reservation UI", function(){
//   beforeEach(function() {
//     loadFixtures('myfixture.html');
//   });

//   it("has #button-box with two buttons", function(){
//     expect( $('#button-box') ).toBeVisible();
//     expect( $('#reserve') ).toBeVisible();
//     expect( $('#claim') ).toBeVisible();
//   });
// });
