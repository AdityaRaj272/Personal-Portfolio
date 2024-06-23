var N1 = Math.random();
var N2 = Math.random();
var Num1=(Math.floor(N1*6));
var Num2=(Math.floor(N2*6)+1);

var A=["Images/Dice1.png" ,"Images/Dice2.png" ,"Images/Dice3.png" ,"Images/Dice4.png" ,"Images/Dice5.png" ,"Images/Dice6.png" ];
var Pic1=A[Num1];

document.querySelector("img.Img1").setAttribute("src", Pic1);
document.querySelector("img.Img2").setAttribute("src", "Images/Dice"+Num2+".png");

if((Num1+1)>Num2){
    document.querySelector("div h1").textContent="Player1 Wins!!🥳";
}
else if((Num1+1)<Num2){
    document.querySelector("div h1").textContent="Player2 Wins!!🥳";
}
else {
    document.querySelector("div h1").textContent="It's a tie.";
}