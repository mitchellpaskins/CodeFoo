function show(obj)
{
	var item = document.getElementById(obj);
	if(item.style.visibility != 'visible') {
		item.style.visibility = 'visible';
	}
}

function hide(obj)
{
	var item = document.getElementById(obj);
	if(item.style.visibility != 'hidden') {
		item.style.visibility = 'hidden';
	}
}

function moveleft(){
	document.getElementById('leftButton').style.visibility = 'hidden';
	
	$('.front').stop().animate({
		height: 124,
		width: 230,
		top: 51,
		left: 5,
	}, 500, function(){
		// Animation complete.
	});
	$('.dfront').stop().animate({
		height: 124,
		width: 230,
		top: 51,
		left: 5,
	}, 500, function(){
		// Animation complete.
	});
	$('.fphoto').stop().animate({
		height: 124,
		width: 230,
		opacity: 0.6,
	}, 500, function(){
		// Animation complete.
	});
	$('.left').stop().animate({
	width: 180,
	height: 97,
	top: 30,
	left: 120,
	}, 500, function(){
		// Animation complete.
	});
	$('.dleft').stop().animate({
	width: 180,
	height: 97,
	top: 30,
	left: 120,
	}, 500, function(){
		// Animation complete.
	});
	$('.lphoto').stop().animate({
	width: 180,
	height: 97,
	opacity: 0.15,
	}, 500, function(){
		// Animation complete.
	});
	$('.right').stop().animate({
		height: 216,
		width: 400,
		top: 5,
		left: 160,
	}, 500, function(){
		// Animation complete.
	});
	$('.dright').stop().animate({
		height: 216,
		width: 400,
		top: 5,
		left: 160,
	}, 500, function(){
		// Animation complete.
	});
	$('.rphoto').stop().animate({
		height: 216,
		width: 400,
		opacity: 1,
	}, 500, function(){
		// Animation complete.
	});
	$('.back-left').stop().animate({
		width: 180,
		height: 97,
		top: 30,
		left: 415,
	}, 500, function(){
		// Animation complete.
	});
	$('.dback-left').stop().animate({
		width: 180,
		height: 97,
		top: 30,
		left: 415,
	}, 500, function(){
		// Animation complete.
	});
	$('.blphoto').stop().animate({
		width: 180,
		height: 97,
		opacity: 0.15,
	}, 500, function(){
		// Animation complete.
	});
	$('.back-right').stop().animate({
		width: 230,
		height: 124,
		top: 51,
		left: 480,
	}, 500, function(){
		// Animation complete.
	});
	$('.dback-right').stop().animate({
		width: 230,
		height: 124,
		top: 51,
		left: 480,
	}, 500, function(){
		// Animation complete.
	});
	$('.brphoto').stop().animate({
		width: 230,
		height: 124,
		opacity: 0.6,
	}, 500, function(){
		// Animation complete.
	});
	
	$('.front').addClass('oldfront');
	$('.left').addClass('oldleft');
	$('.right').addClass('oldright');
	$('.back-left').addClass('oldbackleft');
	$('.back-right').addClass('oldbackright');
	
	$('.dfront').addClass('oldfrontd');
	$('.dleft').addClass('oldleftd');
	$('.dright').addClass('oldrightd');
	$('.dback-left').addClass('oldbackleftd');
	$('.dback-right').addClass('oldbackrightd');
	
	$('.fphoto').addClass('oldfrontphoto');
	$('.lphoto').addClass('oldleftphoto');
	$('.rphoto').addClass('oldrightphoto');
	$('.blphoto').addClass('oldbackleftphoto');
	$('.brphoto').addClass('oldbackrightphoto');
	
	$('.descriptionf').addClass('olddescriptionf');
	$('.descriptionl').addClass('olddescriptionl');
	$('.descriptionr').addClass('olddescriptionr');
	$('.descriptionbl').addClass('olddescriptionbl');
	$('.descriptionbr').addClass('olddescriptionbr');
	
	$('.oldfront').removeClass('front oldfront').addClass('left');
	$('.oldleft').removeClass('left oldleft').addClass('back-left');
	$('.oldright').removeClass('right oldright').addClass('front');
	$('.oldbackleft').removeClass('back-left oldbackleft').addClass('back-right');
	$('.oldbackright').removeClass('back-right oldbackright').addClass('right');
	
	$('.oldfrontd').removeClass('dfront oldfrontd').addClass('dleft');
	$('.oldleftd').removeClass('dleft oldleftd').addClass('dback-left');
	$('.oldrightd').removeClass('dright oldrightd').addClass('dfront');
	$('.oldbackleftd').removeClass('dback-left oldbackleftd').addClass('dback-right');
	$('.oldbackrightd').removeClass('dback-right oldbackrightd').addClass('dright');
	
	$('.oldfrontphoto').removeClass('fphoto oldfrontphoto').addClass('lphoto');
	$('.oldleftphoto').removeClass('lphoto oldleftphoto').addClass('blphoto');
	$('.oldrightphoto').removeClass('rphoto oldrightphoto').addClass('fphoto');
	$('.oldbackleftphoto').removeClass('blphoto oldbackleftphoto').addClass('brphoto');
	$('.oldbackrightphoto').removeClass('brphoto oldbackrightphoto').addClass('rphoto');
	
	$('.olddescriptionf').removeClass('descriptionf olddescriptionf').addClass('descriptionl');
	$('.olddescriptionl').removeClass('descriptionl olddescriptionl').addClass('descriptionbl');
	$('.olddescriptionr').removeClass('descriptionr olddescriptionr').addClass('descriptionf');
	$('.olddescriptionbl').removeClass('descriptionbl olddescriptionbl').addClass('descriptionbr');
	$('.olddescriptionbr').removeClass('descriptionbr olddescriptionbr').addClass('descriptionr');
	
	var t = setTimeout("enableleft()", 300);
}

