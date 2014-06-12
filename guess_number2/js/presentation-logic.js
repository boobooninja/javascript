(function() {
  $('#my-form').on('submit', function() {
    bl.answer = $("input").val();

    bl.clearInput();

    console.log("answer: " + bl.answer);

    if (bl.answer === 'play') {
      bl.setupGame();

      console.log("secretNumber: " + bl.secretNumber);
      console.log("mines: " + bl.mineArray);

      bl.setPlaceholder("Enter a number from 1 - 100");
    } else if (bl.active) {
      bl.play(bl.answer);
    } else {
      bl.setPlaceholder("Type 'play' and hit enter to start a game.");
    }
    return false;
  });
})();
