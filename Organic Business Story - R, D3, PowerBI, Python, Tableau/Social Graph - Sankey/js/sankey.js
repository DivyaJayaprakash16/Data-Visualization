var svg = d3.select("svg").attr("style", "outline: thin solid grey;"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var formatNumber = d3.format(",.0f"),
    format = function(d) { return formatNumber(d) + " TWh"; },
    color = d3.scaleOrdinal(d3.schemeCategory10);

var data = {"nodes": [
{"name":"California Organic farms: 11,119,504 Acres"}, // 0

{"name":"Beans: 5,268 Acres"}, // 1
{"name":"Fruits: 92,819 Acres"}, // 2
{"name":"Grains: 62,387 Acres"}, // 3    
{"name":"Greenhouse: 5,306 Acres"}, // 4
{"name":"Seeds: 6,047 Acres"}, // 5
{"name":"Veggies: 88,724 Acres"}, // 6
{"name":"Livestock 1: 81,831 Acres"}, // 7
{"name":"Livestock 2: 10,777,122 Acres"}, // 8

// Beans: Soybeans 	 Dry beans 	 Dry peas & lentils 	 Unclassified/other
{"name":"Soybeans"}, // 9
{"name":"Dry beans"}, // 10
{"name":"Dry peas & lentils"}, // 11

// Fruits: Tree nuts	Citrus		Apples		Grapes		Berries		Subtropical		Unclassified/other
{"name":"Tree nuts"}, // 12
{"name":"Citrus"}, // 13 
{"name":"Apples"}, // 14    
{"name":"Grapes"}, // 15    
{"name":"Berries"}, // 16    
{"name":"Subtropical"}, // 17   

// Grains: Corn 	 Wheat 	 Oats 	 Barley 	 Sorghum 	 Rice	 Spelt  	 Buckwheat 	 Rye 	 Other* 
{"name":"Corn"}, // 18
{"name":"Wheat"}, // 19
{"name":"Oats"}, // 20
{"name":"Barley"}, // 21
{"name":"Sorghum"}, // 22
{"name":"Rice"}, // 23
{"name":"Spelt"}, // 24 
{"name":"Buckwheat"}, // 25
{"name":"Rye"}, // 26

// Greenhouse: Cultivated herbs		Wildcrafted herbs	Cut flowers 	Cultivated and wild mushrooms 	Greenhouse/nursery
{"name":"Cultivated herbs"}, // 27
{"name":"Wildcrafted herbs"}, // 28
{"name":"Cut flowers"}, // 29
{"name":"Cultivated and wild mushrooms"}, // 30
{"name":"Greenhouse/nursery"}, // 31

// Seeds: Flax	Sunflowers		Unclassified/other
{"name":"Flax"}, // 32
{"name":"Sunflowers"}, // 33

// Veggies: Tomatoes	Lettuce		Carrots		Mixed Vegetables	Unclassified/other	
{"name":"Tomatoes"}, // 34
{"name":"Lettuce"}, // 35
{"name":"Carrots"}, // 36
{"name":"Mixed Vegetables"}, // 37

// Livestock 1: Beef cows 	 Milk cows 	 Other cows 	 Hogs & pigs  	 Sheep & lambs  
{"name":"Beef cows"}, // 38
{"name":"Milk cows"}, // 39
{"name":"Other cows"}, // 40
{"name":"Hogs & pigs"}, // 41
{"name":"Sheep & lambs"}, // 42

// Livestock 2: Layer Hens   	 Broilers 	 Turkeys	Unclassified/other
{"name":"Layer Hens"}, // 43
{"name":"Broilers"}, // 44
{"name":"Turkeys"}, // 45



{"name":"Unclassified/other"} // 46
],
"links":[
// different category of crop
    {"source":0,"target":1,"value":5268},
    {"source":0,"target":2,"value":92819},
    {"source":0,"target":3,"value":62387},
    {"source":0,"target":4,"value":5306},
	{"source":0,"target":5,"value":6047},
	{"source":0,"target":6,"value":88724},
	{"source":0,"target":7,"value":81831},
	{"source":0,"target":8,"value":10777.2},

	
// Each crop
// Beans: 11-13 Soybeans 	 Dry beans 	 Dry peas & lentils 	 Unclassified/other
	{"source":1,"target":9,"value":2},
	{"source":1,"target":10,"value":4415},
	{"source":1,"target":11,"value":817},
	{"source":1,"target":46,"value":35},
	
// Fruits: 14-19 Tree nuts	Citrus	Apples	Grapes	Berries	Subtropical		Unclassified/other
    {"source":2,"target":12,"value":14980},
	{"source":2,"target":13,"value":11521},
	{"source":2,"target":14,"value":2322},
	{"source":2,"target":15,"value":33869},
	{"source":2,"target":16,"value":5132},
	{"source":2,"target":17,"value":9651},
	{"source":2,"target":46,"value":15344},
	
// Grains: 20-29 Corn 	 Wheat 	 Oats 	 Barley 	 Sorghum 	 Rice 1/ 	 Spelt  	 Buckwheat 	 Rye 	 Other* 
    {"source":3,"target":18,"value":4730},
	{"source":3,"target":19,"value":18622},
	{"source":3,"target":20,"value":3655},
	{"source":3,"target":21,"value":8568},
	{"source":3,"target":22,"value":1983},
	{"source":3,"target":23,"value":18393},
	{"source":3,"target":24,"value":1},
	{"source":3,"target":25,"value":23},
	{"source":3,"target":26,"value":1614},
	{"source":3,"target":46,"value":4796},
	
// Greenhouse: 30-34 Cultivated herbs	Wildcrafted herbs	Cut flowers 	Cultivated and wild mushrooms 	Greenhouse/nursery
    {"source":4,"target":27,"value":3195},
	{"source":4,"target":28,"value":1602},
	{"source":4,"target":29,"value":147},
	{"source":4,"target":30,"value":19},
	{"source":4,"target":31,"value":344},
	{"source":4,"target":46,"value":5306},
	
// Seeds: 35-36 Flax	Sunflowers		Unclassified/other
    {"source":5,"target":32,"value":1},
	{"source":5,"target":33,"value":366},
	{"source":5,"target":46,"value":5680},
	
// Veggies: 37-40 Tomatoes	Lettuce	Carrots		Mixed Vegetables	Unclassified/other	
    {"source":6,"target":34,"value":7930},
	{"source":6,"target":35,"value":26606},
	{"source":6,"target":36,"value":11382},
	{"source":6,"target":37,"value":19076},
	{"source":6,"target":46,"value":23730},
	
// Livestock 1: 41-45 Beef cows 	 Milk cows 	 Other cows 	 Hogs & pigs  	 Sheep & lambs  
    {"source":7,"target":38,"value":14024},    
	{"source":7,"target":39,"value":57809},    
	{"source":7,"target":40,"value":7594},    
	{"source":7,"target":41,"value":1810},    
	{"source":7,"target":42,"value":594},        
	
// Livestock 2: 46-48 Layer Hens   	 Broilers 	 Turkeys	Unclassified/other
    {"source":8,"target":43,"value":1108},
	{"source":8,"target":44,"value":9440},
	{"source":8,"target":45,"value":225.8},
	{"source":8,"target":46,"value":3.4},
	
]};


var sankey = d3.sankey()
    .nodeWidth(15)			//This will make the node wider or thinner
    .nodePadding(10)		//This will make the node taller or shorter
	.nodeAlign(d3.sankeyLeft)        // this is what I did to make it left justified 
	// sources: https://github.com/d3/d3-sankey#sankey_nodeAlign
	// and https://github.com/d3/d3-sankey#alignments
    .extent([[1, 1], [width - 1, height - 6]]);

var link = svg.append("g")
    .attr("class", "links")
    .attr("fill", "none")
    //.attr("stroke", "#000")
	.attr("stroke-opacity", 0.2)
  .selectAll("path");

  
var node = svg.append("g")
    .attr("class", "nodes")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10)
  .selectAll("g");
              
