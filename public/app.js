$(document).ready(function(){
    $.ajax({
      url : "/scrape",
      method: "get",
      success : function(data){
        console.log(data);
      }
    });
});

$("#paper").on('click', function(){
    $.ajax({
    method: "GET",
    url: "/articles",
    success : function(data){
        console.log("+++++++++", data);
        for (var i = 0; i < data.length; i++) {
           $("#scrape").append(
              '<div class="row">' +
                  '<div class="col-md-12">' +           
                      '<div class="panel-group">' +
                          '<div class="panel panel-primary">'+
                              '<div class="panel panel-heading">' + 
                              '<button id="openModal" data-id=" '+data[i]._id+' "class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" >Write Note</button>'+
                                  '<p>' + data[i].title + '</p>' +                          
                              '</div>' + 
                              '<div class="panel-body">' + 
                                  '<a href="' + data[i].link + '">' +  data[i].link + '</a>' +
                              '</div>' +
                          '<div>' +
                      '<div>' +
                  '<div>' +
              '<div>'
            );
        }
      }
  });
});



// When you click the savenote button
$(document).on("click", "#savenote", function() {
  // Grab the id associated with the article from the submit button
  var thisId = $("#openModal").attr("data-id");

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      // Value taken from title input
      title: $("#inputTitle").val(),
      // Value taken from note textarea
      body: $("#bodyinput").val()
    }
  })
    // With that done
    .done(function(data) {
      // Log the response
      console.log("()()()()", data);
      // Empty the notes section
      $("#notes").empty();
    });

  // Also, remove the values entered in the input and textarea for note entry
  $("#inputTitle").val("");
  $("#bodyinput").val("");
});

$('#getNotesButton').on('click', function(){
    //$('#scrape').hide();
    $('#scrape').remove();
    $.ajax({
      url: '/notes',
      method: 'get',
      success: function(data){
        console.log(data);
        for (var i = 0; i < data.length; i++) {
           $("#notes").append(
              '<div class="row">' +
                  '<div class="col-md-12">' +           
                      '<div class="panel-group">' +
                          '<div class="panel panel-primary">'+
                              '<div class="panel panel-heading">' +
                                  '<p>' + data[i].title + '</p>' +    //if onclick if added here, then getNotesButton will get the onclick attr not the delete button                    
                              '</div>' + 
                              '<div class="panel-body">' + 
                                  '<p>' +data[i].body + '</p>' +
                              '</div>' +
                          '<div>' +
                      '<div>' +
                  '<div>' +
              '<div>'
            );
        }
      }
    });
});


//Too many ajax calls, have to add button to index to delete all notes instead of individually 
$("#delete").on("click", function(){
    $.ajax({
      url :"/notes",
      method: "post",
      error: function(error){
        console.log(error);
      },
      success: function(){
        window.location.reload();
      }
    });
});




