var topic = prompt("Topic to search?");
$(function() {
        var params = {
            // Request parameters
            "q": topic,
            "offset": "0",
            "count": "10",
            "freshness": "week",
            "resolution": "720p",
            "SafeSearch": "strict",
            "pricing": "free"
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
                var div = video;
                $('#container').append(div);
           }
                console.log(data);
        })
    });


    // how to access each video content data.value[i]
    //access each video