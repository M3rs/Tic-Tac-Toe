"use strict";

function main() {

  var tiles = [$("#1"), $("#2"), $("#3"), $("#4"), $("#5"), $("#6"), $("#7"), $("#8"), $("#9")];
  var letters = [$("#p1"), $("#p2"), $("#p3"), $("#p4"), $("#p5"), $("#p6"), $("#p7"), $("#p8"), $("#p9")];

  $("p").text("");

  var _loop = function _loop(_i) {

    $(tiles[_i]).on("click", function () {

      var xWin = function xWin() {
        if ($(letters[0]).text() === "X" && $(letters[1]).text() === "X" && $(letters[2]).text() === "X") {
          alert("X Wins!");
          $("p").text("");
          counter = 0;
        }

        if ($(letters[3]).text() === "X" && $(letters[4]).text() === "X" && $(letters[5]).text() === "X") {
          alert("X Wins!");
          $("p").text("");
          counter = 0;
        }

        if ($(letters[6]).text() === "X" && $(letters[7]).text() === "X" && $(letters[8]).text() === "X") {
          alert("X Wins!");
          $("p").text("");
          counter = 0;
        }

        if ($(letters[0]).text() === "X" && $(letters[3]).text() === "X" && $(letters[6]).text() === "X") {
          alert("X Wins!");
          $("p").text("");
          counter = 0;
        }

        if ($(letters[1]).text() === "X" && $(letters[4]).text() === "X" && $(letters[7]).text() === "X") {
          alert("X Wins!");
          $("p").text("");
          counter = 0;
        }

        if ($(letters[2]).text() === "X" && $(letters[5]).text() === "X" && $(letters[8]).text() === "X") {
          alert("X Wins!");
          $("p").text("");
          counter = 0;
        }

        if ($(letters[0]).text() === "X" && $(letters[4]).text() === "X" && $(letters[8]).text() === "X") {
          alert("X Wins!");
          $("p").text("");
          counter = 0;
        }

        if ($(letters[2]).text() === "X" && $(letters[4]).text() === "X" && $(letters[6]).text() === "X") {
          alert("X Wins!");
          $("p").text("");
          counter = 0;
        }
      };

      var oWin = function oWin() {
        if ($(letters[0]).text() === "O" && $(letters[1]).text() === "O" && $(letters[2]).text() === "O") {
          alert("O Wins!");
          $("p").text("");
          counter = 0;
        }

        if ($(letters[3]).text() === "O" && $(letters[4]).text() === "O" && $(letters[5]).text() === "O") {
          alert("O Wins!");
          $("p").text("");
          counter = 0;
        }

        if ($(letters[6]).text() === "O" && $(letters[7]).text() === "O" && $(letters[8]).text() === "O") {
          alert("O Wins!");
          $("p").text("");
          counter = 0;
        }

        if ($(letters[0]).text() === "O" && $(letters[3]).text() === "O" && $(letters[6]).text() === "O") {
          alert("O Wins!");
          $("p").text("");
          counter = 0;
        }

        if ($(letters[1]).text() === "O" && $(letters[4]).text() === "O" && $(letters[7]).text() === "O") {
          alert("O Wins!");
          $("p").text("");
          counter = 0;
        }

        if ($(letters[2]).text() === "O" && $(letters[5]).text() === "O" && $(letters[8]).text() === "O") {
          alert("O Wins!");
          $("p").text("");
          counter = 0;
        }

        if ($(letters[0]).text() === "O" && $(letters[4]).text() === "O" && $(letters[8]).text() === "O") {
          alert("O Wins!");
          $("p").text("");
          counter = 0;
        }

        if ($(letters[2]).text() === "O" && $(letters[4]).text() === "O" && $(letters[6]).text() === "O") {
          alert("O Wins!");
          $("p").text("");
          counter = 0;
        }
      };

      if ($(letters[_i]).text() === "") {

        if (getPlayer() % 2 === 0) {
          $(letters[_i]).css("color", "red");
          $(letters[_i]).text("X");
          xWin();
        } else {
          $(letters[_i]).css("color", "blue");
          $(letters[_i]).text("O");
          oWin();
        }
      }
    });
  };

  for (var _i = 0; _i < tiles.length; _i++) {
    _loop(_i);
  }

  var counter = -1;
  $("div").on("click", getPlayer());

  function getPlayer() {
    var nums = [1, 2, 1, 2, 1, 2, 1, 2, 1];
    $("#pp").text("Player " + nums[counter]);
    counter++;
    if (counter === nums.length) {
      alert("draw");
      counter = 0;
      $("p").text("");
      $(letters[i]).text("");
      return counter;
    }
    return counter;
  }
}

main();