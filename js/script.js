const irPersonajes = () => document.getElementById("personajes")?.scrollIntoView({ behavior: "smooth" });

window.addEventListener("load", () => setTimeout(() => {
    const intro = document.getElementById("intro");
    if (intro) intro.style.display = "none";
}, 3000));

const personajes = [
    { 
        nombre: "MILES MORALES", 
        tipo: "SPIDER-MAN", 
        imagen: "./spider-verse/img/miles.png", 
        descripcion: "Miles Morales es uno de los Spider-Man más importantes del Spider-Verse. Un joven de Brooklyn que descubre que existen múltiples versiones de Spider-Man.", 
        fondo: "radial-gradient(circle at 20% 50%, rgba(229, 9, 47, 0.35), transparent 35%), linear-gradient(135deg, #030303, #180006, #050505)",
        universo: "tierra-1610.html"
    },
    { 
        nombre: "GWEN STACY", 
        tipo: "SPIDER-WOMAN", 
        imagen: "./spider-verse/img/gwen.png", 
        descripcion: "Gwen Stacy es una Spider-Woman proveniente de otra dimensión. Una heroína que lucha por encontrar su lugar entre diferentes universos.", 
        fondo: "radial-gradient(circle at 75% 40%, rgba(255, 70, 180, 0.35), transparent 35%), linear-gradient(135deg, #080018, #24104a, #061c35)",
        universo: "tierra-65.html"
 },
    { 
        nombre: "MIGUEL O'HARA", 
        tipo: "SPIDER-MAN 2099", 
        imagen: "./spider-verse/img/miguel.png", 
        descripcion: "Miguel O'Hara es el Spider-Man del año 2099 y líder de la Spider-Society. Un personaje poderoso encargado de proteger el equilibrio del Spider-Verse.", 
        fondo: "radial-gradient(circle at 25% 50%, rgba(0, 120, 255, 0.35), transparent 35%), linear-gradient(135deg, #020611, #071b3a, #030303)",
        universo: "tierra-928.html"
    },
    { 
        nombre: "HOBBIE BROWN", 
        tipo: "SPIDER-PUNK", 
        imagen: "./spider-verse/img/hobbie.png", 
        descripcion: "Hobie Brown es Spider-Punk, un Spider-Man rebelde que utiliza su estilo punk para enfrentarse a las injusticias de su universo.", 
        fondo: "radial-gradient(circle at 70% 40%, rgba(255, 30, 60, 0.35), transparent 35%), linear-gradient(135deg, #050505, #25000b, #111111)",
        universo: "tierra-138.html"
    },
    { 
        nombre: "PAVITR PRABHAKAR", 
        tipo: "SPIDER-MAN INDIA", 
        imagen: "./spider-verse/img/pavitr.png", 
        descripcion: "Pavitr Prabhakar es el Spider-Man de Mumbattan. Un héroe joven, carismático y lleno de confianza.", 
        fondo: "radial-gradient(circle at 30% 40%, rgba(255, 150, 30, 0.35), transparent 35%), linear-gradient(135deg, #e73b06, #4a1900, #e2980f96)",
        universo: "tierra-50101.html"
    },
    { 
        nombre: "JESSICA DREW", 
        tipo: "SPIDER-WOMAN", 
        imagen: "./spider-verse/img/jessica_drew_spider_woman_on_motorcycle_png_by_jawlessarrowmagnet58_dge55rw.png", 
        descripcion: "Una experimentada heroína en motocicleta que apoya a Miguel O'Hara y está embarazada.", 
        fondo: "radial-gradient(circle at 50% 50%, rgba(255, 100, 0, 0.35), transparent 35%), linear-gradient(135deg, #160a00, #4a2200, #050505)",
        universo: "tierra-404.html"
    },
    { 
        nombre: "PETER B. PARKER", 
        tipo: "SPIDER-MAN", 
        imagen: "./spider-verse/img/spider_man_by_hz_designs_dcv50n1.png", 
        descripcion: "El viejo mentor de Miles, quien ahora viaja por el multiverso cargando a su hija pequeña.", 
        fondo: "radial-gradient(circle at 40% 50%, rgba(0, 150, 200, 0.35), transparent 35%), linear-gradient(135deg, #020914, #0b294a, #050505)",
        universo: "tierra-616.html"
    },
    { 
        nombre: "MAYDAY PARKER", 
        tipo: "MAY", 
        imagen: "./spider-verse/img/mayday_parker_28spider_verse_29_png_by_elijah1ofakind_dm4db0g.webp", 
        descripcion: "La bebé superpoderosa de Peter B. Parker y Mary Jane que adora la acción.", 
        fondo: "radial-gradient(circle at 60% 50%, rgba(255, 100, 150, 0.35), transparent 35%), linear-gradient(135deg, #150011, #4a0033, #050505)",
        universo: "tierra-982.html"
    },
    { 
        nombre: "MARGO KESS", 
        tipo: "SPIDER-BYTE", 
        imagen: "./spider-verse/img/margo_kess_spider_byte_atsv_png_by_iwasboredsoididthis_dg2j2kt-pre.png", 
        descripcion: "Una joven hacker que protege la red del multiverso desde un mundo virtual.", 
        fondo: "radial-gradient(circle at 50% 50%, rgba(100, 200, 255, 0.35), transparent 35%), linear-gradient(135deg, #00121a, #003b4d, #050505)",
        universo: "tierra-22191.html"
    },
    { 
        nombre: "BEN REILLY", 
        tipo: "SCARLET SPIDER", 
        imagen: "./spider-verse/img/ben_reilly_render_by_kiss_and_kancer_def0jzd.png", 
        descripcion: "Un clon de Peter Parker con una personalidad exageradamente dramática y clásica de los 90.", 
        fondo: "radial-gradient(circle at 50% 50%, rgba(0, 100, 200, 0.35), transparent 35%), linear-gradient(135deg, #020512, #081636, #050505)",
        universo: "tierra-94.html"
    },
    { 
        nombre: "PENI PARKER", 
        tipo: "SP//DR", 
        imagen: "./spider-verse/img/peni_parker_and_spdr_itsv_render_png_by_elijah1ofakind_dkslmb4.webp", 
        descripcion: "La piloto del robot SP//dr, quien regresa con un diseño actualizado y tierno.", 
        fondo: "radial-gradient(circle at 50% 50%, rgba(0, 255, 120, 0.35), transparent 35%), linear-gradient(135deg, #001a0a, #004d1f, #050505)",
        universo: "tierra-14512.html"
    },
    { 
        nombre: "JONATHAN OHNN", 
        tipo: "LA MANCHA / THE SPOT", 
        imagen: "./spider-verse/img/the_spot_png_render_by_marcopolo157_dhbp7b1.png", 
        descripcion: "El villano principal, un científico convertido en monstruo de portales dimensionales.", 
        fondo: "radial-gradient(circle at 50% 50%, rgba(200, 200, 200, 0.25), transparent 35%), linear-gradient(135deg, #0a0a0a, #262626, #020202)",
        universo: "tierra-1610s.html"
    },
    { 
        nombre: "PATRICK O'HARA", 
        tipo: "WEB-SLINGER", 
        imagen: "./spider-verse/img/Cowboy-Spider-Man-Image-1.avif", 
        descripcion: "El Spider-Man vaquero del Viejo Oeste que cabalga junto a su fiel caballo con poderes arácnidos.", 
        fondo: "radial-gradient(circle at 50% 50%, rgba(180, 100, 30, 0.35), transparent 35%), linear-gradient(135deg, #1c0e00, #4d2600, #050505)",
        universo: "tierra-31913.html"
    }
];

