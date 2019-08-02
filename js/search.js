$(document).ready(function () {
    var timeAvailable = 5

    $(".dropdown-trigger").dropdown({ hover: false });


});

    var issue = "immigration";
    var queryURL = "https://newsapi.org/v2/top-headlines?q=" + issue + "&apiKey=75c87a59f5664813b1ed4c28e98a2114";
    $.ajax({
        url: queryURL,
        method: "GET"
      })
       
        .then(function(response) {
  
         
          console.log(queryURL);
  
         
          console.log(response);
          for (var i = 0; i < 3; i++) { 
              var title = response.title[i];
               console.log(title); }

        });  
