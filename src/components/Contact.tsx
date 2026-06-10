import { useState } from "react"
import { motion } from "motion/react"
import { PaperPlaneTilt, MapPin, Phone, Clock } from "@phosphor-icons/react"

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-32 md:py-40 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-elevated to-dark" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-gold text-xs uppercase tracking-[0.25em] font-medium mb-4 block">
            Contacto
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-cream leading-[0.95] tracking-tight">
            Hablemos de
            <br />
            <span className="italic text-gold">flores</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-cream/70 text-sm mb-2 block">
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-elevated border border-border rounded-xl px-5 py-3.5 text-cream text-sm placeholder:text-muted/50 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-glow transition-all duration-300"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-cream/70 text-sm mb-2 block">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-elevated border border-border rounded-xl px-5 py-3.5 text-cream text-sm placeholder:text-muted/50 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-glow transition-all duration-300"
                  placeholder="tu@correo.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-cream/70 text-sm mb-2 block">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full bg-elevated border border-border rounded-xl px-5 py-3.5 text-cream text-sm placeholder:text-muted/50 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-glow transition-all duration-300 resize-none"
                  placeholder="Cuéntanos sobre tu evento o idea..."
                />
              </div>
              {submitted ? (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-gold text-sm"
                >
                  Gracias por tu mensaje. Te responderemos pronto.
                </motion.p>
              ) : (
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-gold text-dark font-medium px-7 py-3.5 rounded-full hover:bg-gold-light transition-all duration-300 active:scale-[0.97]"
                >
                  Enviar mensaje
                  <span className="w-7 h-7 rounded-full bg-dark/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <PaperPlaneTilt weight="bold" className="text-xs" />
                  </span>
                </button>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="p-1.5 rounded-[1.5rem] bg-border/30">
              <div className="bg-elevated rounded-[calc(1.5rem-0.375rem)] p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-gold mt-0.5" weight="duotone" />
                  <div>
                    <p className="text-cream text-sm font-medium">Dirección</p>
                    <p className="text-muted text-sm">Calle de las Flores, 24</p>
                    <p className="text-muted text-sm">28001 Madrid</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-gold mt-0.5" weight="duotone" />
                  <div>
                    <p className="text-cream text-sm font-medium">Teléfono</p>
                    <p className="text-muted text-sm">+34 91 234 56 78</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={20} className="text-gold mt-0.5" weight="duotone" />
                  <div>
                    <p className="text-cream text-sm font-medium">Horario</p>
                    <p className="text-muted text-sm">Lun–Sáb: 10:00 – 20:00</p>
                    <p className="text-muted text-sm">Dom: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