let personajeActual = 0;
const contenedor = document.getElementById("personaje");

function cargarPersonaje(indice) {
    const p = personajes[indice];
    const imgElement = document.getElementById("imagen-personaje");
    const nombreElement = document.getElementById("nombre-personaje");
    const tipoElement = document.getElementById("tipo-personaje");
    const descElement = document.getElementById("descripcion-personaje");
    const personajesSection = document.getElementById("personajes");
    const enlaceUniverso = document.getElementById("enlace-universo");

    if (imgElement) {
        imgElement.src = p.imagen;
        imgElement.alt = p.nombre;
    }
    if (nombreElement) nombreElement.textContent = p.nombre;
    if (tipoElement) tipoElement.textContent = p.tipo;
    if (descElement) descElement.textContent = p.descripcion;
    if (personajesSection) personajesSection.style.background = p.fondo;
    if (enlaceUniverso) enlaceUniverso.href = p.universo;
}

document.addEventListener("DOMContentLoaded", () => {
    cargarPersonaje(personajeActual);
});

const btnSiguiente = document.getElementById("siguiente");
if (btnSiguiente && contenedor) {
    btnSiguiente.addEventListener("click", () => {
        contenedor.classList.remove("entrando");
        contenedor.classList.add("saliendo");

        setTimeout(() => {
            personajeActual = (personajeActual + 1) % personajes.length;
            cargarPersonaje(personajeActual);

            contenedor.classList.remove("saliendo");
            void contenedor.offsetWidth; 
            contenedor.classList.add("entrando");
        }, 700);
    });
}