window.onload=start;
var d = document;
var inrecaptch=grecaptcha.getResponse();


function start()
{
 d.getElementById('submit').addEventListener('click',Checkrecaptcha,false);
}

      
      /* ------------------------------------- */
     /*   CHEQUEAR CAMPOS NO VACÍOS Y CAPTCHA
     /* ------------------------------------- */
   function Checkrecaptcha (evento)
        {
         var inrecaptch=grecaptcha.getResponse();
	 var name=d.getElementById('name').value;
         var message=d.getElementById('massage').value;
         if(name!=""
	    &&checkEmail() 
	    && message!="")
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
		
		function checkEmail()
		{
		   var email=d.getElementById('email').value;
                   regex_mail=/@{1}\D{1,}\.{1}[a-zA-Z]{3}$/;
	            if(email!="")
                     {
 	           //compruebo si no tiene las coincidencias del regex
 	            if (!regex_mail.test(email))
 	                {

 	                  alert ('Error....!\nEmail inválido\n    Rectifíquelo...');
		
		          return false;		
 	                 }
 	else return true;
 }
 else
 	{
 		return true;
 	}
		
		}
	 	
        
        }
