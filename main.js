function main(){
 $(".post").hide();
  $(".postdiv").on("click", function(){
    $(this).children().slideToggle();
});
 }

$(document).ready(main);
