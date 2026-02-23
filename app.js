// FUNCIÓN QUE CARGA LAS ANIMACIONES DE LAS HABILIDADES

function cargarAnimaciones() {
  $(".chart1").easyPieChart({
    size: 160,
    barColor: "#ff5b00",
    scaleLength: 0,
    lineWidth: 15,
    tackColor: "#525151",
    lineCap: "circle",
    animate: 2000,
  });

  $(".chart2").easyPieChart({
    size: 160,
    barColor: "#ff5b00",
    scaleLength: 0,
    lineWidth: 15,
    tackColor: "#525151",
    lineCap: "circle",
    animate: 2000,
  });

  $(".chart3").easyPieChart({
    size: 160,
    barColor: "#ff5b00",
    scaleLength: 0,
    lineWidth: 15,
    tackColor: "#525151",
    lineCap: "circle",
    animate: 2000,
  });

  $(".chart4").easyPieChart({
    size: 160,
    barColor: "#ff5b00",
    scaleLength: 0,
    lineWidth: 15,
    tackColor: "#525151",
    lineCap: "circle",
    animate: 2000,
  });

  $(".chart5").easyPieChart({
    size: 160,
    barColor: "#ff5b00",
    scaleLength: 0,
    lineWidth: 15,
    tackColor: "#525151",
    lineCap: "circle",
    animate: 2000,
  });

  $(".chart6").easyPieChart({
    size: 160,
    barColor: "#ff5b00",
    scaleLength: 0,
    lineWidth: 15,
    tackColor: "#525151",
    lineCap: "circle",
    animate: 2000,
  });

  $(".chart7").easyPieChart({
    size: 160,
    barColor: "#ff5b00",
    scaleLength: 0,
    lineWidth: 15,
    tackColor: "#525151",
    lineCap: "circle",
    animate: 2000,
  });

  $(".chart8").easyPieChart({
    size: 160,
    barColor: "#ff5b00",
    scaleLength: 0,
    lineWidth: 15,
    tackColor: "#525151",
    lineCap: "circle",
    animate: 2000,
  });
}
// FUNCIÓN QUE FILTRA LAS CATEGORIAS DE LOS PROYECTOS
function verCategoria(cat) {
  const items = document.getElementsByClassName("item");
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "none";
  }

  const itemCat = document.getElementsByClassName(cat);
  for (let i = 0; i < itemCat.length; i++) {
    itemCat[i].style.display = "block";
  }

  const links = document.querySelectorAll(".trabajos nav a");
  links[0].className = "";
  links[1].className = "";
  links[2].className = "";
  links[3].className = "";

  const itemSeleccionado = document.getElementById(cat);
  itemSeleccionado.className = "borde";
}

// FUNCIÓN QUE DETECTA LANZAR LAS ANIMACIONES DE LAS HABILIDADES
function efectoHabilidades() {
  var skills = document.getElementById("habilidades");
  var distancia_skills =
    skills.getBoundingClientRect().top - window.innerHeight;

  if (distancia_skills <= 0) {
    let habilidades = document.getElementsByClassName("chart");
    for (let i = 0; i < habilidades.length; i++) {
      habilidades[i].classList.remove(
        "chart1",
        "chart2",
        "chart3",
        "chart4",
        "chart5",
        "chart6",
        "chart7",
        "chart8"
      );
    }

    habilidades[0].classList.add("chart1");
    habilidades[1].classList.add("chart2");
    habilidades[2].classList.add("chart3");
    habilidades[3].classList.add("chart4");
    habilidades[4].classList.add("chart5");
    habilidades[5].classList.add("chart6");
    habilidades[6].classList.add("chart7");
    habilidades[7].classList.add("chart8");

    cargarAnimaciones();
  }
}

// DETECTAR EL SCROLLING PARA APLICAR LA ANIMACIÓN DE LAS HABILIDADES
window.addEventListener("scroll", efectoHabilidades);

// FUNCIÓN QUE MUESTRA EL MENÚ
function responsiveMenu() {
  let nav = document.getElementById("nav");
  nav.classList.toggle("mostrar");
}

// FUNCIÓN QUE CIERRA EL MENÚ
function closeMenu() {
  let nav = document.getElementById("nav");
  nav.classList.remove("mostrar");
}

// EVENTOS PARA ABRIR Y CERRAR EL MENÚ
document.getElementById("btn-menu").addEventListener("click", responsiveMenu);
document.getElementById("close-menu").addEventListener("click", closeMenu);

// CERRAR MENÚ AL HACER CLICK EN UN ENLACE
let navItems = document.querySelectorAll(".nav__item");
navItems.forEach((item) => {
  item.addEventListener("click", closeMenu);
});

document.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  // Ajusta este valor según cuánto quieres que se desplace antes de mostrar el botón
  var scrollThreshold = 400;
  var scrollLink = document.querySelector(".scroll-link");
  if (scrollPosition > scrollThreshold) {
    scrollLink.classList.add("show-scroll");
  } else {
    scrollLink.classList.remove("show-scroll");
  }
});
document.querySelector(".scroll-link").addEventListener("click", function (e) {
  e.preventDefault();

  // Ajusta la velocidad del desplazamiento cambiando el valor de 'behavior' y 'block'
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Desplazamiento suave
  });
});

