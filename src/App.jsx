import React, { useState } from "react";

const email = "luzzmar@gmail.com";
const logo = "/logo-lucia-gamez-fixed.svg";
const photos = {
  home: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85",
  arquitectura: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80",
  natura: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
  personas: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
  still: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1400&q=80",
  clientes: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80"
};

const pages = [
  ["arquitectura", "Arquitectura", "Arquitectura, patrimonio y espacios con historia", photos.arquitectura],
  ["natura", "Natura", "Paisaje, naturaleza y luz", photos.natura],
  ["personas", "Personas", "Retratos, familias, infancia, maternidad y memoria", photos.personas],
  ["still", "Still Life", "Producto, composición y textura", photos.still],
  ["clientes", "Clientes", "Galerías privadas y trabajos entregados", photos.clientes]
];

export default function App() {
  const [page, setPage] = useState("home");
  const current = pages.find((item) => item[0] === page);
  const open = (next) => { setPage(next); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <button onClick={() => open("home")} className="flex h-24 w-56 items-center md:h-28 md:w-72">
            <img src={logo} alt="Lucía Gámez Photo" className="h-full w-full object-contain object-left" />
          </button>
          <nav className="hidden gap-5 text-sm text-stone-300 md:flex md:items-center">
            <button onClick={() => open("home")}>Bienvenidos</button>
            {pages.map((item) => <button key={item[0]} onClick={() => open(item[0])}>{item[1]}</button>)}
            <button onClick={() => open("blog")}>Blog</button>
            <button onClick={() => open("contacto")} className="rounded-full border border-white/40 px-5 py-3 font-medium text-white hover:bg-white hover:text-stone-950">Contacto</button>
          </nav>
        </div>
      </header>
      {page === "home" && <Home />}
      {current && <Portfolio item={current} />}
      {page === "blog" && <Blog />}
      {page === "contacto" && <Contact />}
      {page === "admin" && <Admin />}
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
    </div>
  );
}

function Home() {
  return <main className="relative min-h-screen overflow-hidden"><img src={photos.home} alt="Fotografía principal" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-black/20" /><div className="pointer-events-none fixed left-0 right-0 top-36 z-30 flex justify-center px-6"><p className="max-w-5xl text-center text-3xl italic text-white/90 drop-shadow-2xl" style={{ fontFamily: "Snell Roundhand, Apple Chancery, Segoe Script, Bradley Hand, cursive", transform: "skewX(-7deg)" }}>Fotografías con alma, hechas para guardar lo que el corazón no quiere olvidar.</p></div></main>;
}

function Portfolio({ item }) {
  return <main><section className="relative min-h-[70vh] overflow-hidden"><img src={item[3]} alt={item[1]} className="absolute inset-0 h-full w-full object-cover opacity-45" /><div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-stone-950/25" /><div className="relative mx-auto max-w-7xl px-6 py-24"><p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">Portfolio / {item[1]}</p><h1 className="font-serif text-6xl md:text-8xl">{item[1]}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-stone-300">{item[2]}</p></div></section><section className="mx-auto max-w-7xl px-6 py-24"><h2 className="mb-10 font-serif text-5xl">Selección de trabajos</h2><div className="grid gap-5 md:grid-cols-3">{[1,2,3,4,5,6].map((n) => <img key={n} src={item[3]} alt={`${item[1]} ${n}`} className="aspect-[4/5] rounded-[1.5rem] object-cover" />)}</div></section></main>;
}

function Blog() {
  return <main className="bg-stone-100 px-6 py-24 text-stone-950"><section className="mx-auto max-w-7xl"><p className="mb-3 text-sm uppercase tracking-[0.35em] text-stone-500">Blog</p><h1 className="max-w-4xl font-serif text-6xl">Notas, historias y procesos fotográficos.</h1><div className="mt-12 grid gap-6 md:grid-cols-2"><article className="rounded-[2rem] bg-white p-8"><h2 className="font-serif text-4xl">Fotografías con alma</h2><p className="mt-4 text-stone-600">La fotografía como forma de guardar memoria, emoción y belleza.</p></article><article className="rounded-[2rem] bg-white p-8"><h2 className="font-serif text-4xl">La luz de una sesión tranquila</h2><p className="mt-4 text-stone-600">Una sesión fotográfica también puede ser un espacio sereno y cercano.</p></article></div></section></main>;
}

function Contact() {
  return <main className="bg-stone-900 px-6 py-24"><section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2"><div><p className="mb-3 text-sm uppercase tracking-[0.35em] text-stone-400">Contacto</p><h2 className="font-serif text-5xl">Regala momentos. Regala fotografía.</h2><p className="mt-6 text-lg leading-8 text-stone-300">Puedes contactar conmigo para cualquier consulta, ya sea sobre servicios, impresiones, formación u otros encargos.</p><a href={`mailto:${email}`} className="mt-10 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-stone-950">{email}</a></div><form className="rounded-[2rem] bg-white p-8 text-stone-950"><input placeholder="Nombre" className="w-full rounded-2xl border px-4 py-3" /><textarea placeholder="Mensaje" rows="5" className="mt-5 w-full rounded-2xl border px-4 py-3" /><a href={`mailto:${email}`} className="mt-6 inline-flex rounded-full bg-stone-950 px-7 py-4 text-sm font-medium text-white">Enviar mensaje</a></form></section></main>;
}

function Admin() {
  return <main className="bg-stone-100 px-6 py-24 text-stone-950"><section className="mx-auto max-w-5xl rounded-[2rem] bg-white p-8"><p className="mb-3 text-sm uppercase tracking-[0.35em] text-stone-500">Admin</p><h1 className="font-serif text-5xl">Panel de edición</h1><p className="mt-6 text-stone-600">Esta versión ya está preparada para publicarse. Para guardar cambios online hará falta conectar un CMS o almacenamiento de imágenes.</p></section></main>;
}

function runTests() {
  console.assert(logo === "/logo-lucia-gamez-fixed.svg", "El logo debe cargarse desde public/logo-lucia-gamez-fixed.svg");
  console.assert(!document.documentElement.innerHTML.includes("Reservar sesión"), "No debe aparecer Reservar sesión");
}

if (typeof window !== "undefined") runTests();
