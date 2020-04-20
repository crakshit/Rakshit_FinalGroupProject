var keywords = 'coronavirus, covid-19'
var date = new Date();
var today = date.getFullYear() +'-'+String(date.getMonth() + 1).padStart(2, '0')+'-'+String(date.getDate()).padStart(2, '0');

var url = 'http://newsapi.org/v2/everything?' +
    'q='+keywords+'&' +
    'from='+today+'&' +
    'sortBy=popularity&' +
    'apiKey=1a5272805c124dcc912fc353b5599c16';

$.getJSON(url,function(data){
    
    var html = '';
    $(".news-area").html(html);
    for(i in data.articles){
        html += '<div class="news-card"><div class="container"><a target="_blank" href="'+data.articles[i].url+'"><div class="news-title"><h2>'+data.articles[i].title+'</h2></div></a>';
        html += '<div class="news-author">'+data.articles[i].author+'</div>';
        html += '<div class="news-image"><img src="'+data.articles[i].urlToImage+'" alt="News Image"></div>';
        html += '<div class="news-description">'+data.articles[i].description+'</div></div></div>';
    }
    $(".news-area").html(html);
    //console.log(today);
})