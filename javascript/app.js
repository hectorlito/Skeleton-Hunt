console.log($);
$(() => {

  //Items are clickable
  const $skull = $('.skull2');
  const $torso = $('.torso2');
  const $leftarm = $('.leftarm2');
  const $rightarm = $('.rightarm2');
  const $leftleg = $('.leftleg2');
  const $rightleg = $('.rightleg2');
  const $startbutton = $('.startbutton');
  const $fullSkeleton = $('.skeleton');
  //startgame function
  const startgame= () => {
    $startbutton.on('click', () => {
      console.log('start button was clicked');
    })
//============ADD AFTER CLICK==========================//
    const addskull = () => {
      const $skullfound = $('<img>').attr("src", "/Users/hectorguevara/Desktop/dev/Skeleton-Hunt/images/skull.png")
        $(".skeleton").append($skullfound);
        $($skull).removeClass("clickable")
      }

      const addtorso = () => {
        const $torsofound = $('<img>').attr("src", "/Users/hectorguevara/Desktop/dev/Skeleton-Hunt/images/torso.png")
        $(".skeleton").append($torsofound);
        $($torso).removeClass("clickable");
      };

      const addleftarm = () => {
        const $leftarmfound = $('<img>').attr("src", "/Users/hectorguevara/Desktop/dev/Skeleton-Hunt/images/leftarm.png")
        $(".skeleton").append($leftarmfound);
        $($leftarm).removeClass("clickable");
      };

      const addrightarm = () => {
        const $rightarmfound = $('<img>').attr("src", "/Users/hectorguevara/Desktop/dev/Skeleton-Hunt/images/rightarm.png")
        $(".skeleton").append($rightarmfound);
        $($rightarm).removeClass("clickable");
      };

      const addleftleg = () => {
        const $leftlegfound = $('<img>').attr("src", "/Users/hectorguevara/Desktop/dev/Skeleton-Hunt/images/leftleg.png")
        $(".skeleton").append($leftlegfound);
        $($leftleg).removeClass("clickable");
      };

      const addrightleg = () => {
        const $rightlegfound = $('<img>').attr("src", "/Users/hectorguevara/Desktop/dev/Skeleton-Hunt/images/rightleg.png")
        $(".skeleton").append($rightlegfound);
        $($rightleg).removeClass("clickable");
      };

//===========clicks============================//

    $skull.on('click', () => {
      if ($($skull).hasClass("clickable")){
      console.log("skull was clicked", );
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
      console.log("left arm was clicked", );
      addleftarm();
    }
      });

    $rightarm.on('click', () => {
        if ($($rightarm).hasClass("clickable")){
      console.log("right arm was clicked", );
      addrightarm();
      }
      });

    $leftleg.on('click', () => {
      if ($($leftleg).hasClass("clickable")){
      console.log("leftlegwas clicked", );
      addleftleg();
      }
      });

    $rightleg.on('click', () => {
      if ($($rightleg).hasClass("clickable")){
      console.log("rightleg was clicked", );
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
    player1name();

    const player2name= () => {
      $('.player2form').on('submit', (event) => {
        player2sub = $("#player2sub").val();
        event.preventDefault();
        $(".player2").append(player2sub);
        $(event.currentTarget).trigger('reset');

      });
    };

    player2name();

  }
  startgame();
})
