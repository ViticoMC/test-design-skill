import { InstagramLogo, WhatsappLogo, Envelope } from "@phosphor-icons/react"

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="#hero" className="font-display text-2xl text-cream tracking-wide">
              Botánica
            </a>
            <p className="text-muted text-xs mt-2">Atelier Floral — desde 2020</p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: InstagramLogo, href: "#", label: "Instagram" },
              { icon: WhatsappLogo, href: "#", label: "WhatsApp" },
              { icon: Envelope, href: "#", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-full bg-elevated border border-border flex items-center justify-center text-muted hover:text-gold hover:border-gold/30 transition-all duration-300"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted/50 text-xs">
            &copy; {new Date().getFullYear()} Botánica. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-muted/50 text-xs">
            <a href="#" className="hover:text-cream transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-cream transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
