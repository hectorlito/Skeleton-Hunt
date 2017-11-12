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
      console.log("leftarm was clicked", );
      addToSkeleton();
    });
    $rightarm.on('click', () => {
      console.log("rightarm was clicked", );
      addToSkeleton();
    });
    $leftleg.on('click', () => {
      console.log("leftlegwas clicked", );
      addToSkeleton();
    });
    $rightleg.on('click', () => {
      console.log("rightleg was clicked", );
      addToSkeleton();
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
