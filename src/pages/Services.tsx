import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 section-padding bg-gradient-to-br from-secondary to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive architecture, development, and consultancy solutions 
            tailored for the NCR market.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Architecture */}
            <div className="card-elegant p-8">
              <h2 className="text-3xl font-montserrat font-semibold text-foreground mb-4">
                Architecture
              </h2>
              <p className="text-muted-foreground mb-6">
                From concept sketches to 3D renderings, our architectural solutions span 
                Residential, Commercial, and Industrial projects.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Residential Design - Luxury homes and premium apartments</li>
                <li>• Commercial Design - Office towers and retail outlets</li>
                <li>• Industrial Projects - Warehouses and manufacturing facilities</li>
              </ul>
            </div>

            {/* Business Consultancy */}
            <div className="card-elegant p-8">
              <h2 className="text-3xl font-montserrat font-semibold text-foreground mb-4">
                Business Consultancy
              </h2>
              <p className="text-muted-foreground mb-6">
                Guiding developers, investors, and municipal bodies through the 
                complexities of NCR's real estate landscape.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Feasibility & Market Analysis</li>
                <li>• Regulatory & Approval Guidance</li>
                <li>• Investment Strategy & Risk Assessment</li>
                <li>• Financial Modeling & Funding Assistance</li>
              </ul>
            </div>

            {/* Building Development */}
            <div className="card-elegant p-8">
              <h2 className="text-3xl font-montserrat font-semibold text-foreground mb-4">
                Building Development
              </h2>
              <p className="text-muted-foreground mb-6">
                Integrated Design + Construction Management from concept to completion.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Design Phase - Conceptualization and detailed drawings</li>
                <li>• Construction Management - On-site supervision</li>
                <li>• Project Management - Scheduling and coordination</li>
              </ul>
            </div>

            {/* Feasibility Reports */}
            <div className="card-elegant p-8">
              <h2 className="text-3xl font-montserrat font-semibold text-foreground mb-4">
                Project Analysis & Feasibility
              </h2>
              <p className="text-muted-foreground mb-6">
                Data-driven insights to de-risk your investments and secure funding.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Cost Estimation - Detailed BoQ & forecasts</li>
                <li>• Market Feasibility - Demand & supply analysis</li>
                <li>• Regulatory Compliance Review</li>
                <li>• Risk Assessment & Mitigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;