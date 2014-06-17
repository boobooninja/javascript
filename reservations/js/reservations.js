(function(){
  var Reservation = function () {
    this.reservations = {
      'Billy': { claimed: false }
    },
    this.setReservation = function(name) {
      this.reservations[name] = { claimed: false };
      return true;
    },
    this.hasReservation = function(name) {
      if (this.reservations[name]) {
        return true;
      } else {
        return false;
      }
    },
    this.reservationClaimed = function(name) {
      return this.reservations[name].claimed;
    },
    this.claimReservation = function(name) {
      this.reservations[name].claimed = true;
      return true;
    }
  };

  window.rr = new Reservation();
})();

$('#reserve-form').hide();
$('#claim-form').hide();
$('#alert-box').hide();

// $('#claim').on('click', function (e) {
//   var name = prompt("What is your name?");
//   if (rr.reservations[name]) {
//     if (rr.reservations[name].claimed) {
//       alert("The reservation for " + name + " has already been claimed.");
//     } else {
//       rr.reservations[name].claimed = true;
//       alert("Welcome "+ name);
//     }
//   } else {
//     alert("No reservation under that name!");
//   }
// });

$('#claim').on('click', function (e) {
  e.preventDefault();
  $('#claim-form').show();
  $('#button-box').hide();
});

$(document).on('submit', '#claim-form', function(e) {
  e.preventDefault();
  var name = $(this).find('input').val();
  console.log('claim: ' + name);

  if (rr.hasReservation(name)) {
    if (rr.reservationClaimed(name)) {
      $('#status').text("The reservation for " + name + " has already been claimed.");
      $('#alert-box').show();
      setTimeout(function() { $('#alert-box').hide(); }, 5000);
    } else {
      rr.claimReservation(name);
      $('#status').text("Welcome " + name);
      $('#alert-box').show();
      setTimeout(function() { $('#alert-box').hide(); }, 5000);
    }
  } else {
    $('#status').text("No reservation under the name " + name);
    $('#alert-box').show();
    setTimeout(function() { $('#alert-box').hide(); }, 5000);
  }

  $('#claim-form').hide();
  $('#button-box').show();
});

$('#reserve').on('click', function (e) {
  e.preventDefault();
  $('#reserve-form').show();
  $('#button-box').hide();
});

$(document).on('submit', '#reserve-form', function(e) {
  e.preventDefault();

  var name = $(this).find('input').val();
  console.log('reserve: ' + name);
  if ( rr.setReservation(name) ) {
    $('#status').text("Reservation has been set for " + name);
    $('#alert-box').show();
    setTimeout(function() { $('#alert-box').hide(); }, 5000);
  } else {
    $('#status').text("Something went wrong, try again");
    $('#alert-box').show();
    setTimeout(function() { $('#alert-box').hide(); }, 5000);
  }

  $('#reserve-form').hide();
  $('#button-box').show();
});
