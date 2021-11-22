(document).ready(function() {
  $("#img1").click(function() {
    $("#img1").toggle();
      $(".design").toggle();
    });
    $(".design").click(function() {
      $(".design").toggle();
        $("#img1").toggle();
      });

      $("#img2").click(function() {
        $("#img2").toggle();
          $("#develop").toggle();
        });

        $("#develop").click(function() {
          $("#img2").toggle();
            $("#develop").toggle();
          });

          $("#img3").click(function() {
            $("#img3").toggle();
              $("#product").toggle();
            });
            $("#product").click(function() {
              $("#img3").toggle();
                $("#product").toggle();
              });
// PORTFOLIO BEGINS
$("#pc1").mouseenter(function(){
  $(".txt1").show(2000);
  
});
$("#pc1").mouseleave(function(){
 $(".txt1").hide(1000);
});


$("#pc2").mouseenter(function(){
  $(".txt2").show(2000);
  
});
$("#pc2").mouseleave(function(){
 $(".txt2").hide(1000);
});


$("#pc3").mouseenter(function(){
  $(".txt3").show(2000);
  
});
$("#pc3").mouseleave(function(){
 $(".txt3").hide(1000);
});


$("#pc4").mouseenter(function(){
  $(".txt4").show(2000);
  
});
$("#pc4").mouseleave(function(){
 $(".txt4").hide(1000);
});



$("#pc5").mouseenter(function(){
  $(".txt5").show(2000);
  
});
$("#pc5").mouseleave(function(){
 $(".txt5").hide(1000);
});



$("#pc6").mouseenter(function(){
  $(".txt6").show(2000);
  
});
$("#pc6").mouseleave(function(){
 $(".txt6").hide(1000);
});
$("#pc6").mouseenter(function(){
  $(".txt6").show(2000);
  
});
$("#pc7").mouseleave(function(){
 $(".txt7").hide(1000);
});
$("#pc7").mouseenter(function(){
  $(".txt7").show(2000);  
});

$("#pc8").mouseleave(function(){
 $(".txt8").hide(1000);
});
$("#pc8").mouseenter(function(){
  $(".txt8").show(2000); 
}); 
                function submit(fo){
                  var name= document.getElementById("name").value;
                  var email = document.getElementById("email").value;
                  alert("submmission received" + name);
                }
})