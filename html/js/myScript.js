function load() {
	var mydata = JSON.parse(data);
	alert(mydata[1].name);
	alert(mydata[1].age);
};

function load2()
{
	var mydata = JSON.parse(data);

       for(var i = 0;i < mydata.length; i++)
                     {
                        	alert(mydata[i].name);

                     }
 };                    
 
 function fPrint()
{
	var mydata = JSON.parse(data);
	var mydata4 = JSON.parse(data4);

    var out = "<table border=1>";
    var out4 = "<table border=1>";


       for(var i = 0;i < mydata.length; i++)
        {
	        out = out + '<tr><td>' + mydata[i].name + '</td>' ;
         	out = out +  '<td>' + mydata[i].age + '</td> </tr> ';
         };
            out = out + '</table>' ;

       for(var i = 0;i < mydata4.length; i++)
        {
	        out4 = out4 + '<tr><td>' + mydata4[i].name + '</td>' ;
         	out4 = out4 +  '<td>' + mydata4[i].age + '</td> </tr> ';
         };
            out4 = out4 + '</table>' ;
                                 
    document.getElementById("id01").innerHTML = out;
    document.getElementById("id04").innerHTML = out4;

 };                    
 

 function margin(xFilter)
{

  var mydata2 = JSON.stringify(marginH);
  var rowFlag = "c" ;

   var mydata = JSON.parse(mydata2);
//  var mydata2 = JSON.parse(mydata);

    var out = '<table "width=80%">';

    // Print Headings
            out = out + '<tr bgcolor="#D4E6F1"><td>' + 'Stock Name' + '</td>' ;
            out = out +  '<td align="right">' + 'Last Close' + '</td>  ';
            out = out +  '<td align="right">' + '1 Mon Returns' + '</td>  ';
            out = out +  '<td align="right">' + '6 Mon Returns' + '</td>  ';
            out = out +  '<td align="right">' + '12 Mon Returns' + '</td> </tr> ';


    //Print Body 


       for(var i = 0;i < mydata.length; i++)
        {

        if (xFilter == "Y" ) 
         {
          if ( mydata[i].blu == "Y" )
            {
            if (rowFlag == "c")
             {
            out = out + '<tr><td><a href="myStx.html?&' + mydata[i].xurl +'" target="_self">'  + mydata[i].nse_name + '</a></td>' ;
            rowFlag = "d";
            }
            else      
                
             {
             out = out + '<tr BGCOLOR="#F5EEF8"><td><a href="myStx.html?&' + mydata[i].xurl +'" target="_self">'  + mydata[i].nse_name + '</a></td>' ;
             rowFlag = "c";
             }
            out = out +  '<td align="right">' + mydata[i].last_p + '</td>  ';
            out = out +  '<td align="right">' + mydata[i].r1m + '</td>  ';
            out = out +  '<td align="right">' + mydata[i].r6m + '</td>  ';
            out = out +  '<td align="right">' + mydata[i].r12m + '</td> </tr> ';
          };

         } else if (mydata[i].blu  == "N" ) 
         
         {

            if (rowFlag == "c")
             {
            out = out + '<tr><td><a href="myStx.html?&' + mydata[i].xurl +'" target="_self">'  + mydata[i].nse_name + '</a></td>' ;
            rowFlag = "d";
            }
            else               
             {
             out = out + '<tr BGCOLOR="#F5EEF8"><td><a href="myStx.html?&' + mydata[i].xurl +'" target="_self">'  + mydata[i].nse_name + '</a></td>' ;
             rowFlag = "c";
             }
            out = out +  '<td align="right">' + mydata[i].last_p + '</td>  ';
            out = out +  '<td align="right">' + mydata[i].r1m + '</td>  ';
            out = out +  '<td align="right">' + mydata[i].r6m + '</td>  ';
            out = out +  '<td align="right">' + mydata[i].blu + '</td> </tr> ';

         };

        };

            out = out + '</table>' ;

                                 
    document.getElementById("id01").innerHTML = out;

 };   


 function growth(xFilter)
{

  var mydata2 = JSON.stringify(growthH);
  var rowFlag = "c" ;

   var mydata = JSON.parse(mydata2);
//  var mydata2 = JSON.parse(mydata);

    var out = '<table "width=80%">';

    // Print Headings
            out = out + '<tr bgcolor="#D4E6F1"><td>' + 'Stock Name' + '</td>' ;
            out = out +  '<td align="right">' + 'Last Close' + '</td>  ';
            out = out +  '<td align="right">' + '1 Mon Returns' + '</td>  ';
            out = out +  '<td align="right">' + '6 Mon Returns' + '</td>  ';
            out = out +  '<td align="right">' + '12 Mon Returns' + '</td> </tr> ';


    //Print Body 


       for(var i = 0;i < mydata.length; i++)
        {

        if (xFilter == "Y" ) 
         {
          if ( mydata[i].blu == "Y" )
            {
            if (rowFlag == "c")
             {
            out = out + '<tr><td><a href="myStx.html?&' + mydata[i].xurl +'" target="_self">'  + mydata[i].nse_name + '</a></td>' ;
            rowFlag = "d";
            }
            else      
                
             {
             out = out + '<tr BGCOLOR="#F5EEF8"><td><a href="myStx.html?&' + mydata[i].xurl +'" target="_self">'  + mydata[i].nse_name + '</a></td>' ;
             rowFlag = "c";
             }
            out = out +  '<td align="right">' + mydata[i].last_p + '</td>  ';
            out = out +  '<td align="right">' + mydata[i].r1m + '</td>  ';
            out = out +  '<td align="right">' + mydata[i].r6m + '</td>  ';
            out = out +  '<td align="right">' + mydata[i].r12m + '</td> </tr> ';
          };

         } else if (mydata[i].blu  == "N" ) 
         
         {

            if (rowFlag == "c")
             {
            out = out + '<tr><td><a href="myStx.html?&' + mydata[i].xurl +'" target="_self">'  + mydata[i].nse_name + '</a></td>' ;
            rowFlag = "d";
            }
            else               
             {
             out = out + '<tr BGCOLOR="#F5EEF8"><td><a href="myStx.html?&' + mydata[i].xurl +'" target="_self">'  + mydata[i].nse_name + '</a></td>' ;
             rowFlag = "c";
             }
            out = out +  '<td align="right">' + mydata[i].last_p + '</td>  ';
            out = out +  '<td align="right">' + mydata[i].r1m + '</td>  ';
            out = out +  '<td align="right">' + mydata[i].r6m + '</td>  ';
            out = out +  '<td align="right">' + mydata[i].blu + '</td> </tr> ';

         };

        };

            out = out + '</table>' ;

                                 
    document.getElementById("id01").innerHTML = out;

 };             

 function top100(xFilter)
{

  var mydata2 = JSON.stringify(top100H);
  var rowFlag = "c" ;

    var mydata = JSON.parse(mydata2);
//  var mydata2 = JSON.parse(mydata);

    var out = '<table "width=80%">';

    // Print Headings
            out = out + '<tr bgcolor="#D4E6F1"><td>' + 'Stock Name' + '</td>' ;
            out = out +  '<td align="right">' + 'Last Close' + '</td>  ';
            out = out +  '<td align="right">' + '1 Mon Returns' + '</td>  ';
            out = out +  '<td align="right">' + '6 Mon Returns' + '</td>  ';
            out = out +  '<td align="right">' + '12 Mon Returns' + '</td> </tr> ';


    //Print Body 


       for(var i = 0;i < mydata.length; i++)
        {

        if (xFilter == "Y" ) 
         {
          if ( mydata[i].blu == "Y" )
            {
            if (rowFlag == "c")
             {
            out = out + '<tr><td><a href="myStx.html?&' + mydata[i].xurl +'" target="_self">'  + mydata[i].nse_name + '</a></td>' ;
            rowFlag = "d";
            }
            else      
                
             {
             out = out + '<tr BGCOLOR="#F5EEF8"><td><a href="myStx.html?&' + mydata[i].xurl +'" target="_self">'  + mydata[i].nse_name + '</a></td>' ;
             rowFlag = "c";
             }
            out = out +  '<td align="right">' + mydata[i].last_p + '</td>  ';
            out = out +  '<td align="right">' + mydata[i].r1m + '</td>  ';
            out = out +  '<td align="right">' + mydata[i].r6m + '</td>  ';
            out = out +  '<td align="right">' + mydata[i].r12m + '</td> </tr> ';
          };

         } else if (mydata[i].blu  == "N" ) 
         
         {

            if (rowFlag == "c")
             {
            out = out + '<tr><td><a href="myStx.html?&' + mydata[i].xurl +'" target="_self">'  + mydata[i].nse_name + '</a></td>' ;
            rowFlag = "d";
            }
            else               
             {
             out = out + '<tr BGCOLOR="#F5EEF8"><td><a href="myStx.html?&' + mydata[i].xurl +'" target="_self">'  + mydata[i].nse_name + '</a></td>' ;
             rowFlag = "c";
             }
            out = out +  '<td align="right">' + mydata[i].last_p + '</td>  ';
            out = out +  '<td align="right">' + mydata[i].r1m + '</td>  ';
            out = out +  '<td align="right">' + mydata[i].r6m + '</td>  ';
            out = out +  '<td align="right">' + mydata[i].blu + '</td> </tr> ';

         };

        };

            out = out + '</table>' ;

                                 
    document.getElementById("id01").innerHTML = out;

 };   
                   
 

