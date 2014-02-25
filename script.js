/**
 * @author
 */

console.log("hi!");

//UEMPDATA is the local name of the json file I just loaded 

function dataLoaded(UNEMPDATA) {

	console.log(UNEMPDATA);
	
	var myObsData = UNEMPDATA.observations; 
	
	//I am trying to construct an array of arrays. 
	var myDataArray = [];
	
	var headerArray = ["Date", "Value"];
	myDataArray.push(headerArray);
	
	
	//specify starting point, ending point,
	for(var i=0; i<myObsData.length;i++) {
		
		//create reference to current object in list
		var currObj = myObsData[i];
		
		var currArray = [currObj.date, Number(currObj.value)];
		
		myDataArray.push(currArray);
		
		
		
	} // end of for loop
	
	console.log(myDataArray);
	
	// feed date to vizualization library
	var myDataTable = google.visualization.arrayToDataTable(myDataArray);
	
	// create options object to actually customize the look of the chart
	
	var ChartOptions = {
          title: "Unemployment since 1980"
        };
	
	// 
	var myChart = new google.visualization.LineChart(document.getElementById("myChartDiv"));
		myChart.draw(myDataTable, ChartOptions);

}

function googleLoaded() {

console.log("google loaded");

// three parameters: file name, 

$.get("UEMP270V_data.json", dataLoaded, "json");
	
}


function GoogleVizLoaded() { 


console.log("got to page loaded");

//load the google viz library
google.load("visualization", "1", {packages:["corechart"], callback: "googleLoaded"});



}

$(document).ready(GoogleVizLoaded);