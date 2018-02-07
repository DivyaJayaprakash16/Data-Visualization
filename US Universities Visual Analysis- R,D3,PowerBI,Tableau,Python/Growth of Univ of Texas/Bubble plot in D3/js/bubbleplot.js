var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 160, left: 50},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    maxScore;

var myg = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var data = [
 {
   "name": "The University of Texas at Austin",
   "profile": "aspire",
   "applicants_total": 38161,
   "tuition": 9798,
   "full_time_enrollment": 47741,
   "undergraduate_enrollment": 39979,
   "percent_of_freshmen_receiving_institutional_grant_aid": 43,
   "endowment_per_FTE": 63743
 },
 {
   "name": "The University of Texas at Dallas",
   "profile": "peer",
   "applicants_total": 8750,
   "tuition": 10864,
   "full_time_enrollment": 16006,
   "undergraduate_enrollment": 13049,
   "percent_of_freshmen_receiving_institutional_grant_aid": 72,
   "endowment_per_FTE": 17865
 },
 {
   "name": "University of Washington-Seattle Campus",
   "profile": "aspire",
   "applicants_total": 30199,
   "tuition": 12397,
   "full_time_enrollment": 38327,
   "undergraduate_enrollment": 29756,
   "percent_of_freshmen_receiving_institutional_grant_aid": 31,
   "endowment_per_FTE": 51447
 },
 {
   "name": "University of Wisconsin-Madison",
   "profile": "aspire",
   "applicants_total": 23324,
   "tuition": 10403,
   "full_time_enrollment": 38428,
   "undergraduate_enrollment": 30728,
   "percent_of_freshmen_receiving_institutional_grant_aid": 37,
   "endowment_per_FTE": 60936
 },
 {
   "name": "University of Wisconsin-Milwaukee",
   "profile": "peer",
   "applicants_total": 8944,
   "tuition": 9300,
   "full_time_enrollment": 21548,
   "undergraduate_enrollment": 22648,
   "percent_of_freshmen_receiving_institutional_grant_aid": 6,
   "endowment_per_FTE": 3882
 },
 {
   "name": "Arizona State University-Tempe",
   "profile": "peer",
   "applicants_total": 21770,
   "tuition": 9861,
   "full_time_enrollment": 42498,
   "undergraduate_enrollment": 38730,
   "percent_of_freshmen_receiving_institutional_grant_aid": 85,
   "endowment_per_FTE": 8058
 },
 {
   "name": "Texas A & M University-College Station",
   "profile": "peer",
   "applicants_total": 31387,
   "tuition": 8387,
   "full_time_enrollment": 48780,
   "undergraduate_enrollment": 44072,
   "percent_of_freshmen_receiving_institutional_grant_aid": 58,
   "endowment_per_FTE": 171461
 },
 {
   "name": "University of California-Irvine",
   "profile": "peer",
   "applicants_total": 56515,
   "tuition": 11232,
   "full_time_enrollment": 28046,
   "undergraduate_enrollment": 23530,
   "percent_of_freshmen_receiving_institutional_grant_aid": 65,
   "endowment_per_FTE": 8945
 },
 {
   "name": "University of Cincinnati-Main Campus",
   "profile": "peer",
   "applicants_total": 16002,
   "tuition": 10065,
   "full_time_enrollment": 25873,
   "undergraduate_enrollment": 23706,
   "percent_of_freshmen_receiving_institutional_grant_aid": 53,
   "endowment_per_FTE": 34212
 },
 {
   "name": "University of Colorado Boulder",
   "profile": "peer",
   "applicants_total": 22473,
   "tuition": 8511,
   "full_time_enrollment": 26242,
   "undergraduate_enrollment": 26096,
   "percent_of_freshmen_receiving_institutional_grant_aid": 39,
   "endowment_per_FTE": 0
 },
 {
   "name": "University of Pittsburgh-Pittsburgh Campus",
   "profile": "peer",
   "applicants_total": 24871,
   "tuition": 14936,
   "full_time_enrollment": 25069,
   "undergraduate_enrollment": 18615,
   "percent_of_freshmen_receiving_institutional_grant_aid": 33,
   "endowment_per_FTE": 100631
 },
 {
   "name": "University of Utah",
   "profile": "peer",
   "applicants_total": 11354,
   "tuition": 6272,
   "full_time_enrollment": 23084,
   "undergraduate_enrollment": 24492,
   "percent_of_freshmen_receiving_institutional_grant_aid": 35,
   "endowment_per_FTE": 21846
 },
 {
   "name": "Washington State University",
   "profile": "peer",
   "applicants_total": 14887,
   "tuition": 9489,
   "full_time_enrollment": 23604,
   "undergraduate_enrollment": 23070,
   "percent_of_freshmen_receiving_institutional_grant_aid": 49,
   "endowment_per_FTE": 29245
 },
 {
   "name": "Georgia Institute of Technology-Main Campus",
   "profile": "aspire",
   "applicants_total": 14645,
   "tuition": 8716,
   "full_time_enrollment": 18743,
   "undergraduate_enrollment": 14558,
   "percent_of_freshmen_receiving_institutional_grant_aid": 28,
   "endowment_per_FTE": 77288
 },
 {
   "name": "Pennsylvania State University-Main Campus",
   "profile": "aspire",
   "applicants_total": 47552,
   "tuition": 15250,
   "full_time_enrollment": 44639,
   "undergraduate_enrollment": 40085,
   "percent_of_freshmen_receiving_institutional_grant_aid": 32,
   "endowment_per_FTE": 32655
 },
 {
   "name": "University of Arizona",
   "profile": "aspire",
   "applicants_total": 26329,
   "tuition": 8237,
   "full_time_enrollment": 35388,
   "undergraduate_enrollment": 31670,
   "percent_of_freshmen_receiving_institutional_grant_aid": 72,
   "endowment_per_FTE": 15972
 },
 {
   "name": "University of California-Berkeley",
   "profile": "aspire",
   "applicants_total": 61717,
   "tuition": 10940,
   "full_time_enrollment": 34675,
   "undergraduate_enrollment": 25951,
   "percent_of_freshmen_receiving_institutional_grant_aid": 58,
   "endowment_per_FTE": 36917
 },
 {
   "name": "University of Illinois at Urbana-Champaign",
   "profile": "aspire",
   "applicants_total": 33203,
   "tuition": 13096,
   "full_time_enrollment": 41118,
   "undergraduate_enrollment": 32695,
   "percent_of_freshmen_receiving_institutional_grant_aid": 42,
   "endowment_per_FTE": 21391
 },
 {
   "name": "University of Michigan-Ann Arbor",
   "profile": "aspire",
   "applicants_total": 46813,
   "tuition": 11837,
   "full_time_enrollment": 41152,
   "undergraduate_enrollment": 28283,
   "percent_of_freshmen_receiving_institutional_grant_aid": 46,
   "endowment_per_FTE": 185879
 },
 {
   "name": "University of Minnesota-Twin Cities",
   "profile": "aspire",
   "applicants_total": 43048,
   "tuition": 12288,
   "full_time_enrollment": 38767,
   "undergraduate_enrollment": 34449,
   "percent_of_freshmen_receiving_institutional_grant_aid": 51,
   "endowment_per_FTE": 48052
 },
 {
   "name": "Washington University in St Louis",
   "profile": "aspire",
   "applicants_total": 30117,
   "tuition": 40369,
   "full_time_enrollment": 12078,
   "undergraduate_enrollment": 7336,
   "percent_of_freshmen_receiving_institutional_grant_aid": 47,
   "endowment_per_FTE": 417948
 }
];

