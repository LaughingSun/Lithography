//

window.onload = function() {
	paper = Raphael("canvas", 866.66666666667, 533.33333333333);

	// circle Definitions
	var circle1 = paper.circle(0, 0, 511);
	circle1.attr({fill: '#0042cc', 'opacity': '.7', stroke: '#000', 'stroke-width': 1, 'stroke-opacity': '11' });
	circle1.animate({cx: 354, cy: 20, fill: '#0042cc', 'fill-opacity': '11', stroke: '#000', 'stroke-width': 1, 'stroke-opacity': '11' }, 2222, '<');

	var circle2 = paper.circle(0, 0, 333.33333333333);
	circle2.attr({stroke: '#000', 'fill-opacity': '.5', 'stroke-width': 1, 'stroke-opacity': '11' });
	circle2.animate({cx: 333, cy: 201, stroke: '#000', 'stroke-width': 1, 'stroke-opacity': '11' }, 2333, '<>' );

	var circle3 = paper.circle(0, 0, 200);
	circle3.attr({stroke: '#000', 'fill-opacity': '.5', 'stroke-width': 1, 'stroke-opacity': '11' });
	circle3.animate({cx: 200, cy: 200, stroke: '#000', 'stroke-width': 1, 'stroke-opacity': '11' }, 2444, '<>' );

	var circle4 = paper.circle(0, 0, 133);
	circle4.attr({stroke: '#000', 'fill-opacity': '.5', 'stroke-width': 1, 'stroke-opacity': '11' });
	circle4.animate({cx: 200, cy: 133, stroke: '#000', 'stroke-width': 1, 'stroke-opacity': '11' }, 2555, '<>' );

	var circle5 = paper.circle(0, 0, 67);
	circle5.attr({stroke: '#000', 'fill-opacity': '.5', 'stroke-width': 1, 'stroke-opacity': '11' });
	circle5.animate({cx: 266, cy: 133, stroke: '#000', 'stroke-width': 1, 'stroke-opacity': '11' }, 3333, '<>');

	// Square Definitions
	var square1 = paper.rect(332.33333333333, 1, 532.33333333333, 531.33333333333  );
	square1.attr({stroke: '#ccc', 'stroke-width': 2, 'stroke-opacity': '0'});
	square1.animate({stroke: '#ccc', 'stroke-width': 2, 'stroke-opacity': '.7'}, 1444, '<');

	var square2 = paper.rect(1, 201, 331, 331);
	square2.attr({stroke: '#ccc', 'stroke-width': 2, 'stroke-opacity': '0'});
	square2.animate({stroke: '#ccc', 'stroke-width': 2, 'stroke-opacity': '.7'}, 2444, '<');

	var square3 = paper.rect(1, 1, 200, 200);
	square3.attr({stroke: '#ccc', 'stroke-width': 2, 'stroke-opacity': '0'});
	square3.animate({stroke: '#ccc', 'stroke-width': 2, 'stroke-opacity': '.7'}, 3444, '<');

	var square4 = paper.rect(201, 1, 131, 131);
	square4.attr({stroke: '#ccc', 'stroke-width': 2, 'stroke-opacity': '0'});
	square4.animate({stroke: '#ccc', 'stroke-width': 2, 'stroke-opacity': '.7'}, 4444, '<');

	var square5 = paper.rect(267, 132, 65, 69);
	square5.attr({stroke: '#ccc', 'stroke-width': 2, 'stroke-opacity': '0'});
	square5.animate({stroke: '#ccc', 'stroke-width': 2, 'stroke-opacity': '.7'}, 5444, '<');

	var square6 = paper.rect(201, 132, 65, 69);
	square6.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '0'});
	square6.animate({stroke: '#ccc', 'stroke-width': 2, 'stroke-opacity': '.7'}, 6444, '<');

	// ARC DEFININTIONS

	var curve1 = paper.path("M866.66666666667, 0 C866.66666666667, 533 333, 533 333, 533");
	curve1.attr({stroke: '#bbb',"stroke-width": '9', 'stroke-opacity': '0'});
	curve1.glow({'width' :11, fill: false, 'opacity': .3, 'offsetx': 0, 'offsety': 0, 'color': '#EEE'});
	curve1.animate({stroke: '#bbb',"stroke-width": '9', 'stroke-opacity': '1'}, 999, '<');

	var curve2 = paper.path("M333, 533 C2, 533 0, 200 0, 200");
	curve2.attr({stroke: '#bbb',"stroke-width": '9', 'stroke-opacity': '0'});
	curve2.glow({'width' :11, fill: false, 'opacity': .3, 'offsetx': 0, 'offsety': 0, 'color': '#EEE'});
	curve2.animate({stroke: '#bbb',"stroke-width": '9', 'stroke-opacity': '1'}, 999, '<');

	var curve3 = paper.path("M200, 0 C200, 0 0, 0 0, 200");
	curve3.attr({stroke: '#bbb',"stroke-width": '9', 'stroke-opacity': '0'});
	curve3.glow({'width' :11, fill: false, 'opacity': .3, 'offsetx': 0, 'offsety': 0, 'color': '#EEE'});
	curve3.animate({stroke: '#bbb',"stroke-width": '9', 'stroke-opacity': '1'}, 999, '<');

	var curve4 = paper.path("M333, 133 C333, 133 344, -10 167, 0");
	curve4.attr({stroke: '#bbb',"stroke-width": '9', 'stroke-opacity': '0'});
	curve4.glow({'width' :11, fill: false, 'opacity': .3, 'offsetx': 0, 'offsety': 0, 'color': '#EEE'});
	curve4.animate({stroke: '#bbb',"stroke-width": '9', 'stroke-opacity': '1'}, 999, '<');

	var curve5 = paper.path("M201, 133 C200, 220 333, 220 333, 133");
	curve5.attr({stroke: '#bbb',"stroke-width": '9', 'stroke-opacity': '0'});
	curve5.glow({'width' :11, fill: false, 'opacity': .3, 'offsetx': 0, 'offsety': 0, 'color': '#EEE'});
	curve5.animate({stroke: '#bbb',"stroke-width": '9', 'stroke-opacity': '1'}, 999, '<');

	// Matrix Square Definitions

	//90 degrees
	var matrixSquare1 = paper.rect(429, 95, 343, 343);
	matrixSquare1.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '.1'});
	matrixSquare1.animate({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3444, '<>');

	var matrixSquare3 = paper.rect(449, 115, 304, 304);
	matrixSquare3.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '.1'});
	matrixSquare3.animate({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3044, '<>');

	var matrixSquare5 = paper.rect(479, 145, 244, 244);
	matrixSquare5.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '.1'});
	matrixSquare5.animate({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 1344, '<>');

	var matrixSquare7 = paper.rect(524, 190, 152, 152);
	matrixSquare7.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '.1'});
	matrixSquare7.animate({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 1244, '<>');


	//45 degrees matrix squares
	var matrixSquare2 = paper.rect(429, 95, 343, 343);
	matrixSquare2.transform('r45');
	matrixSquare2.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'});
	matrixSquare2.glow({'width' :11, fill: false, 'opacity': .3, 'offsetx': 0, 'offsety': 0, 'color': '#eee'});
	matrixSquare2.animate({stroke: '#ccc', 'stroke-width': 2, 'stroke-opacity': '11'}, 1244, '<>');

	var matrixSquare4 = paper.rect(449, 115, 303, 303);
	matrixSquare4.transform('r45');
	matrixSquare4.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'});
	matrixSquare4.animate({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 1244, '<>');

	var matrixSquare6 = paper.rect(479, 145, 243, 243);
	matrixSquare6.transform('r45');
	matrixSquare6.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'});
	matrixSquare6.animate({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 1244, '<>');


	var matrixSquare8 = paper.rect(524, 190, 153, 153);
	matrixSquare8.transform('r45');
	matrixSquare8.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'});
	matrixSquare8.animate({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 1244, '<>');

	//Transport Circles

	// up and down

	var t1c = paper.circle(164, 250, 29, 29);
	t1c.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '.1'});
	t1c.animate({stroke: '#ccc', 'stroke-width': 3, 'stroke-opacity': '11'}, 2222, 'backIn');

	var t2c = paper.circle(164, 308, 29, 29);
	t2c.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '.1'});
	t2c.animate({stroke: '#ccc', 'stroke-width': 2, 'stroke-opacity': '11'}, 2222, 'backIn');

	var t3c = paper.circle(164, 366, 29, 29);
	t3c.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '.1'});
	t3c.animate({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 2222, 'backIn');

	var t4c = paper.circle(164, 424, 29, 29);
	t4c.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '.1'});
	t4c.animate({stroke: '#ccc', 'stroke-width': 2, 'stroke-opacity': '11'}, 2222, 'backIn');

	var t5c = paper.circle(164, 482, 29, 29);
	t5c.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '.1'});
	t5c.animate({stroke: '#ccc', 'stroke-width': 3, 'stroke-opacity': '11'}, 2222, 'backIn');

	// left to right to make outer circle

	// left to right

	var t6c = paper.circle(64, 367, 29, 29);
	t6c.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '.1'});
	t6c.animate({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 2222, 'backIn');

	var t9c = paper.circle(265, 366, 29, 29);
	t9c.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '.1'});
	t9c.animate({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 2222, 'backIn');

	// outer thicker circle

	var t10c = paper.circle(164, 366, 87, 87);
	t10c.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '.1'});
	t10c.animate({stroke: '#ccc', 'stroke-width': 4, 'stroke-opacity': '11'}, 4444, 'backIn');

	// inner (clockwise)
	var t11c = paper.circle(113, 337, 29, 29);
	t11c.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '.1'});
	t11c.animate({stroke: '#ccc', 'stroke-width': 2, 'stroke-opacity': '11'}, 2222, 'backIn');

	var t12c = paper.circle(214, 337, 29, 29);
	t12c.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '.1'});
	t12c.animate({stroke: '#ccc', 'stroke-width': 2, 'stroke-opacity': '11'}, 2222, 'backIn');

	var t13c = paper.circle(214, 395, 29, 29);
	t13c.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '.1'});
	t13c.animate({stroke: '#ccc', 'stroke-width': 2, 'stroke-opacity': '11'}, 2222, 'backIn');

	var t14c = paper.circle(114, 395, 29, 29);
	t14c.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '.1'});
	t14c.animate({stroke: '#ccc', 'stroke-width': 2, 'stroke-opacity': '11'}, 2222, 'backIn');

	//	Outer Circle

	var t15c = paper.circle(64, 309, 29, 29);
	t15c.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '.1'});
	t15c.animate({stroke: '#ccc', 'stroke-width': 3, 'stroke-opacity': '11'}, 2222, 'backIn');

	var t16c = paper.circle(113, 279, 29, 29);
	t16c.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '.1'});
	t16c.animate({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 2222, 'backIn');

	var t17c = paper.circle(214, 279, 29, 29);
	t17c.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '.1'});
	t17c.animate({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 2222, 'backIn');

	var t18c = paper.circle(264, 308, 29, 29);
	t18c.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '.1'});
	t18c.animate({stroke: '#ccc', 'stroke-width': 3, 'stroke-opacity': '11'}, 2222, 'backIn');

	var t19c = paper.circle(264, 424, 29, 29);
	t19c.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '.1'});
	t19c.animate({stroke: '#ccc', 'stroke-width': 3, 'stroke-opacity': '11'}, 2222, 'backIn');

	var t20c = paper.circle(213, 453, 29, 29);
	t20c.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '.1'});
	t20c.animate({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 2222, 'backIn');

	var t21c = paper.circle(113, 453, 29, 29);
	t21c.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '.1'});
	t21c.animate({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 2222, 'backIn');

	var t22c = paper.circle(64, 424, 29, 29);
	t22c.attr({stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '.1'});
	t22c.animate({stroke: '#ccc', 'stroke-width': 3, 'stroke-opacity': '11'}, 2222, 'backIn');


	// Matrix Diamonds - 43 X 43

	// One

	var matrixDiamondOneOverOne = paper.rect(579, 35, 43, 43);
	matrixDiamondOneOverOne.transform('r45');
	matrixDiamondOneOverOne.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondOneOverOne.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3000, '<>');

	var matrixDiamondTwoOverOne = paper.rect(609, 65, 43, 43);
	matrixDiamondTwoOverOne.transform('r45');
	matrixDiamondTwoOverOne.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondTwoOverOne.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3100, '<>');

	var matrixDiamondThreeOverOne = paper.rect(639, 95, 43, 43);
	matrixDiamondThreeOverOne.transform('r45');
	matrixDiamondThreeOverOne.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondThreeOverOne.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3200, '<>');

	var matrixDiamondFourOverOne = paper.rect(669, 125, 43, 43);
	matrixDiamondFourOverOne.transform('r45');
	matrixDiamondFourOverOne.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondFourOverOne.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3300, '<>');

	var matrixDiamondFiveOverOne = paper.rect(699, 155, 43, 43);
	matrixDiamondFiveOverOne.transform('r45');
	matrixDiamondFiveOverOne.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondFiveOverOne.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3400, '<>');

	var matrixDiamondSixOverOne = paper.rect(729, 185, 43, 43);
	matrixDiamondSixOverOne.transform('r45');
	matrixDiamondSixOverOne.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondSixOverOne.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3500, '<>');

	var matrixDiamondSevenOverOne = paper.rect(759, 215, 43, 43);
	matrixDiamondSevenOverOne.transform('r45');
	matrixDiamondSevenOverOne.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondSevenOverOne.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3600, '<>');

	var matrixDiamondEightOverOne = paper.rect(789, 245, 43, 43);
	matrixDiamondEightOverOne.transform('r45');
	matrixDiamondEightOverOne.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondEightOverOne.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3700, '<>');


	// Two

	var matrixDiamondOneOverTwo = paper.rect(549, 65, 43, 43);
	matrixDiamondOneOverTwo.transform('r45');
	matrixDiamondOneOverTwo.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondOneOverTwo.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3100, '<>');

	var matrixDiamondTwoOverTwo = paper.rect(579, 95, 43, 43);
	matrixDiamondTwoOverTwo.transform('r45');
	matrixDiamondTwoOverTwo.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondTwoOverTwo.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3100, '<>');

	var matrixDiamondThreeOverTwo = paper.rect(609, 125, 43, 43);
	matrixDiamondThreeOverTwo.transform('r45');
	matrixDiamondThreeOverTwo.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondThreeOverTwo.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3200, '<>');

	var matrixDiamondFourOverTwo = paper.rect(639, 155, 43, 43);
	matrixDiamondFourOverTwo.transform('r45');
	matrixDiamondFourOverTwo.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondFourOverTwo.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3300, '<>');

	var matrixDiamondFiveOverTwo = paper.rect(669, 185, 43, 43);
	matrixDiamondFiveOverTwo.transform('r45');
	matrixDiamondFiveOverTwo.attr({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'});
	matrixDiamondFiveOverTwo.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondFiveOverTwo.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3400, '<>');

	var matrixDiamondSixOverTwo = paper.rect(699, 215, 43, 43);
	matrixDiamondSixOverTwo.transform('r45');
	matrixDiamondSixOverTwo.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondSixOverTwo.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3500, '<>');

	var matrixDiamondSevenOverTwo = paper.rect(729, 245, 43, 43);
	matrixDiamondSevenOverTwo.transform('r45');
	matrixDiamondSevenOverTwo.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondSevenOverTwo.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3600, '<>');


	var matrixDiamondEightOverTwo = paper.rect(759, 275, 43, 43);
	matrixDiamondEightOverTwo.transform('r45');
	matrixDiamondEightOverTwo.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondEightOverTwo.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3700, '<>');



	// Three

	var matrixDiamondOneOverThree = paper.rect(519, 95, 43, 43);
	matrixDiamondOneOverThree.transform('r45');
	matrixDiamondOneOverThree.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondOneOverThree.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3200, '<>');

	var matrixDiamondTwoOverThree = paper.rect(549, 125, 43, 43);
	matrixDiamondTwoOverThree.transform('r45');
	matrixDiamondTwoOverThree.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondTwoOverThree.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3200, '<>');

	var matrixDiamondThreeOverThree = paper.rect(579, 155, 43, 43);
	matrixDiamondThreeOverThree.transform('r45');
	matrixDiamondThreeOverThree.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondThreeOverThree.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3200, '<>');

	var matrixDiamondFourOverThree = paper.rect(609, 185, 43, 43);
	matrixDiamondFourOverThree.transform('r45');
	matrixDiamondFourOverThree.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondFourOverThree.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3300, '<>');

	var matrixDiamondFiveOverThree = paper.rect(639, 215, 43, 43);
	matrixDiamondFiveOverThree.transform('r45');
	matrixDiamondFiveOverThree.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondFiveOverThree.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3400, '<>');

	var matrixDiamondSixOverThree = paper.rect(669, 245, 43, 43);
	matrixDiamondSixOverThree.transform('r45');
	matrixDiamondSixOverThree.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondSixOverThree.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3500, '<>');

	var matrixDiamondSevenOverThree = paper.rect(699, 275, 43, 43);
	matrixDiamondSevenOverThree.transform('r45');
	matrixDiamondSevenOverThree.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondSevenOverThree.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3600, '<>');

	var matrixDiamondEightOverThree = paper.rect(729, 305, 43, 43);
	matrixDiamondEightOverThree.transform('r45');
	matrixDiamondEightOverThree.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondEightOverThree.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3700, '<>');



	// Four

	var matrixDiamondOneOverFour = paper.rect(489, 125, 43, 43);
	matrixDiamondOneOverFour.transform('r45');
	matrixDiamondOneOverFour.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondOneOverFour.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3300, '<>');

	var matrixDiamondTwoOverFour = paper.rect(519, 155, 43, 43);
	matrixDiamondTwoOverFour.transform('r45');
	matrixDiamondTwoOverFour.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondTwoOverFour.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3300, '<>');

	var matrixDiamondThreeOverFour = paper.rect(549, 185, 43, 43);
	matrixDiamondThreeOverFour.transform('r45');
	matrixDiamondThreeOverFour.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondThreeOverFour.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3300, '<>');

	var matrixDiamondFourOverFour = paper.rect(579, 215, 43, 43);
	matrixDiamondFourOverFour.transform('r45');
	matrixDiamondFourOverFour.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondFourOverFour.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3300, '<>');


	var matrixDiamondFiveOverFour= paper.rect(609, 245, 43, 43);
	matrixDiamondFiveOverFour.transform('r45');
	matrixDiamondFiveOverFour.attr({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'});
	matrixDiamondFiveOverFour.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondFiveOverFour.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3400, '<>');


	var matrixDiamondSixOverFour = paper.rect(639, 275, 43, 43);
	matrixDiamondSixOverFour.transform('r45');
	matrixDiamondSixOverFour.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondSixOverFour.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3500, '<>');


	var matrixDiamondSevenOverFour = paper.rect(669, 305, 43, 43);
	matrixDiamondSevenOverFour.transform('r45');
	matrixDiamondSevenOverFour.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondSevenOverFour.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3600, '<>');


	var matrixDiamondEightOverFour = paper.rect(699, 335, 43, 43);
	matrixDiamondEightOverFour.transform('r45');
	matrixDiamondEightOverFour.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondEightOverFour.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3700, '<>');

	// Five

	var matrixDiamondOneOverFive = paper.rect(459, 155, 43, 43);
	matrixDiamondOneOverFive.transform('r45');
	matrixDiamondOneOverFive.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondOneOverFive.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3400, '<>');

	var matrixDiamondTwoOverFive = paper.rect(489, 185, 43, 43);
	matrixDiamondTwoOverFive.transform('r45');
	matrixDiamondTwoOverFive.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondTwoOverFive.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3400, '<>');

	var matrixDiamondThreeOverFive = paper.rect(519, 215, 43, 43);
	matrixDiamondThreeOverFive.transform('r45');
	matrixDiamondThreeOverFive.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondThreeOverFive.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3400, '<>');

	var matrixDiamondFourOverFive = paper.rect(549, 245, 43, 43);
	matrixDiamondFourOverFive.transform('r45');
	matrixDiamondFourOverFive.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondFourOverFive.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3400, '<>');

	var matrixDiamondFiveOverFive= paper.rect(579, 275, 43, 43);
	matrixDiamondFiveOverFive.transform('r45');
	matrixDiamondFiveOverFive.attr({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'});
	matrixDiamondFiveOverFive.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondFiveOverFive.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3400, '<>');

	var matrixDiamondSixOverFive = paper.rect(609, 305, 43, 43);
	matrixDiamondSixOverFive.transform('r45');
	matrixDiamondSixOverFive.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondSixOverFive.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3500, '<>');


	var matrixDiamondSevenOverFive = paper.rect(639, 335, 43, 43);
	matrixDiamondSevenOverFive.transform('r45');
	matrixDiamondSevenOverFive.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondSevenOverFive.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3600, '<>');


	var matrixDiamondEightOverFive = paper.rect(669, 365, 43, 43);
	matrixDiamondEightOverFive.transform('r45');
	matrixDiamondEightOverFive.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondEightOverFive.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3700, '<>');


	// Six

	var matrixDiamondOneOverSix = paper.rect(429, 185, 43, 43);
	matrixDiamondOneOverSix.transform('r45');
	matrixDiamondOneOverSix.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondOneOverSix.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3500, '<>');

	var matrixDiamondTwoOverSix = paper.rect(459, 215, 43, 43);
	matrixDiamondTwoOverSix.transform('r45');
	matrixDiamondTwoOverSix.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondTwoOverSix.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3500, '<>');

	var matrixDiamondThreeOverSix = paper.rect(489, 245, 43, 43);
	matrixDiamondThreeOverSix.transform('r45');
	matrixDiamondThreeOverSix.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondThreeOverSix.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3500, '<>');


	var matrixDiamondFourOverSix = paper.rect(519, 275, 43, 43);
	matrixDiamondFourOverSix.transform('r45');
	matrixDiamondFourOverSix.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondFourOverSix.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3500, '<>');


	var matrixDiamondFiveOverSix= paper.rect(549, 305, 43, 43);
	matrixDiamondFiveOverSix.transform('r45');
	matrixDiamondFiveOverSix.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondFiveOverSix.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3500, '<>');

	var matrixDiamondSixOverSix = paper.rect(579, 335, 43, 43);
	matrixDiamondSixOverSix.transform('r45');
	matrixDiamondSixOverSix.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondSixOverSix.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3500, '<>');

	var matrixDiamondSevenOverSix = paper.rect(609, 365, 43, 43);
	matrixDiamondSevenOverSix.transform('r45');
	matrixDiamondSevenOverSix.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondSevenOverSix.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3600, '<>');

	var matrixDiamondEightOverSix = paper.rect(639, 395, 43, 43);
	matrixDiamondEightOverSix.transform('r45');
	matrixDiamondEightOverSix.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondEightOverSix.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3700, '<>');



