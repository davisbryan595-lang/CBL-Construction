import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Award, Clock } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Shield,
      title: "Trusted & Reliable",
      description: "Over years of experience delivering quality workmanship you can depend on.",
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "Deep knowledge of the Lehigh Valley area and local building requirements.",
    },
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "Committed to excellence in every project, big or small.",
    },
    {
      icon: Clock,
      title: "Timely Service",
      description: "Respect your time with prompt, professional service delivery.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              About <span className="text-primary">CBL Construction LLC</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Founded by Christopher Laux, CBL Construction LLC is your trusted partner for all home maintenance,
              remodeling, and handyman needs in the Lehigh Valley area.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Building Trust, One Project at a Time</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At CBL Construction LLC, we understand that your home is your most valuable investment. That's why we're
                committed to providing exceptional construction and maintenance services that not only meet but exceed
                your expectations.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                From small repairs to major remodeling projects, our team brings the same level of professionalism,
                attention to detail, and quality craftsmanship to every job. We take pride in being a local business
                that truly cares about our community and our customers.
              </p>
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-lg font-semibold text-primary mb-2">Our Mission</p>
                <p className="text-muted-foreground">
                  To provide reliable, high-quality construction services that enhance the value and comfort of your
                  home while building lasting relationships with our customers.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/professional-construction-worker-christopher-laux-.jpg"
                  alt="Christopher Laux - CBL Construction LLC Owner"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                <p className="font-bold text-lg">Christopher Laux</p>
                <p className="text-sm opacity-90">Owner & Founder</p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
