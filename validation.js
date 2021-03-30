    function formValidation()  
    {  
        var uid = document.registration.userid;  
        var mobile = document.registration.mobile;  
        var uemail = document.registration.email;  
        var gender = document.registration.gender;  
        var dob = document.registration.dob;  
        
        	if(userid_validation(uid,6,12))  
            {  
                if(ValidateEmail(uemail))  
                {  
                    if(validateMobile(mobile))  
                    {  
                        if(validateDOB(dob))  
                        {
                            if(validateGender(gender))  
                            {  
                                
                            }   
                        }  
                    }   
                }  
            }  
        return false;
	}
      
    function userid_validation(uid,mx,my)  
    {  
        var uid_len = uid.value.length;  
        if (uid_len == 0 || uid_len >= my || uid_len < mx)  
        {  
            alert("User Id should not be empty / length be between "+mx+" to "+my);  
            uid.focus();  
            return false;  
        }  
        return true;  
    }
    
    function validateMobile(mobile)  
    {   
        var numbers = /^[0-9]+$/;  
        if(mobile.value.match(numbers) && mobile.value !== "" &&  mobile.value.length == 10)  
        {  
            return true;  
        }  
        else  
        {  
            alert('incorrect mobile number');  
            mobile.focus();  
            return false;  
        }  
    }  
    function ValidateEmail(uemail)  
    {  
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
        if(uemail.value.match(mailformat))  
        {  
            return true;  
        }  
        else  
        {  
            alert("You have entered an invalid email address!");  
            uemail.focus();  
            return false;  
        }  
    }

	function validateGender(gender) 
	{
        if(gender.value.trim().length==0)  
        {  
            alert('Select your Gender from the list');  
            return false;  
        }
        else  
        {
            document.registration.reset();
            window.location.href = "images.html"
        	return true;
        }  
    }  

    function validateDOB(dob)
    {
        var d  = new Date(dob.value);
        if(d == undefined || d.getFullYear() > new Date().getFullYear()){
             alert('Enter valid DOB');  
             return false;  
        } 
        else 
        {
            return true;
        }
    }
    function resetForm(){
        document.registration.reset();
    }