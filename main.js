function main(){
 $(".post").hide();
  $(".postdiv").on("click", function(){
    $(this).children().slideToggle();

});
 }

 function pageswitch(){
    $(".aboutdiv").hide();
    $(".contactdiv").hide();

     $("#nav1").on("click", function(){
       $(".aboutdiv").slideUp();
       $(".contactdiv").slideUp();
       $(".postdiv").slideDown();
    });
     $("#nav2").on("click", function(){
       $(".contactdiv").slideUp();
       $(".postdiv").slideUp();
       $(".aboutdiv").slideDown();
    });
    $("#nav3").on("click", function(){
      $(".aboutdiv").slideUp();
      $(".postdiv").slideUp();
      $(".contactdiv").slideDown();
    });
 }


$(document).ready(main);
$(document).ready(pageswitch);
