let result1 = document.querySelector("span#result1");
let result2 = document.querySelector("span#result2");
let result3 = document.querySelector("span#result3");
let result4 = document.querySelector("span#result4");
let result5 = document.querySelector("span#result5");
let result6 = document.querySelector("span#result6");
let result7 =document.querySelector("span#result7");
let result8 =document.querySelector("span#result8");


let a = document.querySelector('div#cairo');
a.addEventListener('click', cairotenki);
let b = document.querySelector('div#moscow');
b.addEventListener('click', moscowtenki);
let c = document.querySelector('div#johannesburg');
c.addEventListener('click', johannesburgtenki);
let d = document.querySelector('div#beijing');
d.addEventListener('click', beijingtenki);
let e = document.querySelector('div#tokyo');
e.addEventListener('click', tokyotenki);
let f = document.querySelector('div#singapore');
f.addEventListener('click', singaporetenki);
let g = document.querySelector('div#sydney');
g.addEventListener('click', sydneytenki);
let h = document.querySelector('div#london');
h.addEventListener('click', londontenki);
let i = document.querySelector('div#paris');
i.addEventListener('click', paristenki);
let j = document.querySelector('div#riodejaneiro');
j.addEventListener('click', riodejaneirotenki);
let k = document.querySelector('div#newyork');
k.addEventListener('click', newyorktenki);
let l = document.querySelector('div#losangeles');
l.addEventListener('click', losangelestenki);

function cairotenki() {
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/360630.json";  
    axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}
function moscowtenki() {
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/524901.json";  
    axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}
function johannesburgtenki() {
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/993800.json";  
    axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}
function beijingtenki() {
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/1816670.json";  
    axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}
function tokyotenki() {
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/1850147.json";  
    axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}
function singaporetenki() {
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/1880252.json";  
    axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}
function sydneytenki() {
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/2147714.json";  
    axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}
function londontenki() {
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/2643743.json";  
    axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}
function paristenki() {
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/2968815.json";  
    axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}
function riodejaneirotenki() {
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/3451189.json";  
    axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish); 
}
function newyorktenki() {
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/5128581.json";  
    axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}
function losangelestenki() {
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/5368361.json";  
    axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}

function showResult(resp) {
    let data = resp.data;
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    let y =data.weather[0].description;
    let z;
    
    result2.textContent =data.name+"の天気";
    result3.textContent =data.weather[0].description;
    result4.textContent ="最高気温："+data.main.temp_max+"℃";
    result5.textContent ="最低気温："+data.main.temp_min+"℃";
    result6.textContent ="湿度："+data.main.humidity+"%";
    result7.textContent = "気圧："+data.main.pressure+"hPa";
    result8.textContent ="風速："+data.wind.speed+"m/s";
}
function showError(err) {
    console.log(err);
}
function finish() {
    console.log('Ajax 通信が終わりました');
}