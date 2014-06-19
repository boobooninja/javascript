$('.button.make').on('click', function (e) {
  var goodType = $(e.currentTarget).data('good-type'); // 'cupcake' or 'cookie'
  // TODO: Make the good
  if ( bakery.make(goodType) ) {
    // var goodDiv = $('<div>');
    // goodDiv.addClass(goodType);
    if (goodType === 'cookie') {
      html = '<div><img class="goods" src="http://www.clker.com/cliparts/p/Q/w/g/Y/X/cookie-md.png"></div>'
    } else if (goodType === 'cupcake') {
      html = '<div><img class="goods" src="http://www.clipartbest.com/cliparts/eTM/AA9/eTMAA9XTn.jpeg"><div>'
    }
    $('#display-box').find('.display').append(html);
  } else {
    $('#notification').text("We don't have enough ingredients!");
    setTimeout(function() {
      $('#notification').text("");
    }, 5000);
  }
});

bakery.updateIngredientsList();
