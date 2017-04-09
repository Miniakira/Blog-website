function main(){
 $(".post").hide();
  $(".postdiv").on("click", function(){
    $(this).children().toggle();

});
 }

$(document).ready(main);
