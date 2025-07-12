import { useEffect, useRef, useState } from 'react';
import { Users, Building, Award, Clock } from 'lucide-react';

const AnimatedCounters = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    satisfaction: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounters = () => {
    const targets = { projects: 50, clients: 20, experience: 15, satisfaction: 98 };
    const duration = 2000; // 2 seconds
    const steps = 60; // 60fps
    const stepTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounters({
        projects: Math.floor(targets.projects * easeOut),
        clients: Math.floor(targets.clients * easeOut),
        experience: Math.floor(targets.experience * easeOut),
        satisfaction: Math.floor(targets.satisfaction * easeOut)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepTime);
  };

  const stats = [
    {
      icon: Building,
      value: counters.projects,
      suffix: '+',
      label: 'Projects Completed in NCR',
      description: 'Diverse portfolio across residential, commercial, and industrial sectors'
    },
    {
      icon: Users,
      value: counters.clients,
      suffix: '+',
      label: 'Government & Corporate Clients',
      description: 'Trusted partnerships with leading organizations and agencies'
    },
    {
      icon: Clock,
      value: counters.experience,
      suffix: '+',
      label: 'Years of Combined Expertise',
      description: 'Deep understanding of NCR\'s development landscape'
    },
    {
      icon: Award,
      value: counters.satisfaction,
      suffix: '%',
      label: 'Client Satisfaction Rate',
      description: 'Committed to exceeding expectations on every project'
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Why Choose Shiva NCR Consultants
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Our track record speaks for itself. With extensive experience in the NCR region, 
            we deliver results that exceed expectations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>

                {/* Counter */}
                <div className="text-5xl md:text-6xl font-montserrat font-bold text-accent mb-2 counter-animate">
                  {stat.value}{stat.suffix}
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-3">End-to-End Service</h4>
            <p className="text-primary-foreground/80">From concept to construction, we handle every aspect of your project</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-3">Data-Driven Recommendations</h4>
            <p className="text-primary-foreground/80">Our feasibility reports are backed by rigorous market analysis</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-3">Dedicated Teams</h4>
            <p className="text-primary-foreground/80">Committed professionals ensuring timely delivery and quality</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedCounters;