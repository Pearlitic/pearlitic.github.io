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
	//get user input values
	inATK = document.getElementById("attackEl").value;
	inDMG = document.getElementById("damageEl").value;
	inIED = document.getElementById("iedEl").value;
	inFam = document.getElementById("famEl").value;
	inPDR = document.getElementById("pdrEl").value;
	inPrime = document.getElementById("primeEl").value;
	//convert ied string to array
	inIEDList = inIED.split `,`.map((x) => +x);
	//check input, set box red if not compliant
	if (inIEDList.some(isNaN) || inIEDList.some((x) => x < 0)) {
		iedEl.style.color = "red";
		opti.style.color = "red";
		return;
	} else if (inDMG < 0) {
		damageEl.style.color = "red";
		opti.style.color = "red";
		return;
	} else if (inATK < 0) {
		attackEl.style.color = "red";
		opti.style.color = "red";
		return;
	} else if (inFam < 0 || inFam > 3) {
		famEl.style.color = "red";
		opti.style.color = "red";
		return;
	} else if (inPDR < 0) {
		pdrEl.style.color = "red";
		opti.style.color = "red";
		return;
	} else if (inPrime < 0) {
		primeEl.style.color = "red";
		opti.style.color = "red";
		return;
	} else {
		iedEl.style.color = "black";
		damageEl.style.color = "black";
		attackEl.style.color = "black";
		famEl.style.color = "black";
		pdrEl.style.color = "black";
		primeEl.style.color = "black";
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
	// console.log("IED: " + inIEDcalc);
	//console.log("A: " + inATK + " | D: " + inDMG + " | I: " + /*inIEDList.toString() + "  " +*/ inIEDcalc + "\t | F: " + inFam + " | Pd: " + inPDR + " | Pr: " + inPrime);
	// call optimize function from final cleaned-up values, and return an array that contains 5 arrays, each array in the format of [a, d, i, pa, pd, pi, FD]
	// the returned array contains the best 5 combo
	final = optimize(inATK, inDMG, inIEDcalc, inFam, inPDR, inPrime);
	//final = [1,2,3,4,5,6,7];
	//print in console top 5 results
	/*for (o = 0; o < 5; o++) {
     console.log("\nA: " + final[o][0] + "  D: " + final[o][1] + "  I: " + //inIEDList.toString() + "  " +// final[o][2] + " | P: (" + final[o][3] + "," + final[o][4] + "," + final[o][5] + ") \tFD: " + Math.round(final[o][6] * 100) + "%");
   }*/
	//console.table(final);
	// print values into the web page
	for (r = 0; r < 5; r++) {
		tmp = r + 1;
		document.getElementById("op" + tmp + "f").textContent = Math.round(final[r][6] * 100) + "%";
		document.getElementById("op" + tmp + "a").textContent = final[r][0];
		document.getElementById("op" + tmp + "d").textContent = final[r][1];
		document.getElementById("op" + tmp + "i").textContent = final[r][2];
		document.getElementById("op" + tmp + "p").textContent = final[r][3] + "," + final[r][4] + "," + final[r][5];
	}
	//console.log("\nA: " + final[0][0] + "  D: " + final[0][1] + "  I: " + /*inIEDList.toString() + "  " +*/ final[0][2] + " | P: (" + final[0][3] + "," + final[0][4] + "," + final[0][5] + ") \tFD: " + Math.round(final[0][6] * 100) + "%");
}
//input final input params, and return top 5 configuration in arrays as an array
function optimize(opA, opD, opI, opF, opPDR, opPR) {
	//input values initialize
	oA = 0;
	oD = 0;
	oI = 0;
	oF = parseInt(opF) + 9;
	oFd = parseInt(opF) + 6;
	oPrA = 0;
	oPrD = 0;
	oPrI = 0;
	//oFD = 0;
	//initialize array for final values
	FDc = 0;
	final1 = [0, 0, 0, 0, 0, 0, 0];
	final2 = [0, 0, 0, 0, 0, 0, 0];
	final3 = [0, 0, 0, 0, 0, 0, 0];
	final4 = [0, 0, 0, 0, 0, 0, 0];
	final5 = [0, 0, 0, 0, 0, 0, 0];
	//nested for loop galore to figure out top 5
	for (let a = 0; a <= oF; a++) {
		for (let d = 0; d <= oFd; d++) {
			for (let i = 0; i <= oF; i++) {
				for (let pa = 0; pa <= opPR; pa++) {
					for (let pd = 0; pd <= opPR; pd++) {
						for (let pi = 0; pi <= opPR; pi++) {
							if (a + d + i == oF && pa + pd + pi == opPR && pa <= a && pd <= d && pi <= i) {
								//console.log(a + " " + d + " " + i + " " + pa + " " + pd + " " + pi);
								fA = 0.09 * (a - pa) + 0.12 * pa + opA;
								fD = 0.3 * (d - pd) + 0.4 * pd + opD;
								fI = calcIED(Array(pi).fill(0.4).concat(Array(i - pi).fill(0.3), [opI]));
								FD = calcFD(fA, fD, fI, opPDR);
								if (FD > FDc) {
									FDc = FD;
								}
								///
								if (FD > final1[6]) {
									final5 = final4;
									final4 = final3;
									final3 = final2;
									final2 = final1;
									final1 = [a, d, i, pa, pd, pi, FD];
								} else if (FD > final2[6]) {
									final5 = final4;
									final4 = final3;
									final3 = final2;
									final2 = [a, d, i, pa, pd, pi, FD];
								} else if (FD > final3[6]) {
									final5 = final4;
									final4 = final3;
									final3 = [a, d, i, pa, pd, pi, FD];
								} else if (FD > final4[6]) {
									final5 = final4;
									final4 = [a, d, i, pa, pd, pi, FD];
								} else if (FD > final5[6]) {
									final5 = [a, d, i, pa, pd, pi, FD];
								}
								//console.log("A: " + a + "  D: " + d + "  I: " + i + " | P: (" + pa + "," + pd + "," + pi + ") \tFD: " + Math.round(FD * 100) + "%");
							}
						}
					}
				}
			}
		}
	}
	//return [oA, oD, oI, oPrA, oPrD, oPrI, oFD]
	return [final1, final2, final3, final4, final5];
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
