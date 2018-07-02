document.title = "Love Letter";
var finish = false; //finsihGame
var winner = 2; //either player0 or player1 will be the winner
//initialize
var card = [1,1,1,1,1,2,2,3,3,4,4,5,5,6,7,8];
var ran = Math.floor(Math.random()*16);
var user = card[ran];
card[ran] = 0;
while (card[ran] == 0) {
  ran = Math.floor(Math.random()*16);
}
var opponent = card[ran];
card[ran] = 0;
var now = Math.floor(Math.random()*2);
//startPlaying
var i;
var nowCard;
var protect = 0;
for (i = 2; i <= 14 && finsih == false; i++) {
  while (card[ran] == 0) {
    ran = Math.floor(Math.random()*16);
  }
  nowCard = card[ran];
  card[ran] = 0;
  now = (now+1)%2; //next player
  if (now == 0) {
    if () {
      nowCard = user;
    }
    usingCard(nowCard, 0);
  } else {
    if () {
      nowCard = opponent;
    }
    usingCard(nowCard, 0);
  }
}
function usingCard(n, now) {
  if (n == 1 && protect == 0) {
    var guess = ;
    if (now == 0) {
      if (guess == opponent) {
        finish = true;
        winner = 0;
        return;
      } else {
        return;
      }
    } else {
      if (guess == use) {
        finish = true;
        winner = 1;
        return;
      } else {
        return;
      }
    }
  } else if (n == 2 && protect == 0) {
    show()
  } else if (n == 3 && protect == 0) {
    if (user > opponent) {
      finish = true;
      winner = 0;
      return;
    } else if (user == opponent) {
      return;
    } else {
      finish = true;
      winner = 1;
      return;
    }
  } else if (n == 4) {
    protect = 1;
    return;
  } else if (n == 5) {
    while (card[ran] == 0) {
      ran = Math.floor(Math.random()*16);
    }
    nowCard = card[ran];
    card[ran] = 0;
    i++;
    if (now == 0) {
      opponent = nowCard;
    } else {
      user = nowCard;
    }
    return;
  } else if (n == 6 && protect == 0) {
    var temp = user;
    user = opponent;
    opponent = user;
    return;
  } else if (n == 7) {
    return;
  } else {
    finish = true;
    winner = (now+1)%2;
    return;
  }
  if (protect > 0) {
    protect = (protect+1)%3;
  }
}


