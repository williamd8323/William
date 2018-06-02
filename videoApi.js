var topic = prompt("What topic will you like to search?");
var urlS = "https://www.googleapis.com/youtube/v3/search?type=video&q="+topic+"&maxResults=10&part=snippet&order=date&key=AIzaSyCqeGoA38wPWEZ8ljIqww22ylTDmo8ksZM&id=25";
    $.ajax({
        url: urlS
    }).done(function(data){
            //let res = data.items;
            for(var i = 0; i < data.items.length; i++){
                let id = data.items[i].id.videoId;
                let videoUrl = `https://www.youtube.com/embed/${id}`;
                let channelTitle = data.items[i].snippet.channelTitle;
                let title = data.items[i].snippet.title;
                let description = data.items[i].snippet.description;
                // let title = "<h1>"+data.items[i].snippet.title+"</h1>";
                // let description = "<h2>"+data.items[i].snippet.description+"</h2>";
                // let vidUrl ="https://www.youtube.com/embed/" + data.items[i].id.videoId;
                // //var vid = "<iframe src="+vidUrl+"class='video'/>";
                // let channel = "<h3>"+data.items[i].snippet.channelTitle+"</h3>";
                // let div = "<div class='videoBox'>"+"<iframe width='100%' height='100%'; src=\""+vidUrl+"\" class='video' frameborder='0'></iframe>"
                // + title +"<br>"+ description+"<br>"+channel+"</div>";
                // $("#container").append(div);
// 
                let div = `<div id=${id} class='content'>
                <iframe id='innerVideo' class='innerContent' src=${videoUrl} frameborder=0/>
                <span id='description' class='innerContent'>${description}</span>
                <span id='channelTitle' class='innerContent'>${channelTitle}</span>
                </div>`;
                //let vid = `<iframe class='innerVideo' src=${videoUrl} frameborder=0/>`;
                $('#container').append(div);

                console.log(data);
                console.log(`${id},${channelTitle},${title},${description}`);
            }
    });

// $(document).ready(function(){
//  const url1 = "https://www.googleapis.com/youtube/v3/search?type=video&q=trump&maxResults=10&part=snippet&order=date&key=AIzaSyCqeGoA38wPWEZ8ljIqww22ylTDmo8ksZM&id=25";
//  const url2 = "https://newsapi.org/v1/articles?source=the-guardian-uk&apiKey=5c34eb5d123e4b2c94c3d682808a60f0&sortBy=latest";
//  $.ajax({
//     url: url1
//  }).done(function(data){
//     console.log(data);
//  });

//  //scnd call
//  $.ajax({
//     url: url2
//  }).done(function(data){
//     console.log(data);
//  });

// });
