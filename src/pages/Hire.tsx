import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Mail, Phone, MapPin, Clock, DollarSign, Code } from "lucide-react";

const Hire = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create a well-structured email
    const subject = `Project Inquiry: ${formData.projectType ? formData.projectType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Web Development Project'}`;
    
    const body = `Hi Samuel,

This form was from the hire page on samuelforrest.me. I'm interested in working with you on a web development project. Here are the details:

PROJECT INFORMATION:
• Project Type: ${formData.projectType ? formData.projectType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Not specified'}
• Budget Range: ${formData.budget ? formData.budget.replace('-', ' - £').replace('k', ',000').replace('plus', '+').replace('under', 'Under £') : 'Not specified'}
• Timeline: ${formData.timeline ? formData.timeline.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Not specified'}

PROJECT DESCRIPTION:
${formData.description || 'No description provided'}

CONTACT INFORMATION:
• Name: ${formData.name}
• Email: ${formData.email}
• Company: ${formData.company || 'Not provided'}
• Phone: ${formData.phone || 'Not provided'}

Best regards,
${formData.name}`;

    // Create mailto link
    const mailtoLink = `mailto:sam@samuelforrest.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Hire Me"
        description="Get in touch to discuss your web development project. I specialize in full-stack responsive websites, maintenance, and SEO optimization."
        keywords="hire web developer, freelance web development, full-stack developer, responsive websites, SEO optimization, Samuel Forrest"
        ogTitle="Hire Samuel Forrest | Web Developer"
        ogDescription="Get in touch to discuss your web development project. Specializing in full-stack responsive websites and SEO optimization."
        canonicalUrl="https://samuelforrest.me/hire"
      />
      <Header />
      <main className="flex-grow mt-20 pt-6">
        <div className="container-narrow px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">Let's Work Together</h1>
              <p className="text-muted-foreground">
                Ready to bring your web project to life? Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      Contact Info
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">sam@samuelforrest.me</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">London, UK</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">24-48h response time</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Full-stack web development</li>
                      <li>• Responsive design</li>
                      <li>• SEO optimization</li>
                      <li>• Website maintenance</li>
                      <li>• Performance optimization</li>
                      <li>• E-commerce solutions</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <Label>Project Type *</Label>
                        <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new-website">New Website</SelectItem>
                            <SelectItem value="redesign">Website Redesign</SelectItem>
                            <SelectItem value="maintenance">Website Maintenance</SelectItem>
                            <SelectItem value="web-app">Web Application</SelectItem>
                            <SelectItem value="seo">SEO Optimization</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Budget Range *</Label>
                        <RadioGroup
                          value={formData.budget}
                          onValueChange={(value) => handleInputChange("budget", value)}
                          className="grid grid-cols-2 gap-4 mt-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="50-100" id="50-100" />
                            <Label htmlFor="50-100">£50-100</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="100-200" id="100-200" />
                            <Label htmlFor="100-200">£100-200</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="200-500" id="200-500" />
                            <Label htmlFor="200-500">£200-£500</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="500-plus" id="500-plus" />
                            <Label htmlFor="500-plus">£500+</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <Label>Timeline *</Label>
                        <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2days">2days</SelectItem>
                            <SelectItem value="2-5days">2-5days</SelectItem>
                            <SelectItem value="5-10days">5-10days</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="description">Project Description *</Label>
                        <Textarea
                          id="description"
                          placeholder="Tell me about your project, goals, target audience, and any specific requirements..."
                          className="min-h-32"
                          value={formData.description}
                          onChange={(e) => handleInputChange("description", e.target.value)}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        Send Project Inquiry (will compose an email message to Samuel)
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Hire;
