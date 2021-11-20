$(document).ready(function() {
    $("#image1").click(function() {
      $("#image1").toggle();
        $(".design").toggle();
      });
      $(".design").click(function() {
        $(".design").toggle();
          $("#image1").toggle();
        });

        $("#image2").click(function() {
          $("#image2").toggle();
            $("#develop").toggle();
          });

          $("#develop").click(function() {
            $("#image2").toggle();
              $("#develop").toggle();
            });

            $("#image3").click(function() {
              $("#image3").toggle();
                $("#product").toggle();
              });
              $("#product").click(function() {
                $("#image3").toggle();
                  $("#product").toggle();
                });
// PORTFOLIO BEGINS
                $("#1").mouseenter(function(){
                  $(".1").show(2000);
                  
              });
               $("#1").mouseleave(function(){
                 $(".1").hide(1000);
                });


                $("#2").mouseenter(function(){
                  $(".2").show(2000);
                  
              });
               $("#2").mouseleave(function(){
                 $(".2").hide(1000);
                });


                $("#3").mouseenter(function(){
                  $(".3").show(2000);
                  
              });
               $("#3").mouseleave(function(){
                 $(".3").hide(1000);
                });


                $("#4").mouseenter(function(){
                  $(".4").show(2000);
                  
              });
               $("#4").mouseleave(function(){
                 $(".4").hide(1000);
                });



                $("#5").mouseenter(function(){
                  $(".5").show(2000);
                  
              });
               $("#5").mouseleave(function(){
                 $(".5").hide(1000);
                });



                $("#6").mouseenter(function(){
                  $(".6").show(2000);
                  
              });
               $("#6").mouseleave(function(){
                 $(".6").hide(1000);
                });
                $("#6").mouseenter(function(){
                  $(".6").show(2000);
                  
              });
               $("#7").mouseleave(function(){
                 $(".7").hide(1000);
                });
                $("#7").mouseenter(function(){
                  $(".7").show(2000);  
              });

               $("#8").mouseleave(function(){
                 $(".8").hide(1000);
                });
                $("#8").mouseenter(function(){
                  $(".8").show(2000); 
              });

                function submit(fo){
                  var name= document.getElementById("name").value;
                  var email = document.getElementById("email").value;
                  alert("submmission received" + name);
                }
})