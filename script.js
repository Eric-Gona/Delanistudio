
$(document).ready(function(){
  $(".product").on("click",function(){
      $(".img-fluid").toggle();
      $(".product").toggle(); 
  });
  
  $(".design").on("click",function(){
      $(".img-fluid").toggle();
      $(".design").toggle();
      
      
  });

  $(".development").on("click",function(){
      $(".img-fluid").toggle();
      $(".development").toggle();
  });


});
        
         
 // PORTFOLIO BEGINS
$(document).ready(function() {
  $(".dark1").mouseenter(function() {
             $(".dark").show();
             $(".dark1").css("opacity","1")
  });
  $(".dark1").mouseleave(function() {
             $(".dark").hide();
             $(".dark1").css("opacity","2")
  });
}); 


$(document).ready(function() {
  $(".ontario1").mouseenter(function() {
             $(".ontario").show();
             $(".ontario1").css("opacity","0.6")
  });
  $(".ontario1").mouseleave(function() {
             $(".ontario").hide();
             $(".ontario1").css("opacity","2")
  });
}); 


$(document).ready(function() {
  $(".orange1").mouseenter(function() {
             $(".orange").show();
             $(".orange1").css("opacity","1")
  });
  $(".orange1").mouseleave(function() {
             $(".orange").hide();
             $(".orange1").css("opacity","2")
  });
}); 

$(document).ready(function() {
  $(".jim1").mouseenter(function() {
             $(".jim").show();
             $(".jim1").css("opacity","1")
  });
  $(".jim1").mouseleave(function() {
             $(".jim").hide();
             $(".jim1").css("opacity","2")
  });
}); 


$(document).ready(function() {
  $(".good1").mouseenter(function() {
             $(".good").show();
             $(".good1").css("opacity","1")
  });
  $(".good1").mouseleave(function() {
             $(".good").hide();
             $(".good1").css("opacity","2")
  });
}); 

$(document).ready(function() {
  $(".calc1").mouseenter(function() {
             $(".calc").show();
             $(".calc1").css("opacity","0.4")
  });
  $(".calc1").mouseleave(function() {
             $(".calc").hide();
             $(".calc1").css("opacity","2")
  });
}); 

$(document).ready(function() {
  $(".burn1").mouseenter(function() {
             $(".burn").show();
             $(".burn1").css("opacity","1")
  });
  $(".burn1").mouseleave(function() {
             $(".burn").hide();
             $(".burn1").css("opacity","2")
  });
}); 




$(document).ready(function(){
  $("form#form").submit(function(event){
    // event.preventDefault();
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("textarea#subject").val();
    if (name && email){
      alert (name + ", we have received your message. Thank you for considering us. We shall respond as soon as possible.Cheers!");
    }
    else {
      alert("Please enter your name and email!");
    }
    
  });

});