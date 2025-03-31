// Abre el modal con la imagen ampliada
function openModal(imgElement) {
    // Crear el modal y añadir clases
    var modal = document.createElement("div");
    modal.classList.add("modal");
    
    var modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    
    // Crear la imagen en el modal
    var img = document.createElement("img");
    img.src = imgElement.dataset.fullsize; // Usa la imagen grande desde el atributo data-fullsize
    modalContent.appendChild(img);

    // Crear el botón de cierre
    var closeButton = document.createElement("span");
    closeButton.classList.add("close");
    closeButton.innerHTML = "&times;";
    closeButton.onclick = function() {
        modal.style.display = "none";
        document.body.removeChild(modal); // Remover el modal del DOM
    };
    modalContent.appendChild(closeButton);
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Mostrar el modal
    modal.style.display = "block";
}

//header
document.addEventListener("DOMContentLoaded", function () {
    const nombreElemento = document.getElementById("nombre-dinamico");
    const imgRussell = document.getElementById("img-russell");
    const imgSloply = document.getElementById("img-sloply");
    const navLinks = document.querySelectorAll("nav a");
    
    let esRussell = true;
    const colores = {
        russell: { texto: "#E63946", hover: "#E63946" },
        sloply: { texto: "#F77F00", hover: "#F77F00" }
    };
    
    function cambiarModo() {
        esRussell = !esRussell;
    
        let colorActual = esRussell ? colores.russell : colores.sloply;
        let nuevoTexto = esRussell ? "Russell" : "Sloply";
        let i = 0;
    
        nombreElemento.style.color = colorActual.texto;
        document.documentElement.style.setProperty("--texto-color", colorActual.texto); // Cambia el color de los h2
        nombreElemento.innerHTML = ""; 
    
        function escribirTexto() {
            if (i < nuevoTexto.length) {
                nombreElemento.innerHTML += nuevoTexto[i];
                i++;
                setTimeout(escribirTexto, 100);
            }
        }
        escribirTexto();
    
        imgRussell.style.opacity = esRussell ? "1" : "0";
        imgSloply.style.opacity = esRussell ? "0" : "1";
    
        document.documentElement.style.setProperty("--hover-color", colorActual.hover);
    }
    

    setInterval(cambiarModo, 5000);
});

//bara menu
let lastScrollTop = 0;
const nav = document.getElementById("nav");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Bajando -> El nav sigue visible
        nav.style.top = "0";
    } else {
        // Subiendo -> El nav se queda en su posición
        nav.style.top = "0";
    }

    lastScrollTop = scrollTop;
});

//certificados
// Función para mostrar la sección correspondiente
function showSection(sectionId) {
    const allSections = document.querySelectorAll('.certificado-section');
    allSections.forEach(section => {
        section.style.display = 'none';
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}

// Función para abrir las imágenes en un modal (opcional)
function openModal(img) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImg.src = img.getAttribute("data-fullsize");
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.certificado-section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

//abrir y cerrar secciones

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}