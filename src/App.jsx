import React, { useState } from "react";

const email = "luzzmar@gmail.com";
const logo = "/logo-original.webp.png";

const photos = {
  home: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85",
  arquitectura: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=85",
  natura: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85",
  personas: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
  dulceEspera: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
  newborn: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1600&q=85",
  ninos: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1600&q=85",
  comuniones: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=85",
  familias: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=85",
  mayores: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1600&q=85",
  still: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1600&q=85",
  clientes: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85",
};

const mainPages = [
  {
    slug: "arquitectura",
    title: "Arquitectura",
    subtitle: "Arquitectura, patrimonio y espacios con historia",
    description: "Arquitectura, rincones urbanos, patrimonio y espacios que guardan memoria visual.",
    image: photos.arquitectura,
  },
  {
    slug: "natura",
    title: "Natura",
    subtitle: "Paisaje, naturaleza y luz",
    description: "Naturaleza, paisaje, cielos, fauna y pequeños detalles del entorno.",
    image: photos.natura,
  },
  {
    slug: "still-life",
    title: "Still Life",
    subtitle: "Producto, composición y textura",
    description: "Objetos, producto, bodegones, composiciones cuidadas y proyectos visuales.",
    image: photos.still,
  },
];

const personPages = [
  {
    slug: "dulce-espera",
    title: "Dulce espera",
    subtitle: "Maternidad y emoción serena",
    description: "Sesiones de embarazo naturales, delicadas y cercanas.",
    image: photos.dulceEspera,
  },
  {
    slug: "new-born",
    title: "New Born",
    subtitle: "Primeros días, calma y ternura",
    description: "Fotografía de recién nacidos con una mirada suave, respetuosa y llena de detalle.",
    image: photos.newborn,
  },
  {
    slug: "ninos",
    title: "Niños",
    subtitle: "Infancia, juego e imaginación",
    description: "Fotografía infantil natural, creativa e imaginativa.",
    image: photos.ninos,
  },
  {
    slug: "comuniones",
    title: "Comuniones",
    subtitle: "Recuerdos luminosos y familiares",
    description: "Sesiones de comunión sencillas, cuidadas y emotivas.",
    image: photos.comuniones,
  },
  {
    slug: "familias",
    title: "Familias",
    subtitle: "Vínculos, memoria y cariño",
    description: "Fotografía familiar para conservar abrazos, juegos y complicidades.",
    image: photos.familias,
  },
  {
    slug: "mayores",
    title: "Mayores",
    subtitle: "Retratos con historia",
    description: "Retratos de personas mayores con respeto, cercanía y memoria.",
    image: photos.mayores,
  },
];

const clientGalleries = [
  {
    slug: "familia-garcia",
    accessCode: "garcia",
    title: "Familia García",
    clientName: "Familia García",
    password: "garcia2026",
    description: "Selección privada de la sesión familiar.",
    cover: photos.familias,
    images: [photos.familias, photos.personas, photos.ninos, photos.comuniones],
  },
  {
    slug: "comunion-alba",
    accessCode: "alba",
    title: "Comunión de Alba",
    clientName: "Alba",
    password: "alba2026",
    description: "Galería privada de comunión.",
    cover: photos.comuniones,
    images: [photos.comuniones, photos.ninos, photos.familias, photos.personas],
  },
  {
    slug: "new-born-demo",
    accessCode: "demo",
    title: "New Born Demo",
    clientName: "Cliente demo",
    password: "demo2026",
    description: "Ejemplo de galería privada para recién nacido.",
    cover: photos.newborn,
    images: [photos.newborn, photos.dulceEspera, photos.familias, photos.ninos],
  },
];

function normalizeAccess(value) {
  return String(value || "").trim().toLowerCase();
}

export default function App() {
  const [page, setPage] = useState("home");

  const mainPage = mainPages.find((item) => item.slug === page);
  const personPage = personPages.find((item) => item.slug === page);

  function open(nextPage) {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Header open={open} currentPage={page} />

      {page === "home" && <Home />}
      {page === "personas" && <Personas open={open} />}
      {mainPage && <Portfolio key={mainPage.slug} item={mainPage} />}
      {personPage && <Portfolio key={personPage.slug} item={personPage} />}
      {page === "clientes" && <Clients />}
      {page === "blog" && <Blog />}
      {page === "contacto" && <Contact />}
      {page === "admin" && <Admin />}

      <Footer open={open} />
    </div>
  );
}

