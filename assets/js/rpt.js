window.onload=start;
var d = document;
var inrecaptch=grecaptcha.getResponse();


function start()
{
 d.getElementById('submit').addEventListener('click',Checkrecaptcha,false);
	//Efecto changes text
 /*var text = ["Desarrollo Web", "Posicinamiento Web", "Landing Pages", 
	     "Inbound && Outbound Links de Calidad", "Análisis Palabras Clave", 
	     "Informes completos SEO en pdf", "Programadores Java,php,javascript a tu disposición",
	     "Te hacemos tu tienda on line"];
  var counter = 1;
  var elem = document.getElementById("writer");
				setInterval(function() {
                    elem.innerHTML = text[counter];
                    counter++;
                    if(counter >= text.length) {
                        counter = 0;
                    }
                }, 2000);*/
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
