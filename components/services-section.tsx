import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Home, Hammer, ArrowRight } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Home Maintenance",
      description: "Keep your home in perfect condition with our comprehensive maintenance services.",
      features: [
        "Routine inspections and repairs",
        "Preventive maintenance programs",
        "Seasonal home preparations",
        "Emergency repair services",
      ],
      image: "/home-maintenance-worker-fixing-house-exterior.jpg",
    },
    {
      icon: Wrench,
      title: "Remodeling",
      description: "Transform your space with our professional remodeling and renovation services.",
      features: [
        "Kitchen and bathroom remodels",
        "Room additions and expansions",
        "Basement finishing",
        "Custom carpentry work",
      ],
      image: "/modern-kitchen-remodeling-construction-work.jpg",
    },
    {
      icon: Hammer,
      title: "Handyman Services",
      description: "No job too small! Professional handyman services for all your home needs.",
      features: [
        "Plumbing and electrical repairs",
        "Drywall and painting",
        "Fixture installation",
        "General repairs and maintenance",
      ],
      image: "/handyman-with-tools-working-on-home-repairs.jpg",
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              From routine maintenance to major renovations, we provide comprehensive construction services to keep your
              home in perfect condition.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free consultation and estimate for your home improvement project. We're here to help bring your
              vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                Get Free Estimate
              </Button>
              <Button size="lg" variant="outline">
                Call (908) 329-0419
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
