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
    title: "Familia García",
    clientName: "Familia García",
    password: "garcia2026",
    description: "Selección privada de la sesión familiar.",
    cover: photos.familias,
    images: [photos.familias, photos.personas, photos.ninos, photos.comuniones],
  },
  {
    slug: "comunion-alba",
    title: "Comunión de Alba",
    clientName: "Alba",
    password: "alba2026",
    description: "Galería privada de comunión.",
    cover: photos.comuniones,
    images: [photos.comuniones, photos.ninos, photos.familias, photos.personas],
  },
  {
    slug: "new-born-demo",
    title: "New Born Demo",
    clientName: "Cliente demo",
    password: "demo2026",
    description: "Ejemplo de galería privada para recién nacido.",
    cover: photos.newborn,
    images: [photos.newborn, photos.dulceEspera, photos.familias, photos.ninos],
  },
];

export default function App() {
  const [page, setPage] = useState("home");

  const mainPage = mainPages.find((item) => item.slug === page);
  const personPage = personPages.find((item) => item.slug === page);

  function open(nextPage) {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <Header open={open} currentPage={page} />

      {page === "home" && <Home />}
      {page === "personas" && <Personas open={open} />}
      {mainPage && <Portfolio item={mainPage} />}
      {personPage && <Portfolio item={personPage} />}
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

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <button onClick={() => open("home")} className="flex h-24 w-56 items-center md:h-28 md:w-72">
          <img src={logo} alt="Lucía Gámez Photo" className="h-full w-full object-contain object-left" />
        </button>

        <nav className="hidden items-center gap-5 text-sm text-stone-300 md:flex">
          <button onClick={() => open("home")} className={isActive("home") ? "text-white" : "hover:text-white"}>Bienvenidos</button>
          <button onClick={() => open("arquitectura")} className={isActive("arquitectura") ? "text-white" : "hover:text-white"}>Arquitectura</button>
          <button onClick={() => open("natura")} className={isActive("natura") ? "text-white" : "hover:text-white"}>Natura</button>

          <div className="group relative py-3">
            <button onClick={() => open("personas")} className={isPersonPage ? "text-white" : "hover:text-white"}>Personas ⌄</button>
            <div className="invisible absolute left-0 top-full w-64 translate-y-2 rounded-2xl border border-white/10 bg-stone-900/95 p-2 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {personPages.map((item) => (
                <button key={item.slug} onClick={() => open(item.slug)} className="block w-full rounded-xl px-4 py-3 text-left text-sm text-stone-300 hover:bg-white/10 hover:text-white">
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          <button onClick={() => open("still-life")} className={isActive("still-life") ? "text-white" : "hover:text-white"}>Still Life</button>
          <button onClick={() => open("clientes")} className={isActive("clientes") ? "text-white" : "hover:text-white"}>Clientes</button>
          <button onClick={() => open("blog")} className={isActive("blog") ? "text-white" : "hover:text-white"}>Blog</button>
          <button onClick={() => open("contacto")} className="rounded-full border border-white/40 px-5 py-3 font-medium text-white hover:bg-white hover:text-stone-950">Contacto</button>
        </nav>
      </div>
    </header>
  );
}

function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <img src={photos.home} alt="Fotografía principal" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/20" />
      <div className="pointer-events-none fixed left-0 right-0 top-36 z-30 flex justify-center px-6">
        <p className="max-w-5xl text-center text-3xl italic text-white/90 drop-shadow-2xl" style={{ fontFamily: "Snell Roundhand, Apple Chancery, Segoe Script, Bradley Hand, cursive", transform: "skewX(-7deg)" }}>
          Fotografías con alma, hechas para guardar lo que el corazón no quiere olvidar.
        </p>
      </div>
    </main>
  );
}

