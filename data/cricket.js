function ready() {

	new FastClick(document.body);

}
function doScore(theNum, thePlayer) {
	if (mode == "sub") {
		subtractScore(theNum, thePlayer);
	} else {
		addScore(theNum, thePlayer);
	}
}
var Anums = Array(20, 19, 18, 17, 16, 15, 25);
var mode = "add";


function addScore(theNum, thePlayer) {
	Oscore[thePlayer]["n" + theNum]++;
	var Nscore = Oscore[thePlayer]["n" + theNum];
	var imageID = thePlayer + "_i_" + theNum;

	var opp = (thePlayer == "p1") ? "p2" : "p1";
	var NscoreOpponent = Oscore[opp]["n" + theNum];


	if (Nscore > 3 && NscoreOpponent < 3) {
		Oscore[thePlayer].score += theNum;
		updateScores();
	} else {

		NscoreImg = Nscore;
		if (Nscore > 3) {
			NscoreImg = 3;
		}
		swapImage(imageID, "../images/checks" + NscoreImg + ".png");
	}
}

function subtractScore(theNum, thePlayer) {

	Oscore[thePlayer]["n" + theNum]--;
	if (Oscore[thePlayer]["n" + theNum] < 1) {
		Oscore[thePlayer]["n" + theNum] = 0;
	}

	var imageID = thePlayer + "_i_" + theNum;

	var Nscore = Oscore[thePlayer]["n" + theNum];
	if (Nscore < 0) {
		Nscore = 0;
	}

	if (Nscore > 2) {
		Oscore[thePlayer].score -= theNum;
		if (Oscore[thePlayer].score < 0) {
			Oscore[thePlayer].score = 0;
		}
		updateScores();
	} else {
		swapImage(imageID, "../images/checks0" + Nscore + ".png");
	}
}

function displayObject(returnedObject) {
	var retText = "";
	for (var prop in returnedObject) {
		retText += "<b>" + prop + "</b> : " + returnedObject[prop] + "<br>";
	}
	writeit(retText, "see");
}

function swapImage(theID, newImage) {
	var obj = document.getElementById(theID);
	obj.src = newImage;
}

function undo() {
	var last = AlastDo.pop();
	var Atemp = last.split(":");
	if (Atemp[1] == "score") {

	}
}

function updateScores() {

	writeit(Oscore.p1.score, "player1score");
	//writeit(Oscore.p1.score,"player1scoreTop");
	writeit(Oscore.p2.score, "player2score");
	//writeit(Oscore.p2.score,"player2scoreTop");

}

function writeit(text, id) {
	if (document.getElementById) {
		var wimpyDoc = document.getElementById(id);
		wimpyDoc.innerHTML = '';
		wimpyDoc.innerHTML = text;
	} else if (document.all) {
		var wimpyDoc = document.all[id];
		wimpyDoc.innerHTML = text;
	} else if (document.layers) {
		var wimpyDoc = document.layers[id];
		text2 = '<P CLASS="testclass">' + text + '</P>';
		wimpyDoc.document.open();
		wimpyDoc.document.write(text2);
		wimpyDoc.document.close();
	}
}


var AlastDo = new Array();

var Oscore = new Object();
Oscore.p1 = new Object();
Oscore.p1.n20 = 0;
Oscore.p1.n19 = 0;
Oscore.p1.n18 = 0;
Oscore.p1.n17 = 0;
Oscore.p1.n16 = 0;
Oscore.p1.n15 = 0;
Oscore.p1.n25 = 0;
Oscore.p1.score = 0;

Oscore.p2 = new Object();
Oscore.p2.n20 = 0;
Oscore.p2.n19 = 0;
Oscore.p2.n18 = 0;
Oscore.p2.n17 = 0;
Oscore.p2.n16 = 0;
Oscore.p2.n15 = 0;
Oscore.p2.n25 = 0;
Oscore.p2.score = 0;


