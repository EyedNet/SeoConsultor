window.onload=start;
var d = document;



function start()
{
        d.getElementById('c12').addEventListener('click',Checkrecaptcha,false);
 
	//==============Efecto changes text==========>
	var text = ["Desarrollo Web", "Posicionamiento Web", "Landing Pages", 
	     "Inbound && Outbound Links de Calidad", "Análisis Palabras Clave", 
	     "Informes completos SEO en pdf", "Programadores Java,php,javascript a tu disposición",
	     "Creamos tu tienda on line","Cambiamos el estilo de tu empresa con nuestros expertos en marketing" ];
        var counter = 1;
        var elem = document.getElementById("writer");
				setInterval(function() {
                    elem.innerHTML = text[counter];
                    counter++;
                    if(counter >= text.length) {
                        counter = 0;
                    }
                }, 2000);
}
    //============En efecto changes text==========>
      
      /* ------------------------------------- */
     /*   CHEQUEAR CAMPOS NO VACÍOS Y CAPTCHA
     /* ------------------------------------- */
   function Checkrecaptcha (evento)
        {
          var inrecaptch=grecaptcha.getResponse();
	  var name=d.getElementById('c9').value;
          var message=d.getElementById('c11').value;
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
		         alert ("✅ El envío ha sido satisfactorio\n ✅ En breve nos pondremos en contacto");
                 return true;
               }
		 
	    }
		else    {
		          alert(" 👎 Los campos del formulario 👎  \n  👎 no han sido rellenados correctamente...👎 ");
		          evento.preventDefault();		
                  return false;
		        }
		
		function checkEmail()
		{
		   var email=d.getElementById('c10').value;
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
                             
                             else {
 		                            return false;
                                  }
		
		}
	 	
        
        }
 
