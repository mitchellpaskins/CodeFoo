// JavaScript Document
var colA = 0;
var colB = 0;
var colC = 0;
var colD = 0;
var colE = 0;
var colF = 0;
var colG = 0;
var redyellow = 0;
var a = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;
var f = 6;
var g = 7;
var switcheroo;
var thisCol;
var number;
var Columns = new Array();
var biggestColThreat;
var oldThreat = 0;
var finalThreat;

var letters = new Array;
letters[1] = 'A';
letters[2] = 'B';
letters[3] = 'C';
letters[4] = 'D';
letters[5] = 'E';
letters[6] = 'F';
letters[7] = 'G';
var win = 0;

function connect(col){
	$('#shield').css('z-index', '5');
	switch(col){
		case 'A':
		if(colA<6){
		redyellow++;
		switchCol(col);
			colA++;
			number = a.toString() + colA.toString();
			if(redyellow%2==1){
			$('#counters').append("<div id='a" + colA + "' class='a p7 yellowPlaced'></div>");
			moveCounter('a', colA);
			Columns[number] = 'y';
			checkBoxes(1, colA);
			}
			if(redyellow%2==0){
			$('#counters').append("<div id='a" + colA + "' class='a p7 redPlaced'></div>");
			moveCounter('a', colA);
			Columns[number] = 'r';
			checkBoxes(1, colA);
			}
		}else if(colA>=6){
			Columns[1] = 'f';
		}
		break;
		case 'B':
		if(colB<6){
		redyellow++;
		switchCol(col);
			colB++;
			number = b.toString() + colB.toString();
			if(redyellow%2==1){
			$('#counters').append("<div id='b" + colB + "' class='b p7 yellowPlaced'></div>");
			moveCounter('b', colB);
			Columns[number] = 'y';
			checkBoxes(2, colB);
			}
			if(redyellow%2==0){
			$('#counters').append("<div id='b" + colB + "' class='b p7 redPlaced'></div>");
			moveCounter('b', colB);
			Columns[number] = 'r';
			checkBoxes(2, colB);
			}
		}else if(colB>=6){
			Columns[2] = 'f';
		}
		break;
		case 'C':
		if(colC<6){
		redyellow++;
		switchCol(col);
			colC++;
			number = c.toString() + colC.toString();
			if(redyellow%2==1){
			$('#counters').append("<div id='c" + colC + "' class='c p7 yellowPlaced'></div>");
			moveCounter('c', colC);
			Columns[number] = 'y';
			checkBoxes(3, colC);
			}
			if(redyellow%2==0){
			$('#counters').append("<div id='c" + colC + "' class='c p7 redPlaced'></div>");
			moveCounter('c', colC);
			Columns[number] = 'r';
			checkBoxes(3, colC);
			}else if(colC>=6){
			Columns[3] = 'f';
		}
		}
		break;
		case 'D':
		if(colD<6){
		redyellow++;
		switchCol(col);
			colD++;
			number = d.toString() + colD.toString();
			if(redyellow%2==1){
			$('#counters').append("<div id='d" + colD + "' class='d p7 yellowPlaced'></div>");
			moveCounter('d', colD);
			Columns[number] = 'y';
			checkBoxes(4, colD);
			}
			if(redyellow%2==0){
			$('#counters').append("<div id='d" + colD + "' class='d p7 redPlaced'></div>");
			moveCounter('d', colD);
			Columns[number] = 'r';
			checkBoxes(4, colD);
			}
		}else if(colD>=6){
			Columns[4] = 'f';
		}
		break;
		case 'E':
		if(colE<6){
		redyellow++;
		switchCol(col);
			colE++;
			number = e.toString() + colE.toString();
			if(redyellow%2==1){
			$('#counters').append("<div id='e" + colE + "' class='e p7 yellowPlaced'></div>");
			moveCounter('e', colE);
			Columns[number] = 'y';
			checkBoxes(5, colE);
			}
			if(redyellow%2==0){
			$('#counters').append("<div id='e" + colE + "' class='e p7 redPlaced'></div>");
			moveCounter('e', colE);
			Columns[number] = 'r';
			checkBoxes(5, colE);
			}
		}else if(colE>=6){
			Columns[5] = 'f';
		}
		break;
		case 'F':
		if(colF<6){
		redyellow++;
		switchCol(col);
			colF++;
			number = f.toString() + colF.toString();
			if(redyellow%2==1){
			$('#counters').append("<div id='f" + colF + "' class='f p7 yellowPlaced'></div>");
			moveCounter('f', colF);
			Columns[number] = 'y';
			checkBoxes(6, colF);
			}
			if(redyellow%2==0){
			$('#counters').append("<div id='f" + colF + "' class='f p7 redPlaced'></div>");
			moveCounter('f', colF);
			Columns[number] = 'r';
			checkBoxes(6, colF);
			}
		}else if(colF>=6){
			Columns[6] = 'f';
		}
		break;
		case 'G':
		if(colG<6){
		redyellow++;
		switchCol(col);
			colG++;
			number = g.toString() + colG.toString();
			if(redyellow%2==1){
			$('#counters').append("<div id='g" + colG + "' class='g p7 yellowPlaced'></div>");
			moveCounter('g', colG);
			Columns[number] = 'y';
			checkBoxes(7, colG);
			}
			if(redyellow%2==0){
			$('#counters').append("<div id='g" + colG + "' class='g p7 redPlaced'></div>");
			moveCounter('g', colG);
			Columns[number] = 'r';
			checkBoxes(7, colG);
			}
		}else if(colG>=6){
			Columns[7] = 'f';
		}
		break;
	}
		if(redyellow%2==1 && win==0){
			setTimeout(function() {brain();},1000);
		}
		clearTopRow();
}

