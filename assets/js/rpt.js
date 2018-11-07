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
                 alert("✋ Active el recaptcha para continuar ✋");
                 evento.preventDefault();		
		 return false;
                
                }
          else 
	       {
		       alert ("🌜 Lo sentimos el formulario está fuera\n De Servicio 💤 \n Para contactar lo puede hacer por\n☎ Telegram:@Eyenet");
                       evento.preventDefault();		
	               return false;
               }
		 
	 }
		else {alert(" 👎 Los campos del formulario 👎  \n  👎 no han sido rellenados correctamente...👎 ");}
		
		function checkEmail()
		{
		   var email=d.getElementById('email').value;
                   regex_mail=/@{1}\D{1,}\.{1}[a-zA-Z]{3}$/;
	            if(email!="")
                     {
 	           //compruebo si no tiene las coincidencias del regex
 	            if (!regex_mail.test(email))
 	                {

 	                  alert ('⚠ Error....!⚠\n 👎 Email inválido 👎\n   ✔  Rectifíquelo...');
		
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
