var svg = d3.select("svg").attr("style", "outline: thin solid grey;"),
    margin = {top: 50, right: 60, bottom: 60, left: 50},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var dataBA = [
        {"date": "31-Dec-14", "Revenue": 0, "Income": 0},
		{"date": "31-Mar-15", "Revenue": 48586000, "Income": 0},
        {"date": "30-Jun-15", "Revenue": 73271000, "Income": 0},
        {"date": "30-Sep-15", "Revenue": 103283000, "Income": 0},
        {"date": "31-Dec-15", "Revenue": 116663000, "Income": 0},
        {"date": "31-Mar-16", "Revenue": 172098000, "Income": 3017000},
        {"date": "30-Jun-16", "Revenue": 201924000, "Income": 5533000},
        {"date": "30-Sep-16", "Revenue": 205452000, "Income": 3010000},
        {"date": "30-Dec-16", "Revenue": 215942000, "Income": 5530000},		
        {"date": "31-Mar-17", "Revenue": 244843000, "Income": -52190000},
		{"date": "30-Jun-17", "Revenue": 238060000, "Income": -31630000},
		{"date": "30-Sep-17", "Revenue": 210640000, "Income": -87200000}
    ];
	
var dataHF = [
        {"date": "31-Dec-14", "Revenue": 83157513.12, "Income": 45962131.16},
        {"date": "31-Mar-15", "Revenue": 54016466.00, "Income": 29268834.00},
        {"date": "30-Jun-15", "Revenue": 79834909.00, "Income": 41761629.00},
        {"date": "30-Sep-15", "Revenue": 101727045.00, "Income": 51755865.00},
        {"date": "31-Dec-15", "Revenue": 127250420.08, "Income": 66232039.93},
        {"date": "31-Mar-16", "Revenue": 168236306.00, "Income": 92922599.00},
        {"date": "30-Jun-16", "Revenue": 178587479.00, "Income": 102797856.00},
        {"date": "30-Sep-16", "Revenue": 174661172.00, "Income": 100180318.00},
        {"date": "31-Dec-16", "Revenue": 188810154.68, "Income": 108205451.55},
        {"date": "31-Mar-17", "Revenue": 244263887.00, "Income": 140633178.00},
        {"date": "30-Jun-17", "Revenue": 273770679.00, "Income": 162644293.00},
		{"date": "30-Sep-17", "Revenue": 257827493.00, "Income": 155029637.00}
    ];
		
var dataWW = [
        {"date": "3-Jan-15", "Revenue": 327827000.00, "Income": 166270000.00},
		{"date": "4-Apr-15", "Revenue": 322103000.00, "Income": 157303000.00},
        {"date": "4-Jul-15", "Revenue": 309754000.00, "Income": 159364000.00},
        {"date": "3-Oct-15", "Revenue": 273324000.00, "Income": 136622000.00},
        {"date": "2-Jan-16", "Revenue": 259238000.00, "Income": 120798000.00},
        {"date": "2-Apr-16", "Revenue": 306910000.00, "Income": 149673000.00},
        {"date": "2-Jul-16", "Revenue": 309761000.00, "Income": 161048000.00},
        {"date": "1-Oct-16", "Revenue": 280819000.00, "Income": 144303000.00},
        {"date": "31-Dec-16", "Revenue": 267412000.00, "Income": 130477000.00},
		{"date": "1-Apr-17", "Revenue": 329060000.00, "Income": 10650000.00},
		{"date": "1-Jul-17", "Revenue": 341670000.00, "Income": 45170000.00},
	    {"date": "30-Sep-17", "Revenue": 323690000.00, "Income": 44720000.00}
    ];
	
var dataNUTRI = [
        {"date": "31-Dec-14", "Revenue": 79230000.00, "Income": 40800000.00},
        {"date": "31-Mar-15", "Revenue": 137230000.00, "Income": 71350000.00},
        {"date": "30-Jun-15", "Revenue": 130260000.00, "Income": 67690000.00},
        {"date": "30-Sep-15", "Revenue": 104880000.00, "Income": 53120000.00},
        {"date": "31-Dec-15", "Revenue": 90250000.00, "Income": 45860000.00},
        {"date": "31-Mar-16", "Revenue": 162110000.00, "Income": 83550000.00},
        {"date": "30-Jun-16", "Revenue": 149820000.00, "Income": 80680000.00},
        {"date": "30-Sep-16", "Revenue": 124570000.00, "Income": 66870000.00},
        {"date": "31-Dec-16", "Revenue": 108950000.00, "Income": 57350000.00},
        {"date": "31-Mar-17", "Revenue": 212680000.00, "Income": 114440000.00},
        {"date": "30-Jun-17", "Revenue": 194890000.00, "Income": 105790000.00},
        {"date": "30-Sep-17", "Revenue": 158150000.00, "Income": 85790000.00}
    ];
	

	
	
