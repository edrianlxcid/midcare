//Voy a decirle a JavasScript que se ejecute una vez que el documento o el DOM se haya cargado completamente

$(document).ready(function(){
    //recorre todo los enlaces o elementos que se enceuntran en la clase .menu
    $('.menu a').each(function(index, elemento){
        //le voy a desaparece al menu con una nueva posicion vertical
        $(this).css({
            'top': '-200px'
        })

        //voy a implementar una funcion para que cada uno de los elemntos del menu aparez ca con un efecto de deplazamiento
        $(this).animate({
            top: '0'
        }, 1000 + (index * 500))//el primer elemnto se va a demorar 2000ms y el segundo 2500ms y asi sucesivamente con cada uno de los elemtnos


        if($(window).width() >800){
            //establezco estilos iniciales del texto dento del header
            //opacidad de 0 (invisible)
            //margen superior en 0 (posicion que va a tener antes de la animacion)
            $('header .bienvenida-texto').css({
                opacity: 0,
                marginTop:0
            })

            //aplico una anmiacion para que el texto aparezca con un efecto de desplazamiento 
            $('header .bienvenida-texto').animate({
                //se haga visible
                opacity: 1,
                //se desplace hacia arriba-52px
                marginTop: '-52px'
            }, 1500)//1500 milisisegundos
        }

        var inicio=$('#inicio').offset().top,
            menu=$('#platillos').offset().top,
            galeria=$('#galeria').offset().top,
            ubicacion=$('#galeria').offset().top;
        $('#btn-inicio').on('click', function(e){
            e.preventDefault()
            $('html, body').animate({
                scrollTop: inicio -100 
        })
        
        $('#btn-nostros').on('click', function(e){
            e.preventDefault()
            $('html, body').animate({
                scrollTop: acercaDe -100 
        })  

    })
})