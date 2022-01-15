function test()
{
	var getin= Signup();
	if(getin==true)
	{
		alert("Sign up Successfully");
		location.replace("signin.html");
	}

	
}




function Signup()
{
	var count=0;
	var get =false;
var myname = document.getElementById("name").value.trim();
var mypass1 = document.getElementById("pass1").value.trim();
var mypass2 = document.getElementById("pass2").value.trim();
var myemail = document.getElementById("email").value.trim();


var x = document.getElementById("myDIV");
var mypasstext1 = document.getElementById("passtext1");
var mypasstext2 = document.getElementById("passtext2");
var myemailtext = document.getElementById("emailtext");

//regular expression
var ren = "^[a-zA-Z ]{2,30}$";

if(myname == ""){
      x.style.display="block";
	  count++;  
	}
	else{
		x.style.display="none";
	 if(!myname.match(ren))
	 {
alert("Invalid name *Enter Alphabets Only");
 count++;  
}else{
			get=true;
		}
}

if(mypass1 == "")
{
	mypasstext1.style.display="block";
	count++;  
}
else{
	mypasstext1.style.display="none";
	if(mypass1.length<6)
	{
		alert("password length should consist of 6 characters at least");
		count++;  
	}
	else{
			get=true;
		}
	
}

if(mypass2=="")
{
	mypasstext2.style.display="block";
	count++; 
}	
else{	
	mypasstext2.style.display="none";
	if(mypass1!==mypass2)
	{
		alert("password not match");
		count++;  
	}
	else
	{
		get=true;		
	}
}
	
	
	
	
	
	





if(myemail=="")
{
	myemailtext.style.display="block";
	count++;  
}	
	
else{
myemailtext.style.display="none";
var atposition=myemail.indexOf("@");  
var dotposition=myemail.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=myemail.length){  
  alert("Please enter a valid e-mail address");  
  count++;    
  } else{
			get=true;
		} 

}	
	
if(count==0)
{
	return get;
}
else
{
	return false;
}
	
	
	
	
	
	
	
	
	
	
}