var open=document.querySelector('.menu');
open.addEventListener('click',function(){
    open.style.transform="rotate(-90deg)";
    document.querySelector('aside').style.transition="1.30s";
    document.querySelector('aside').style.transform="translateX(0px)";
});
var close=document.querySelector('.navlogo');
close.addEventListener('click',function(){
    open.style.transform="rotate(180deg)";
    document.querySelector('aside').style.transition="1.30s";
    document.querySelector('aside').style.transform="translateX(-200px)";
});
document.querySelector('aside').addEventListener('click',()=>{
    open.style.transform="rotate(180deg)";
    document.querySelector('aside').style.transition="1.30s";
    document.querySelector('aside').style.transform="translateX(-200px)";
});
var scrol=document.querySelector('.onscroll');
window.addEventListener('scroll',function(){
    if(window.scrollY>=250)
    {
    scrol.style.backgroundColor="rgb(240, 205, 160)";
    scrol.style.transition="3.20s";
    scrol.style.transform="translateY(-10px)";
    document.querySelector('.logo').style.color="orange";
    // document.querySelector('a').style.color="black";
    }
    else
    {
    scrol.style.transform="translateY(-90px)";
    };
});