// Seven

	var matrixDiamondOneOverSeven = paper.rect(399, 215, 43, 43);
	matrixDiamondOneOverSeven.transform('r45');
	matrixDiamondOneOverSeven.attr({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'});
	matrixDiamondOneOverSeven.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondOneOverSeven.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3600, '<>');

	var matrixDiamondTwoOverSeven = paper.rect(429, 245, 43, 43);
	matrixDiamondTwoOverSeven.transform('r45');
	matrixDiamondTwoOverSeven.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondTwoOverSeven.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3600, '<>');


	var matrixDiamondThreeOverSeven = paper.rect(459, 275, 43, 43);
	matrixDiamondThreeOverSeven.transform('r45');
	matrixDiamondThreeOverSeven.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondThreeOverSeven.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3600, '<>');


	var matrixDiamondFourOverSeven = paper.rect(489, 305, 43, 43);
	matrixDiamondFourOverSeven.transform('r45');
	matrixDiamondFourOverSeven.attr({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'});
	matrixDiamondFourOverSeven.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondFourOverSeven.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3600, '<>');


	var matrixDiamondFiveOverSeven= paper.rect(519, 335, 43, 43);
	matrixDiamondFiveOverSeven.transform('r45');
	matrixDiamondFiveOverSeven.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondFiveOverSeven.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3600, '<>');

	var matrixDiamondSixOverSeven = paper.rect(549, 365, 43, 43);
	matrixDiamondSixOverSeven.transform('r45');
	matrixDiamondSixOverSeven.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondSixOverSeven.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3600, '<>');


	var matrixDiamondSevenOverSeven = paper.rect(579, 395, 43, 43);
	matrixDiamondSevenOverSeven.transform('r45');
	matrixDiamondSevenOverSeven.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondSevenOverSeven.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3600, '<>');


	var matrixDiamondEightOverSeven = paper.rect(609, 425, 43, 43);
	matrixDiamondEightOverSeven.transform('r45');
	matrixDiamondEightOverSeven.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondEightOverSeven.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3700, '<>');



	// Eight

	var matrixDiamondOneOverEight = paper.rect(369, 245, 43, 43);
	matrixDiamondOneOverEight.transform('r45');
	matrixDiamondOneOverEight.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondOneOverEight.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3700, '<>');


	var matrixDiamondTwoOverEight = paper.rect(399, 275, 43, 43);
	matrixDiamondTwoOverEight.transform('r45');
	matrixDiamondTwoOverEight.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondTwoOverEight.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3700, '<>');


	var matrixDiamondThreeOverEight = paper.rect(429, 305, 43, 43);
	matrixDiamondThreeOverEight.transform('r45');
	matrixDiamondThreeOverEight.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondThreeOverEight.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3700, '<>');


	var matrixDiamondFourOverEight = paper.rect(459, 335, 43, 43);
	matrixDiamondFourOverEight.transform('r45');
	matrixDiamondFourOverEight.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondFourOverEight.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3700, '<>');


	var matrixDiamondFiveOverEight= paper.rect(489, 365, 43, 43);
	matrixDiamondFiveOverEight.transform('r45');
	matrixDiamondFiveOverEight.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondFiveOverEight.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3700, '<>');


	var matrixDiamondSixOverEight = paper.rect(519, 395, 43, 43);
	matrixDiamondSixOverEight.transform('r45');
	matrixDiamondSixOverEight.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondSixOverEight.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3700, '<>');


	var matrixDiamondSevenOverEight = paper.rect(549, 425, 43, 43);
	matrixDiamondSevenOverEight.transform('r45');
	matrixDiamondSevenOverEight.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondSevenOverEight.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3700, '<>');


	var matrixDiamondEightOverEight = paper.rect(579, 455, 43, 43);
	matrixDiamondEightOverEight.transform('r45');
	matrixDiamondEightOverEight.attr({fill: '#7777C7', 'fill-opacity': '0', stroke: '#ccc', 'stroke-width': 0, 'stroke-opacity': '0'});
	matrixDiamondEightOverEight.animate({fill: '#7777C7', 'fill-opacity': '.7', stroke: '#ccc', 'stroke-width': 1, 'stroke-opacity': '11'}, 3700, '<>');


	// iCHING TRIGRAMS

	// UPPER
	// should I put the trigrams on the inside? that would look cleaner!


	// Upper Chien

	var iChingUpperChien = paper.set();

	iChingUpperChien.push(

		paper.rect(585, 43, 31, 5),

		paper.rect(585, 53, 31, 5),

		paper.rect(585, 63, 31, 5)

	);

	iChingUpperChien.attr({'stroke-width': '0','stroke-opacity': '0','fill': '#FFF', 'fill-opacity': '0'});
	iChingUpperChien.animate({'stroke-width': '0','stroke-opacity': '.7','fill': '#FFF', 'fill-opacity': '.7'}, 3000, '<>');

	// Upper Sun

	var iChingUpperSun = paper.set();

	iChingUpperSun.push(

		paper.rect(615, 73, 31, 5),

		paper.rect(615, 83, 31, 5),

		paper.rect(615, 93, 11, 5),

		paper.rect(635, 93, 11, 5)

	);

	iChingUpperSun.attr({'stroke-width': '0','stroke-opacity': '0','fill': '#FFF', 'fill-opacity': '0'});
	iChingUpperSun.animate({'stroke-width': '0','stroke-opacity': '.7','fill': '#FFF', 'fill-opacity': '.7'}, 3100, '<>');
	// Upper Tui

	var iChingUpperTui = paper.set();

	iChingUpperTui.push(

		paper.rect(645, 103, 11, 5),

		paper.rect(665, 103, 11, 5),

		paper.rect(645, 113, 31, 5),

		paper.rect(645, 123, 31, 5)


	);

	iChingUpperTui.attr({'stroke-width': '0','stroke-opacity': '0','fill': '#FFF', 'fill-opacity': '0'});
	iChingUpperTui.animate({'stroke-width': '0','stroke-opacity': '.7','fill': '#FFF', 'fill-opacity': '.7'}, 3200, '<>');

	// Upper Kan

	var iChingUpperKan = paper.set();

	iChingUpperKan.push(

		paper.rect(675, 133, 11, 5),

		paper.rect(695, 133, 11, 5),

		paper.rect(675, 143, 31, 5),

		paper.rect(675, 153, 11, 5),

		paper.rect(695, 153, 11, 5)

	);

	iChingUpperKan.attr({'stroke-width': '0','stroke-opacity': '0','fill': '#FFF', 'fill-opacity': '0'});
	iChingUpperKan.animate({'stroke-width': '0','stroke-opacity': '.7','fill': '#FFF', 'fill-opacity': '.7'}, 3300, '<>');

	// Upper Li

	var iChingUpperLi = paper.set();

	iChingUpperLi.push(

		paper.rect(705, 163, 31, 5),

		paper.rect(705, 173, 11, 5),

		paper.rect(725, 173, 11, 5),

		paper.rect(705, 183, 31, 5)

	);

	iChingUpperLi.attr({'stroke-width': '0','stroke-opacity': '0','fill': '#FFF', 'fill-opacity': '0'});
	iChingUpperLi.animate({'stroke-width': '0','stroke-opacity': '.7','fill': '#FFF', 'fill-opacity': '.7'}, 3400, '<>');


	// Upper Ken

	var iChingUpperKen = paper.set();

	iChingUpperKen.push(

		paper.rect(735, 193, 31, 5),

		paper.rect(735, 203, 11, 5),

		paper.rect(755, 203, 11, 5),

		paper.rect(735, 213, 11, 5),

		paper.rect(755, 213, 11, 5)

	);

	iChingUpperKen.attr({'stroke-width': '0','stroke-opacity': '0','fill': '#FFF', 'fill-opacity': '0'});
	iChingUpperKen.animate({'stroke-width': '0','stroke-opacity': '.7','fill': '#FFF', 'fill-opacity': '.7'}, 3500, '<>');

	// Upper Chen

	var iChingUpperChen = paper.set();

	iChingUpperChen.push(

		paper.rect(765, 223, 11, 5),

		paper.rect(785, 223, 11, 5),

		paper.rect(765, 233, 11, 5),

		paper.rect(785, 233, 11, 5),

		paper.rect(765, 243, 31, 5)

	);

	iChingUpperChen.attr({'stroke-width': '0','stroke-opacity': '0','fill': '#FFF', 'fill-opacity': '0'});
	iChingUpperChen.animate({'stroke-width': '0','stroke-opacity': '.7','fill': '#FFF', 'fill-opacity': '.7'}, 3600, '<>');