function moveCounter(x, y){
	var xstring = x.toString();
	var ystring = y.toString();
	var yby100 = 600-(y*100);
	var y100string = yby100.toString();
	$('#'+xstring + ystring).animate({
   	top: y100string,
  	}, 2*yby100, function() {
  	// Animation complete.
  	});
}

function checkBoxes(x, y) {
	checkThisRow(x, y);
	checkThisCol(x, y);
	checkThisTLBR(x, y);
	checkThisBLTR(x, y);
}

function winner(){
	$('#shield').css('z-index', '-5');
	$('#winFrame').css('opacity', '0');
	$('#winimg').css('opacity', '0');
	$('#winFrame').css('z-index', '4');
	$('#winimg').css('z-index', '6');
	$('#winFrame').animate({
   	opacity: 0.8,
  	}, 1000, function() {
  	// Animation complete.
  	});
	$('#winimg').animate({
   	opacity: 1,
  	}, 1000, function() {
  	// Animation complete.
  	});
}

function lose(){
	$('#shield').css('z-index', '-5');
	$('#loseFrame').css('opacity', '0');
	$('#loseimg').css('opacity', '0');
	$('#loseFrame').css('z-index', '4');
	$('#loseimg').css('z-index', '6');
	$('#loseFrame').animate({
   	opacity: 0.8,
  	}, 1000, function() {
  	// Animation complete.
  	});
	$('#loseimg').animate({
   	opacity: 1,
  	}, 1000, function() {
  	// Animation complete.
  	});
}

function checkThisCol(x, y){
	var thisCounter = x.toString() + y.toString();
	var counterColour = Columns[thisCounter];
	var nextCounter;
	var checkCol = 1;
	var newX = x;
	var newY = y;
	do{
		newY = newY - 1;
		nextCounter = newX.toString()+newY.toString();
		if(Columns[nextCounter]==counterColour){
			checkCol++;
			if (checkCol==4){
					if(counterColour=='y'){
						winner();
					} else if (counterColour=='r'){
						lose();
					}
					win=1;
				}
			}
		else {
			newY=0;
		}
	}while(newY>0)
	checkCol = 0;
	
}

