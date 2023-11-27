var main = document.getElementById('textbox');
var input = document.getElementById('inputText');
var button = document.getElementById('button');
var latlong = document.getElementById('latlong');
var returned = document.getElementById('returned');
var city = "miami";
var latitude = ['','','','','','','','','',''];
var longitude = ['','','','','','','','','',''];
var clouds = ""

function getApiBrewery(city){
    var requestUrl = 'https://api.openbrewerydb.org/v1/breweries?by_city='+city+'&per_page=10';
    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data)
        for(var i = 0 ; i < 10 ; i++){
            latitude[i] = data[i].latitude;
            longitude[i] = data[i].longitude;
        }
;    })
}

function getApiWeather(x,y){
    var requestUrl = 'https://www.7timer.info/bin/astro.php?lon='+x+'&lat='+y+'&ac=0&unit=metric&output=json&tzshift=0';
    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data)
        clouds = data.dataseries[0].cloudcover;
;    })
}

    
button.addEventListener("click",function(){
    var info = input.value;
    getApiBrewery(info);
    var breweryNumber = latlong.value;
    setTimeout(function(){
    var lon = longitude[breweryNumber];
    var lat = latitude[breweryNumber];
        console.log(lon)
        console.log(lat)
        setTimeout(function() {
        getApiWeather(lon,lat);
        console.log(lon)
        console.log(lat)
   
        //your code to be executed after 1 second
        console.log(clouds)
        console.log(latitude[breweryNumber]) // problem is getapi cannot catch up to button because it runs faster than the fetch.
        console.log(longitude[breweryNumber])
      }, 1000)
    },100)

  
})