var topic = prompt("What topic will you like to search?");
var urlS = "https://www.googleapis.com/youtube/v3/search?type=video&q="+topic+"&maxResults=1&part=snippet&order=date&key=AIzaSyCqeGoA38wPWEZ8ljIqww22ylTDmo8ksZM&id=25";
    $.ajax({
        url: urlS
    }).done(function(data){
            //let res = data.items;
            for(var i = 0; i < data.items.length; i++){
                let title = "<h1>"+data.items[i].snippet.title+"</h1>";
                let description = "<h2>"+data.items[i].snippet.description+"</h2>";
                let vidUrl ="https://www.youtube.com/embed/" + data.items[i].id.videoId;
                //var vid = "<iframe src="+vidUrl+"class='video'/>";
                let channel = "<h3>"+data.items[i].snippet.channelTitle+"</h3>";
                let div = "<div class='videoBox'>"+"<iframe width='100%' height='100%'; src=\""+vidUrl+"\" class='video' frameborder='0'></iframe>"
                + title +"<br>"+ description+"<br>"+channel+"</div>";
                $("#container").append(div);
                console.log(data);
            }
    });
