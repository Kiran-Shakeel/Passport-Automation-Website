function test2()
{
	if(myPics.disabled==true )
	{
		
		if(myPics2.disabled==true)
		{
			if(myPics3.disabled==true)
			{
				alert("successfully submited");
		        document.getElementById("commen").style.pointerEvents="auto";
				document.getElementById("attachpill").style.pointerEvents="none";
				alert("go to step 3");
			}
			else
			{
				fcn.style.color="red";
				alert("please upload Father cnic");
			}
		}
		else
		{
		cn.style.color="red";
		alert("please upload Applicant cnic");
		}
	}
	else
	{
		app.style.color="red";
		alert("please upload Applicant image");
	}
	
}





function test()
{
	
	var getin= form();
	if(getin==false)
	{
		
	}
	else
	{
		alert("form submitted now go to attachment tab");
		document.getElementById("attachpill").style.pointerEvents="auto";
		document.getElementById("reg").style.pointerEvents="none";
		alert("go to step 2");
	}
}






function form() {
	var get=false;
	var count=0;
var myname = document.getElementById("name").value.trim();
var myfname = document.getElementById("fname").value.trim();
var mymname = document.getElementById("mname").value.trim();
var mycnic = document.getElementById("cnic").value.trim();
var myfcnic = document.getElementById("fcnic").value.trim();
var myphn = document.getElementById("phn").value.trim();
var mycity = document.getElementById("city").value.trim();
var myrel = document.getElementById("rel").value.trim();
var myd = document.getElementById("myDate").value.trim();
var mypro = document.getElementById("province").value.trim();
var myadd = document.getElementById("address").value.trim();




var mysname = document.getElementById("sname");
var mysfname = document.getElementById("sfname");
var mysmname = document.getElementById("smname");
var myscnic = document.getElementById("scnic");
var mysfcnic = document.getElementById("sfcnic");
var mysphn = document.getElementById("sphn");
var myscity = document.getElementById("scity");
var mysrel = document.getElementById("srel");
var mysd = document.getElementById("smyDate");
var myspro = document.getElementById("sprovince");
var mysadd = document.getElementById("sadd");

var ren = "^[a-zA-Z ]{2,30}$";
var rephn = "^[0-9]{11}$";
var recnic = "^[0-9]{13}$";
var redob = "^[0-9+]{2}/[0-9+]{2}/[0-9]{4}$";
var readd = "^[a-zA-Z0-9 \s\,\''\-]*$";


if(myname == ""){
	  mysname.style.display = "block";
	  count++;
}
else{
mysname.style.display="none";
if(!myname.match(ren)){
alert("Invalid name *Enter Alphabets  Only");
mysname.style.display = "block";
count++;
}
else{
	get=true;
}
}




if(myfname == ""){
	mysfname.style.display = "block";
count++;	
	
}
else{
mysfname.style.display="none";
if(!myfname.match(ren)){
alert("invalid father name *Enter Alphabets  Only");
mysfname.style.display = "block";
count++;
}
else{
	get=true;
}
}

if(mymname == ""){
	mysmname.style.display = "block";
count++;	
	
}
else{
mysmname.style.display="none";
if(!mymname.match(ren)){
alert("invalid Mother name *Enter Alphabets  Only");
mysfname.style.display = "block";
count++;
}
else{
	get=true;
}
}






















if(mycnic == ""){
myscnic.style.display="block";
count++;	
}
else{
myscnic.style.display="none";
if(!mycnic.match(recnic)){
alert("Invalid cnic");
myscnic.style.display = "block";
count++;
}else{
	get=true;
}
}





if(myfcnic == ""){
mysfcnic.style.display="block";
count++;	
}
else{
mysfcnic.style.display="none";
if(!myfcnic.match(recnic)){
alert("Invalid father cninc");
mysfcnic.style.display = "block";
count++;
}
if(mycnic == myfcnic &&(mycnic!=="" || myfcnic!==""))
{
	alert("father and user cnic can not be same");
	count++;
}
else{
	get=true;
}
}






if(myphn == ""){
mysphn.style.display="block";
count++;	
}
else{
mysphn.style.display="none";
if(!myphn.match(rephn)){
alert("Invalid phone number");
mysphn.style.display = "block";
count++;
}else{
	get=true;
}
}





if(mycity == ""){
myscity.style.display="block";
count++;
}
else{
myscity.style.display="none";
}




if(myrel == ""){
mysrel.style.display="block";
count++;
}
else{
mysrel.style.display="none";
}




if(myd == ""){
mysd.style.display="block";
count++;
}
else{
mysd.style.display="none";
}





if(mypro == ""){
myspro.style.display="block";
count++;
}
else
{
	myspro.style.display="none";
}







if(myadd == ""){
mysadd.style.display="block";
count++;	
}
else{
mysadd.style.display="none";
if(!myadd.match(readd)){
alert("Enter Alphanumeric values Only");
mysadd.style.display = "block";
count++;
}else{
	get=true;
}
}
if(count>0)
{
	return false;
}
else
{
	return get;
}


}


function appPic()
{
	var file1=document.getElementById("myPics");
	var filePath = file1.value; 
	var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i; 
	 if (!allowedExtensions.exec(filePath))
		 { 
                alert('Invalid file type'); 
                file1.value = ''; 
				app.style.color="red";
                return false; 
         }  
	else  
            { 
              
			 app.style.color="green";
                // Image preview 
                if (file1.files && file1.files[0]) { 
                    var reader = new FileReader(); 
                    reader.onload = function(e) { 
                        document.getElementById( 'show').innerHTML =  
                            '<img src="' + e.target.result 
                            + '"/>'; 
                    }; 
                      
                    reader.readAsDataURL(file1.files[0]); 
					document.getElementById('myPics').setAttribute('disabled','disabled');
                } 
				
            } 
			

	
}


function cnicPic()
{
	var file1=document.getElementById("myPics2");
	var filePath = file1.value; 
	var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i; 
	 if (!allowedExtensions.exec(filePath))
		 { 
                alert('Invalid file type'); 
                file1.value = ''; 
				cn.style.color="red";
                return false; 
         }  
	else  
            { 
              cn.style.color="green";
                // Image preview 
                if (file1.files && file1.files[0]) { 
                    var reader = new FileReader(); 
                    reader.onload = function(e) { 
                        document.getElementById( 'show2').innerHTML =  
                            '<img src="' + e.target.result 
                            + '"/>'; 
                    }; 
                      
                    reader.readAsDataURL(file1.files[0]); 
					document.getElementById('myPics2').setAttribute('disabled','disabled');
                } 
            } 

	
}




function fcnicPic()
{
	var file1=document.getElementById("myPics3");
	var filePath = file1.value; 
	var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i; 
	 if (!allowedExtensions.exec(filePath))
		 { 
                alert('Invalid file type'); 
                file1.value = '';
                fcn.style.color="red";				
                return false; 
         }  
	else  
            { 
              fcn.style.color="green";
                // Image preview 
                if (file1.files && file1.files[0]) { 
                    var reader = new FileReader(); 
                    reader.onload = function(e) { 
                        document.getElementById( 'show3').innerHTML =  
                            '<img src="' + e.target.result 
                            + '"/>'; 
                    }; 
                      
                    reader.readAsDataURL(file1.files[0]); 
					document.getElementById('myPics3').setAttribute('disabled','disabled');
                }
		
            } 

	
}

function comment()
{
	
	var text= document.getElementById("co").value.trim();
	if(text == "")
	{
		alert("please write a comment");
	}
	else
	{
		alert("form submitted succesfully");
	location.replace("Home.html");
	}
	
}
