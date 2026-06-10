import { motion } from "motion/react"
import { Star } from "@phosphor-icons/react"

const testimonials = [
  {
    quote: "Cada ramo que ha creado Botánica para nuestros eventos ha sido simplemente mágico. La atención al detalle es insuperable.",
    author: "Ana Martínez",
    role: "Wedding Planner",
  },
  {
    quote: "Nunca había recibido flores tan hermosas. Se sintieron como una obra de arte personal, no como un ramo cualquiera.",
    author: "Carlos Ruiz",
    role: "Cliente",
  },
  {
    quote: "Botánica transformó nuestro restaurante. Ahora las flores son parte fundamental de nuestra identidad.",
    author: "María González",
    role: "Chef, Casa Flora",
  },
  {
    quote: "Trabajar con Botánica es un privilegio. Su sensibilidad floral es única en la ciudad.",
    author: "Javier Torres",
    role: "Diseñador de Interiores",
  },
  {
    quote: "El ramo de mi boda fue perfecto. Capturó exactamente lo que sentía pero no sabía expresar.",
    author: "Valentina L.",
    role: "Novia",
  },
]

export function Testimonials() {
  const doubled = [...testimonials, ...testimonials]

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-elevated to-dark" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="px-6 md:px-16 lg:px-24 mb-16"
        >
          <span className="text-gold text-xs uppercase tracking-[0.25em] font-medium mb-4 block">
            Testimonios
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-cream leading-[0.95] tracking-tight">
            Lo que dicen
            <br />
            <span className="italic text-gold">de nosotros</span>
          </h2>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-marquee w-max">
            {doubled.map((t, i) => (
              <div
                key={`${t.author}-${i}`}
                className="p-1.5 rounded-[1.5rem] bg-border/30 flex-shrink-0 w-[380px] md:w-[420px]"
              >
                <div className="bg-elevated rounded-[calc(1.5rem-0.375rem)] p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          size={14}
                          weight="fill"
                          className="text-gold"
                        />
                      ))}
                    </div>
                    <p className="text-cream/80 text-sm md:text-base leading-relaxed font-display italic mb-6">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <div>
                    <p className="text-cream text-sm font-medium">{t.author}</p>
                    <p className="text-muted text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
