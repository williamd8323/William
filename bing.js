var topic = prompt("Topic to search?");
$(function() {
        var params = {
            // Request parameters
            "q": topic,
            "count": "10",
            "offset": "0",
            "count": "5"
        };
      
        $.ajax({
            url: "https://api.cognitive.microsoft.com/bing/v7.0/videos/search?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","608b3764a3124c98aad745e4a23b8301");
            },
            type: "GET"
        
            // Request body
           // data: "{body}",
        })
        .done(function(data) {
           for(var i = 0; i < data.value.length; i++){
                var video = data.value[i].embedHtml;
                var name = data.value[i].name;
                var div = "<div>"+video+name+"</div>";
                $('#container').append(div);
                console.log(data);
           }
        })
    });