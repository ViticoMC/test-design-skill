import { motion } from "motion/react"
import { ArrowRight } from "@phosphor-icons/react"

export function Hero() {
  return (
    <section id="hero" className="min-h-dvh max-h-dvh relative overflow-hidden flex flex-col md:flex-row">
      <div className="absolute inset-0 bg-linear-to-br from-burgundy/20 via-dark to-dark z-0" />
      <div className="absolute top-1/4 left-1/3 w-150 h-150 rounded-full bg-gold/5 blur-[120px] animate-float z-0" />

      <div className="relative z-10 flex flex-col md:flex-row w-full min-h-dvh">
        <div className="flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 md:py-0 order-2 md:order-1">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-gold text-xs uppercase tracking-[0.25em] font-medium mb-6"
          >
            Atelier Floral
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-cream leading-[0.95] tracking-tight mb-6"
          >
            El arte de
            <br />
            <span className="italic text-gold">las flores</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted text-base md:text-lg max-w-md leading-relaxed mb-10"
          >
            Cada ramo es una composición única. Creemos arreglos florales que
            transforman espacios y emocionan los sentidos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-gold text-dark font-medium px-7 py-3.5 rounded-full hover:bg-gold-light transition-all duration-300 active:scale-[0.97]"
            >
              Solicitar presupuesto
              <span className="w-7 h-7 rounded-full bg-dark/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                <ArrowRight weight="bold" className="text-xs" />
              </span>
            </a>
            <a
              href="#collections"
              className="text-sm text-muted hover:text-cream transition-colors duration-300 border-b border-border hover:border-gold/30 pb-0.5"
            >
              Ver colecciones
            </a>
          </motion.div>
        </div>

        <div className="flex-1 relative min-h-[50dvh] md:min-h-full order-1 md:order-2 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-l from-dark via-dark/50 to-transparent z-10" />
          <img
            src="/hero-dramatic.jpg"
            alt="Arreglo floral dramático"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
            <div className="flex items-center gap-2 text-cream/60 text-xs">
              <span className="w-8 h-px bg-gold" />
              Fotografía editorial
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
