import { motion } from "motion/react"

const moments = [
  {
    title: "Bodas",
    desc: "Arreglos nupciales que capturan la esencia de cada historia de amor. Del ramo de la novia a la decoración del altar, cada detalle importa.",
    img: "/moment-boda.jpg",
    gradient: "from-burgundy/40 via-dark/80 to-dark",
  },
  {
    title: "Funerales",
    desc: "Homenajes florales que honran la memoria con la dignidad y belleza que cada despedida merece.",
    img: "/moment-funeral.jpg",
    gradient: "from-elevated/20 via-dark/80 to-dark",
  },
  {
    title: "Celebraciones",
    desc: "Cumpleaños, aniversarios y eventos corporativos. Flores que transforman cualquier espacio en una celebración inolvidable.",
    img: "/moment-celebracion.jpg",
    gradient: "from-gold/20 via-dark/80 to-dark",
  },
  {
    title: "Sorpresa",
    desc: "Ramos espontáneos para alegrar el día de alguien especial. Porque a veces las mejores flores son las que no esperabas.",
    img: "/moment-sorpresa.jpg",
    gradient: "from-cream/10 via-dark/80 to-dark",
  },
]

export function Moments() {
  return (
    <section id="moments" className="relative">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 lg:px-24 pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-gold text-xs uppercase tracking-[0.25em] font-medium mb-4 block">
            Para cada ocasión
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-cream leading-[0.95] tracking-tight mb-16 md:mb-24">
            El lenguaje
            <br />
            <span className="italic text-gold">de las flores</span>
          </h2>
        </motion.div>
      </div>

      {moments.map((m, i) => (
        <div
          key={m.title}
          className="sticky top-0 min-h-dvh flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src={m.img}
              alt={m.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-linear-to-r ${m.gradient}`} />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 lg:px-24 w-full"
          >
            <div className="max-w-lg">
              <span className="text-gold text-xs uppercase tracking-[0.25em] font-medium mb-4 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-5xl bg-transparent md:text-7xl text-cream leading-[0.95] tracking-tight mb-6">
                {m.title}
              </h3>
              <p className="text-cream/70 text-base md:text-lg leading-relaxed max-w-md">
                {m.desc}
              </p>
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  )
}
