  // Generar múltiples corazones
  function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerText = "❤";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = Math.random() * 30 + 20 + "px";
    corazon.style.animationDuration = Math.random() * 3 + 2 + "s";

    document.body.appendChild(corazon);

    // Eliminar el corazón después de que caiga
    setTimeout(() => {
      corazon.remove();
    }, 5000);
  }

  // Crear un corazón cada 200 ms
  setInterval(crearCorazon, 200);
  