function checkThisTLBR(x, y){
	var thisCounter = x.toString() + y.toString();
	var counterColour = Columns[thisCounter];
	var nextCounter;
	var checkD1 = 1;
	var newX = x;
	var newY = y;
	do{
		newX = newX-1;
		newY = newY+1;
		nextCounter = newX.toString()+newY.toString();
		if(Columns[nextCounter]==counterColour){
			checkD1++;
			if (checkD1==4){
					if(counterColour=='y'){
						winner();
					} else if (counterColour=='r'){
						lose();
					}
					win=1;
					
				}
			}
		else {
			newX=0;
		}
	}while(newX>0 && newY<7)
	newX = x;
	newY = y;
	do{
		newX = newX+1;
		newY = newY-1;
		nextCounter = newX.toString()+newY.toString();
		if(Columns[nextCounter]==counterColour){
			checkD1++;
			if (checkD1==4){
					if(counterColour=='y'){
						winner();
					} else if (counterColour=='r'){
						lose();
					}
					win=1;
					
				}
			}
		else {
			newX=8;
		}
	}while(newX<8 && newY>0)
	checkD1 = 0;
}

function checkThisBLTR(x, y){
	var thisCounter = x.toString() + y.toString();
	var counterColour = Columns[thisCounter];
	var nextCounter;
	var checkD = 1;
	var newX = x;
	var newY = y;
	do{
		newX = newX-1;
		newY = newY-1;
		nextCounter = newX.toString()+newY.toString();
		if(Columns[nextCounter]==counterColour){
			checkD++;
			if (checkD==4){
					if(counterColour=='y'){
						winner();
					} else if (counterColour=='r'){
						lose();
					}
					win=1;
					
				}
			}
		else {
			newX=0;
		}
	}while(newX>0 && newY>0)
	newX = x;
	newY = y;
	do{
		newX = newX+1;
		newY = newY+1;
		nextCounter = newX.toString()+newY.toString();
		if(Columns[nextCounter]==counterColour){
			checkD++;
			if (checkD==4){
					if(counterColour=='y'){
						winner();
					} else if (counterColour=='r'){
						lose();
					}
					win=1;
					
				}
			}
		else {
			newX=8;
		}
	}while(newX<8 && newY<7)
	checkD = 0;
}

function checkThisRow(x, y){
	var thisCounter = x.toString() + y.toString();
	var counterColour = Columns[thisCounter];
	var nextCounter;
	var checkRow = 1;
	var newX = x;
	var newY = y;
	do{
		newX = newX-1;
		nextCounter = newX.toString()+newY.toString();
		if(Columns[nextCounter]==counterColour){
			checkRow++;
			if (checkRow==4){
					if(counterColour=='y'){
						winner();
					} else if (counterColour=='r'){
						lose();
					}
					win=1;
					
				}
			}
		else {
			newX=0;
		}
		}while(newX>0)
	newX = x;
	do{
		newX = newX+1;
		nextCounter = newX.toString()+newY.toString();
		if(Columns[nextCounter]==counterColour){
			checkRow++;
			if (checkRow==4){
					if(counterColour=='y'){
						winner();
					} else if (counterColour=='r'){
						lose();
					}
					win=1;
					
				}
			}
		else {
			newX=8;
		}
	}while(newX<8)
	checkRow = 0;
	
}

function showEmpty(col) {	
	switcheroo = '#e' + col;
		if(redyellow%2==0){
		$(switcheroo).addClass('selected1');
	}
		if(redyellow%2==1){
		$(switcheroo).addClass('selected0');
	}
}

function hideEmpty(col) {
	switcheroo = '#e' + col;
		if(redyellow%2==0){
		$(switcheroo).removeClass('selected1');
}
		if(redyellow%2==1){
		$(switcheroo).removeClass('selected0');
}
}

