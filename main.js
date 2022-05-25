document.getElementById('searchTaunton').addEventListener('click', GetWeather);

async function GetWeather(){
    document.getElementById('loader').innerHTML="<img src='Loading_icon.gif'>";
    document.getElementById('loader2').innerHTML="<img src='Loading_icon.gif'>";

    const result = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Taunton&appid=52475448b07cee255e82d46a986b3deb").then(result => result.json());

    if(result){
        document.getElementById('loader').innerHTML="<h4>" + result['weather'][0]['description'] + "</h4>";
        document.getElementById('loader2').innerHTML=`<img src= "http://openweathermap.org/img/wn/${result['weather'][0]['icon']}@4x.png">`;

        console.log(result);
    }
}



document.getElementById('search').addEventListener('click', searchWeather);

async function searchWeather(){
    var town = document.getElementById("data").value;
    document.getElementById("loader3").innerHTML="<img src='Loading_icon.gif'>";

    const result = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${town}&appid=52475448b07cee255e82d46a986b3deb`).then(result => result.json());

    if(result){
        document.getElementById("loader3").innerHTML=`<h4>${result['weather'][0]['description']}</h4>`;
        document.getElementById('loader4').innerHTML=`<img src= "http://openweathermap.org/img/wn/${result['weather'][0]['icon']}@4x.png">`;
    }
}