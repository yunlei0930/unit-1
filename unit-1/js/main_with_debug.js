//initialize function called when the script loads
function initialize(){
	cities();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
    var cityPop = [
        { 
            city: 'New York',
            population: 8550405
        },
        {
            city: 'Los Angeles',
            population: 3971883
        },
        {
            city: 'Chicago',
            population: 2720546
        },
        {
            city: 'Houston',
            population: 2296224
        }
    ];

	//append the table element to the div
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");
	
	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");
	
	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
	   
	//click listener with anonymous handler function
    $('table').on('click', function(){
        alert('Madison Rocks! Go Badgers!');
    });
	
	//add two functions
    addColumns(cityPop);
    addEvents();
};

//add a new column of the city population ranking
function addColumns(cityPop){
    
	//perform the following task for each element in the table row
    $('tr').each(function(i){
		
		//when i is 0, add the header of the row which is the City Size
    	if (i == 0){

    		$(this).append('<th>City Size</th>');
    	} else {
			
			//define a new variable
    		var citySize;
			
			//compare the city population with two numbers and assign a rank to each city
    		if (cityPop[i-1].population < 1000000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 5000000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
			
			//append the citysize value to the existing table row
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

//define a event that changes the table color based on the movement of the mouse
function addEvents(){
	
	//when the mouse move over the table, perform the following function
	$('table').mouseover(function(){
		
		//create a new variable which is a part of the color rgb setting
		var color = "rgb(";
		
		//generate a random value for red, green, blue separately during each loop
		for (var i=0; i<3; i++){
			
			//generate a random value between 0 to 255
			var random = Math.round(Math.random() * 255);
			
			//add it to the variable 'color'
			color += random;
			
			//if i is less than 2, add a ',' because the color setting is not completed
			if (i<2){
				color += ",";
			
			} else {
				//if i is 2, which means there are three values for r,g,b, add a ')' as the end
				color += ")";
			}
		};
		
		//change the css setting to the new reb value stored in the color variable
		$(this).css('color', color);
	});

	//define a function to show a alert box 
	function clickme(){

		alert('Hey, you clicked me!');
	};
	
	//add a event, when click on the table, trigger the clickme function to show a alert box
	$('table').on('click', clickme);
};



//call the initialize function when the document has loaded
$(document).ready(initialize);