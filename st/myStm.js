function getPgp(name)
{

  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var tmpURL = window.location.href;
  var results = regex.exec( tmpURL );
  if( results == null )
    return "";
  else
    return results[1];

}

function getPgn(name)
{

  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var tmpURL = window.location.href;
  var results = regex.exec( tmpURL );
  results = results.toFixed(2);
  if( results == null )
    return "";
  else
    return results[1];

}

function getCalc(xfrm,xval1,xval2,xval3)
{

  if( xfrm == "52wv")
  {
   /* get 52w high/low variance  
     xfrm = not used
	 xval1 = start price
	 xval3 = end price
   */
	var xret = ((100*xval1/xval2) - 100);
	xret = xret.toFixed(2);
    return xret ;	
	  
  }  
	  

}