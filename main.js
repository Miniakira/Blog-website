function main(){
 $(".post").hide();
  $(".postdiv").on("click", function(){
    $(this).children().toggle();

});
 }

 function pageswitch(){
    $(".aboutdiv").hide();
    $(".contactdiv").hide();

     $("#nav1").on("click", function(){
       $(".aboutdiv").hide();
       $(".contactdiv").hide();
       $(".postdiv").show();
    });
     $("#nav2").on("click", function(){
       $(".contactdiv").hide();
       $(".postdiv").hide();
       $(".aboutdiv").show();
    });
    $("#nav3").on("click", function(){
      $(".aboutdiv").hide();
      $(".postdiv").hide();
      $(".contactdiv").show();
    });
 }


$(document).ready(main);
$(document).ready(pageswitch);
