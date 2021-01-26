var button;
var timeString;
var CatLife = new Audio('CatLife.mp3');
var fami = new Audio('famipop3.mp3');
var fruit = new Audio('fruitsparfait.mp3');
var oikakekko = new Audio('oikakekkokyahha.mp3');
var retro = new Audio('retrogamecenter.mp3');
var sanji = new Audio('sanjinooyatsu.mp3');
var CatLifeButton;
var famiButton;
var fruitButton;
var oikakekkoButton;
var retroButton;
var sanjiButton;
var ok;
var time;
var TimeOut;
var music;
function start(){
    CatLife.loop = true;
    fami.loop = true;
    fruit.loop = true;
    oikakekko.loop = true;
    retro.loop = true;
    sanji.loop = true;
    CatLifeButton = document.getElementById("CatLife");
    CatLifeButton.style.display = "none";
    famiButton = document.getElementById("fami");
    famiButton.style.display = "none";
    fruitButton = document.getElementById("fruit");
    fruitButton.style.display = "none";
    oikakekkoButton = document.getElementById("oikakekko");
    oikakekkoButton.style.display = "none";
    retroButton = document.getElementById("retro");
    retroButton.style.display = "none";
    sanjiButton = document.getElementById("sanji");
    sanjiButton.style.display = "none";
    ok = document.getElementById("ok");
    ok.style.display = "none";
    button = document.getElementById("div1");
    button.innerText = "ここを押して時間を設定して下さい。";
}
function pressed(){
    timeString =　window.prompt("アラームが鳴る時間を入力してください。\n例1) 0時10分→010\n例2)10時01分→1001");
    if(timeString == null){
        time = NaN;
    }
    else{
        time = parseInt(timeString);
    }
    console.log(time);
    if(0 <= time && time < 2360 && time == Math.round(time) && time - Math.floor(time / 100) * 100 < 60){
        if(time - (Math.floor(time / 100) * 100) < 10){
            document.getElementById("title").innerText ="次の" + Math.floor(time / 100) + "時" + "0" + (time - (Math.floor(time / 100) * 100)) + "分にアラームをセットしました。\nアラームの音を設定して下さい。";
        }
        else{
            document.getElementById("title").innerText = "次の" + Math.floor(time / 100) + "時" + (time - (Math.floor(time / 100) * 100)) + "分にアラームをセットしました。\nアラームの音を設定して下さい。";
        }
        setMusic();
        var now = new Date();
        var less_or_more;
        if(Math.floor(time / 100) >= now.getHours() && time - Math.floor(time / 100) * 100 > now.getMinutes()){
            less_or_more = 0;
        }
        else{
            less_or_more = -86400;
        }
        setTimeout(TimeOut, Math.abs(less_or_more - (Math.floor(time / 100) - now.getHours()) * 3600 + (time - Math.floor(time / 100) * 100 - now.getMinutes() - 1) * 60 + 60 - now.getSeconds()) * 1000);
    }
    else{
        document.getElementById("title").innerText = "エラーが発生しました。";
        button = document.getElementById("div1");
        button.innerText = "ここを押して時間を再設定して下さい。";
    }
}
function setMusic(){
    button.remove();
    CatLifeButton.style.display = "block";
    famiButton.style.display = "block";
    fruitButton.style.display = "block";
    oikakekkoButton.style.display = "block";
    retroButton.style.display = "block";
    sanjiButton.style.display = "block";
    ok.style.display = "block";
}
function CatLifePlay(){
    CatLife.play();
    fami.pause();
    fruit.pause();
    oikakekko.pause();
    retro.pause();
    sanji.pause();
    music = CatLife;
}
function famiPlay(){
    fami.play();
    CatLife.pause();
    fruit.pause();
    oikakekko.pause();
    retro.pause();
    sanji.pause();
    music = fami;
}
function fruitPlay(){
    fruit.play();
    CatLife.pause();
    fami.pause();
    oikakekko.pause();
    retro.pause();
    sanji.pause();
    music = fruit;
}
function oikakekkoPlay(){
    oikakekko.play();
    CatLife.pause();
    fami.pause();
    fruit.pause();
    retro.pause();
    sanji.pause();
    music = oikakekko;
}
function retroPlay(){
    retro.play();
    CatLife.pause();
    fami.pause();
    fruit.pause();
    oikakekko.pause();
    sanji.pause();
    music = retro;
}
function sanjiPlay(){
    sanji.play();
    CatLife.pause();
    fami.pause();
    fruit.pause();
    oikakekko.pause();
    retro.pause();
    music = sanji;
}
function okay(){
    CatLife.pause();
    fami.pause();
    fruit.pause();
    oikakekko.pause();
    retro.pause();
    sanji.pause();
    fami.currentTime = 0;
    fruit.currentTime = 0;
    oikakekko.currentTime = 0;
    retro.currentTime = 0;
    sanji.currentTime = 0;
    CatLife.play();
    CatLife.muted = true;
}
TimeOut = function(){
    CatLife.pause();
    CatLife.muted = false;
    music.currentTime = 0;
    music.play();
}