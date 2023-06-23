document.addEventListener("DOMContentLoaded", () => {
    iniciarApp();
})
function iniciarApp() {
    llamarDatos();
}


async function llamarDatos() {
    try {
        const request = await fetch("../../portafolio.json");
        const resultado = await request.json();

        console.log(resultado);

        datosPortafolio(resultado);

    } catch (error) {
        console.log(error);
    }
}

function datosPortafolio (dta){
    const divPortafolio = document.querySelector(".portafolio__contenedor--contenido");
    
    dta.forEach(dato => {
        
        const divProyect = document.createElement("DIV");
        divProyect.classList.add("proyecto")

        const titulo = document.createElement("H4");
        titulo.innerHTML= dato.nombre;
        const imagen = document.createElement("IMG");
        imagen.src=`./build/img/${dato.imagen}`
        const descripcion = document.createElement("P");
        descripcion.innerHTML= dato.Descripcion
        const tecnologias = document.createElement("P");
        tecnologias.innerHTML= dato.Tecnologias;

        divProyect.appendChild(titulo);
        divProyect.appendChild(imagen);
        divProyect.appendChild(descripcion);
        divProyect.appendChild(tecnologias);

        divPortafolio.appendChild(divProyect);



        
    });


}