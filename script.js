/* =====================================================
   1) DATOS DE TU TIENDA
   ===================================================== */
const TIENDA_NOMBRE = "LUNNELA";
const TIENDA_DESCRIPCION = "tu descripción aquí";

const TIKTOK_URL = "https://www.tiktok.com/@luunnela";
const TIKTOK_USUARIO = "@luunnela";

// Extensión de tus fotos: "jpg", "png", "webp"...  (img1.jpg, img2.jpg, ...)
const EXT = "jpg";

/* =====================================================
   2) PRODUCTOS
   - nombre / precio: texto tal cual se ve en la página
   - estado: "disponible" | "agotado" | "separado"
   - n: número de la foto -> img/img{n}.jpg  (img1, img2, ...)
   ===================================================== */
const secciones = [
  {
    id: "cartucheras",
    titulo: "𝖼𝖺𝗋𝗍𝗎𝖼𝗁𝖾𝗋𝖺𝗌/𝗇𝖾𝖼𝖾𝗌𝖾𝗋 ⊹ ࣪ ˖ ໒꒱",
    productos: [
      { n: 1, nombre: "𝗽𝘂𝘀𝗵𝗲𝗲𝗻 ⚞^. .^⚟",   precio: "𝗌/𝟤𝟢",     estado: "disponible" },
      { n: 2, nombre: "𝘀𝘄𝗲𝗲𝘁 𝗽𝗶𝗮𝗻𝗼⋆˚࿔",     precio: "𝗌/𝟤𝟧",     estado: "disponible" },
      { n: 3, nombre: "𝗽𝗼𝗺𝗽𝗼𝗺𝗽𝘂𝗿𝗶𝗻 ಄",      precio: "𝗌/𝟤𝟢.𝟧𝟢",  estado: "disponible" },
      { n: 4, nombre: "𝗵𝗲𝗹𝗹𝗼 𝗸𝗶𝘁𝘁𝘆 ୨ৎ",      precio: "𝗌/𝟤𝟢",     estado: "disponible" }
    ]
  },
  {
    id: "peluches",
    titulo: "peluches",
    productos: [
      { n: 6, nombre: "𝗽𝘂𝘀𝗵𝗲𝗲𝗻 𝘀𝗶𝗿𝗲𝗻𝗶𝘁𝗮 ⸝⸝", precio: "𝗌/𝟥𝟢", estado: "disponible" },
      { n: 7, nombre: "𝗽𝘂𝘀𝗵𝗲𝗲𝗻 𝗱𝗼𝗻𝗶𝘁𝗮 ೀ",     precio: "𝗌/𝟤𝟧", estado: "disponible" }
    ]
  },
  {
    id: "stock",
    titulo: "𝐬𝐭𝐨𝐜𝐤 ✧",
    productos: [
      { n: 5, nombre: "𝗽𝗮𝗻𝘁𝘂𝗳𝗹𝗮𝘀 𝗣𝘂𝘀𝗵𝗲𝗲𝗻 ₍^. .^₎Ⳋ", precio: "𝗌/𝟧𝟢", estado: "disponible" },
      { n: 8, nombre: "𝗮𝗻𝗶𝗹𝗹𝗼 𝗿𝗶𝗹𝗮𝗸𝗸𝘂𝗺𝗮𑁤", precio: "𝗌/𝟣𝟢.𝟧", estado: "disponible" },
      { n: 9, nombre: "ׁ ׅ 𝗽𝗲𝗶𝗻𝗲/𝗲𝘀𝗽𝗲𝗷𝗼 𝗿𝗶𝗹𝗮𝗸𝗸𝘂𝗺𝗮! ◡◡", precio: "𝗌/𝟤𝟢", estado: "disponible" }
    ]
  }
];

/* =====================================================
   3) CÓDIGO (no necesitas tocar nada de aquí para abajo)
   ===================================================== */
const textoEstado = {
  disponible: "𝙳𝚒𝚜𝚙𝚘𝚗𝚒𝚋𝚕𝚎",
  agotado: "𝙰𝚐𝚘𝚝𝚊𝚍𝚘",
  separado: "𝚂𝚎𝚙𝚊𝚛𝚊𝚍𝚘"
};

function crearTarjeta(p) {
  const card = document.createElement("article");
  card.className = "card " + p.estado;

  const foto = document.createElement("div");
  foto.className = "foto";
  foto.innerHTML = `<span class="foto-label">img${p.n}</span>`;   // se ve solo si no hay foto

  const img = document.createElement("img");
  img.alt = p.nombre;
  img.src = `img/img${p.n}.${EXT}`;
  img.onerror = () => img.remove();       // si no existe la foto, queda el espacio con "imgN"
  foto.appendChild(img);

  const info = document.createElement("div");
  info.className = "info";
  info.innerHTML = `
    <h3>${p.nombre}</h3>
    <p class="precio">${p.precio}</p>
    <p class="estado ${p.estado}">${textoEstado[p.estado]}</p>
  `;

  card.append(foto, info);
  return card;
}

function pintarCatalogo() {
  const cont = document.getElementById("catalogo");
  secciones.forEach(s => {
    const sec = document.createElement("section");
    sec.id = s.id;
    sec.innerHTML = `<h2 class="titulo">${s.titulo}</h2>`;
    const grid = document.createElement("div");
    grid.className = "grid";
    s.productos.forEach(p => grid.appendChild(crearTarjeta(p)));
    sec.appendChild(grid);
    cont.appendChild(sec);
  });
}

function pintarTienda() {
  document.getElementById("tienda-nombre").textContent = TIENDA_NOMBRE;
  document.getElementById("tienda-desc").textContent = TIENDA_DESCRIPCION;
  document.title = TIENDA_NOMBRE;
}

/* ---------- TikTok ---------- */
function mostrarAviso(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3000);
}

function configurarTikTok() {
  const link = document.getElementById("tiktok-link");
  document.getElementById("tiktok-handle").textContent = TIKTOK_USUARIO;
  if (TIKTOK_URL.startsWith("http")) {
    link.href = TIKTOK_URL;
  } else {
    link.addEventListener("click", e => {
      e.preventDefault();
      mostrarAviso("Falta pegar tu link de TikTok en script.js ✏️");
    });
  }
}

pintarTienda();
pintarCatalogo();
configurarTikTok();