var maxApplicants = d3.max(data, function (d) { return d.applicants_total; });

var xScale = d3.scaleLinear()
                 .domain([0, 90])
                 .range([0, width]),
    yScale = d3.scaleLinear()
                 .domain([0, maxApplicants])
                 .range([height, 0]);

myg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
            .attr("cx", function (d) { return xScale(d.percent_of_freshmen_receiving_institutional_grant_aid); })
            .attr("cy", function (d) { return yScale(d.applicants_total); })
            .attr("r", function (d) { return Math.sqrt(d.endowment_per_FTE/200); })
            .style("fill", function (d) {
					if(d.profile == "aspire") {
						return "blue";
					} else {
						return "orange";
					}
			});
			
  
myg.append("g")
 .attr("transform", "translate(0," + height + ")") 
 .attr("class", "axis")
 .call(d3.axisBottom().scale(xScale));

myg.append("g")
 .attr("class", "axis")
 .call(d3.axisLeft().scale(yScale));
    
myg.append("text").attr("class", "x label").attr("text-anchor", "end").attr("x", width).attr("y", height - 6).text("Percent of freshman receiving institutional grant aid");
myg.append("text").attr("class", "y label").attr("text-anchor", "end").attr("y", 6).attr("dy", ".75em").attr("transform", "rotate(-90)").text("Applicants total");