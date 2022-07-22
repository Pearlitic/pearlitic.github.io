// Initiate variables
var inATK = 0;
var inDMG = 0;
var inIED = "";
var inIEDList = [];
var inFam = 0;
var inPDR = 0;
var inPrime = 0;

function run() {
	//calc();
}
//calculate final ied from an array of ied values
function calcIED(arr) {
	temp = 0;
	for (const val of arr) {
		temp = 1 - (1 - temp) * (1 - val);
	}
	//console.log(temp);
	return temp;
}
// optimize! button begins calculation
function calc() {
	
	inIED = document.getElementById("iedEl").value;
	inPDR = document.getElementById("pdrEl").value;
	//convert ied string to array
	inIEDList = inIED.split `,`.map((x) => +x);
  
	//check input, set box red if not compliant
	if (inIEDList.some(isNaN) || inIEDList.some((x) => x < 0) || inIEDList.some((x) => x > 100) || document.getElementById("iedEl").value == "") {
    if (document.getElementById("iedEl").value == "") document.getElementById("iedEl").value = "-1";
		iedEl.style.color = "red";
		opti.style.color = "red";
    document.getElementById("fci").textContent='- %';
  document.getElementById("ddot").textContent='- %';
		return;
	} else if (inPDR < 0 || inPDR == "") {
  if (inPDR == "") pdrEl.value = "-1";
		pdrEl.style.color = "red";
		opti.style.color = "red";
    document.getElementById("fci").textContent='- %';
  document.getElementById("ddot").textContent='- %';
		return;
	} else {
		iedEl.style.color = "black";
		pdrEl.style.color = "black";
		opti.style.color = "black";
	}
	//Convert inputs to decimal from user input (percentage)
	inIEDResult = inIEDList.map((x) => x * 0.01);
	inATK *= 0.01;
	inDMG *= 0.01;
	inPDR *= 0.01;
	inIEDcalc = calcIED(inIEDResult);
	// make sure ied is 100% max
	if (inIEDcalc >= 1) {
		inIEDcalc = 1;
	}
  
  //console.log('ied/pdr',inIEDcalc,inPDR);
  
  dmgDealt = 1 - ((1-inIEDcalc)*inPDR);
  dmgDealt = Math.min(dmgDealt,1);
  dmgDealt = Math.max(dmgDealt,0);
  
  inIEDcalc = Math.round(inIEDcalc*10000)/100;
  dmgDealt = Math.round(dmgDealt*10000)/100;
  
  document.getElementById("fci").textContent=inIEDcalc + ' %';
  document.getElementById("ddot").textContent=dmgDealt + ' %';
  
  //console.log(dmgDealt);
  //inIEDcalc*= 100
	//console.log(dmgDealt,inIEDcalc,inPDR);
  
}
//input final input params, and return top 5 configuration in arrays as an array
function optimize(opA, opD, opI, opF, opPDR, opPR) {
	//get user defined max lines
	inmaxatk = document.getElementById("maxatk").value;
	inmaxdmg = document.getElementById("maxdmg").value;
	inmaxied = document.getElementById("maxied").value;

	//input values initialize
	oA = 0;
	oD = 0;
	oI = 0;
	oF = 9 + parseInt(opF)
	oFa = parseInt(inmaxatk);
	oFd = parseInt(opF) + parseInt(inmaxdmg);
	oFi = parseInt(inmaxied) + parseInt(opF)
	oPrA = 0;
	oPrD = 0;
	oPrI = 0;

	//console.log(oF,oFa,oFd,oFi);

	//oFD = 0;
	//initialize array for final values
	FDc = 0;
	var table = {};
	//nested for loop galore to figure out top 5
	for (let a = 0; a <= oFa; a++) {
		for (let d = 0; d <= oFd; d++) {
			for (let i = 0; i <= oFi; i++) {
				for (let pa = 0; pa <= opPR; pa++) {
					for (let pd = 0; pd <= opPR; pd++) {
						for (let pi = 0; pi <= opPR; pi++) {
							if (a + d + i == oF && pa + pd + pi == opPR && pa <= a && pd <= d && pi <= i) {
								//console.log(a + " " + d + " " + i + " " + pa + " " + pd + " " + pi);
								fA = 0.09 * (a - pa) + 0.12 * pa + opA;
								fD = 0.3 * (d - pd) + 0.4 * pd + opD;
								fI = calcIED(Array(pi).fill(0.4).concat(Array(i - pi).fill(0.3), [opI]));
								FD = calcFD(fA, fD, fI, opPDR);
								while (true) {
									if (!(FD in table)) {
										table[FD] = [a, d, i, pa, pd, pi]
										break;
									}
									FD += 0.0000000001
								}



								///

								//console.log("A: " + a + "  D: " + d + "  I: " + i + " | P: (" + pa + "," + pd + "," + pi + ") \tFD: " + Math.round(FD * 100) + "%");
							}
						}
					}
				}
			}
		}
	}
	//return [oA, oD, oI, oPrA, oPrD, oPrI, oFD]

	var sorted = Object.keys(table).map(function(key) {
		return [key, table[key]];
	});
	sorted.sort(function(first, second) {
		return second[0] - first[0];
	});
	return sorted;
}
//calculate final damage % to a boss accounting for pdr
function calcFD(a, d, i, pdr) {
	DM = 1 - (1 - i) * pdr; // Damage Multiplier from IED
	if (DM > 1) {
		DM = 1;
	} else if (DM < 0) {
		DM = 0;
	}
	return (1 + a) * (1 + d) * DM;
}

