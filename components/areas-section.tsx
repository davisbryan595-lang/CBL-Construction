import { Card, CardContent } from "@/components/ui/card"
import { MapPin, CheckCircle } from "lucide-react"

export function AreasSection() {
  const serviceAreas = [
    "Lehighton",
    "Allentown",
    "Bethlehem",
    "Easton",
    "Palmerton",
    "Jim Thorpe",
    "Tamaqua",
    "Lansford",
    "Summit Hill",
    "Nesquehoning",
    "Weatherly",
    "Andreas",
  ]

  return (
    <section id="areas" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Areas We <span className="text-primary">Serve</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Proudly serving the Lehigh Valley and surrounding areas with professional construction and maintenance
              services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map/Visual Section */}
            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-24 w-24 text-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Lehigh Valley & Surrounding Areas</h3>
                    <p className="text-muted-foreground max-w-sm mx-auto">
                      Centrally located in Lehighton, PA, we provide convenient service throughout the region.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Contact Info Overlay */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                <p className="font-bold text-lg">Service Radius</p>
                <p className="text-sm opacity-90">30+ Mile Coverage</p>
              </div>
            </div>

            {/* Service Areas List */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-8">Communities We Serve</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-lg font-medium">{area}</span>
                  </div>
                ))}
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg">
                <h4 className="text-lg font-bold text-secondary mb-2">Don't See Your Area?</h4>
                <p className="text-muted-foreground mb-4">
                  We may still be able to help! Contact us to discuss service availability in your location. We're
                  always looking to expand our service area.
                </p>
                <p className="text-sm font-medium">
                  Call us at <span className="text-primary">(908) 329-0419</span> to inquire.
                </p>
              </div>
            </div>
          </div>

          {/* Service Promise */}
          <div className="mt-16 text-center">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Local Service, Professional Results</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  As a local business, we understand the unique needs of homes in our area. From weather-related
                  maintenance to local building codes, we bring valuable regional expertise to every project.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
