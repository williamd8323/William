
/*function getSources(){

    $.ajax({
        url: "https://newsapi.org/v1/articles?source=techcrunch&apiKey=5c34eb5d123e4b2c94c3d682808a60f0",
        success: function(results){
            var arts = results.articles;
            for(var i = 0; i< articles.length; i++){
                $("#container").append(articles[i].author+"<br>");
            }
        }
    });
}*/

$(document).ready(function(){
    $.ajax({
        url: "https://newsapi.org/v1/articles?source=the-guardian-uk&apiKey=5c34eb5d123e4b2c94c3d682808a60f0&sortBy=latest",
        sortBy: 'latest',
        success: function(results){
           console.log(results);
          for(var i = 0; i < results.articles.length; i++){
              //var holder = $("#container").append("<div></div>");
              var author = results.articles[i].author;
              var title = results.articles[i].title;
              var description = results.articles[i].description;
              var img = "<img src="+results.articles[i].urlToImage+"/>";
              /*
            
              holder.append("<h1>" +title+"</h1>");
              holder.append("<h2> by: " +author+"</h2>");
              holder.append("<h3>" +description+"</h3>");
              
              holder.css("background-image", 'results.articles[i].urlToImage');
              */
              $("#container").append("<div class='holder'>"+title+"<br>"+author+"<br>"+description+"<br>"+img+
              
                                    "</div>");

          }

          $(".holder").css("boder", "2px solid red");
        }
    });
});
