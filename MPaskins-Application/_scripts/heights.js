// JavaScript Document
var col;
window.onload = function startup(){
	var check = document.getElementById('col1');
	if(check){
	col = getTallest();
	setColHeights(col);
	}
	setOthers();
	var connect = document.getElementById('connectFrame');
	var vid = document.getElementById('video');
	if(connect || video){
		document.getElementById('frame').style.minWidth = '960px';
	}
}

window.onresize = function resize(){
	var check = document.getElementById('col1');
	if(check){
	setColHeights(col);
	}
}

function getTallest(){
	var col1 = $('#col1').height();
	var tall = col1;
	var col = 1;
	var col2 = $('#col2').height();
	if(col2>tall){
		tall = col2;
		col = 2;
	}
	var col3 = $('#col3').height();
	if(col3>tall){
		tall = col3
		col = 3;
	}
	return col;
}


function setColHeights(col){
	var border = $('#content').height();
	var top = $('#topRow').height();
	$('#mainSeg').height(border);
	var tall = $('#col'+col).height();
	$('#innerContent').height(tall+top+20);
	$('#whiteMidLeft').height(tall);
	$('#whiteMidRight').height(tall);
	$('#whiteRight').height(tall);
	if(col==1){
		$('#col2').height(tall);
		$('#col3').height(tall);
	}else if(col==2){
		$('#col1').height(tall);
		$('#col3').height(tall);
	}else if(col==3){
		$('#col1').height(tall);
		$('#col2').height(tall);
	}
}

function setOthers(){
	var border = $('#content').height();
	$('#mainSeg').height(border);
}