var parseTime = d3.timeParse("%d-%b-%y");
// %d - zero-padded day of the month as a decimal number [01,31]
// %b - abbreviated month name
// %y - year without century as a decimal number [00,99]

var x = d3.scaleTime()
    .range([0, width])
  .domain([new Date(2015, 0, 1), new Date(2017, 11, 1)]); // hard code x axis ranges
//    .domain(d3.extent(dataHF, function (d) { return parseTime(d.date); })); // returns min and max

var y = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 350000000]);
//	.domain([0, d3.max(dataHF, function (d) { return d.Revenue + d.Income; })]);
// Using same x and y scale function for all lines


//-----------------------------------------------------------------
var line = d3.line()
    .x(function (d) { return x(parseTime(d.date)); })
    .y(function (d) { return y(d.Revenue); });

var line2 = d3.line()
    .x(function (d) { return x(parseTime(d.date)); })
    .y(function (d) { return y(d.Income); });

//-----------------------------------------------------------------

// Blue Apron

g.append("path")
      .datum(dataBA)
      .attr("d", line)
      .attr("class", "path");

g.selectAll("dot")
        .data(dataBA)
        .enter().append("circle")
        .attr("r", 5)
        .attr("cx", function(d) { return x(parseTime(d.date)); })
        .attr("cy", function(d) { return y(d.Revenue); })
        .style("fill", "Darkblue")  //this needs to be darker than the line
        .style("stroke", "black")
        .style("stroke-width", 2);
	  
g.append("text")
        .attr("class", "pathtext")
		.attr("transform", "translate(" + (width + 50) + "," + y(dataBA[dataBA.length-6].Revenue) + ")")
		.attr("dy", "8px") // offset 4 pixels from line
		.attr("text-anchor", "end") // to right justify, "start" to left jusitfy and "middle" to center
		.style("fill", "white")
		.text("Blue Apron Revenue")
   .transition()
        .delay(6000)
		.style("fill", "Darkblue");

//-----------------------------------------------------------------
/*
g.append("path")
      .datum(dataBA)
      .attr("d", line2)
      .attr("class", "path2");

g.append("text")
        .attr("class", "pathtext")
		.attr("transform", "translate(" + (width + 50) + "," + y(dataBA[dataBA.length-1].Income) + ")")
		.attr("dy", "8px") // offset 4 pixels from line
		.attr("text-anchor", "end") // to right justify, "start" to left jusitfy and "middle" to center
		.style("fill", "white")
		.text("Blue Apron Income")
   .transition()
        .delay(6000)
		.style("fill", "blue");
	*/	
//-----------------------------------------------------------------

// HelloFresh

g.append("path")
      .datum(dataHF)
      .attr("d", line)
      .attr("class", "path5");

g.selectAll("dot")
        .data(dataHF)
        .enter().append("circle")
        .attr("r", 5)
        .attr("cx", function(d) { return x(parseTime(d.date)); })
        .attr("cy", function(d) { return y(d.Revenue); })
        .style("fill", "darkred")  //this needs to be darker than the line
        .style("stroke", "black")
        .style("stroke-width", 2);
	  
g.append("text")
        .attr("class", "pathtext")
		.attr("transform", "translate(" + (width + 50) + "," + y(dataHF[dataHF.length-3].Revenue) + ")")
		.attr("dy", "8px") // offset 4 pixels from line
		.attr("text-anchor", "end") // to right justify, "start" to left jusitfy and "middle" to center
		.style("fill", "white")
		.text("HelloFresh Revenue")
   .transition()
        .delay(6000)
		.style("fill", "darkred");

//-----------------------------------------------------------------
/*
g.append("path")
      .datum(dataHF)
      .attr("d", line2)
      .attr("class", "path4");

g.append("text")
        .attr("class", "pathtext")
		.attr("transform", "translate(" + (width + 50) + "," + y(dataHF[dataHF.length-1].Income) + ")")
		.attr("dy", "8px") // offset 4 pixels from line
		.attr("text-anchor", "end") // to right justify, "start" to left jusitfy and "middle" to center
		.style("fill", "white")
		.text("HelloFresh Income")
   .transition()
        .delay(6000)
		.style("fill", "lightseagreen");
*/
//-----------------------------------------------------------------

//Weight Watchers

g.append("path")
      .datum(dataWW)
      .attr("d", line)
      .attr("class", "path3");

