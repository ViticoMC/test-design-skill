import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react"
import { List, X, ArrowRight } from "@phosphor-icons/react"

const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Colecciones", href: "#collections" },
  { label: "Momentos", href: "#moments" },
  { label: "Contacto", href: "#contact" },
]

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - lastY.current
    if (current > 100 && diff > 8) {
      setHidden(true)
    } else if (diff < -8 || current < 100) {
      setHidden(false)
    }
    lastY.current = current
  })

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      >
        <div className="flex items-center justify-between w-full max-w-5xl bg-elevated/80 backdrop-blur-2xl border border-border rounded-full px-6 py-2.5">
          <a href="#hero" className="font-display text-xl md:text-2xl text-cream tracking-wide">
            Botánica
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted hover:text-cream transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-gold text-dark text-sm font-medium px-5 py-2 rounded-full hover:bg-gold-light transition-all duration-300 group"
          >
            Pedir ahora
            <span className="w-6 h-6 rounded-full bg-dark/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              <ArrowRight weight="bold" className="text-xs" />
            </span>
          </a>

          <button
            onClick={() => setIsOpen((p) => !p)}
            className="md:hidden text-cream p-2"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {NAV_LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setIsOpen(false)}
                className="font-display text-4xl text-cream hover:text-gold transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ delay: NAV_LINKS.length * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setIsOpen(false)}
              className="bg-gold text-dark font-medium px-10 py-3.5 rounded-full text-lg mt-4 hover:bg-gold-light transition-colors"
            >
              Pedir ahora
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
