import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import projectResidential from '../assets/project-residential.jpg';
import projectCommercial from '../assets/project-commercial.jpg';
import projectIndustrial from '../assets/project-industrial.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Premium Residential Tower",
      location: "Sector 42, Gurugram",
      year: "2023",
      type: "Residential",
      image: projectResidential,
      description: "18-floor luxury residential tower with 120 premium units",
    },
    {
      id: 2,
      title: "Corporate Business Hub", 
      location: "Connaught Place, Delhi",
      year: "2022",
      type: "Commercial",
      image: projectCommercial,
      description: "Modern office complex with state-of-the-art facilities",
    },
    {
      id: 3,
      title: "Industrial Manufacturing Complex",
      location: "IMT Manesar, Haryana", 
      year: "2023",
      type: "Industrial",
      image: projectIndustrial,
      description: "Advanced manufacturing facility with eco-friendly design",
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 section-padding bg-gradient-to-br from-secondary to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our expertise across residential, commercial, and industrial 
            developments in the NCR region.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="card-elegant group cursor-pointer project-card">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="project-overlay">
                    <span className="text-primary-foreground font-medium">View Details</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-accent text-sm font-medium mb-2">{project.type}</div>
                  <h3 className="text-xl font-montserrat font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {project.location} • {project.year}
                  </p>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;