import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 section-padding bg-gradient-to-br from-secondary to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
            About Shiva NCR Consultants
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building the future of NCR through innovative architecture, strategic consultancy, 
            and comprehensive development solutions.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-elegant p-8 text-center">
              <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
                Innovation First
              </h3>
              <p className="text-muted-foreground">
                We champion creative, sustainable architecture that pushes boundaries 
                while respecting environmental and cultural contexts.
              </p>
            </div>
            <div className="card-elegant p-8 text-center">
              <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
                Integrity & Transparency
              </h3>
              <p className="text-muted-foreground">
                Every report reflects rigorous, unbiased analysis. We believe in 
                honest communication and ethical business practices.
              </p>
            </div>
            <div className="card-elegant p-8 text-center">
              <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
                Client-Centric Focus
              </h3>
              <p className="text-muted-foreground">
                Your goals shape our solutions from day one. We listen, understand, 
                and deliver exactly what you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;