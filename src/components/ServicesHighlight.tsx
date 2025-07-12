import { useEffect, useRef, useState } from 'react';
import { Building2, TrendingUp, Hammer, FileText } from 'lucide-react';

const ServicesHighlight = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Building2,
      title: "Architecture",
      description: "End-to-End Architectural Design: Residential, Commercial, Industrial",
      delay: "0ms"
    },
    {
      icon: TrendingUp,
      title: "Business Consultancy",
      description: "Strategic guidance through NCR's complex real estate landscape",
      delay: "200ms"
    },
    {
      icon: Hammer,
      title: "Building Development",
      description: "Integrated Design + Construction Management from concept to completion",
      delay: "400ms"
    },
    {
      icon: FileText,
      title: "Feasibility Reports",
      description: "Data-driven analysis to de-risk your investments and secure funding",
      delay: "600ms"
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            Comprehensive Solutions for NCR
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From architectural design to business strategy, we provide end-to-end expertise 
            for your development projects in the National Capital Region.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-service group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: service.delay }}
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-accent-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Indicator */}
                <div className="w-12 h-1 bg-accent rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to explore how we can bring your vision to life?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-cta">
              Explore Our Services
            </button>
            <button className="btn-outline-professional">
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;