import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn }  from "../libs/utils"
import { useToast } from "../hooks/use-toast"
import { useState } from "react";
export const  ContactSection = () => {

    const{toast} =  useToast();
    const[isSubmitting,setissubmitting]=useState(false);

    const handleSubmit = (e)  =>{
        e.preventDefault() 

        setissubmitting(true);
        
        setTimeout(()=>{
            toast({
                title:"Message sent!",
                description:"Thank you for your message.I will get to you soon.",
            });
            setissubmitting(false);
        },1500);
        
    };
    return (
    <section id="contact" 
    className="py-24 px-4 relative bg-secondary/30"
    >

    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary">Touch</span></h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Est voluptate atque non  ada ad ad ad .
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                 <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                 <div className="space-y-6 justify-center">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-priamry/40">
                            <Mail className="h-6 w-6 text-primary "/>
                        </div>
                        <div>
                            <h4>Email</h4>
                            <a href="mailto:mejij30183@mardiek.com"
                            className="text-muted-foreground hover:text-primary trasition-colors"
                            >
                                mejij30183@mardiek.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-priamry/40">
                            <Phone className="h-6 w-6 text-primary "/>
                        </div>
                        <div>
                            <h4>Phone</h4>
                            <a href="tel:+91 928347521"
                            className="text-muted-foreground hover:text-primary trasition-colors"
                            >
                                +91 928347521
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-priamry/40">
                            <MapPin className="h-6 w-6 text-primary "/>
                        </div>
                        <div>
                            <h4>Location</h4>
                            <a
                            className="text-muted-foreground hover:text-primary trasition-colors"
                            >
                                Location,adoi,wdwad
                            </a>
                        </div>
                    </div>
                    <div className="pt-8 text-center">
  <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
  <div className="flex justify-center gap-4">
    <a href="#" target="_blank" rel="noopener noreferrer">
      <Linkedin className="w-6 h-6 hover:text-primary transition-colors" />
    </a>
    {/* Add more icons here later */}
  </div>
</div>
                 </div>
            </div>
            <div className="bg-card p-8 rounded-large shadow-xs" onSubmit={handleSubmit}>
                <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                <form action=""
                className="space-y-6"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                        <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-md border-input bg-background focus:outlined-hidden focus:ring-primary"
                        placeholder="tadashi hamada"/> 
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                        <input 
                        type="text" 
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-md border-input bg-background focus:outlined-hidden focus:ring-primary"
                        placeholder="abc@gmail.com"/> 
                    </div>
                    <div>
                        <label htmlFor="Your Message" className="block text-sm font-medium mb-2">Your Message</label>
                        <textarea 
                        id="message"
                        name="name"
                        required
                        className="w-full h-40 px-2 py-2 rounded-md border-input bg-background focus:outlined-hidden focus:ring-primary resize-none align-top"
                        placeholder="Write your message"/> 
                    </div>

                    <button type="submit" 
                    disabled={isSubmitting}
                    className={cn("cosmic-button w-full flex items-cemter justify-center gap-2")}>
                   {isSubmitting ? "Sending...":" Send Message"}
                    <Send size={16}/>
                    </button>
                </form>
            </div>
        </div>
    </div>

    </section>
    );
};