var school = {"nodes": [
{"name":"High School"}, // 0
{"name":"Community College"}, // 1
{"name":"Finance"}, // 2
{"name":"Accounting"}, // 3
{"name":"ITS"}, // 4    
{"name":"Marketing"}, // 5
    
{"name":"Analytics"}, // 6
{"name":"Security"}, // 7
{"name":"Consulting"}, // 8
{"name":"Banking"}, // 9
{"name":"Internal"}, // 10    
{"name":"Securities"}, // 11
{"name":"Public"}, // 12
{"name":"Audting"}, // 13    
{"name":"Internal"}, // 14
{"name":"Retail"}, // 15
{"name":"Technology"}, // 16
{"name":"Strategy"} // 17
],
"links":[
// FirstYear
    {"source":0,"target":2,"value":33},
    {"source":0,"target":3,"value":42},
    {"source":0,"target":4,"value":74},
    {"source":0,"target":5,"value":60},
// Community College
    {"source":1,"target":2,"value":7},
    {"source":1,"target":3,"value":13},
    {"source":1,"target":4,"value":11},
    {"source":1,"target":5,"value":9},
// Finance
    {"source":2,"target":9,"value":16},
    {"source":2,"target":10,"value":14},
    {"source":2,"target":11,"value":10},
// Accounting
    {"source":3,"target":12,"value":20},
    {"source":3,"target":13,"value":12},
    {"source":3,"target":7,"value":8},    
    {"source":3,"target":14,"value":15},
// Marketing
    {"source":5,"target":6,"value":30},
    {"source":5,"target":15,"value":39},
// ITS
    {"source":4,"target":6,"value":40},
    {"source":4,"target":7,"value":20},
    {"source":4,"target":12,"value":6},    
    {"source":4,"target":8,"value":19},
    // ITS Consulting
    {"source":8,"target":16,"value":10},
    {"source":8,"target":17,"value":9},

]};