function switchCol(col) {
	
	switcheroo = '#e' + col;
		if(redyellow%2==1){
			$(switcheroo).removeClass('selected1');
			$(switcheroo).addClass('selected0');
		}
		if(redyellow%2==0){
			$(switcheroo).removeClass('selected0');
			$(switcheroo).addClass('selected1');
}
}

function brain(){
	num=10;
	var emptyA=0;
	var emptyB=0;
	var emptyC=0;
	var emptyD=0;
	var emptyE=0;
	var emptyF=0;
	var emptyG=0;
	do{
		num++;
		if(Columns[num]!='y' && Columns[num]!='r'){
			checkSpace(1, num-10);
		}
	}while(Columns[num]!=null)
	emptyA = num;
	
	num=20;
	do{
	num++;
	if(Columns[num]!='y' && Columns[num]!='r'){
		checkSpace(2, num-20);
	}
	}while(Columns[num]!=null)
	emptyB = num;
	num=30;
	do{
	num++;
	if(Columns[num]!='y' && Columns[num]!='r'){
		checkSpace(3, num-30);
	}
	}while(Columns[num]!=null)
	emptyC = num;
	num=40;
	do{
	num++;
	if(Columns[num]!='y' && Columns[num]!='r'){
		checkSpace(4, num-40);
	}
	}while(Columns[num]!=null)
	emptyD = num;
	num=50;
	do{
	num++;
	if(Columns[num]!='y' && Columns[num]!='r'){
		checkSpace(5, num-50);
	}
	}while(Columns[num]!=null)
	emptyE = num;
	num=60;
	do{
	num++;
	if(Columns[num]!='y' && Columns[num]!='r'){
		checkSpace(6, num-60);
	}
	}while(Columns[num]!=null)
	emptyF = num;
	num=70;
	do{
	num++;
	if(Columns[num]!='y' && Columns[num]!='r'){
		checkSpace(7, num-70);
	}
	}while(Columns[num]!=null)
	emptyG = num;
	
	if(finalThreat==1){
		connect('A');
	}else if(finalThreat==2){
		connect('B');
	}else if(finalThreat==3){
		connect('C');
	}else if(finalThreat==4){
		connect('D');
	}else if(finalThreat==5){
		connect('E');
	}else if(finalThreat==6){
		connect('F');
	}else if(finalThreat==7){
		connect('G');
	}else if(finalThreat==0){
		var loop=0;
		do{
			var check1;
			do{
				finalThreat = Math.ceil(Math.random()*7);
			}while(Columns[finalThreat]=='f')
			numa= finalThreat * 10;
			num= finalThreat * 10;
			do{
				num++;
				check1 = num-numa;
			}while(Columns[num]!=null && check1<7)
			var check = num-numa;
			var lookup = checkUp(finalThreat, check);
			loop++;
			/*if(loop>10){
				var empty=9;
				for(thisloop=1; thisloop<8; thisloop++){
					if(Columns[thisloop]!='f'){
						var loopnum=thisloop*10;
						var loopnuma=thisloop*10;
						var checkloop = 0;
						var checkloop1 = 0;
							do{
								loopnum++;
								checkloop1 = loopnum-loopnuma;
							}while(Columns[loopnum]!=null && checkloop1<7);
						checkloop=loopnum-lupnuma;
						var looplookup = checkUp(thisloop, checkloop);
						if(looplookup!=1){
							empty=thisloop;
						}
					}
				}
					if(empty==9){
						alert('oooh');
						} else {
						finalThreat=empty;
						}
			}*/
		}while(lookup==1)
			connect(letters[finalThreat]);
	}
	//alert(finalThreat);
	oldThreat = 0;
	
	$('#shield').css('z-index', '-5');
	//alert(emptyA + " " + emptyB + " " + emptyC + " " + emptyD + " " + emptyE + " " + emptyF + " " + emptyG);
}

