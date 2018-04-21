// winner
function winner(checkBoardState) {
  boxCheck('X');
  boxCheck('O');

  function boxCheck(box) {
    //"X"  or "O"
    if (
      (checkBoardState[0] == box &&
        checkBoardState[3] == box &&
        checkBoardState[6] == box) ||
      (checkBoardState[1] == box &&
        checkBoardState[4] == box &&
        checkBoardState[7] == box) ||
      (checkBoardState[2] == box &&
        checkBoardState[5] == box &&
        checkBoardState[8] == box) ||
      (checkBoardState[0] == box &&
        checkBoardState[1] == box &&
        checkBoardState[2] == box) ||
      (checkBoardState[3] == box &&
        checkBoardState[4] == box &&
        checkBoardState[5] == box) ||
      (checkBoardState[6] == box &&
        checkBoardState[7] == box &&
        checkBoardState[8] == box) ||
      (checkBoardState[0] == box &&
        checkBoardState[4] == box &&
        checkBoardState[8] == box) ||
      (checkBoardState[6] == box &&
        checkBoardState[4] == box &&
        checkBoardState[2] == box)
    ) {
      alert(box + ' won the game.');
      play = function() {
        alert('The game is over');
      };
    }
  }
};