///////////////////
function setFamDefault() {
	//console.log('fail');
	fam1_a.value = 0;
  fam1_d.value = 30;
  fam1_i.value = 0;
  fam2_a.value = 0;
  fam2_d.value = 30;
  fam2_i.value = 0;
  fam3_a.value = 0;
  fam3_d.value = 30;
  fam3_i.value = 0;
  fam4_a.value = 0;
  fam4_d.value = 0;
  fam4_i.value = 30;
  fam5_a.value = 0;
  fam5_d.value = 0;
  fam5_i.value = 30;
  fam6_a.value = 0;
  fam6_d.value = 0;
  fam6_i.value = 30;
}

function setFamZero() {
	//console.log('fail');
	fam1_a.value = 0;
  fam1_d.value = 0;
  fam1_i.value = 0;
  fam2_a.value = 0;
  fam2_d.value = 0;
  fam2_i.value = 0;
  fam3_a.value = 0;
  fam3_d.value = 0;
  fam3_i.value = 0;
  fam4_a.value = 0;
  fam4_d.value = 0;
  fam4_i.value = 0;
  fam5_a.value = 0;
  fam5_d.value = 0;
  fam5_i.value = 0;
  fam6_a.value = 0;
  fam6_d.value = 0;
  fam6_i.value = 0;
}

/////////////////////////////////////////////////////////////////////////////
function showSpoiler(obj) {
	var inner = obj.parentNode.getElementsByTagName("div")[0];
	if (inner.style.display == "none") {
		inner.style.display = "";
		obj.value = "Hide Advanced Options";
	} else {
		inner.style.display = "none";
		obj.value = "Show Advanced Options";
	}
}

function showSpoilerfam(obj) {
	var inner = obj.parentNode.getElementsByTagName("div")[0];
	if (inner.style.display == "none") {
		inner.style.display = "";
		obj.value = "Hide Familiars";
	} else {
		inner.style.display = "none";
		obj.value = "Edit Familiars";
	}
}

function showSpoiler2(obj) {
	var inner = obj.parentNode.getElementsByTagName("div")[0];
	if (inner.style.display == "none") {
		inner.style.display = "";
		obj.value = "Hide";
	} else {
		inner.style.display = "none";
		obj.value = "Show Help!";
	}
}