sankey(data);


/*
link = link
    .data(data.links)
    .enter().append("path")
      .attr("d", d3.sankeyLinkHorizontal())
      .attr("stroke-width", function(d) { return Math.max(1, d.width); })
	  //.attr("stroke", "#000")    // If statement needs to go here in order to change the color
	.attr("stroke", function(d) {
						if (d.value == 81831) {
							return "red";
							} else {
								return "#000";
							}
			}) 
	  ;
*/


//http://www.color-hex.com/color-names.html


link = link
    .data(data.links)
    .enter().append("path")
      .attr("d", d3.sankeyLinkHorizontal())
      .attr("stroke-width", function(d) { return Math.max(1, d.width); })
	  //.attr("stroke", "#000")    // If statement needs to go here in order to change the color
	.attr("stroke", function(d) {
						if (d.value == 5268 || d.value == 2 || d.value == 4415 || d.value == 817 || d.value == 35) { //1 beans
							return "purple";
							} else {
								if (d.value == 92819 || d.value == 14980 || d.value == 11521 || d.value == 2322 || d.value == 33869 || d.value == 5132 || d.value == 9651 || d.value == 15344) { //2 Fruits
									return "green";
									} else {
										if (d.value == 62387 || d.value == 4730 || d.value == 18622 || d.value == 3655 || d.value == 8568 || d.value == 1983 || d.value == 18393 || d.value == 1  || d.value == 23 || d.value == 1614 || d.value == 4796) { //3 Grains
											return "red";
											} else {
												if (d.value == 5306 || d.value == 3195 || d.value == 1602 || d.value == 147 || d.value == 19 || d.value == 344 || d.value == 5306) { //4 greeenhouse
													return "#8b008b";
													} else {
														if (d.value == 6047 || d.value == 1 || d.value == 366 || d.value == 5680) { //5 Seeds
															return "#8b3a62";
															} else {
																if (d.value == 88724 || d.value == 7930 || d.value ==26606  || d.value == 11382 || d.value == 19076 || d.value == 23730) { //6 Veggies
																	return "#ff69b4";
																	} else {
																		if (d.value == 81831 || d.value == 14024 || d.value == 57809 || d.value == 7594 || d.value == 1810 || d.value == 594) { //7 Livestock 1
																			return "#000";
																			} else { //8 Livestock 2
																				return "#000";
																			}
	}}}}}}})
	  ;

// link hover values
link.append("title")
      .text(function(d) { return d.source.name + " → " + d.target.name + "\n" + format(d.value); });

node = node
    .data(data.nodes)
    .enter().append("g");

node.append("rect")
      .attr("x", function(d) { return d.x0; })
      .attr("y", function(d) { return d.y0; })
      .attr("height", function(d) { return d.y1 - d.y0; })
      .attr("width", function(d) { return d.x1 - d.x0; })
      .attr("fill", function(d) { return color(d.name.replace(/ .*/, "")); })
      .attr("stroke", "#000");

node.append("text")
      .attr("x", function(d) { return d.x0 - 6; })
      .attr("y", function(d) { return (d.y1 + d.y0) / 2; })
      .attr("dy", "0.35em")
      .attr("text-anchor", "end")
      .text(function(d) { return d.name; })
    .filter(function(d) { return d.x0 < width / 2; })
      .attr("x", function(d) { return d.x1 + 6; })
      .attr("text-anchor", "start");

svg.append("text")
        .attr("x", 10)
        .attr("y", 30)
        .attr("class", "graphTitle");

svg.append("text")
        .attr("x", width - 80)
        .attr("y", height - 10)
        .attr("class", "footnote")

		
		
		
		
		
		
		
		