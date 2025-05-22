
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Message sent! I'll get back to you soon.");
    form.reset();
  }

  return (
    <section id="contact" className="section">
      <div className="container-narrow">
        <h2 className="section-heading">Contact Me</h2>
        <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
          Have a question or want to work together? Feel free to reach out.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-lg animate-fade-in">
            <Mail className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-lg font-medium mb-1">Email</h3>
            <a href="mailto:sam@samuelforrest.me" className="text-muted-foreground hover:text-foreground transition-colors">
              sam@samuelforrest.me
            </a>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-lg animate-fade-in">
            <Phone className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-lg font-medium mb-1">Phone</h3>
            <a href="tel:+447453446391" className="text-muted-foreground hover:text-foreground transition-colors">
              +44 07453 446391
            </a>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-lg animate-fade-in">
            <MapPin className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-lg font-medium mb-1">Location</h3>
            <p className="text-muted-foreground">Teddington, Greater London, UK</p>
          </div>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="What would you like to discuss?"
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full md:w-auto">
              Send Message
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
