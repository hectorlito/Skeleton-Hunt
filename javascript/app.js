console.log($);
$(() => {
let player1sub = $('<h3>');

console.log(player1sub);

const player1name= () => {
  $('form').on('submit', (event) => {
     console.log($('#player1sub').val());
     player1sub = $("#player1sub").val();
     event.preventDefault();
    $(".player1").append(player1sub);
    console.log(player1sub);
   });
 };

player1name();

})
