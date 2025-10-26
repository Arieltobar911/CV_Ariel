const ciclos = document.querySelectorAll(".ciclo");

ciclos.forEach(ciclo =>{
  const certificados = [...ciclo.children]; // encierra en un array a los hijos de los Ciclos (certificados)
  for (const certificado of certificados){ // por cada slider dentro del array
    ciclo.appendChild(certificado.cloneNode(true)); // crea una copia exacta de los sliders en su respectivo ciclo
  }; 
});