// Upper Kun

	var iChingUpperKun = paper.set();

	iChingUpperKun.push(

		paper.rect(795, 253, 11, 5),

		paper.rect(815, 253, 11, 5),

		paper.rect(795, 263, 11, 5),

		paper.rect(815, 263, 11, 5),

		paper.rect(795, 273, 11, 5),

		paper.rect(815, 273, 11, 5)

	);

	iChingUpperKun.attr({'stroke-width': '0','stroke-opacity': '0','fill': '#FFF', 'fill-opacity': '0'});
	iChingUpperKun.animate({'stroke-width': '0','stroke-opacity': '.7','fill': '#FFF', 'fill-opacity': '.7'},3700, '<>');


	// Lower Trigrams

	// Upper Sun

	var iChingLowerSun = paper.set();

	iChingLowerSun.push(

		paper.rect(555, 73, 31, 5),

		paper.rect(555, 83, 31, 5),

		paper.rect(555, 93, 11, 5),

		paper.rect(575, 93, 11, 5)

	);

	iChingLowerSun.attr({'stroke-width': '0','stroke-opacity': '0','fill': '#FFF', 'fill-opacity': '0'});
	iChingLowerSun.animate({'stroke-width': '0','stroke-opacity': '.7','fill': '#FFF', 'fill-opacity': '.7'}, 3100, '<>');

	// Lower Tui

	var iChingLowerTui = paper.set();

	iChingLowerTui.push(

		paper.rect(525, 103, 11, 5),

		paper.rect(545, 103, 11, 5),

		paper.rect(525, 113, 31, 5),

		paper.rect(525, 123, 31, 5)


	);

	iChingLowerTui.attr({'stroke-width': '0','stroke-opacity': '0','fill': '#FFF', 'fill-opacity': '0'});
	iChingLowerTui.animate({'stroke-width': '0','stroke-opacity': '.7','fill': '#FFF', 'fill-opacity': '.7'}, 3200, '<>');

	// Lower Kan

	var iChingLowerKan = paper.set();

	iChingLowerKan.push(

		paper.rect(495, 133, 11, 5),

		paper.rect(515, 133, 11, 5),

		paper.rect(495, 143, 31, 5),

		paper.rect(495, 153, 11, 5),

		paper.rect(515, 153, 11, 5)

	);

	iChingLowerKan.attr({'stroke-width': '0','stroke-opacity': '0','fill': '#FFF', 'fill-opacity': '0'});
	iChingLowerKan.animate({'stroke-width': '0','stroke-opacity': '.7','fill': '#FFF', 'fill-opacity': '.7'}, 3300, '<>');

	// Lower Li

	var iChingLowerLi = paper.set();

	iChingLowerLi.push(

		paper.rect(465, 163, 31, 5),

		paper.rect(465, 173, 11, 5),

		paper.rect(485, 173, 11, 5),

		paper.rect(465, 183, 31, 5)

	);

	iChingLowerLi.attr({'stroke-width': '0','stroke-opacity': '0','fill': '#FFF', 'fill-opacity': '0'});
	iChingLowerLi.animate({'stroke-width': '0','stroke-opacity': '.7','fill': '#FFF', 'fill-opacity': '.7'}, 3400, '<>');

	// Lower Ken

	var iChingLowerKen = paper.set();

	iChingLowerKen.push(

		paper.rect(435, 193, 31, 5),

		paper.rect(455, 203, 11, 5),

		paper.rect(435, 203, 11, 5),

		paper.rect(455, 213, 11, 5),

		paper.rect(435, 213, 11, 5)

	);

	iChingLowerKen.attr({'stroke-width': '0','stroke-opacity': '0','fill': '#FFF', 'fill-opacity': '0'});
	iChingLowerKen.animate({'stroke-width': '0','stroke-opacity': '.7','fill': '#FFF', 'fill-opacity': '.7'}, 3500, '<>');

	// Lower Chen

	var iChingLowerChen = paper.set();

	iChingLowerChen.push(

		paper.rect(405, 223, 11, 5),

		paper.rect(425, 223, 11, 5),

		paper.rect(405, 233, 11, 5),

		paper.rect(425, 233, 11, 5),

		paper.rect(405, 243, 31, 5)

	);

	iChingLowerChen.attr({'stroke-width': '0','stroke-opacity': '0','fill': '#FFF', 'fill-opacity': '0'});
	iChingLowerChen.animate({'stroke-width': '0','stroke-opacity': '.7','fill': '#FFF', 'fill-opacity': '.7'}, 3600, '<>');


// Lower Kun

	var iChingLowerKun = paper.set();

	iChingLowerKun.push(

		paper.rect(375, 253, 11, 5),

		paper.rect(395, 253, 11, 5),

		paper.rect(375, 263, 11, 5),

		paper.rect(395, 263, 11, 5),

		paper.rect(375, 273, 11, 5),

		paper.rect(395, 273, 11, 5)

	);

	iChingLowerKun.attr({'stroke-width': '0','stroke-opacity': '.7','fill': '#FFF', 'fill-opacity': '.7'});
	iChingLowerKun.attr({'stroke-width': '0','stroke-opacity': '0','fill': '#FFF', 'fill-opacity': '0'});
	iChingLowerKun.animate({'stroke-width': '0','stroke-opacity': '.7','fill': '#FFF', 'fill-opacity': '.7'}, 3700, '<>');


}
