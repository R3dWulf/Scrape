$(document).ready(function(){
    $('#delete').on('click', "p", function(){
      console.log('()()()()Hi');
      // var thisId = $("#delete").attr("data-id");
      // $.ajax({
      //   url : '/notes/' + thisId,
      //   method : 'post', //Delete does not work with IE7 or IE8, would have to use POST
      //   error: function(error){
      //     console.log(error);
      //   },
      //   success : function(){
      //     console.log("note deleted");
      //   }
      // });
    });
});
