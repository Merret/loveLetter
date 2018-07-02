document.title = "Love Letter";
var card = [1,1,1,1,1,2,2,3,3,4,4,5,5,6,7,8];
var ran = Math.floor(Math.random()*16);
var user = card[ran];
card[ran] = 0;
while (card[ran] == 0) {
  ran = Math.floor(Math.random()*16);
}
var opponent = card[ran];
card[ran] = 0;
var first = Math.floor(Math.random()*2);
if ()
