window.onload=start;
var d = document;
var inrecaptch=grecaptcha.getResponse();


function start()
{
 document.getElementById('submit').addEventListener('click',Checkrecaptcha,false);
}

      
      /* ------------------------------------- */
     /*   recaptcha
     /* ------------------------------------- */
   function Checkrecaptcha (evento)
        {
         if(inrecaptch=="")
                {
          alert("El captcha de google no ha sido activado...");
                 evento.preventDefault();		
		               return false;
                
                }
          else {alert ("El captcha ha sido activado.... ");
               evento.preventDefault();		
	             	return false;
               }
        }
