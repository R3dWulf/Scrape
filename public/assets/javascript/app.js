$("#paper").on('click', function(){
    $.ajax({
    method: "GET",
    url: "/articles",
    success : function(data){
        console.log("+++++++++", data);
        for (var i = 0; i < data.length; i++) {
          //console.log("()()()()()()"+data[i]._id);
          // Display the apropos information on the page
          //$("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
          //console.log("()()()()"+data[i].title );
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



// Whenever someone clicks a p tag
// $("#openModal").on("click", function() {
//   // Empty the notes from the note section
//   // Save the id from the p tag
//   var thisId = $('#openModal').attr("data-id");
//   console.log("()()()()"+thisId);

// });

// When you click the savenote button
$(document).on("click", "#savenote", function() {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/notes",
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
      console.log(data);
      // Empty the notes section
      $("#notes").empty();
    });

  // Also, remove the values entered in the input and textarea for note entry
  $("#inputTitle").val("");
  $("#bodyinput").val("");
});
