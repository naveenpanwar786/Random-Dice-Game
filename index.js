randomNumber1=Math.floor(Math.random()*6)+1;
randomImageSource1="dice"+randomNumber1+".jpg";
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);

randomNumber2=Math.floor(Math.random()*6)+1;
randomImageSource2="dice"+randomNumber2+".jpg";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
     document.querySelector("h1").innerHTML="💪Player 1 Wins...!";
}else if(randomNumber1<randomNumber2){
     document.querySelector("h1").innerHTML="💪Player 2 Wins...!";
}else{
     document.querySelector("h1").innerHTML="Draw...!🤷";     
}