document.addEventListener("DOMContentLoaded", function () {
  (function () {
    // Objeto para almacenar los valores del formulario
    const email = {
      nombre: "",
      correo: "",
      mensaje: "",
    };

    // Selección de elementos del DOM
    const inputName = document.querySelector("#nombre");
    const inputEmail = document.querySelector("#correo");
    const inputMessage = document.querySelector("#mensaje");
    const formulario = document.querySelector("#formulario-contacto");
    const btnSubmit = formulario.querySelector('input[type="submit"]');
    const btnReset = formulario.querySelector('input[type="reset"]');
    const spinner = document.getElementById("spinner");
    const mensajeEnviado = document.getElementById("mensaje-enviado");

    // Asignación de eventos
    inputName.addEventListener("input", validar);
    inputEmail.addEventListener("input", validar);
    inputMessage.addEventListener("input", validar);
    formulario.addEventListener("submit", enviarEmail);
    btnReset.addEventListener("click", function (e) {
      e.preventDefault();
      resetFormulario();
    });

    // Función para validar los campos del formulario
    function validar(e) {
      if (e.target.value.trim() === "") {
        mostrarAlerta(
          `El campo ${e.target.id} es obligatorio`,
          e.target.parentElement
        );
        email[e.target.id] = "";
        comprobarEmail();
        return;
      }

      if (e.target.id === "correo" && !validarEmail(e.target.value)) {
        mostrarAlerta(
          `El correo "${e.target.value}" no es válido`,
          e.target.parentElement
        );
        email[e.target.id] = "";
        comprobarEmail();
        return;
      }

      limpiarAlerta(e.target.parentElement);
      email[e.target.id] = e.target.value.trim().toLowerCase();
      comprobarEmail();
    }

    // Función para enviar el formulario
    function enviarEmail(e) {
      e.preventDefault();
      if (!validarFormulario()) {
        return; // Si el formulario no es válido, no hacemos nada
      }

      // Mostrar spinner
      spinner.classList.remove("hidden");
      spinner.classList.add("showmeSpin");

      setTimeout(() => {
        // Ocultar spinner
        spinner.classList.remove("showmeSpin");
        spinner.classList.add("hidden");

        // Mostrar mensaje de enviado correctamente
        mensajeEnviado.classList.remove("hidden");

        setTimeout(() => {
          // Ocultar mensaje después de 3 segundos
          mensajeEnviado.classList.add("hidden");

          // Obtener valores del formulario
          const name = document.getElementById("nombre").value;
          const email = document.getElementById("correo").value;
          const message = document.getElementById("mensaje").value;

          // Generar mensaje de WhatsApp
          const mensajeWhatsApp = generarMensajeWhatsApp(name, email, message);

          // Crear enlace de WhatsApp
          const numeroTelefono = "573232914082"; // Reemplaza con tu número de WhatsApp con el código de país
          const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(
            mensajeWhatsApp
          )}`;

          // Abrir WhatsApp
          window.open(urlWhatsApp, "_blank");

          // Resetear formulario después de abrir WhatsApp
          resetFormulario();
        }, 3000); // Mostrar el mensaje de éxito durante 3 segundos
      }, 4000); // Simular tiempo de carga (3 segundos)
    }

    // Función para validar el formato del correo electrónico
    function validarEmail(email) {
      const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
      return regex.test(email);
    }

    // Función para mostrar alertas de error
    function mostrarAlerta(msg, referencia) {
      limpiarAlerta(referencia);

      const error = document.createElement("p");
      error.textContent = msg;
      error.classList.add(
        "bg-red-600",
        "text-white",
        "p-2",
        "text-center",
        "rounded-lg"
      );

      referencia.appendChild(error);
    }

    // Función para limpiar alertas de error
    function limpiarAlerta(referencia) {
      const alerta = referencia.querySelector(".bg-red-600");
      if (alerta) {
        alerta.remove();
      }
    }

    // Función para comprobar si todos los campos del formulario están completos
    function comprobarEmail() {
      if (Object.values(email).includes("")) {
        btnSubmit.classList.add("opacity-50");
        btnSubmit.disabled = true;
      } else {
        btnSubmit.classList.remove("opacity-50");
        btnSubmit.disabled = false;
      }
    }

    // Función para validar todo el formulario antes de enviar
    function validarFormulario() {
      let formValido = true;

      if (inputName.value.trim() === "") {
        mostrarAlerta(
          `El campo nombre es obligatorio`,
          inputName.parentElement
        );
        formValido = false;
      }

      if (!validarEmail(inputEmail.value)) {
        mostrarAlerta(
          `El correo "${inputEmail.value}" no es válido`,
          inputEmail.parentElement
        );
        formValido = false;
      }

      if (inputMessage.value.trim() === "") {
        mostrarAlerta(
          `El campo mensaje es obligatorio`,
          inputMessage.parentElement
        );
        formValido = false;
      }

      return formValido;
    }

    // Función para resetear el formulario
    function resetFormulario() {
      email.nombre = "";
      email.correo = "";
      email.mensaje = "";

      formulario.reset();
      comprobarEmail();
    }

    // Función para formatear el mensaje de WhatsApp
    function generarMensajeWhatsApp(name, email, message) {
      return `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`;
    }
  })();
});
