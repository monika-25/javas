var fs = require("fs");
//Read the file into var data
var data = fs.readFileSync('Indicators.csv');
// COnvert the data into String
var stringData=data.toString();
//Split the data into an array of strings, each string represents one row
var arrayOne= stringData.split('\r\n');
//Header values are stored in header array. split() function used to split the header strings into an array of strings.
var header=arrayOne[0].split(',');
//Find number of rows.
var noOfRow = arrayOne.length;
//Find number of columns
var noOfCol = header.length;
var jArray=[];
var final_obj={};
var i=0,j=0;
var validFlag = false;
//Iterate through all the rows
for (i = 1; i <  noOfRow-1; i++) {

	var myNewLine=arrayOne[i].split(',');
	// Iterate through the indexes of myNewLine, and check if appropriate data is present.
   for (j = 0; j< noOfCol; j++) {

    if(j<noOfCol-1)
    {

       if(myNewLine[j] == 'IND' && (myNewLine[j+1] == 'Urban population (% of total)' ||  myNewLine[j+1] == 'Rural population (% of total population)'))
       	{
       	
					final_obj['IndicatorName']=myNewLine[2];

					final_obj['Year']=myNewLine[4];
					final_obj['Value']=myNewLine[5];
				 jArray.push(final_obj);
				 final_obj={};
       	}
   	}
   };

};
//Define the file name to be created
var file = 'data.json';
// Convert the object into a JSON String. store it into 'obj' variable.
var obj = JSON.stringify(jArray);
//Write the file into the file system.
fs.writeFileSync(file, obj);// JavaScript Document*/
console.log('Accomplished');
