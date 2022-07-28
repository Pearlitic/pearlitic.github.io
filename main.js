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
	var names = []

	display_top = document.getElementById("disTop").value;

	var loop_div = document.getElementById("loop");
	document.getElementById('loop').innerHTML = "";

	for (i = 1; i <= display_top; i++) {
		//final dmg spam
		window['span' + i] = document.createElement("span");
		window['span' + i].setAttribute('id', 'fd' + i);
		//final dmg text
		var b = document.createElement("b");
		b.textContent = i + ' - FD: ';
		window['span' + i].appendChild(b);
		loop_div.appendChild(window['span' + i]);
		//final dmg percent op_f
		window['op' + i + 'f'] = document.createElement("span");
		window['op' + i + 'f'].setAttribute('id', 'op' + i + 'f');
		window['op' + i + 'f'].textContent = '000%';
		loop_div.appendChild(window['op' + i + 'f']);
		//next line
		var br = document.createElement("br");
		loop_div.appendChild(br);
		//adi span
		window['span' + i + 'adi'] = document.createElement("span");
		window['span' + i + 'adi'].setAttribute('id', 'span' + i + 'adi');
		//add a/d/i to adi span
		var b = document.createElement("b");
		b.textContent = '\u00A0\u00A0A/D/I: ';
		window['span' + i + 'adi'].appendChild(b);
		loop_div.appendChild(window['span' + i + 'adi']);
		//adi result span
		window['op' + i + 'adi'] = document.createElement("span");
		window['op' + i + 'adi'].setAttribute('id', 'op' + i + 'adi');
		window['op' + i + 'adi'].textContent = '(0,0,0)';
		loop_div.appendChild(window['op' + i + 'adi']);

		//p span
		window['span' + i + 'p'] = document.createElement("span");
		window['span' + i + 'p'].setAttribute('id', 'span' + i + 'p');
		//add p to p span
		var b = document.createElement("b");
		b.textContent = '\u00A0\u00A0P: ';
		window['span' + i + 'p'].appendChild(b);
		loop_div.appendChild(window['span' + i + 'p']);
		//p result span
		window['op' + i + 'p'] = document.createElement("span");
		window['op' + i + 'p'].setAttribute('id', 'op' + i + 'p');
		window['op' + i + 'p'].textContent = '(0,0,0)';
		loop_div.appendChild(window['op' + i + 'p']);


		//new line
		var br = document.createElement("br");
		loop_div.appendChild(br);

	}

	//get user input values
	inATK = document.getElementById("attackEl").value;
	inDMG = document.getElementById("damageEl").value;
	inIED = document.getElementById("iedEl").value;
	inFam = document.getElementById("famEl").value;
	inPDR = document.getElementById("pdrEl").value;
	inPrime = document.getElementById("primeEl").value;

	inmaxatk = document.getElementById("maxatk").value;
	inmaxdmg = document.getElementById("maxdmg").value;
	inmaxied = document.getElementById("maxied").value;
	//console.log(inmaxatk,inmaxdmg,inmaxied);

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
	} else if (inmaxatk < 0) {
		maxatk.style.color = "red";
		opti.style.color = "red";
		return;
	} else if (inmaxdmg < 0) {
		maxdmg.style.color = "red";
		opti.style.color = "red";
		return;
	} else if (inmaxied < 0) {
		maxied.style.color = "red";
		opti.style.color = "red";
		return;
	} else if ((parseInt(inmaxatk) + parseInt(inmaxdmg) + parseInt(inmaxied)) < 9) {
		//console.log('in');
		maxied.style.color = "red";
		maxatk.style.color = "red";
		maxdmg.style.color = "red";
		opti.style.color = "red";
		return;
	} else {
		iedEl.style.color = "black";
		damageEl.style.color = "black";
		attackEl.style.color = "black";
		famEl.style.color = "black";
		pdrEl.style.color = "black";
		primeEl.style.color = "black";
		maxatk.style.color = "black";
		maxdmg.style.color = "black";
		maxied.style.color = "black";

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
	try {
		for (r = 0; r < display_top; r++) {
			tmp = r + 1;
			try {
				document.getElementById("op" + tmp + "f").textContent = Math.round(final[r][0] * 100) + "%";
			} catch (error) {
				document.getElementById("op" + tmp + "f").textContent = "---%";
			}
			//document.getElementById("op" + tmp + "a").textContent = final[r][0];
			//document.getElementById("op" + tmp + "d").textContent = final[r][1];
			//document.getElementById("op" + tmp + "i").textContent = final[r][2];
			try {
				document.getElementById("op" + tmp + "adi").textContent = '(' + final[r][1][0] + "," + final[r][1][1] + "," + final[r][1][2] + ')';
				document.getElementById("op" + tmp + "p").textContent = '(' + final[r][1][3] + "," + final[r][1][4] + "," + final[r][1][5] + ')';
			} catch (error) {
				document.getElementById("op" + tmp + "adi").textContent = '(-,-,-)';
				document.getElementById("op" + tmp + "p").textContent = '(-,-,-)';
			}
		}
	} catch (error) {
		console.log('Not enough results in table');
	}
	//console.log("\nA: " + final[0][0] + "  D: " + final[0][1] + "  I: " + /*inIEDList.toString() + "  " +*/ final[0][2] + " | P: (" + final[0][3] + "," + final[0][4] + "," + final[0][5] + ") \tFD: " + Math.round(final[0][6] * 100) + "%");
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
								fA = 0.10 * (a - pa) + 0.13 * pa + opA;
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