g.selectAll("dot")
        .data(dataWW)
        .enter().append("circle")
        .attr("r", 5)
        .attr("cx", function(d) { return x(parseTime(d.date)); })
        .attr("cy", function(d) { return y(d.Revenue); })
        .style("fill", "teal")  //this needs to be darker than the line
        .style("stroke", "black")
        .style("stroke-width", 2);
	 
g.append("text")
        .attr("class", "pathtext")
		.attr("transform", "translate(" + (width + 50) + "," + y(dataWW[dataWW.length-6].Revenue) + ")")
		.attr("dy", "8px") // offset 4 pixels from line
		.attr("text-anchor", "end") // to right justify, "start" to left jusitfy and "middle" to center
		.style("fill", "white")
		.text("Weight Watchers Revenue")
   .transition()
        .delay(6000)
		.style("fill", "teal");


//-----------------------------------------------------------------
/*
g.append("path")
      .datum(dataWW)
      .attr("d", line2)
      .attr("class", "path6");

g.append("text")
        .attr("class", "pathtext")
		.attr("transform", "translate(" + (width + 50) + "," + y(dataWW[dataWW.length-1].Income) + ")")
		.attr("dy", "8px") // offset 4 pixels from line
		.attr("text-anchor", "end") // to right justify, "start" to left jusitfy and "middle" to center
		.style("fill", "white")
		.text("Weight Watchers Income")
   .transition()
        .delay(6000)
		.style("fill", "firebrick");

	*/	
//-----------------------------------------------------------------

// Nutisystem

g.append("path")
      .datum(dataNUTRI)
      .attr("d", line)
      .attr("class", "path7");

g.selectAll("dot")
        .data(dataNUTRI)
        .enter().append("circle")
        .attr("r", 5)
        .attr("cx", function(d) { return x(parseTime(d.date)); })
        .attr("cy", function(d) { return y(d.Revenue); })
        .style("fill", "DarkGreen")  //this needs to be darker than the line
        .style("stroke", "black")
        .style("stroke-width", 2);
	 
g.append("text")
        .attr("class", "pathtext")
		.attr("transform", "translate(" + (width + 50) + "," + y(dataNUTRI[dataNUTRI.length-6].Revenue) + ")")
		.attr("dy", "8px") // offset 4 pixels from line
		.attr("text-anchor", "end") // to right justify, "start" to left jusitfy and "middle" to center
		.style("fill", "white")
		.text("Nutisystem Revenue")
   .transition()
        .delay(6000)
		.style("fill", "DarkGreen");

//-----------------------------------------------------------------
/*
g.append("path")
      .datum(dataNUTRI)
      .attr("d", line2)
      .attr("class", "path8");

g.append("text")
        .attr("class", "pathtext")
		.attr("transform", "translate(" + (width + 50) + "," + y(dataNUTRI[dataNUTRI.length-1].Income) + ")")
		.attr("dy", "8px") // offset 4 pixels from line
		.attr("text-anchor", "end") // to right justify, "start" to left jusitfy and "middle" to center
		.style("fill", "white")
		.text("Nutisystem Income")
   .transition()
        .delay(6000)
		.style("fill", "Green");
*/		
//-----------------------------------------------------------------



g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
	  .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%b %Y")))
//    .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%Y-%m-%d")))
//    .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%A %d %B %Y")))
      .selectAll("text") 
        .style("text-anchor", "start")
        .attr("transform", "rotate(30)")
      .attr("class", "axis");

g.append("g")
      .call(d3.axisLeft(y)
           .tickFormat(d3.format("$.2s"))  // something about this is making the numbers round
           .tickValues([50000000, 100000000, 150000000, 200000000, 250000000, 300000000, 350000000]))
      .attr("class", "axis")
    .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
	  .attr("x", -60)
      .attr("dy", "0.7em")
      .attr("text-anchor", "end")
      .text("US Dollar");

svg.append("text")
        .attr("x", 10)
        .attr("y", 30)
        .attr("class", "graphTitle")
        .text("Quarterly Revenue in USD");

svg.append("text")
        .attr("x", width - 100)
        .attr("y", height + margin.top + margin.bottom - 10)
        .attr("class", "footnote")
        .text("data based on company financial records");

//----------------------------------------------------------------
// "Hide" lines behind white rectangle then transition it to no width
svg.append("rect")
    .attr("x", -1 * (width + 52))
    .attr("y", -1 * height - 48)
    .attr("height", height)
    .attr("width", width)
    .attr("transform", "rotate(180)")
    .style("fill", "#ffffff")
.transition()
    .duration(6000)
    .attr("width", 0);

