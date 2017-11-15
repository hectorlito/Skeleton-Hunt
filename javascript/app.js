console.log($);
$(() => {

  //=============Items are clickable======================
  const $skull = $('.skull2');
  const $torso = $('.torso2');
  const $leftarm = $('.leftarm2');
  const $rightarm = $('.rightarm2');
  const $leftleg = $('.leftleg2');
  const $rightleg = $('.rightleg2');
  const $startbutton = $('.startbutton');
  const $startbutton2 = $('.startbutton2');
  const $fullSkeleton = $('.skeleton');
  const $instructions = $('#instructions');
  const $closeButton = $('#close');
  let player1start;
  let player1end;
  let player2start;
  let player2end;
  const game = {
    player1time: '',
    player2time: '',
    skeletonbox: 0,
    roundWinners: []
  }
  let Round1ended = false;
  //===========================startgame function=======================
  const startgame= () => {
    $startbutton.on('click', () => {
      resetround();
      $skull.addClass('skull');
      $torso.addClass('torso');
      $leftarm.addClass('leftarm');
      $rightarm.addClass('rightarm');
      $rightleg.addClass('rightleg');
      $leftleg.addClass('leftleg');
      player1start = new Date();//this allows me to tell the time and then get the difference
      $startbutton.addClass('hide');
    })
//======================game functionality =============================//
    const endPlayer1Round= () => {
        $skull.removeClass('skull');
        $torso.removeClass('torso');
        $leftarm.removeClass('leftarm');
        $rightarm.removeClass('rightarm');
        $rightleg.removeClass('rightleg');
        $leftleg.removeClass('leftleg');
        player1end = new Date();
        Round1ended = true;
        player2round();
    }

    const player2round= () => {
      $startbutton2.on('click', () => {
        resetround();
        $skull.addClass('skull');
        $torso.addClass('torso');
        $leftarm.addClass('leftarm');
        $rightarm.addClass('rightarm');
        $rightleg.addClass('rightleg');
        $leftleg.addClass('leftleg');
        player2start = new Date();
        $startbutton2.addClass('hide');
      })
    }

    const endPlayer2Round = () => {
      $skull.removeClass('skull');
      $torso.removeClass('torso');
      $leftarm.removeClass('leftarm');
      $rightarm.removeClass('rightarm');
      $rightleg.removeClass('rightleg');
      $leftleg.removeClass('leftleg');
      player2end = new Date();
      resetround();
      roundWinner();
    }

    const resetround= () => {
      $('.skeleton').empty();
      game.skeletonbox = 0;
      $skull.addClass('clickable');
      $torso.addClass('clickable');
      $leftarm.addClass('clickable');
      $rightarm.addClass('clickable');
      $rightleg.addClass('clickable');
      $leftleg.addClass('clickable');
    }

//=========================WINNER CIRCLE===================
    const player1win = (time) => {
      let player1sub = $(".player1-name").text();
      if(player1sub === ''){
        $(".winnercircle").append("Player 1 wins! Total time: " , time + " milliseconds");
      } else {
      $(".winnercircle").append(player1sub + " WINS THE GAME! ");
        $('.winnercircle').append("Total time: ", time + " milliseconds");
      }
    };
    const player2win = (time) => {
      let player2sub = $(".player2-name").text();
      if (player2sub === ''){
        $(".winnercircle").append("Player 2 wins! Total time: " , time + " milliseconds ");
      }else{
      $(".winnercircle").append(player2sub + " WINS THE GAME! ");
        $('.winnercircle').append("Total time: ", time + " milliseconds");
      }
    };

    const roundWinner = () => {
      let firstplayertime = player1end.getTime() - player1start.getTime();
      let secondplayertime = player2end.getTime() - player2start.getTime();
      //this give the results of the time//
        if(firstplayertime < secondplayertime) {
          game.roundWinners.push(player1sub);
          //started working on making an array where I would be able to fidn three rounds//
          console.log("pushed to array", game.roundWinners);
          if(game.roundWinners.length === 3){
            gameOver();
          } else if (game.roundWinners.length === 2 && game.roundWinners[0]=== game.roundWinners[1]){
          gameOver()};
          player1win(firstplayertime);
        } else if (secondplayertime < firstplayertime) {
          game.roundWinners.push(player2sub);
          console.log("pushed to array", game.roundWinners)
          if(game.roundWinners.length === 3){
            gameOver();
          } else if (game.roundWinners.length === 2 && game.roundWinners[0]=== game.roundWinners[1]){
          gameOver()};
          player2win(secondplayertime);
        } else {
          console.log("you tied you losers");
        }
      }

      const gameOver = () => {
        console.log("this function", gameOver);
      }

      if(game.roundWinners.length === 3){
        gameOver();
      } else if (game.roundWinners.length === 2 && game.roundWinners[0]=== game.roundWinners[1]){
      }

//============ADD AFTER CLICK==========================//
    const addskull = () => {
      const $skullfound = $('<img>').addClass("skull2").attr("src", "images/skull.png")
        $(".skeleton").append($skullfound);
        $($skull).removeClass("clickable");
        game.skeletonbox +=1;
        if((game.skeletonbox === 6) && (!Round1ended)){
          endPlayer1Round();
        } else if((game.skeletonbox === 6) && (Round1ended)){
          endPlayer2Round();
        }
      }

      const addtorso = () => {
        const $torsofound = $('<img>').addClass("torso2").attr("src", "images/torso.png")
        $(".skeleton").append($torsofound);
        $($torso).removeClass("clickable");
        game.skeletonbox +=1;
        if((game.skeletonbox === 6) && (!Round1ended)){
          endPlayer1Round();
        } else if((game.skeletonbox === 6) && (Round1ended)){
          endPlayer2Round();
        }
      };

      const addleftarm = () => {
        const $leftarmfound = $('<img>').addClass("leftarm2").attr("src", "images/leftarm.png")
        $(".skeleton").append($leftarmfound);
        $($leftarm).removeClass("clickable");
        game.skeletonbox +=1;
        if((game.skeletonbox === 6) && (!Round1ended)){
          endPlayer1Round();
        } else if((game.skeletonbox === 6) && (Round1ended)){
          endPlayer2Round();
        }
      };

      const addrightarm = () => {
        const $rightarmfound = $('<img>').addClass("rightarm2").attr("src", "images/rightarm.png")
        $(".skeleton").append($rightarmfound);
        $($rightarm).removeClass("clickable");
        game.skeletonbox +=1;
        if((game.skeletonbox === 6) && (!Round1ended)){
          endPlayer1Round();
        } else if((game.skeletonbox === 6) && (Round1ended)){
          endPlayer2Round();
        }
      };

      const addleftleg = () => {
        const $leftlegfound = $('<img>').addClass("leftleg2").attr("src", "images/leftleg.png")
        $(".skeleton").append($leftlegfound);
        $($leftleg).removeClass("clickable");
        game.skeletonbox +=1;
        if((game.skeletonbox === 6) && (!Round1ended)){
          endPlayer1Round();
        } else if((game.skeletonbox === 6) && (Round1ended)){
          endPlayer2Round();
          // roundWinner();
        }
      };

      const addrightleg = () => {
        const $rightlegfound = $('<img>').addClass("rightleg2").attr("src", "images/rightleg.png")
        $(".skeleton").append($rightlegfound);
        $($rightleg).removeClass("clickable");
        game.skeletonbox +=1;
        if((game.skeletonbox === 6) && (!Round1ended)){
          endPlayer1Round();
        } else if((game.skeletonbox === 6) && (Round1ended)){
          endPlayer2Round();
          // roundWinner();
        }
      };

//====================clickable class============================//

    $skull.on('click', () => {
      if ($($skull).hasClass("clickable")){
        addskull();
        }
      });

    $torso.on('click', () => {
      if ($($torso).hasClass("clickable")){
        addtorso();
        }
      });

    $leftarm.on('click', () => {
        if ($($leftarm).hasClass("clickable")){
      addleftarm();
        }
      });

    $rightarm.on('click', () => {
        if ($($rightarm).hasClass("clickable")){
      addrightarm();
        }
      });

    $leftleg.on('click', () => {
      if ($($leftleg).hasClass("clickable")){
      addleftleg();
        }
      });

    $rightleg.on('click', () => {
      if ($($rightleg).hasClass("clickable")){
      addrightleg();
        }
      });

    //=================Buttons====================//
    $instructions.on('click', () => {
      $('.howToModal').css('display', 'block')
    });
    $closeButton.on('click', () => {
      $('.howToModal').css('display', 'none')
    });

    const player1name= () => {
      $('.player1form').on('submit', (event) => {
      let player1sub = $("#player1sub").val();
        event.preventDefault();
        $(".player1-name").append(player1sub)
        $(event.currentTarget).trigger('reset');
      });
    };

    const player2name= () => {
      $('.player2form').on('submit', (event) => {
        let player2sub = $("#player2sub").val();
        event.preventDefault();
        $(".player2-name").append(player2sub);
        $(event.currentTarget).trigger('reset');
      });
    };
    player1name();
    player2name();
  }
  startgame();
})