function Header({ open, currentPage }) {
  const isPersonPage = currentPage === "personas" || personPages.some((item) => item.slug === currentPage);
  const isActive = (name) => currentPage === name;

  const menuItems = [
    { slug: "home", label: "Bienvenidos", active: isActive("home") },
    { slug: "arquitectura", label: "Arquitectura", active: isActive("arquitectura") },
    { slug: "natura", label: "Natura", active: isActive("natura") },
    { slug: "dulce-espera", label: "Dulce espera", active: isActive("dulce-espera") },
    { slug: "new-born", label: "New Born", active: isActive("new-born") },
    { slug: "ninos", label: "Niños", active: isActive("ninos") },
    { slug: "comuniones", label: "Comuniones", active: isActive("comuniones") },
    { slug: "familias", label: "Familias", active: isActive("familias") },
    { slug: "mayores", label: "Mayores", active: isActive("mayores") },
    { slug: "still-life", label: "Still Life", active: isActive("still-life") },
    { slug: "clientes", label: "Clientes", active: isActive("clientes") },
    { slug: "blog", label: "Blog", active: isActive("blog") },
    { slug: "contacto", label: "Contacto", active: isActive("contacto") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-3">
        <div className="flex items-center justify-between">
          <button onClick={() => open("home")} className="flex h-20 w-52 items-center md:h-24 md:w-64">
            <img src={logo} alt="Lucía Gámez Photo" className="h-full w-full object-contain object-left" />
          </button>
          <p className="hidden text-xs uppercase tracking-[0.35em] text-stone-400 md:block">Portfolio</p>
        </div>

        <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Menú principal">
          {menuItems.map((item) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => open(item.slug)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm transition ${
                item.active
                  ? "border-stone-900 bg-stone-900 text-white"
                  : "border-stone-200 bg-white/70 text-stone-600 hover:border-stone-900 hover:text-stone-950"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Home() {
  return (
    <main className="bg-stone-50 text-stone-900">
      <section className="relative min-h-screen overflow-hidden">
        <img src={photos.home} alt="Fotografía principal" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/20 via-stone-950/10 to-stone-50" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-24">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs uppercase tracking-[0.45em] text-white/85">Bienvenidos</p>
            <h1 className="whitespace-nowrap font-serif text-4xl leading-none text-white drop-shadow-md md:text-7xl lg:text-8xl">
              Fotografías con alma.
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-12">
          <p className="whitespace-nowrap font-serif text-2xl leading-tight text-stone-950 md:text-5xl">
            Imágenes nacidas de una forma pausada de mirar.
          </p>

          <div className="mt-8 space-y-4 text-base leading-8 text-stone-600 md:text-lg">
            <p className="md:whitespace-nowrap">Me gusta observar la luz, los silencios y los gestos pequeños.</p>
            <p className="md:whitespace-nowrap">Busco fotografías honestas, sensibles y atemporales.</p>
            <p className="md:whitespace-nowrap">Imágenes que guarden memoria, emoción y presencia.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Personas({ open }) {
  return (
    <main className="bg-stone-50 text-stone-900">
      <section className="relative min-h-[85vh] overflow-hidden">
        <img src={photos.personas} alt="Personas" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/15 to-stone-50" />
        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-end px-6 pb-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-stone-100">Portfolio</p>
            <h1 className="font-serif text-6xl leading-none text-white md:text-8xl">Personas</h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-stone-500">Galerías</p>
          <h2 className="font-serif text-4xl text-stone-950 md:text-6xl">Elige una historia</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {personPages.map((item) => (
            <button key={item.slug} type="button" onClick={() => open(item.slug)} className="group relative min-h-[430px] overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-200/80">
              <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-stone-200">Personas</p>
                <h3 className="font-serif text-4xl text-white">{item.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function getPortfolioImages(item) {
  const galleries = {
    arquitectura: [photos.arquitectura, photos.still, photos.home, photos.natura],
    natura: [photos.natura, photos.home, photos.arquitectura, photos.mayores],
    "still-life": [photos.still, photos.arquitectura, photos.natura, photos.home],
    "dulce-espera": [photos.dulceEspera, photos.personas, photos.familias, photos.ninos],
    "new-born": [photos.newborn, photos.dulceEspera, photos.familias, photos.ninos],
    ninos: [photos.ninos, photos.familias, photos.personas, photos.comuniones],
    comuniones: [photos.comuniones, photos.ninos, photos.familias, photos.personas],
    familias: [photos.familias, photos.personas, photos.ninos, photos.comuniones],
    mayores: [photos.mayores, photos.familias, photos.personas, photos.natura],
  };

  return galleries[item.slug] || [item.image];
}

function Portfolio({ item }) {
  const galleryImages = getPortfolioImages(item);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = galleryImages[activeIndex] || galleryImages[0];

  function goToNextImage() {
    setActiveIndex((currentIndex) => {
      const nextIndex = currentIndex + 1;
      return nextIndex >= galleryImages.length ? 0 : nextIndex;
    });
  }

  function goToPreviousImage(event) {
    event.stopPropagation();
    setActiveIndex((currentIndex) => {
      const previousIndex = currentIndex - 1;
      return previousIndex < 0 ? galleryImages.length - 1 : previousIndex;
    });
  }

  return (
    <main className="bg-stone-50 text-stone-900">
      <section className="relative min-h-screen overflow-hidden">
        <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/45 via-stone-950/18 to-stone-50/15" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-white/40 bg-white/20 px-4 py-2 text-sm text-white backdrop-blur">Portfolio</p>
            <h1 className="font-serif text-5xl leading-none text-white md:text-8xl">{item.title}</h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-stone-500">Galería</p>
          <h2 className="font-serif text-4xl text-stone-950 md:text-6xl">Carrusel</h2>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
          <button type="button" onClick={goToNextImage} className="group relative block w-full text-left" aria-label="Ver siguiente fotografía">
            <img src={activeImage} alt={`${item.title} ${activeIndex + 1}`} draggable="false" className="h-[72vh] w-full select-none object-cover transition duration-700 group-hover:scale-[1.01]" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/45 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-full border border-white/25 bg-white/20 px-4 py-2 text-xs text-white backdrop-blur">
              {activeIndex + 1} / {galleryImages.length} · Pulsa la imagen para avanzar
            </div>
            <button
              type="button"
              onClick={goToPreviousImage}
              className="absolute left-6 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/25 bg-white/20 px-4 py-3 text-2xl text-white backdrop-blur transition hover:bg-white hover:text-stone-950 md:block"
              aria-label="Fotografía anterior"
            >
              ‹
            </button>
          </button>
        </div>

        <div className="mt-5 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {galleryImages.map((image, index) => (
            <button
              key={`${item.slug}-thumb-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-20 w-28 shrink-0 overflow-hidden rounded-2xl border transition ${
                activeIndex === index ? "border-stone-900" : "border-stone-200 opacity-70 hover:opacity-100"
              }`}
              aria-label={`Ir a fotografía ${index + 1}`}
            >
              <img src={image} alt={`${item.title} miniatura ${index + 1}`} draggable="false" className="h-full w-full select-none object-cover" />
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function Clients() {
  const [clientName, setClientName] = useState("");
  const [password, setPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(null);
  const [error, setError] = useState("");
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const activeImage = accessGranted && activeImageIndex !== null ? accessGranted.images[activeImageIndex] : null;

  function submitPrivateAccess(event) {
    event.preventDefault();

    const normalizedName = normalizeAccess(clientName);
    const gallery = clientGalleries.find(
      (item) =>
        normalizeAccess(item.clientName) === normalizedName ||
        normalizeAccess(item.title) === normalizedName ||
        normalizeAccess(item.accessCode) === normalizedName
    );

    if (!gallery || password.trim() !== gallery.password) {
      setError("Nombre o contraseña incorrectos. Revisa los datos de acceso facilitados.");
      setAccessGranted(null);
      setActiveImageIndex(null);
      return;
    }

    setAccessGranted(gallery);
    setClientName("");
    setPassword("");
    setError("");
    setActiveImageIndex(null);
  }

  function closeAccess() {
    setAccessGranted(null);
    setError("");
    setActiveImageIndex(null);
  }

  function goToNextImage() {
    if (!accessGranted || activeImageIndex === null) return;
    setActiveImageIndex((currentIndex) => {
      const nextIndex = currentIndex + 1;
      return nextIndex >= accessGranted.images.length ? 0 : nextIndex;
    });
  }

  function goToPreviousImage(event) {
    event.stopPropagation();
    if (!accessGranted || activeImageIndex === null) return;
    setActiveImageIndex((currentIndex) => {
      const previousIndex = currentIndex - 1;
      return previousIndex < 0 ? accessGranted.images.length - 1 : previousIndex;
    });
  }

  function closeCarousel(event) {
    event.stopPropagation();
    setActiveImageIndex(null);
  }

  return (
    <main className="bg-stone-50 text-stone-900">
      <section className="relative min-h-[78vh] overflow-hidden">
        <img src={photos.clientes} alt="Clientes" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-stone-950/15 to-stone-50" />

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-end px-6 pb-20">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white">Área privada</p>
            <h1 className="font-serif text-5xl leading-none text-white md:text-7xl lg:text-8xl">Accede a tu galería.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">Nombre y contraseña.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
          <img src={photos.clientes} alt="Acceso privado" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/65 via-stone-950/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-stone-100">Clientes</p>
            <h2 className="font-serif text-4xl text-white md:text-5xl">Un acceso sencillo.</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-stone-200">Acceso privado.</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-10">
          <p className="mb-3 text-xs uppercase tracking-[0.45em] text-stone-500">Acceso clientes</p>
          <h2 className="font-serif text-4xl text-stone-950 md:text-6xl">Galería privada</h2>
          <p className="mt-5 max-w-xl text-stone-500">Nombre y contraseña.</p>

          <form onSubmit={submitPrivateAccess} className="mt-8 space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm text-stone-600">Nombre</span>
              <input
                value={clientName}
                onChange={(event) => setClientName(event.target.value)}
                type="text"
                placeholder="Tu nombre"
                className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none placeholder:text-stone-400 focus:border-stone-950"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-stone-600">Contraseña</span>
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                placeholder="Introduce tu contraseña"
                className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none placeholder:text-stone-400 focus:border-stone-950"
              />
            </label>

            {error && <p className="rounded-2xl bg-red-50 p-4 text-sm text-red-700">{error}</p>}

            <button type="submit" className="inline-flex rounded-full border border-stone-900 bg-stone-900 px-7 py-3 text-sm font-medium text-white transition hover:bg-stone-700">
              Entrar
            </button>
          </form>

          <p className="mt-6 text-xs leading-6 text-stone-400">Sólo visualización.</p>
        </div>
      </section>

      {accessGranted && (
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="mb-10 flex flex-col justify-between gap-6 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.45em] text-stone-500">Galería privada</p>
              <h2 className="font-serif text-4xl text-stone-950 md:text-6xl">{accessGranted.title}</h2>
              <p className="mt-4 max-w-2xl text-stone-500">Sólo visualización.</p>
            </div>
            <button type="button" onClick={closeAccess} className="rounded-full border border-stone-300 px-5 py-3 text-sm text-stone-700 hover:bg-stone-900 hover:text-white">
              Cerrar galería
            </button>
          </div>

          <div className="columns-1 gap-5 md:columns-2 xl:columns-3">
            {accessGranted.images.map((image, index) => (
              <button
                key={`${accessGranted.slug}-${index}`}
                type="button"
                onClick={() => setActiveImageIndex(index)}
                className="mb-5 block w-full break-inside-avoid overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-sm"
                aria-label={`Ver fotografía ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${accessGranted.title} ${index + 1}`}
                  draggable="false"
                  className="w-full select-none object-cover transition duration-500 hover:scale-[1.02]"
                />
              </button>
            ))}
          </div>
        </section>
      )}

      {activeImage && accessGranted && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/95 p-4" onClick={goToNextImage}>
          <button type="button" onClick={closeCarousel} className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white hover:text-stone-950">
            Cerrar
          </button>
          <button
            type="button"
            onClick={goToPreviousImage}
            className="absolute left-5 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-2xl text-white hover:bg-white hover:text-stone-950 md:block"
            aria-label="Foto anterior"
          >
            ‹
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs text-stone-300 backdrop-blur">
            {activeImageIndex + 1} / {accessGranted.images.length} · Sólo visualización
          </div>
          <img
            src={activeImage}
            alt={`${accessGranted.title} ${activeImageIndex + 1}`}
            draggable="false"
            className="max-h-[88vh] max-w-full cursor-pointer select-none rounded-2xl object-contain"
          />
        </div>
      )}
    </main>
  );
}

function Blog() {
  return (
    <main className="bg-stone-50 px-6 py-24 text-stone-950">
      <section className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-stone-500">Blog</p>
        <h1 className="max-w-4xl font-serif text-6xl">Notas.</h1>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="font-serif text-4xl">Fotografías con alma</h2>
          </article>
          <article className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="font-serif text-4xl">Luz tranquila</h2>
          </article>
        </div>
      </section>
    </main>
  );
}

function Contact() {
  return (
    <main className="bg-stone-50 px-6 py-24 text-stone-950">
      <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-stone-500">Contacto</p>
          <h2 className="font-serif text-5xl">Hablemos.</h2>
          <a href={`mailto:${email}`} className="mt-10 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-700">{email}</a>
        </div>
        <form className="rounded-[2rem] border border-stone-200 bg-white p-8 text-stone-950 shadow-sm">
          <input placeholder="Nombre" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-950" />
          <textarea placeholder="Mensaje" rows="5" className="mt-5 w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-950" />
          <a href={`mailto:${email}`} className="mt-6 inline-flex rounded-full bg-stone-900 px-7 py-4 text-sm font-medium text-white hover:bg-stone-700">Enviar mensaje</a>
        </form>
      </section>
    </main>
  );
}

function Admin() {
  return (
    <main className="bg-stone-50 px-6 py-24 text-stone-950">
      <section className="mx-auto max-w-5xl rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-stone-500">Admin</p>
        <h1 className="font-serif text-5xl">Panel de edición</h1>
        <p className="mt-6 text-stone-600">Panel privado.</p>
      </section>
    </main>
  );
}

function Footer({ open }) {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="font-serif text-2xl text-stone-950">Lucía Gámez</p>
        <p className="text-sm text-stone-500">© Lucía Gámez Photo · Proyectos Fotográficos</p>
        <div className="flex flex-wrap gap-3">
          <a href="https://www.instagram.com/luzzmar/" className="rounded-full border border-stone-300 px-4 py-3 text-sm text-stone-600 hover:bg-stone-900 hover:text-white">Instagram</a>
          <a href="https://www.facebook.com/Luzzzmar/" className="rounded-full border border-stone-300 px-4 py-3 text-sm text-stone-600 hover:bg-stone-900 hover:text-white">Facebook</a>
          <a href="https://1x.com/luciagamez" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-sm font-semibold text-stone-600 hover:bg-stone-900 hover:text-white">1×</a>
          <button onClick={() => open("admin")} className="rounded-full border border-stone-300 px-4 py-3 text-sm text-stone-600 hover:bg-stone-900 hover:text-white">Admin</button>
        </div>
      </div>
    </footer>
  );
}

function runTests() {
  console.assert(logo === "/logo-original.webp.png", "El logo debe cargarse desde public/logo-original.webp.png");
  console.assert(personPages.length === 6, "Personas debe tener 6 subcategorías.");
  console.assert(!document.documentElement.innerHTML.includes(">Personas<"), "El menú principal no debe mostrar la opción general Personas.");
  console.assert(clientGalleries.length >= 2, "Debe haber varias galerías privadas de clientes.");
  console.assert(clientGalleries.every((gallery) => gallery.clientName && gallery.password), "Cada galería privada debe tener nombre de cliente y contraseña.");
  console.assert(new Set(clientGalleries.map((gallery) => normalizeAccess(gallery.clientName))).size === clientGalleries.length, "Cada nombre de cliente debe ser único.");
  console.assert(clientGalleries.every((gallery) => gallery.accessCode && gallery.password), "Cada galería privada conserva un código interno y contraseña.");
  console.assert(clientGalleries.every((gallery) => gallery.images.length >= 4), "Cada galería privada debe tener al menos 4 imágenes disponibles internamente.");
  console.assert(clientGalleries.every((gallery) => gallery.images[0] === gallery.cover), "La primera foto de cada carrusel debe ser la portada de su galería.");
  console.assert(clientGalleries.every((gallery) => normalizeAccess(gallery.clientName).length > 0), "Cada cliente debe poder identificarse con un nombre válido.");
  console.assert(!document.documentElement.innerHTML.includes("Reservar sesión"), "No debe aparecer Reservar sesión.");
}

if (typeof window !== "undefined") runTests();
