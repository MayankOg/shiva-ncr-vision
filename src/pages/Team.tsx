import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronDown, Mail, Linkedin } from 'lucide-react';

const Team = () => {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const leadership = [
    {
      id: 'rajesh-sharma',
      name: 'Rajesh Sharma',
      title: 'Founder & Chief Architect',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'With over 15 years in architectural design, Rajesh specializes in sustainable commercial and residential projects across NCR. He holds a Masters in Architecture from SPA Delhi and is passionate about integrating traditional Indian design elements with modern sustainability practices.',
      education: 'M.Arch, School of Planning & Architecture, Delhi',
      expertise: 'Sustainable Design, Commercial Architecture, Heritage Conservation',
      email: 'rajesh@shivancrconsultants.com',
      linkedin: '#'
    },
    {
      id: 'priya-agarwal',
      name: 'Priya Agarwal',
      title: 'Director of Business Development',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&h=400&fit=crop&crop=face',
      bio: 'Priya leads our business consultancy division with expertise in market analysis and regulatory compliance. Former investment banker with deep knowledge of NCR real estate markets and government approval processes.',
      education: 'MBA Finance, IIM Lucknow',
      expertise: 'Market Analysis, Regulatory Compliance, Investment Strategy',
      email: 'priya@shivancrconsultants.com',
      linkedin: '#'
    },
    {
      id: 'amit-kumar',
      name: 'Amit Kumar',
      title: 'Head of Project Management',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Amit oversees all construction and development projects, ensuring timely delivery and quality standards. PMP certified with experience managing projects worth over ₹200 crores across residential and commercial sectors.',
      education: 'B.Tech Civil Engineering, DTU',
      expertise: 'Project Management, Construction Technology, Quality Assurance',
      email: 'amit@shivancrconsultants.com',
      linkedin: '#'
    },
    {
      id: 'neha-singh',
      name: 'Neha Singh',
      title: 'Lead Financial Analyst',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Neha heads our feasibility and financial analysis team, providing data-driven insights for investment decisions. Chartered Accountant with specialization in real estate financial modeling and risk assessment.',
      education: 'CA, ICAI & B.Com, Delhi University',
      expertise: 'Financial Modeling, Risk Assessment, Investment Analysis',
      email: 'neha@shivancrconsultants.com',
      linkedin: '#'
    }
  ];

  const extendedTeam = [
    { name: 'Vikram Malhotra', role: 'Senior Architect', expertise: 'Residential Design & 3D Visualization' },
    { name: 'Anita Desai', role: 'Urban Planning Consultant', expertise: 'Zoning & Master Planning' },
    { name: 'Ravi Gupta', role: 'Structural Engineer', expertise: 'High-rise & Industrial Structures' },
    { name: 'Kavita Sharma', role: 'Interior Design Lead', expertise: 'Commercial & Luxury Residential Interiors' },
    { name: 'Manoj Tiwari', role: 'Site Supervisor', expertise: 'Construction Management & Safety' },
    { name: 'Deepika Rao', role: 'Documentation Specialist', expertise: 'Regulatory Approvals & Compliance' }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 section-padding bg-gradient-to-br from-secondary to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The experts behind Shiva NCR Consultants - bringing together decades of experience 
            in architecture, development, and business consultancy.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center text-foreground mb-16">
            Leadership Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((member) => (
              <div key={member.id} className="card-elegant group">
                <div className="relative overflow-hidden">
                  {/* Front of card */}
                  <div className={`transition-transform duration-500 ${
                    expandedMember === member.id ? 'scale-95 opacity-20' : 'scale-100 opacity-100'
                  }`}>
                    <div className="flex items-center p-8">
                      <div className="w-24 h-24 rounded-full overflow-hidden mr-6 flex-shrink-0">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-2">
                          {member.name}
                        </h3>
                        <p className="text-accent font-medium mb-3">{member.title}</p>
                        <button
                          onClick={() => setExpandedMember(
                            expandedMember === member.id ? null : member.id
                          )}
                          className="text-primary font-medium hover:text-primary-glow transition-colors flex items-center"
                        >
                          Read Bio <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${
                            expandedMember === member.id ? 'rotate-180' : ''
                          }`} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Back of card (bio) */}
                  {expandedMember === member.id && (
                    <div className="absolute inset-0 p-8 bg-card animate-fade-in">
                      <div className="h-full flex flex-col justify-center">
                        <h3 className="text-xl font-montserrat font-semibold text-foreground mb-4">
                          {member.name}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {member.bio}
                        </p>
                        <div className="space-y-2 mb-6">
                          <p className="text-sm">
                            <span className="font-medium text-foreground">Education:</span> {member.education}
                          </p>
                          <p className="text-sm">
                            <span className="font-medium text-foreground">Expertise:</span> {member.expertise}
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <a href={`mailto:${member.email}`} className="text-primary hover:text-primary-glow transition-colors">
                            <Mail className="h-5 w-5" />
                          </a>
                          <a href={member.linkedin} className="text-primary hover:text-primary-glow transition-colors">
                            <Linkedin className="h-5 w-5" />
                          </a>
                          <button
                            onClick={() => setExpandedMember(null)}
                            className="ml-auto text-muted-foreground hover:text-foreground transition-colors"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Team */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center text-foreground mb-16">
            Extended Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extendedTeam.map((member, index) => (
              <div
                key={member.name}
                className={`card-elegant p-6 animate-fade-in ${
                  index % 2 === 0 ? 'animate-delay-100' : 'animate-delay-200'
                }`}
              >
                <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-elegant p-12 bg-gradient-to-r from-primary/10 to-accent/10">
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented professionals who share our passion for 
              innovative architecture and exceptional client service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@shivancrconsultants.com"
                className="btn-primary"
              >
                View Open Positions
              </a>
              <a
                href="mailto:careers@shivancrconsultants.com?subject=CV Submission"
                className="btn-secondary"
              >
                Send Your CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;