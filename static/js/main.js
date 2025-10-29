const ciclos = document.querySelectorAll(".ciclo");
const revelaciones = document.querySelectorAll(".revelaciones");

// slider infinito
ciclos.forEach(ciclo =>{
  const certificados = [...ciclo.children]; // encierra en un array a los hijos de los Ciclos (certificados)
  for (const certificado of certificados){ // por cada slider dentro del array
    ciclo.appendChild(certificado.cloneNode(true)); // crea una copia exacta de los sliders en su respectivo ciclo
  }; 
});

// tamaño slider
function elegido(e){ e.style.transform = "scale(1.05)"; };
function rechazo(e){ e.style.transform = "scale(1)"; };

function dynamico (e){
  const coloresPro = ["#2C3E50", "#34495E", "#1ABC9C", "#2980B9", "#8E44AD", "blueviolet"];
  const ruleta = Math.floor(Math.random() * coloresPro.length);

  e.style.transform = "scale(1.05)";
  e.style.backgroundColor = `${coloresPro[ruleta]}`;
  
  e.addEventListener("mouseout", function() {
    this.style.transform = "scale(1)";
  })
};

document.getElementById("año").textContent = new Date().getFullYear(); // año

// revelaciones (mi foto, y otros elementos apareceran de izquierda y derecha)

const flujo =  new  IntersectionObserver ((entradas) => {
  entradas.forEach(entrada =>{
    if(entrada.isIntersecting){
      entrada.target.classList.add('desveladas');
      flujo.unobserve(entrada.target);
    }
  });
},{
  threshold: 0.1
}); revelaciones.forEach(f => flujo.observe(f));


// adios bloques

function borrar(e){
  const bisabuelo = e.parentElement.parentElement.parentElement;
  bisabuelo.style.display = "none"
}