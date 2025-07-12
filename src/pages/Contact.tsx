import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: '',
    projectBrief: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Request submitted successfully!",
        description: "Our team will review your inquiry and get back within 48 hours.",
      });
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        inquiryType: '',
        projectBrief: '',
        budget: '',
        timeline: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 section-padding bg-gradient-to-br from-secondary to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can bring your vision to life.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="card-elegant p-8">
              <h2 className="text-3xl font-montserrat font-semibold text-foreground mb-6">
                Request a Proposal
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company / Organization
                    </label>
                    <Input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Type of Inquiry *
                  </label>
                  <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="architecture">Architecture</SelectItem>
                      <SelectItem value="consultancy">Business Consultancy</SelectItem>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="feasibility">Feasibility Report</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Brief *
                  </label>
                  <Textarea
                    value={formData.projectBrief}
                    onChange={(e) => handleInputChange('projectBrief', e.target.value)}
                    placeholder="Describe your project requirements..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Budget Range
                    </label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-50l">Under ₹50 Lakhs</SelectItem>
                        <SelectItem value="50l-1cr">₹50 Lakhs - ₹1 Crore</SelectItem>
                        <SelectItem value="1cr-5cr">₹1 Crore - ₹5 Crore</SelectItem>
                        <SelectItem value="5cr-plus">₹5 Crore+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Timeline
                    </label>
                    <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-6m">Under 6 Months</SelectItem>
                        <SelectItem value="6-12m">6-12 Months</SelectItem>
                        <SelectItem value="12m-plus">12+ Months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-cta"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Request Proposal
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Office Locations */}
              <div className="card-elegant p-8">
                <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-6">
                  Our Offices
                </h3>
                
                <div className="space-y-8">
                  {/* Headquarters */}
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Headquarters</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>123 NCR Tower Road, Sector 14, Gurugram, Haryana</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>+91 124 XXXX XXXX</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>info@shivancrconsultants.com</span>
                      </div>
                      <div className="text-sm">Mon–Sat, 9 AM–6 PM IST</div>
                    </div>
                  </div>

                  {/* Delhi Branch */}
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Delhi Branch</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>45 Mall Road, Central Delhi, New Delhi, 110001</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>+91 11 XXXX XXXX</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>delhi@shivancrconsultants.com</span>
                      </div>
                      <div className="text-sm">Mon–Sat, 9 AM–6 PM IST</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule Consultation */}
              <div className="card-elegant p-8">
                <h3 className="text-2xl font-montserrat font-semibold text-foreground mb-4">
                  Book a Consultation
                </h3>
                <p className="text-muted-foreground mb-6">
                  Prefer to speak directly? Schedule a one-on-one consultation 
                  with our experts.
                </p>
                <Button className="btn-outline-professional w-full">
                  Schedule Meeting
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;