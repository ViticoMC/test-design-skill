import { motion } from "motion/react"
import { Flower, Leaf, Sparkle } from "@phosphor-icons/react"

const values = [
  {
    icon: Flower,
    title: "Artesanal",
    desc: "Cada arreglo se diseña a mano, pieza por pieza, sin prisas.",
  },
  {
    icon: Leaf,
    title: "Estacional",
    desc: "Trabajamos con flores de temporada, respetando el ciclo natural.",
  },
  {
    icon: Sparkle,
    title: "Único",
    desc: "Ningún ramo es igual a otro. Cada cliente es una historia distinta.",
  },
]

export function Philosophy() {
  return (
    <section className="relative py-32 md:py-40 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-elevated to-dark" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gold text-xs uppercase tracking-[0.25em] font-medium mb-4 block">
              Nuestra esencia
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-cream leading-[0.95] tracking-tight mb-6">
              Donde la naturaleza
              <br />
              <span className="italic text-gold">encuentra el arte</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <p className="text-muted text-base md:text-lg leading-relaxed">
              En Botánica creemos que las flores son el medio perfecto para
              expresar lo que las palabras no pueden. Cada tallo, cada pétalo,
              cada textura se selecciona con la misma precisión que un pintor
              elige sus colores.
            </p>
            <p className="text-muted text-base md:text-lg leading-relaxed">
              Nuestro taller es un laboratorio de emociones botánicas. Aquí, lo
              silvestre y lo refinado dialogan en composiciones que desafían el
              tiempo.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-1.5 rounded-[1.5rem] bg-border/30"
            >
              <div className="bg-elevated rounded-[calc(1.5rem-0.375rem)] p-8 h-full">
                <v.icon size={28} className="text-gold mb-5" weight="duotone" />
                <h3 className="font-display text-2xl text-cream mb-3">{v.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