function checkSpace(x, y){
		var lookup = checkUp(x, y);
		var row = rowThreat(x, y);
		var col = colThreat(x, y);
		var tlbr = tlbrThreat(x, y);
		var bltr = bltrThreat(x, y);
		var letter = letters[x];
		var thisThreat = 0;
	
		var counterPlace = x.toString()+y.toString();
		var winChance = 0;
	
	
/*	$('#'+letter+'y').html(counterPlace);
	$('#'+letter+'RowThreat').html(row);
$('#'+letter+'ColThreat').html(col);
	$('#'+letter+'TLBRThreat').html(tlbr);
	$('#'+letter+'BLTRThreat').html(bltr);
	*/
			if(y<7){
	
	
				
				if(row==5 || col==5 || tlbr==5 || bltr==5){
					biggestColwin = x;
					winChance=100;
				} 
				
				 if (col==1 || row ==3 || tlbr==1 || bltr==1){
					biggestColThreat = x;
					thisThreat=90;
				} else if(lookup==1){
				thisThreat=50;
				biggestColThreat = x;
				} else if(row==2){
					biggestColThreat = x;
					thisThreat=80;
				} else {
					biggestColThreat = 0;
					thisThreat=70;
				}
				
				if(winChance==100){
					finalThreat = biggestColwin;
					biggestColwin = 0;
				} else if(thisThreat>oldThreat){
					finalThreat = biggestColThreat;
					oldThreat=thisThreat;
				}
				//alert(biggestColThreat, finalThreat);
			}
		

}

function checkUp(x, y){
	var newY = y+1;
	var checkrow = rowThreat(x, newY);
	var checktlbr = tlbrThreat(x, newY);
	var checkbltr = bltrThreat(x, newY);
	if(checkrow==3 || checktlbr==1 || checkbltr==1){
		return 1;
	}
	else return 0;
}

function rowThreat(x, y){
	var nextCounter;
	var checkRow = 0;
	var checkRed = 0;
	var checkRow2 = 0;
	var checkRed2 = 0;
	var newX = x-1;
	var newY = y;
	var loopCount = 0;
	var stasisRow = 0;
	var stasisRed = 0;
	if(newX >0){
	do{
		nextCounter = newX.toString()+newY.toString();
		if(Columns[nextCounter]=='y'){
			if(checkRed==0){
			checkRow++;
			}
			}else if(Columns[nextCounter]=='r'){
			if(checkRow==0){
			checkRed++;
			}
			}else{
			newX=0;
			}
		newX = newX-1;
		loopCount++;
		}while(newX>0 && loopCount<3)
		
	}
	newX = x+1;
	loopCount = 0;
	if(newX<8){
	do{
		nextCounter = newX.toString()+newY.toString();
		if(Columns[nextCounter]=='y'){
			if(checkRed2==0){
			checkRow++;
			checkRow2++;
			}
			}else if(Columns[nextCounter]=='r'){
			if(checkRow2==0){
			checkRed++;
			checkRed2++;
			}
			}else {
			newX = 8;
			}
		newX = newX+1;
		loopCount++;
	}while(newX<8 && loopCount<3)
	}
	if(checkRow>=3){
	return 3;
	}else if(checkRow==2 && x>2 && x<6 ){
	return 2;
	}else if(checkRed>2){
	return 5;
	}else {
	return 0;
	}
}

function colThreat(x, y){
	var nextCounter;
	var checkCol = 0;
	var checkRed = 0;
	var newX = x;
	var newY = y-1;
	var loopCount = 0;
	do{
		nextCounter = newX.toString()+newY.toString();
		if(Columns[nextCounter]=='y'){
			checkCol++;
			}else if (Columns[nextCounter]=='r'){
			checkRed++;
			}
		newY = newY - 1;
		loopCount++;
	}while(newY>0 && loopCount<3)
	if(checkCol>2){
	return 1;
	}else if(checkRed==3){
	return 5;
	}else {
	return 0;
	}
}

