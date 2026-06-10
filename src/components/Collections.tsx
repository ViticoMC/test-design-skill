import { motion } from "motion/react"
import { ArrowRight } from "@phosphor-icons/react"

const collections = [
  {
    name: "Silencio",
    desc: "Monocromático en blancos y verdes pálidos. Para momentos que no necesitan palabras.",
    img: "collection-silencio.jpg",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Atardecer",
    desc: "Tonos cálidos que capturan la luz del ocaso. Naranjas, rosas y dorados.",
    img: "collection-atardecer.jpg",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Profundo",
    desc: "Flores oscuras y dramáticas. Burdeos, berenjena y negro vegetal.",
    img: "collection-profundo.jpg",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Silvestre",
    desc: "La belleza de lo indómito. Flores de campo en composiciones libres.",
    img: "collection-silvestre.jpg",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Clásico",
    desc: "Rosas, eucalipto y lavanda. Lo esencial nunca pasa de moda.",
    img: "collection-clasico.jpg",
    span: "md:col-span-1 md:row-span-1",
  },
]

export function Collections() {
  return (
    <section id="collections" className="relative py-32 md:py-40 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-gold text-xs uppercase tracking-[0.25em] font-medium mb-4 block">
            Colecciones
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-cream leading-[0.95] tracking-tight">
            Arreglos que
            <br />
            <span className="italic text-gold">cuentan historias</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 md:grid-rows-[auto_auto] gap-4 md:gap-6 auto-rows-[300px]">
          {collections.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`p-1.5 rounded-[1.5rem] bg-border/30 group cursor-pointer ${c.span}`}
            >
              <div className="relative rounded-[calc(1.5rem-0.375rem)] overflow-hidden h-full bg-elevated">
                <img
                  src={`${import.meta.env.BASE_URL}${c.img}`}
                  alt={c.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-display text-2xl md:text-3xl text-cream mb-2">
                    {c.name}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed max-w-xs">{c.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm text-muted hover:text-cream transition-colors duration-300 border-b border-border hover:border-gold/30 pb-0.5"
          >
            Ver colección completa
            <ArrowRight
              weight="bold"
              className="text-xs group-hover:translate-x-0.5 transition-transform duration-300"
            />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
