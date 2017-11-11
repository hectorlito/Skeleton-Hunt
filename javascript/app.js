console.log($);
$(() => {
//Items are clickable
 const $skull = $('.skull2');
 const $torso = $('.torso2');
 const $leftarm = $('.leftarm2');
 const $rightarm =$('.rightarm2');
 const $leftleg =$('.leftleg2');
 const $rightleg =$('.rightleg2')

const clickables= () => {
  $skull.on('click', () => {
    console.log("skull was clicked", );
    });
  $torso.on('click', () => {
    console.log("torso was clicked", );
    });
  $leftarm.on('click', () => {
    console.log("leftarm was clicked", );
    });
  $rightarm.on('click', () => {
    console.log("rightarm was clicked", );
    });
  $leftleg.on('click', () => {
    console.log("leftlegwas clicked", );
    });
  $rightleg.on('click', () => {
    console.log("rightleg was clicked", );
    });

  };
clickables();




//PLAYER NAMES=================================================
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

})
