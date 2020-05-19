 $("#addBurger").on("click", function(event){
    event.preventDefault(); 
    var newBurger = {
        Burger_name: $("#burgersName").val().trim()
     }
     

     $.ajax({
         url: "/api/burgers",
         method: "POST",
          data : newBurger
     }).then(function(data){
         location.reload();
     })
     
 })



 $(".eatburger").on("click", function(){
     var id= $(this).attr("data-id")
     
     $.ajax({
         url: "/api/burgers/"+ id,
         method: "PUT"

     }).then(function(data){
         location.reload();
     })


 })
