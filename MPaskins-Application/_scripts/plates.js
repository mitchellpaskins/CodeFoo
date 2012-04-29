var alphaCount = 0;
var numCount = 0;
var cAlphaCount = 0;
var cNumCount = 0;
var fNumCount = 0;
var fAlphaCount = 0;
var fExcess = 0;
var fPlates = 0;

function plates(){
	var population = document.getElementById('population').value;
	if (population<1 || isNaN(population)){
		alert('Please enter a valid positive number');
	}else {
	var number = findnumber(population);
	var alpha = findalpha(population);
	var combo = findcombo(population);
	
	if(number<alpha && number<combo){
		fExcess = number-population;
		fPlates = number;
		fNumCount = numCount;
		fAlphaCount = 0;
	}
	else if(alpha<number && alpha<combo){
		fExcess = alpha-population;
		fPlates = alpha;
		fAlphaCount = alphaCount;
		fNumCount = 0;
	}
	else if(combo<number && combo<alpha){
		fExcess = combo-population;
		fPlates = combo;
		fNumCount = cNumCount;
		fAlphaCount = cAlphaCount;
	}
	document.getElementById('population').innerHTML = population;
	document.getElementById('pattern').innerHTML = fNumCount + " Numbers, " + fAlphaCount + " Letters.";
	document.getElementById('excess').innerHTML = fExcess;
	document.getElementById('plates').innerHTML = fPlates;
	}
}

function findnumber(population) {
	var num = 1;
	var nCount = 0;
		do{
			nCount++;
			num = 10 * num;
		}while(population>num)
		numCount = nCount;
	return num;
}

function findalpha(population) {
	var alpha = 1;
	var aCount = 0;
		do{
			aCount++;
			alpha = 26 * alpha;
		}while(population>alpha)
		alphaCount = aCount;
		return alpha;
}

function findcombo(population) {
	var num = 1;
	var alpha = 1;
	var nCount = 0;
	var aCount = 0;
	var combo = 0;
	var acombo = 0;
	var totCount = 0;
	var aSum = 0;
	var newcombo = 0;
	do {
		nCount = 0;
		aCount++;
		alpha = 1;
		for(var x = 0; x < aCount; x++){
			alpha = alpha * 26;
			}
		do {
			nCount++;
			num = 1;
			for(var y = 0; y < nCount; y++){
			num = num * 10;
			}
			combo = num * alpha;
			if(combo>=population){
				if(newcombo==0){
					newcombo=combo;
					cAlphaCount = aCount;
					cNumCount = nCount;
				}
				if(combo<newcombo){
					newcombo=combo;
					cAlphaCount = aCount;
					cNumCount = nCount;
				}
			}
			totCount = nCount+aCount;
			
		}while(totCount<numCount)
	}while (aCount<numCount)
	return newcombo;
	
}