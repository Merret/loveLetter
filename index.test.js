document.getElementById("p1").innerHTML = "Computer";
var card = [0, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8],
	hand = 0,
	newc = 0,
	leftcard = 16,
	handdisplay = "no card",
	newcdisplay = "no card";
var x = Math.floor((Math.random() * leftcard) + 1);
hand = card[x];
changecard();
leftcard--;
card.splice(x, 1);
getnewc();

function start() {
	card = [0, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8];
	hand = 0;
	newc = 0;
	leftcard = 16;
	handdisplay = "no card";
	newcdisplay = "no card";
	x = Math.floor((Math.random() * leftcard) + 1);
	hand = card[x];
	changecard();
	leftcard--;
	card.splice(x, 1);
}

function changecard() {
	switch (hand) {
		case 0:
			handdisplay = "no card";
			break;
		case 1:
			handdisplay = "衛兵(1)";
			break;
		case 2:
			handdisplay = "神父(2)";
			break;
		case 3:
			handdisplay = "男爵(3)";
			break;
		case 4:
			handdisplay = "侍女(4)";
			break;
		case 5:
			handdisplay = "王子(5)";
			break;
		case 6:
			handdisplay = "國王(6)";
			break;
		case 7:
			handdisplay = "伯爵夫人(7)";
			break;
		case 8:
			handdisplay = "公主(8)";
			break;
	}
	document.getElementById("handdisplay").innerHTML = handdisplay;
}

function changenewc() {
	switch (newc) {
		case 0:
			newcdisplay = "no card";
			break;
		case 1:
			newcdisplay = "衛兵(1)";
			break;
		case 2:
			newcdisplay = "神父(2)";
			break;
		case 3:
			newcdisplay = "男爵(3)";
			break;
		case 4:
			newcdisplay = "侍女(4)";
			break;
		case 5:
			newcdisplay = "王子(5)";
			break;
		case 6:
			newcdisplay = "國王(6)";
			break;
		case 7:
			newcdisplay = "伯爵夫人(7)";
			break;
		case 8:
			newcdisplay = "公主(8)";
			break;
	}
	document.getElementById("newcdisplay").innerHTML = newcdisplay;
}

function drophand() {
	switch (hand) {
		case 0:

			break;
		case 1:
			info = "選擇一位玩家並猜他的牌";
			drop = "衛兵(1)";
			c = 1;
			card(1);
			break;
		case 2:
			info = "選擇一位玩家並看他的牌";
			drop = "神父(2)";
			c = 2;
			card(1);
			break;
		case 3:
			info = "選擇一位玩家並與他比手牌大小";
			drop = "男爵(3)";
			c = 3;
			card(1);
			break;
		case 4:
			info = "可以休息一回合";
			drop = "侍女(4)";
			c = 4;
			card(1);
			break;
		case 5:
			if (hand != 7) {
				info = "選擇一位玩家並棄置他的手牌";
				drop = "王子(5)";
				c = 5;
				card(1);
			} else {
				info = "你必須在有國王或王子時棄置伯爵夫人！";
				document.getElementById("showinfo").innerHTML = info;
				return;
			}
			break;
		case 6:
			if (hand != 7) {
				info = "選擇一位玩家並與他交換手牌";
				drop = "國王(6)";
				c = 6;
				card(1);
			} else {
				info = "你必須在有國王或王子時棄置伯爵夫人！";
				document.getElementById("showinfo").innerHTML = info;
				return;
			}
			break;
		case 7:
			info = "沒事發生";
			drop = "伯爵夫人(7)";
			break;
		case 8:
			info = "你輸了";
			drop = "公主(8)";
			c = 8;
			card(1);
			break;
	}
	document.getElementById("showinfo").innerHTML = info;
	document.getElementById("drop").innerHTML = drop;
	hand = newc;
	changecard();
	newc = 0;
	changenewc();
}

function dropnewc() {
	switch (newc) {
		case 0:

			break;
		case 1:
			info = "選擇一位玩家並猜他的牌";
			drop = "衛兵(1)";
			c = 1;
			card(1);
			break;
		case 2:
			info = "選擇一位玩家並看他的牌";
			drop = "神父(2)";
			c = 2;
			card(1);
			break;
		case 3:
			info = "選擇一位玩家並與他比手牌大小";
			drop = "男爵(3)";
			c = 3;
			card(1);
			break;
		case 4:
			info = "可以休息一回合";
			drop = "侍女(4)";
			c = 4;
			card(1);
			break;
		case 5:
			if (hand != 7) {
				info = "選擇一位玩家並棄置他的手牌";
				drop = "王子(5)";
				c = 5;
				card(1);
			} else {
				info = "你必須在有國王或王子時棄置伯爵夫人！";
				document.getElementById("showinfo").innerHTML = info;
				return;
			}
			break;
		case 6:
			if (hand != 7) {
				info = "選擇一位玩家並與他交換手牌";
				drop = "國王(6)";
				c = 6;
				card(1);
			} else {
				info = "你必須在有國王或王子時棄置伯爵夫人！";
				document.getElementById("showinfo").innerHTML = info;
				return;
			}
			break;
		case 7:
			info = "沒事發生";
			drop = "伯爵夫人(7)";
			break;
		case 8:
			info = "你輸了";
			drop = "公主(8)";
			c = 8;
			card(1);
			break;
	}
	document.getElementById("showinfo").innerHTML = info;
	document.getElementById("drop").innerHTML = drop;
	newc = 0;
	changenewc();
}

function getnewc() {
	x = Math.floor((Math.random() * leftcard) + 1);
	newc = card[x];
	leftcard--;
	card.splice(x, 1);
	changenewc();
}

function card(step) {
	if (step == 1) {
		switch (c) {
			case: 1

				break;
			case: 2

				break;
			case: 3

				break;
			case: 4

				break;
			case: 5

				break;
			case: 6

				break;
			case: 8

				break;
		}
	} else if (step == 2) {
		switch (c) {
			case: 1

				break;
			case: 2

				break;
			case: 3

				break;
			case: 4

				break;
			case: 5

				break;
			case: 6

				break;
			case: 8

				break;
		}
	} else {
		switch (c) {
			case: 1

				break;
			case: 2

				break;
			case: 3

				break;
			case: 4

				break;
			case: 5

				break;
			case: 6

				break;
			case: 8

				break;
		}
	}
}