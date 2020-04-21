var keywords = 'coronavirus'
var date = new Date();
var today = date.getFullYear() +'-'+String(date.getMonth() + 1).padStart(2, '0')+'-'+String(date.getDate()).padStart(2, '0');

var url = 'http://newsapi.org/v2/everything?' +
    'q='+keywords+'&' +
    'from='+today+'&' +
    'sortBy=popularity&' +
    'apiKey=1a5272805c124dcc912fc353b5599c16';

$.getJSON(url,function(data){
    
    var html = '';
    var url, title, author, urlToImage, description = ' ';
    $(".news-area").html(html);
    for(i in data.articles){
        
        url = data.articles[i].url;
        title = data.articles[i].title;
        author = data.articles[i].author;
        urlToImage = data.articles[i].urlToImage;
        description = data.articles[i].description;
        
        html += '<div class="news-card"><div class="container"><a target="_blank" href="'+url+'"><div class="news-title"><h2>'+title+'</h2></div></a>';
        html += '<div class="news-author">'+author+'</div>';
        html += '<div class="news-image"><img src="'+urlToImage+'" alt="News Image"></div>';
        html += '<div class="news-description">'+description+'</div></div></div>';
    }
    $(".news-area").html(html);
    //console.log(today);
})