function Personas({ open }) {
  return (
    <main className="bg-stone-950 text-white">
      <section className="relative min-h-[85vh] overflow-hidden">
        <img src={photos.personas} alt="Personas" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-stone-950/35 to-stone-950" />
        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-end px-6 pb-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-stone-200">Portfolio</p>
            <h1 className="font-serif text-6xl leading-none md:text-8xl">Personas</h1>
            <p className="mt-6 text-lg leading-8 text-stone-200">Una entrada visual a cada galería de retrato: maternidad, recién nacidos, infancia, comuniones, familias y mayores.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-stone-500">Galerías</p>
            <h2 className="font-serif text-4xl md:text-6xl">Elige una historia</h2>
          </div>
          <p className="max-w-xl text-stone-400">Cada tarjeta funciona como acceso a una galería independiente.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {personPages.map((item) => (
            <button key={item.slug} type="button" onClick={() => open(item.slug)} className="group relative min-h-[430px] overflow-hidden rounded-3xl border border-white/10 bg-stone-900 text-left">
              <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-stone-300">Personas</p>
                <h3 className="font-serif text-4xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-300">{item.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function Portfolio({ item }) {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden">
        <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-stone-950/15" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-stone-200">Portfolio / {item.title}</p>
            <h1 className="font-serif text-5xl leading-none md:text-8xl">{item.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-200">{item.description}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-stone-500">Galería</p>
          <h2 className="font-serif text-4xl md:text-6xl">Selección de trabajos</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((number) => (
            <img key={number} src={item.image} alt={`${item.title} ${number}`} className="aspect-[4/5] rounded-[1.5rem] object-cover" />
          ))}
        </div>
      </section>
    </main>
  );
}

function Clients() {
  const [selectedSlug, setSelectedSlug] = useState(clientGalleries[0]?.slug || "");
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState({});
  const [error, setError] = useState("");
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const selectedGallery = clientGalleries.find((gallery) => gallery.slug === selectedSlug) || clientGalleries[0];
  const isUnlocked = Boolean(selectedGallery && unlocked[selectedGallery.slug]);
  const activeImage = selectedGallery && activeImageIndex !== null ? selectedGallery.images[activeImageIndex] : null;

  function submitPassword(event) {
    event.preventDefault();
    if (!selectedGallery) return;

    if (password.trim() === selectedGallery.password) {
      setUnlocked((current) => ({ ...current, [selectedGallery.slug]: true }));
      setPassword("");
      setError("");
    } else {
      setError("Contraseña incorrecta. Revisa la clave de tu galería.");
    }
  }

  function goToNextImage() {
    if (!selectedGallery || activeImageIndex === null) return;
    setActiveImageIndex((currentIndex) => {
      const nextIndex = currentIndex + 1;
      return nextIndex >= selectedGallery.images.length ? 0 : nextIndex;
    });
  }

  function goToPreviousImage(event) {
    event.stopPropagation();
    if (!selectedGallery || activeImageIndex === null) return;
    setActiveImageIndex((currentIndex) => {
      const previousIndex = currentIndex - 1;
      return previousIndex < 0 ? selectedGallery.images.length - 1 : previousIndex;
    });
  }

  function closeCarousel(event) {
    event.stopPropagation();
    setActiveImageIndex(null);
  }

  return (
    <main className="bg-stone-950 text-white">
      <section className="relative min-h-[82vh] overflow-hidden">
        <img src={photos.clientes} alt="Clientes" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-stone-950" />

        <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-end px-6 pb-20">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-stone-300">Galerías privadas</p>
            <h1 className="font-serif text-5xl leading-none md:text-7xl lg:text-8xl">Un espacio privado para cada historia.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200">
              Cada cliente dispone de su propia galería protegida con contraseña para ver, seleccionar y compartir sus fotografías con calma.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.45em] text-stone-500">Acceso clientes</p>
            <h2 className="font-serif text-4xl md:text-6xl">Selecciona tu galería</h2>
          </div>
          <p className="max-w-xl text-stone-400">Galerías privadas independientes, con una estética limpia y pensada para presentar el trabajo de forma profesional.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {clientGalleries.map((gallery) => {
            const selected = selectedSlug === gallery.slug;

            return (
              <button
                key={gallery.slug}
                type="button"
                onClick={() => {
                  setSelectedSlug(gallery.slug);
                  setPassword("");
                  setError("");
                  setActiveImageIndex(null);
                }}
                className={`group overflow-hidden rounded-[2rem] border text-left transition ${
                  selected ? "border-white/40 bg-white/5" : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.05]"
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={gallery.cover} alt={gallery.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-stone-200 backdrop-blur">Privada</div>
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <h3 className="font-serif text-4xl text-white">{gallery.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-stone-300">{gallery.description}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {selectedGallery && !isUnlocked && (
          <section className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30 backdrop-blur">
            <div className="grid md:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[360px]">
                <img src={selectedGallery.cover} alt={selectedGallery.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="mb-3 text-xs uppercase tracking-[0.4em] text-stone-300">Acceso privado</p>
                  <h3 className="font-serif text-4xl text-white md:text-5xl">{selectedGallery.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-6 text-stone-300">Introduce la contraseña facilitada para acceder a esta galería.</p>
                </div>
              </div>

              <div className="flex items-center p-8 md:p-10">
                <form onSubmit={submitPassword} className="w-full">
                  <p className="mb-3 text-xs uppercase tracking-[0.35em] text-stone-500">Cliente</p>
                  <h4 className="font-serif text-3xl text-white">{selectedGallery.clientName}</h4>

                  <label className="mt-8 block">
                    <span className="mb-2 block text-sm text-stone-300">Contraseña</span>
                    <input
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      type="password"
                      placeholder="Introduce tu contraseña"
                      className="w-full rounded-2xl border border-white/15 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-stone-500 focus:border-white/40"
                    />
                  </label>

                  {error && <p className="mt-4 rounded-2xl bg-red-500/10 p-4 text-sm text-red-200">{error}</p>}

                  <button type="submit" className="mt-6 inline-flex rounded-full border border-white/20 bg-white px-7 py-3 text-sm font-medium text-stone-950 transition hover:bg-stone-200">
                    Entrar en la galería
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}

        {selectedGallery && isUnlocked && (
          <section className="mt-16">
            <div className="mb-10 flex flex-col justify-between gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.45em] text-stone-500">Galería privada</p>
                <h2 className="font-serif text-4xl text-white md:text-6xl">{selectedGallery.title}</h2>
                <p className="mt-4 max-w-2xl text-stone-400">{selectedGallery.description}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setUnlocked((current) => ({ ...current, [selectedGallery.slug]: false }));
                  setActiveImageIndex(null);
                }}
                className="rounded-full border border-white/15 px-5 py-3 text-sm text-stone-300 hover:bg-white hover:text-stone-950"
              >
                Cerrar galería
              </button>
            </div>

            <div className="columns-1 gap-5 md:columns-2 xl:columns-3">
              {selectedGallery.images.map((image, index) => (
                <button
                  key={`${selectedGallery.slug}-${index}`}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className="mb-5 block w-full break-inside-avoid overflow-hidden rounded-[1.75rem] bg-white/[0.03]"
                >
                  <img src={image} alt={`${selectedGallery.title} ${index + 1}`} className="w-full object-cover transition duration-500 hover:scale-[1.02]" />
                </button>
              ))}
            </div>
          </section>
        )}
      </section>

      {activeImage && selectedGallery && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4" onClick={goToNextImage}>
          <button
            type="button"
            onClick={closeCarousel}
            className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white hover:text-stone-950"
          >
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
            {activeImageIndex + 1} / {selectedGallery.images.length} · Pincha en la foto para ver la siguiente
          </div>

          <img
            src={activeImage}
            alt={`${selectedGallery.title} ${activeImageIndex + 1}`}
            className="max-h-[88vh] max-w-full cursor-pointer rounded-2xl object-contain"
          />
        </div>
      )}
    </main>
  );
}

function Blog() {
  return (
    <main className="bg-stone-100 px-6 py-24 text-stone-950">
      <section className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-stone-500">Blog</p>
        <h1 className="max-w-4xl font-serif text-6xl">Notas, historias y procesos fotográficos.</h1>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-[2rem] bg-white p-8">
            <h2 className="font-serif text-4xl">Fotografías con alma</h2>
            <p className="mt-4 text-stone-600">La fotografía como forma de guardar memoria, emoción y belleza.</p>
          </article>
          <article className="rounded-[2rem] bg-white p-8">
            <h2 className="font-serif text-4xl">La luz de una sesión tranquila</h2>
            <p className="mt-4 text-stone-600">Una sesión fotográfica también puede ser un espacio sereno y cercano.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

function Contact() {
  return (
    <main className="bg-stone-900 px-6 py-24">
      <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-stone-400">Contacto</p>
          <h2 className="font-serif text-5xl">Regala momentos. Regala fotografía.</h2>
          <p className="mt-6 text-lg leading-8 text-stone-300">Puedes contactar conmigo para cualquier consulta, ya sea sobre servicios, impresiones, formación u otros encargos.</p>
          <a href={`mailto:${email}`} className="mt-10 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-stone-950">{email}</a>
        </div>
        <form className="rounded-[2rem] bg-white p-8 text-stone-950">
          <input placeholder="Nombre" className="w-full rounded-2xl border px-4 py-3" />
          <textarea placeholder="Mensaje" rows="5" className="mt-5 w-full rounded-2xl border px-4 py-3" />
          <a href={`mailto:${email}`} className="mt-6 inline-flex rounded-full bg-stone-950 px-7 py-4 text-sm font-medium text-white">Enviar mensaje</a>
        </form>
      </section>
    </main>
  );
}

function Admin() {
  return (
    <main className="bg-stone-100 px-6 py-24 text-stone-950">
      <section className="mx-auto max-w-5xl rounded-[2rem] bg-white p-8">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-stone-500">Admin</p>
        <h1 className="font-serif text-5xl">Panel de edición</h1>
        <p className="mt-6 text-stone-600">Esta versión ya está preparada para publicarse. Para añadir clientes reales después conectaremos almacenamiento o un CMS.</p>
      </section>
    </main>
  );
}

function Footer({ open }) {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="font-serif text-2xl">Lucía Gámez</p>
        <p className="text-sm text-stone-500">© Lucía Gámez Photo · Proyectos Fotográficos</p>
        <div className="flex flex-wrap gap-3">
          <a href="https://www.instagram.com/luzzmar/" className="rounded-full border border-white/10 px-4 py-3 text-sm text-stone-300 hover:bg-white hover:text-stone-950">Instagram</a>
          <a href="https://www.facebook.com/Luzzzmar/" className="rounded-full border border-white/10 px-4 py-3 text-sm text-stone-300 hover:bg-white hover:text-stone-950">Facebook</a>
          <a href="https://1x.com/luciagamez" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-sm font-semibold text-stone-300 hover:bg-white hover:text-stone-950">1×</a>
          <button onClick={() => open("admin")} className="rounded-full border border-white/10 px-4 py-3 text-sm text-stone-300 hover:bg-white hover:text-stone-950">Admin</button>
        </div>
      </div>
    </footer>
  );
}

function runTests() {
  console.assert(logo === "/logo-original.webp.png", "El logo debe cargarse desde public/logo-original.webp.png");
  console.assert(personPages.length === 6, "Personas debe tener 6 subcategorías.");
  console.assert(clientGalleries.length >= 2, "Debe haber varias galerías privadas de clientes.");
  console.assert(clientGalleries.every((gallery) => gallery.password), "Cada galería privada debe tener contraseña.");
  console.assert(clientGalleries.every((gallery) => gallery.images.length >= 4), "Cada galería privada debe tener al menos 4 imágenes.");
  console.assert(clientGalleries.every((gallery) => gallery.images[0] === gallery.cover), "La primera foto de cada carrusel debe ser la portada de su galería.");
  console.assert(!document.documentElement.innerHTML.includes("Reservar sesión"), "No debe aparecer Reservar sesión.");
}

if (typeof window !== "undefined") runTests();