function moveright(){
	document.getElementById('rightButton').style.visibility = 'hidden';
	disablehref('linkf');
	$('.front').stop().animate({
		height: 124,
		width: 230,
		top: 51,
		left: 480,
	}, 500, function(){
		// Animation complete.
	});
	$('.dfront').stop().animate({
		height: 124,
		width: 230,
		top: 51,
		left: 480,
	}, 500, function(){
		// Animation complete.
	});
	$('.fphoto').stop().animate({
		height: 124,
		width: 230,
		opacity: 0.6,
	}, 500, function(){
		// Animation complete.
	});
	$('.left').stop().animate({
		height: 216,
		width: 400,
		top: 5,
		left: 160,
	}, 500, function(){
		// Animation complete.
	});
	$('.dleft').stop().animate({
		height: 216,
		width: 400,
		top: 5,
		left: 160,
	}, 500, function(){
		// Animation complete.
	});
	$('.lphoto').stop().animate({
		height: 216,
		width: 400,
		opacity: 1,
	}, 500, function(){
		// Animation complete.
	});
	$('.right').stop().animate({
	width: 180,
	height: 97,
	top: 30,
	left: 415,
	}, 500, function(){
		// Animation complete.
	});
	$('.dright').stop().animate({
	width: 180,
	height: 97,
	top: 30,
	left: 415,
	}, 500, function(){
		// Animation complete.
	});
	$('.rphoto').stop().animate({
	width: 180,
	height: 97,
	opacity: 0.15,
	}, 500, function(){
		// Animation complete.
	});
	$('.back-left').stop().animate({
		width: 230,
		height: 124,
		top: 51,
		left: 5,
	}, 500, function(){
		// Animation complete.
	});
	$('.dback-left').stop().animate({
		width: 230,
		height: 124,
		top: 51,
		left: 5,
	}, 500, function(){
		// Animation complete.
	});
	$('.blphoto').stop().animate({
		width: 230,
		height: 124,
		opacity: 0.6,
	}, 500, function(){
		// Animation complete.
	});
	$('.back-right').stop().animate({
		width: 180,
		height: 97,
		top: 30,
		left: 120,
	}, 500, function(){
		// Animation complete.
	});
	$('.dback-right').stop().animate({
		width: 180,
		height: 97,
		top: 30,
		left: 120,
	}, 500, function(){
		// Animation complete.
	});
	$('.brphoto').stop().animate({
		width: 180,
		height: 97,
		opacity: 0.15,
	}, 500, function(){
		// Animation complete.
	});
	
	$('.front').addClass('oldfront');
	$('.left').addClass('oldleft');
	$('.right').addClass('oldright');
	$('.back-left').addClass('oldbackleft');
	$('.back-right').addClass('oldbackright');
	
	$('.dfront').addClass('oldfrontd');
	$('.dleft').addClass('oldleftd');
	$('.dright').addClass('oldrightd');
	$('.dback-left').addClass('oldbackleftd');
	$('.dback-right').addClass('oldbackrightd');
	
	$('.fphoto').addClass('oldfrontphoto');
	$('.lphoto').addClass('oldleftphoto');
	$('.rphoto').addClass('oldrightphoto');
	$('.blphoto').addClass('oldbackleftphoto');
	$('.brphoto').addClass('oldbackrightphoto');
	
	$('.descriptionf').addClass('olddescriptionf');
	$('.descriptionl').addClass('olddescriptionl');
	$('.descriptionr').addClass('olddescriptionr');
	$('.descriptionbl').addClass('olddescriptionbl');
	$('.descriptionbr').addClass('olddescriptionbr');
	
	$('.oldfront').removeClass('front oldfront').addClass('right');
	$('.oldleft').removeClass('left oldleft').addClass('front');
	$('.oldright').removeClass('right oldright').addClass('back-right');
	$('.oldbackleft').removeClass('back-left oldbackleft').addClass('left');
	$('.oldbackright').removeClass('back-right oldbackright').addClass('back-left');
	
	$('.oldfrontd').removeClass('dfront oldfrontd').addClass('dright');
	$('.oldleftd').removeClass('dleft oldleftd').addClass('dfront');
	$('.oldrightd').removeClass('dright oldrightd').addClass('dback-right');
	$('.oldbackleftd').removeClass('dback-left oldbackleftd').addClass('dleft');
	$('.oldbackrightd').removeClass('dback-right oldbackrightd').addClass('dback-left');
	
	$('.oldfrontphoto').removeClass('fphoto oldfrontphoto').addClass('rphoto');
	$('.oldleftphoto').removeClass('lphoto oldleftphoto').addClass('fphoto');
	$('.oldrightphoto').removeClass('rphoto oldrightphoto').addClass('brphoto');
	$('.oldbackleftphoto').removeClass('blphoto oldbackleftphoto').addClass('lphoto');
	$('.oldbackrightphoto').removeClass('brphoto oldbackrightphoto').addClass('blphoto');
	
	$('.olddescriptionf').removeClass('descriptionf olddescriptionf').addClass('descriptionr');
	$('.olddescriptionl').removeClass('descriptionl olddescriptionl').addClass('descriptionf');
	$('.olddescriptionr').removeClass('descriptionr olddescriptionr').addClass('descriptionbr');
	$('.olddescriptionbl').removeClass('descriptionbl olddescriptionbl').addClass('descriptionl');
	$('.olddescriptionbr').removeClass('descriptionbr olddescriptionbr').addClass('descriptionbl');
	var t = setTimeout("enableright()", 300);
}

function enableleft() {
	document.getElementById('leftButton').style.visibility = 'visible';
}

function enableright() {
	document.getElementById('rightButton').style.visibility = 'visible';
}

function disablehref(theClass) {
//Create Array of All HTML Tags
var allHTMLTags=document.getElementsByTagName("*");
//Loop through all tags using a for loop
for (i=0; i<allHTMLTags.length; i++) {
//Get all tags with the specified class name.
if (allHTMLTags[i].className==theClass) {
//Place any code you want to apply to all
//pages with the class specified.
//In this example is to "display:none;" them
//Making them all dissapear on the page.
allHTMLTags[i].removeAttribute('href');
}
}
}

function enablehref(theClass, theLink) {
//Create Array of All HTML Tags
var allHTMLTags=document.getElementsByTagName("*");
//Loop through all tags using a for loop
for (i=0; i<allHTMLTags.length; i++) {
//Get all tags with the specified class name.
if (allHTMLTags[i].className==theClass) {
//Place any code you want to apply to all
//pages with the class specified.
//In this example is to "display:none;" them
//Making them all dissapear on the page.
allHTMLTags[i].setAttribute('href', theLink);
}
}
}