import { useState, useEffect, useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      id: 1,
      quote: "Shiva NCR's pragmatic feasibility report secured our funding in just 3 weeks. Their thorough market analysis gave investors the confidence they needed.",
      author: "Ravi Sharma",
      designation: "MD, Skyline Developers",
      projectType: "Commercial Tower Feasibility",
      rating: 5
    },
    {
      id: 2,
      quote: "The architectural design exceeded our expectations. They perfectly balanced modern aesthetics with functional efficiency for our manufacturing facility.",
      author: "Priya Gupta",
      designation: "CEO, TechManufacturing Ltd",
      projectType: "Industrial Complex Design",
      rating: 5
    },
    {
      id: 3,
      quote: "Professional, timely, and innovative. Shiva NCR's team managed our residential project flawlessly from concept to handover.",
      author: "Amit Verma",
      designation: "Director, Urban Living",
      projectType: "Residential Development",
      rating: 5
    }
  ];

  const clientLogos = [
    "DLF", "Godrej Properties", "Tata Steel", "DMRC", "NHAI", "Mahindra", "L&T", "Bharti"
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading developers, corporations, and government agencies across NCR.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <h3 className="text-center text-lg font-medium text-muted-foreground mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 hover:opacity-80 transition-opacity">
            {clientLogos.map((logo, index) => (
              <div
                key={logo}
                className={`text-2xl font-bold text-foreground/60 hover:text-foreground transition-colors duration-300 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="card-elegant p-12 text-center relative">
                    {/* Quote Icon */}
                    <div className="absolute top-8 left-8 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-accent" />
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl md:text-2xl text-foreground italic leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div>
                      <div className="font-semibold text-lg text-foreground mb-1">
                        {testimonial.author}
                      </div>
                      <div className="text-muted-foreground mb-2">
                        {testimonial.designation}
                      </div>
                      <div className="text-sm text-accent font-medium">
                        {testimonial.projectType}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-accent scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
            Join Our Growing List of Satisfied Clients
          </h3>
          <p className="text-muted-foreground mb-6">
            Experience the same level of excellence and professionalism that our clients rave about.
          </p>
          <button className="btn-cta">
            Request a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;