document.addEventListener('DOMContentLoaded', function(){
    function zood(){
    //obtener los elementos del formulario mediante el id que se le asigno y utilizando getElementById
        let signo = document.getElementById("zoo").value;
    //creando una variable para obtener las imagenes dela carpeta apartir del id que se dio a la ruta 
        let imag = document.getElementById("imagenes");
    //generar las condiciones para cada signo 
        if (signo=="sing"){
            document.getElementById("imagenes").src="./zodiaco_imag/signos.jpg"
        }else if ( signo == "aries"){
            document.getElementById("imagenes").src="./zodiaco_imag/aries.jpg"
        }else if (signo == "tauro"){
            document.getElementById("imagenes").src="./zodiaco_imag/tauro.jpg"
        }else if ( signo== "geminis"){
            document.getElementById("imagenes").src="./zodiaco_imag/geminis.jpg"
        }else if ( signo== "cancer"){
            document.getElementById("imagenes").src="./zodiaco_imag/cancer.jpg"
        }else if ( signo== "leo"){
            document.getElementById("imagenes").src="./zodiaco_imag/leo.jpg"
        }else if ( signo== "virgo"){
            document.getElementById("imagenes").src="./zodiaco_imag/virgo.jpg"
        }else if ( signo== "libra"){
            document.getElementById("imagenes").src="./zodiaco_imag/libra.jpg"
        }else if ( signo== "escorpio"){
            document.getElementById("imagenes").src="./zodiaco_imag/escorpio.jpg"
        }else if ( signo== "sagitario"){
            document.getElementById("imagenes").src="./zodiaco_imag/sagitario.jpg"
        }else if ( signo== "capricornio"){
            document.getElementById("imagenes").src="./zodiaco_imag/capricornio.jpg"
        }else if ( signo== "acuario"){
            document.getElementById("imagenes").src="./zodiaco_imag/acuario.jpg"
        }else if ( signo== "piscis"){
            document.getElementById("imagenes").src="./zodiaco_imag/piscis.jpg"
        }
    }
//realizando la funcion de reiniciar el formulario 
    function restForm() {
    // Restablecer el formulario y la imagen
    //     document.getElementById("formu").reset();
    //solo se restablecio la imagen principal para reestablecer todo se utilizo el input type= "reset"
    document.getElementById("imagenes").src = "./zodiaco_imag/signos.jpg";
    }

    document.getElementById("submit").addEventListener("click", zood);
    document.getElementById("reset").addEventListener('click', restForm); 

})




