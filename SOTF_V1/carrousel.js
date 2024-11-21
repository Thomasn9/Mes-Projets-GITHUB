// le tableau 
const slide = ["img1.png","img2.png","img3.png","img4.png","img5.png","img6.png","img7.png","img8.png","img9.png","img10.png"];
let numero = 0;

// la fonction
function changeSlide(sens){
    numero = numero + sens;

    // on met -1 pour qu'il boucle sur le dernier élément 
    if(numero > slide.length -1){
        numero = 0;
    }
    else if(numero < 0){
        numero = slide.length -1;
    }

    // on selectionne l'id slide et on lui indique que cela est une image grace a la source
    //puis on ajoute les élément du tableau pour lui dire le quel prendre 
    document.getElementById("slide").src="image carrousel/" + slide[numero];
}

// setIntervale sert a passer d'un élément a lautre avec un intervale de temp a définir en ms
// donc la on lui dit d'appliquer la fonction changSlide et d'ajouter 1 toute les 4000ms ou 4s
setInterval("changeSlide(1)",4000);
