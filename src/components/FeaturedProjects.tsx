import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, MapPin, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import projectResidential from '../assets/project-residential.jpg';
import projectCommercial from '../assets/project-commercial.jpg';
import projectIndustrial from '../assets/project-industrial.jpg';

const FeaturedProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Premium Residential Tower",
      location: "Sector 42, Gurugram",
      year: "2023",
      type: "Residential",
      image: projectResidential,
      description: "18-floor luxury residential tower with 120 premium units featuring sustainable design elements and modern amenities.",
      value: "₹150 Crore",
      area: "2.5 Lakh sq ft"
    },
    {
      id: 2,
      title: "Corporate Business Hub",
      location: "Connaught Place, Delhi",
      year: "2022",
      type: "Commercial",
      image: projectCommercial,
      description: "Modern office complex with state-of-the-art facilities, serving as headquarters for multiple multinational corporations.",
      value: "₹200 Crore",
      area: "3.2 Lakh sq ft"
    },
    {
      id: 3,
      title: "Industrial Manufacturing Complex",
      location: "IMT Manesar, Haryana",
      year: "2023",
      type: "Industrial",
      image: projectIndustrial,
      description: "Advanced manufacturing facility with eco-friendly design, optimized workflows, and modern safety protocols.",
      value: "₹80 Crore",
      area: "5 Lakh sq ft"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful projects across NCR, showcasing our expertise 
            in architecture, development, and project management.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={project.id} className="w-full flex-shrink-0">
                <div className="relative h-[600px] md:h-[700px]">
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
                  
                  {/* Project Content */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                      <div className="max-w-2xl text-primary-foreground">
                        {/* Project Type Badge */}
                        <div className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-accent font-medium mb-4">
                          {project.type}
                        </div>
                        
                        {/* Project Title */}
                        <h3 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
                          {project.title}
                        </h3>
                        
                        {/* Location and Year */}
                        <div className="flex items-center gap-6 mb-6 text-primary-foreground/80">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5" />
                            <span>{project.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>{project.year}</span>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-lg text-primary-foreground/90 mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        
                        {/* Project Stats */}
                        <div className="flex gap-8 mb-8">
                          <div>
                            <div className="text-2xl font-bold text-accent">{project.value}</div>
                            <div className="text-sm text-primary-foreground/70">Project Value</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-accent">{project.area}</div>
                            <div className="text-sm text-primary-foreground/70">Built Area</div>
                          </div>
                        </div>
                        
                        {/* CTA */}
                        <Button className="btn-outline-professional border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                          View Project Details
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-primary-foreground" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
          >
            <ArrowRight className="w-6 h-6 text-primary-foreground" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-accent scale-125' 
                    : 'bg-primary-foreground/40 hover:bg-primary-foreground/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Project Metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100,000+</div>
            <div className="text-muted-foreground">Square Feet Designed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">₹200+</div>
            <div className="text-muted-foreground">Crore Value Constructed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">30,000+</div>
            <div className="text-muted-foreground">Man-Hours of Analysis</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
            See How We Can Bring Your Vision to Life
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-cta">
              Request a Proposal
            </Button>
            <Button className="btn-outline-professional">
              View Complete Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;