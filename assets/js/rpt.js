window.onload=start;
var d = document;
var inrecaptch=grecaptcha.getResponse();


function start()
{
 d.getElementById('submit').addEventListener('click',Checkrecaptcha,false);
}

      
      /* ------------------------------------- */
     /*   recaptcha
     /* ------------------------------------- */
   function Checkrecaptcha (evento)
        {
         var inrecaptch=grecaptcha.getResponse();
	 var name=d.getElementById('name').value;
         var email=d.getElementById('email').value;
         var message=d.getElementById('massage').value;
         if(name!="" && email!="" && message!="")
	 {
		  if(inrecaptch=="")
                {
          alert("El captcha de google no ha sido activado...");
                 evento.preventDefault();		
		               return false;
                
                }
          else 
	       {
		       alert ("El captcha ha sido activado.... ");
                       evento.preventDefault();		
	               return false;
               }
		 
	 }
		else {alert("Los campos del formulario deben ser rellenados correctamente...");}
	 	
        
        }
