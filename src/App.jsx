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
  {
    slug: "clientes",
    title: "Clientes",
    subtitle: "Galerías privadas",
    description: "Espacio privado para que cada cliente acceda a su galería con contraseña.",
    image: photos.clientes,
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
      {page === "blog" && <Blog />}
      {page === "contacto" && <Contact />}
      {page === "admin" && <Admin />}

      <Footer open={open} />
    </div>
  );
}

function Header({ open, currentPage }) {
  const isActive = (name) => currentPage === name;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <button onClick={() => open("home")} className="flex h-24 w-56 items-center md:h-28 md:w-72">
          <img src={logo} alt="Lucía Gámez Photo" className="h-full w-full object-contain object-left" />
        </button>

        <nav className="hidden items-center gap-5 text-sm text-stone-300 md:flex">
          <button onClick={() => open("home")} className={isActive("home") ? "text-white" : "hover:text-white"}>
            Bienvenidos
          </button>

          <button onClick={() => open("arquitectura")} className={isActive("arquitectura") ? "text-white" : "hover:text-white"}>
            Arquitectura
          </button>

          <button onClick={() => open("natura")} className={isActive("natura") ? "text-white" : "hover:text-white"}>
            Natura
          </button>

          <div className="group relative py-3">
            <button onClick={() => open("personas")} className={currentPage === "personas" || personPages.some((item) => item.slug === currentPage) ? "text-white" : "hover:text-white"}>
              Personas ⌄
            </button>

            <div className="invisible absolute left-0 top-full w-64 translate-y-2 rounded-2xl border border-white/10 bg-stone-900/95 p-2 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {personPages.map((item) => (
                <button
                  key={item.slug}
                  onClick={() => open(item.slug)}
                  className="block w-full rounded-xl px-4 py-3 text-left text-sm text-stone-300 hover:bg-white/10 hover:text-white"
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          <button onClick={() => open("still-life")} className={isActive("still-life") ? "text-white" : "hover:text-white"}>
            Still Life
          </button>

          <button onClick={() => open("clientes")} className={isActive("clientes") ? "text-white" : "hover:text-white"}>
            Clientes
          </button>

          <button onClick={() => open("blog")} className={isActive("blog") ? "text-white" : "hover:text-white"}>
            Blog
          </button>

          <button
            onClick={() => open("contacto")}
            className="rounded-full border border-white/40 px-5 py-3 font-medium text-white hover:bg-white hover:text-stone-950"
          >
            Contacto
          </button>
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
        <p
          className="max-w-5xl text-center text-3xl italic text-white/90 drop-shadow-2xl"
          style={{
            fontFamily: "Snell Roundhand, Apple Chancery, Segoe Script, Bradley Hand, cursive",
            transform: "skewX(-7deg)",
          }}
        >
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
            <p className="mt-6 text-lg leading-8 text-stone-200">
              Una entrada visual a cada galería de retrato: maternidad, recién nacidos, infancia, comuniones, familias y mayores.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-stone-500">Galerías</p>
            <h2 className="font-serif text-4xl md:text-6xl">Elige una historia</h2>
          </div>
          <p className="max-w-xl text-stone-400">
            Cada tarjeta funcionará como acceso a una galería independiente.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {personPages.map((item) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => open(item.slug)}
              className="group relative min-h-[430px] overflow-hidden rounded-3xl border border-white/10 bg-stone-900 text-left"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
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
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-stone-200">
              Portfolio / {item.title}
            </p>
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
            <img
              key={number}
              src={item.image}
              alt={`${item.title} ${number}`}
              className="aspect-[4/5] rounded-[1.5rem] object-cover"
            />
          ))}
        </div>
      </section>
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
          <p className="mt-6 text-lg leading-8 text-stone-300">
            Puedes contactar conmigo para cualquier consulta, ya sea sobre servicios, impresiones, formación u otros encargos.
          </p>
          <a href={`mailto:${email}`} className="mt-10 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-stone-950">
            {email}
          </a>
        </div>

        <form className="rounded-[2rem] bg-white p-8 text-stone-950">
          <input placeholder="Nombre" className="w-full rounded-2xl border px-4 py-3" />
          <textarea placeholder="Mensaje" rows="5" className="mt-5 w-full rounded-2xl border px-4 py-3" />
          <a href={`mailto:${email}`} className="mt-6 inline-flex rounded-full bg-stone-950 px-7 py-4 text-sm font-medium text-white">
            Enviar mensaje
          </a>
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
        <p className="mt-6 text-stone-600">
          Esta versión ya está preparada para publicarse. Para guardar cambios online hará falta conectar un CMS o almacenamiento de imágenes.
        </p>
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
          <a href="https://www.instagram.com/luzzmar/" className="rounded-full border border-white/10 px-4 py-3 text-sm text-stone-300 hover:bg-white hover:text-stone-950">
            Instagram
          </a>
          <a href="https://www.facebook.com/Luzzzmar/" className="rounded-full border border-white/10 px-4 py-3 text-sm text-stone-300 hover:bg-white hover:text-stone-950">
            Facebook
          </a>
          <a href="https://1x.com/luciagamez" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-sm font-semibold text-stone-300 hover:bg-white hover:text-stone-950">
            1×
          </a>
          <button onClick={() => open("admin")} className="rounded-full border border-white/10 px-4 py-3 text-sm text-stone-300 hover:bg-white hover:text-stone-950">
            Admin
          </button>
        </div>
      </div>
    </footer>
  );
}

function runTests() {
  console.assert(logo === "/logo-original.webp.png", "El logo debe cargarse desde public/logo-original.webp.png");
  console.assert(personPages.length === 6, "Personas debe tener 6 subcategorías.");
  console.assert(personPages.some((item) => item.slug === "dulce-espera"), "Debe existir Dulce espera.");
  console.assert(personPages.some((item) => item.slug === "new-born"), "Debe existir New Born.");
  console.assert(personPages.some((item) => item.slug === "ninos"), "Debe existir Niños.");
  console.assert(personPages.some((item) => item.slug === "comuniones"), "Debe existir Comuniones.");
  console.assert(personPages.some((item) => item.slug === "familias"), "Debe existir Familias.");
  console.assert(personPages.some((item) => item.slug === "mayores"), "Debe existir Mayores.");
}

if (typeof window !== "undefined") runTests();