function tlbrThreat(x, y){
	var nextCounter;
	var checkRed = 0;
	var checkD = 0;
	var checkRed2 = 0;
	var checkD2 = 0;
	var loopCount = 0;
	newX = x+1;
	newY = y-1;
	do{
		nextCounter = newX.toString()+newY.toString();
		if(Columns[nextCounter]=='y'){
			if(checkRed==0){
			checkD++;
			}
			}else if (Columns[nextCounter]=='r'){
			if(checkD==0){
			checkRed++;
			}
			}else {
			newX = 8;
			}
		newX = newX+1;
		newY = newY-1;
		loopCount++;
	}while(newX<8 && newY>0 && loopCount<3)
	
	if((x+checkD)>3 || (x+checkRed)>3){
	loopCount = 0;
	var newX = x-1;
	var newY = y+1;
	do{
		nextCounter = newX.toString()+newY.toString();
		if(Columns[nextCounter]=='y'){
			if(checkRed2==0){
			checkD++;
			checkD2++;
			}
			}else if (Columns[nextCounter]=='r'){
			if(checkD2==0){
				checkRed++;
				checkRed2++;
			}
			}else {
			newX = 0;
			}
		newX = newX-1;
		newY = newY+1;
		loopCount++;
	}while(newX>0 && newY<7 && loopCount<3)
	if(checkD>2){
	return 1;
	}else if(checkRed>2){
	return 5;
	}else{
	return 0;
	}
	}else{ 
	return 0;}
}

function bltrThreat(x, y){
	var nextCounter;
	var checkRed = 0;
	var checkRed2 = 0;
	var checkD = 0;
	var checkD2 = 0;
	var newX = x-1;
	var newY = y-1;
	var loopCount = 0;
	do{
		nextCounter = newX.toString()+newY.toString();
		if(Columns[nextCounter]=='y'){
			if(checkRed==0){
			checkD++;
			}
			}else if (Columns[nextCounter]=='r'){
				if(checkD==0){
				checkRed++;
				}
			}else{
				newX = 0;
			}
		newX = newX-1;
		newY = newY-1;
		loopCount++;
	}while(newX>0 && newY>0 && loopCount<3)
	if((x-checkD)<5 || (x-checkRed)<5){
	newX = x+1;
	newY = y+1;
	loopCount = 0;
	do{
		nextCounter = newX.toString()+newY.toString();
		if(Columns[nextCounter]=='y'){
			if(checkRed2==0){
			checkD++;
			}
			}else if (Columns[nextCounter]=='r'){
			if(checkD2==0){
			checkRed++;
			}
			}else{
			newX = 8;
			}
		newX = newX+1;
		newY = newY+1;
		loopCount++;
	}while(newX<8 && newY<7 && loopCount<3)
	if(checkD>2){
	return 1;
	}else if(checkRed>2){
	return 5;
	}else{
	return 0;
	}
	} else{ return 0;}
}

function clearCounters() {
	win=0;
	$('#winFrame').css('z-index', '-4');
	$('#loseFrame').css('z-index', '-4');
	$('#winimg').css('z-index', '-6');
	$('#loseimg').css('z-index', '-6');
	$('#counters').empty();
	clearTopRow();
	colA = 0;
	colB = 0;
	colC = 0;
	colD = 0;
	colE = 0;
	colF = 0;
	colG = 0;
	Columns.length=0;
	if(redyellow%2==1){
		redyellow++;
	}
}

function clearTopRow(){
	$('#eA').removeClass('selected1');
	$('#eA').removeClass('selected0');
	$('#eB').removeClass('selected1');
	$('#eB').removeClass('selected0');
	$('#eC').removeClass('selected1');
	$('#eC').removeClass('selected0');
	$('#eD').removeClass('selected1');
	$('#eD').removeClass('selected0');
	$('#eE').removeClass('selected1');
	$('#eE').removeClass('selected0');
	$('#eF').removeClass('selected1');
	$('#eF').removeClass('selected0');
	$('#eG').removeClass('selected1');
	$('#eG').removeClass('selected0');
}