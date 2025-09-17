import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/construction-worker-with-tools-and-blueprints-on-c.jpg" alt="Construction background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/images/cbl-logo.png"
              alt="CBL Construction LLC"
              width={120}
              height={120}
              className="mx-auto w-24 h-24 md:w-32 md:h-32"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            <span className="text-white">Professional</span> <span className="text-primary">Construction</span>{" "}
            <span className="text-white">Services</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto text-balance">
            Home maintenance, remodeling, and handyman services you can trust. Serving the Lehigh Valley and surrounding
            areas with quality craftsmanship.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 text-lg bg-transparent"
            >
              View Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-gray-300">
            <p className="text-lg font-semibold">Call us today: (908) 329-0419</p>
            <p className="text-base">47 Beaver St, Lehighton, PA</p>
          </div>
        </div>
      </div>
    </section>
  )
}
