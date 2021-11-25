


$(document).ready(function() {
  $("#img1").click(function() {
    $("#img1").slideDown('1500').hide('1000');
      $("#design").show('1500');
    });
    $("#design").click(function() {
      $("#design").slideUp('1500');
        $("#img1").slideDown('1500');
      });
    });      

    $(document).ready(function() {
      $("#img2").click(function() {
        $("#img2").slideDown('1500').hide('1000');
          $("#develop").show('1500');
        });
        $("#develop").click(function() {
          $("#develop").slideUp('1500');
            $("#img2").slideDown('1500');
          });
        });      
    

        $(document).ready(function() {
          $("#img3").click(function() {
            $("#img3").slideDown('1500').hide('1000');
              $("#product").show('1500');
            });
            $("#product").click(function() {
              $("#product").slideUp('1500');
                $("#img3").slideDown('1500');
              });
            });      
        
         
 // PORTFOLIO BEGINS


 $(document).ready(function(){
  $("#pc1").mouseover(function(){
    $("#txt1").show();
  }).mouseout(function(){
    $("#txt1").hide();
  });
});

$(document).ready(function(){
  $("#pc2").mouseover(function(){
    $("#txt2").show();
  }).mouseout(function(){
    $("#txt2").hide();
  });
});

$(document).ready(function(){
  $("#pc3").mouseover(function(){
    $("#txt3").show();
  }).mouseout(function(){
    $("#txt3").hide();
  });
});

$(document).ready(function(){
  $("#pc4").mouseover(function(){
    $("#txt4").show();
  }).mouseout(function(){
    $("#txt4").hide();
  });
});

    
$(document).ready(function(){
  $("#pc5").mouseover(function(){
    $("#txt5").show();
  }).mouseout(function(){
    $("#txt5").hide();
  });
});

      
$(document).ready(function(){
  $("#pc6").mouseover(function(){
    $("#txt6").show();
  }).mouseout(function(){
    $("#txt6").hide();
  });
});

$(document).ready(function(){
  $("#pc7").mouseover(function(){
    $("#txt7").show();
  }).mouseout(function(){
    $("#txt7").hide();
  });
});

$(document).ready(function(){
  $("#pc8").mouseover(function(){
    $("#txt8").show();
  }).mouseout(function(){
    $("#txt8").hide();
  });
});


$(document).ready(function(){
  $("form#form34A").submit(function(event){
    // event.preventDefault();
    var name = $("input#MERGE1").val();
    var email = $("input#MERGE0").val();
    var message = $("textarea#comment").val();
    if ($("input#MERGE1").val() && $("input#MERGE0").val()){
      alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }
    
  });

});