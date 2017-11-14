console.log($);
$(() => {

  //========================Items are clickable
  const $skull = $('.skull2');
  const $torso = $('.torso2');
  const $leftarm = $('.leftarm2');
  const $rightarm = $('.rightarm2');
  const $leftleg = $('.leftleg2');
  const $rightleg = $('.rightleg2');
  const $startbutton = $('.startbutton');
  const $startbutton2 = $('.startbutton2');
  const $fullSkeleton = $('.skeleton');
  let player1start;
  let player1end;
  let player2start;
  let player2end;
  const game = {
    player1time: '',
    player2time: '',
    skeletonbox: 0
  }
  let Round1ended = false;
  //===========================startgame function=======================
  // const winner = () => {
  //     if(player1end.getTime()-player1start.getTime() < player2end.getTime()-player2start.getTime()) {
  //       console.log("player 1 wins!");
  //       console.log(player1start.getTime());
  //     }
  // }


  const startgame= () => {
    $startbutton.on('click', () => {
      $skull.addClass('skull');
      $torso.addClass('torso');
      $leftarm.addClass('leftarm');
      $rightarm.addClass('rightarm');
      $rightleg.addClass('rightleg');
      $leftleg.addClass('leftleg');
      player1start = new Date();
      console.log("player 1 started");

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
        console.log(player1end);
        console.log("player 1 ended");
        Round1ended = true;
        resetround();
        player2round();
        
    }

    const player2round= () => {
      $startbutton2.on('click', () => {
        $skull.addClass('skull').addClass('clickable');
        $torso.addClass('torso').addClass('clickable');
        $leftarm.addClass('leftarm').addClass('clickable');
        $rightarm.addClass('rightarm').addClass('clickable');
        $rightleg.addClass('rightleg').addClass('clickable');
        $leftleg.addClass('leftleg').addClass('clickable');
        player2start = new Date();
        console.log(player2start);
        console.log("player 2 started");
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
      console.log(player2end);
      console.log("player 2 ended");

    }

    const resetround= () => {
      $('.skeleton').empty();
      game.skeletonbox = 0;
    }

    const winner = () => {
      let firstplayertime = player1end.getTime() - player1start.getTime();
      let secondplayertime = player2end.getTime() - player2start.getTime();
      console.log(firstplayertime);
      console.log(secondplayertime);
        if(firstplayertime < secondplayertime) {
          console.log("player 1 wins!");
          console.log(player1start.getTime());
        } else if (secondplayertime < firstplayertime) {
          console.log("player 2 wins!");
          console.log(player2start.getTime());
        } else {
          console.log("you tied you losers");
        }
      }
//============ADD AFTER CLICK==========================//
    const addskull = () => {
      const $skullfound = $('<img>').addClass("skull2").attr("src", "/Users/hectorguevara/Desktop/dev/Skeleton-Hunt/images/skull.png")
        $(".skeleton").append($skullfound);
        $($skull).removeClass("clickable");
        game.skeletonbox +=1;
        if((game.skeletonbox === 6) && (!Round1ended)){
          endPlayer1Round();
        } else if((game.skeletonbox === 6) && (Round1ended)){
          endPlayer2Round();
          winner();
        }
        // console.log(game);
      }

      const addtorso = () => {
        const $torsofound = $('<img>').addClass("torso2").attr("src", "/Users/hectorguevara/Desktop/dev/Skeleton-Hunt/images/torso.png")
        $(".skeleton").append($torsofound);
        $($torso).removeClass("clickable");
        game.skeletonbox +=1;
        if((game.skeletonbox === 6) && (!Round1ended)){
          endPlayer1Round();
        } else if((game.skeletonbox === 6) && (Round1ended)){
          endPlayer2Round();
          winner();
        }
        // console.log(game);
      };

      const addleftarm = () => {
        const $leftarmfound = $('<img>').addClass("leftarm2").attr("src", "/Users/hectorguevara/Desktop/dev/Skeleton-Hunt/images/leftarm.png")
        $(".skeleton").append($leftarmfound);
        $($leftarm).removeClass("clickable");
        game.skeletonbox +=1;
        if((game.skeletonbox === 6) && (!Round1ended)){
          endPlayer1Round();
        } else if((game.skeletonbox === 6) && (Round1ended)){
          endPlayer2Round();
          winner();
        }
        // console.log(game);
      };

      const addrightarm = () => {
        const $rightarmfound = $('<img>').addClass("rightarm2").attr("src", "/Users/hectorguevara/Desktop/dev/Skeleton-Hunt/images/rightarm.png")
        $(".skeleton").append($rightarmfound);
        $($rightarm).removeClass("clickable");
        game.skeletonbox +=1;
        if((game.skeletonbox === 6) && (!Round1ended)){
          endPlayer1Round();
        } else if((game.skeletonbox === 6) && (Round1ended)){
          endPlayer2Round();
          winner();
        }
        // console.log(game);
      };

      const addleftleg = () => {
        const $leftlegfound = $('<img>').addClass("leftleg2").attr("src", "/Users/hectorguevara/Desktop/dev/Skeleton-Hunt/images/leftleg.png")
        $(".skeleton").append($leftlegfound);
        $($leftleg).removeClass("clickable");
        game.skeletonbox +=1;
        if((game.skeletonbox === 6) && (!Round1ended)){
          endPlayer1Round();
        } else if((game.skeletonbox === 6) && (Round1ended)){
          endPlayer2Round();
          winner();
        }
        // console.log(game);
      };

      const addrightleg = () => {
        const $rightlegfound = $('<img>').addClass("rightleg2").attr("src", "/Users/hectorguevara/Desktop/dev/Skeleton-Hunt/images/rightleg.png")
        $(".skeleton").append($rightlegfound);
        $($rightleg).removeClass("clickable");
        game.skeletonbox +=1;
        if((game.skeletonbox === 6) && (!Round1ended)){
          endPlayer1Round();
        } else if((game.skeletonbox === 6) && (Round1ended)){
          endPlayer2Round();
          winner();
        }
        // console.log(game);
      };

//====================clicks============================//

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

    //=================PLAYER NAMES====================//
    let player1sub = $('<h3>');
    let player2sub = $('<h3>');

    const player1name= () => {
      $('.player1form').on('submit', (event) => {
        player1sub = $("#player1sub").val();
        event.preventDefault();
        $(".player1").append(player1sub)
        $(event.currentTarget).trigger('reset');
      });
    };

    const player2name= () => {
      $('.player2form').on('submit', (event) => {
        player2sub = $("#player2sub").val();
        event.preventDefault();
        $(".player2").append(player2sub);
        $(event.currentTarget).trigger('reset');

      });
    };

    // const currentPlayer = () => {
    //
    // }


    player1name();
    player2name();
  }


  startgame();

})
