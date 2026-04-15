export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-500 to-brand-900 flex items-center justify-center">
              <span className="text-white font-bold text-xs">PB</span>
            </div>
            <span className="font-bold text-sm text-white">
              Prompt<span className="text-brand-500">Button</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted">
            <a
              href="https://github.com/AdhocElectronics"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a href="#integrations" className="hover:text-white transition-colors">
              Docs
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
            <a
              href="mailto:hello@promptbutton.ai"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted/50">
            &copy; {new Date().getFullYear()} Ad Hoc Electronics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
