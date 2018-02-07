var data = {"nodes": [
{"name":"California"}, // 0

{"name":"Organic farms"}, // 1
{"name":"Other Land"}, // 2

{"name":"Beans"}, // 3
{"name":"Fruits"}, // 4
{"name":"Grains"}, // 5    
{"name":"Greenhouse"}, // 6
{"name":"Seeds"}, // 7
{"name":"Veggies"}, // 8
{"name":"Livestock 1"}, // 9
{"name":"Livestock 2"}, // 10

// Beans: Soybeans 	 Dry beans 	 Dry peas & lentils 	 Unclassified/other
{"name":"Soybeans"}, // 11
{"name":"Dry beans"}, // 12
{"name":"Dry peas & lentils"}, // 13

// Fruits: Tree nuts	Citrus		Apples		Grapes		Berries		Subtropical		Unclassified/other
{"name":"Tree nuts"}, // 14    
{"name":"Citrus"}, // 15    
{"name":"Apples"}, // 16    
{"name":"Grapes"}, // 17    
{"name":"Berries"}, // 18    
{"name":"Subtropical"}, // 19    

// Grains: Corn 	 Wheat 	 Oats 	 Barley 	 Sorghum 	 Rice	 Spelt  	 Buckwheat 	 Rye 	 Other* 
{"name":"Corn"}, // 20
{"name":"Wheat"}, // 21 
{"name":"Oats"}, // 22
{"name":"Barley"}, // 23
{"name":"Sorghum"}, // 24
{"name":"Rice"}, // 25
{"name":"Spelt"}, // 26 
{"name":"Buckwheat"}, // 27
{"name":"Rye"}, // 28

// Greenhouse: Cultivated herbs		Wildcrafted herbs	Cut flowers 	Cultivated and wild mushrooms 	Greenhouse/nursery
{"name":"Cultivated herbs"}, // 29
{"name":"Wildcrafted herbs"}, // 30
{"name":"Cut flowers"}, // 31
{"name":"Cultivated and wild mushrooms"}, // 32
{"name":"Greenhouse/nursery"}, // 33

// Seeds: Flax	Sunflowers		Unclassified/other
{"name":"Flax"}, // 34
{"name":"Sunflowers"}, // 35

// Veggies: Tomatoes	Lettuce		Carrots		Mixed Vegetables	Unclassified/other	
{"name":"Tomatoes"}, // 36
{"name":"Lettuce"}, // 37
{"name":"Carrots"}, // 38
{"name":"Mixed Vegetables"}, // 39

// Livestock 1: Beef cows 	 Milk cows 	 Other cows 	 Hogs & pigs  	 Sheep & lambs  
{"name":"Beef cows"}, // 40
{"name":"Milk cows"}, // 41
{"name":"Other cows"}, // 42
{"name":"Hogs & pigs"}, // 43
{"name":"Sheep & lambs"}, // 44

// Livestock 2: Layer Hens   	 Broilers 	 Turkeys	Unclassified/other
{"name":"Layer Hens"}, // 45
{"name":"Broilers"}, // 46
{"name":"Turkeys"}, // 47



{"name":"Unclassified/other"} // 48
],
"links":[
// different land use
    {"source":0,"target":1,"value":11119504},
    {"source":0,"target":2,"value":99698700.8},
	
// different category of crop
    {"source":1,"target":3,"value":5268},
    {"source":1,"target":4,"value":92819},
    {"source":1,"target":5,"value":62387},
    {"source":1,"target":6,"value":5306},
	{"source":1,"target":7,"value":6047},
	{"source":1,"target":8,"value":88724},
	{"source":1,"target":9,"value":81831},
	{"source":1,"target":10,"value":10777122},

	
// Each crop
// Beans: 11-13 Soybeans 	 Dry beans 	 Dry peas & lentils 	 Unclassified/other
	{"source":3,"target":11,"value":2},
	{"source":3,"target":12,"value":4415},
	{"source":3,"target":13,"value":817},
	{"source":3,"target":48,"value":2750},
	
// Fruits: 14-19 Tree nuts	Citrus	Apples	Grapes	Berries	Subtropical		Unclassified/other
    {"source":4,"target":14,"value":14980},
	{"source":4,"target":15,"value":11521},
	{"source":4,"target":16,"value":2322},
	{"source":4,"target":17,"value":33869},
	{"source":4,"target":18,"value":5132},
	{"source":4,"target":19,"value":9651},
	{"source":4,"target":48,"value":15344},
	
// Grains: 20-29 Corn 	 Wheat 	 Oats 	 Barley 	 Sorghum 	 Rice 1/ 	 Spelt  	 Buckwheat 	 Rye 	 Other* 
    {"source":5,"target":20,"value":4730},
	{"source":5,"target":21,"value":18622},
	{"source":5,"target":22,"value":3655},
	{"source":5,"target":23,"value":8568},
	{"source":5,"target":24,"value":1983},
	{"source":5,"target":25,"value":18393},
	{"source":5,"target":26,"value":1},
	{"source":5,"target":27,"value":23},
	{"source":5,"target":28,"value":1614},
	{"source":5,"target":48,"value":4796},
	
// Greenhouse: 30-34 Cultivated herbs	Wildcrafted herbs	Cut flowers 	Cultivated and wild mushrooms 	Greenhouse/nursery
    {"source":6,"target":29,"value":3195},
	{"source":6,"target":30,"value":1602},
	{"source":6,"target":31,"value":147},
	{"source":6,"target":32,"value":19},
	{"source":6,"target":33,"value":344},
	{"source":6,"target":48,"value":5306},
	
// Seeds: 35-36 Flax	Sunflowers		Unclassified/other
    {"source":7,"target":34,"value":1},
	{"source":7,"target":35,"value":366},
	{"source":7,"target":48,"value":5680},
	
// Veggies: 37-40 Tomatoes	Lettuce	Carrots		Mixed Vegetables	Unclassified/other	
    {"source":8,"target":36,"value":7930},
	{"source":8,"target":37,"value":26606},
	{"source":8,"target":38,"value":11382},
	{"source":8,"target":39,"value":19076},
	{"source":8,"target":48,"value":23730},
	
// Livestock 1: 41-45 Beef cows 	 Milk cows 	 Other cows 	 Hogs & pigs  	 Sheep & lambs  
    {"source":9,"target":40,"value":14024},    
	{"source":9,"target":41,"value":57809},    
	{"source":9,"target":42,"value":7594},    
	{"source":9,"target":43,"value":1810},    
	{"source":9,"target":44,"value":594},        
	
// Livestock 2: 46-48 Layer Hens   	 Broilers 	 Turkeys	Unclassified/other
    {"source":10,"target":45,"value":1107991},
	{"source":10,"target":46,"value":9440000},
	{"source":10,"target":47,"value":225731},
	{"source":10,"target":48,"value":3400},
	
]};