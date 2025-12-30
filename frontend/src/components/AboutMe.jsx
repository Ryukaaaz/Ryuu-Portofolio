import { Briefcase, Code, Phone, Linkedin, User } from "lucide-react";

export const AboutMeSection = () =>{
    return(
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="text-primary">About</span> Me
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* column 1 */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Backend Develper</h3>
                        <p className="text-muted-foreground">
                           Passionate Backend Developer with a strong interest in building reliable and efficient web applications. I enjoy working with PHP and Laravel to develop clean, structured backend systems that support real-world use cases.
                        </p>
                        <p className="text-muted-foreground">
                            I am eager to keep learning, improving my skills, and gaining hands-on experience through projects and collaboration. I value writing maintainable code and enjoy solving logical problems that turn ideas into functional solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>
                            <a href="/cv/Michael Chen_CV.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                {" "}
                                View CV
                            </a>
                        </div>
                    </div>

                    {/* column 2 */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        {" "}
                                        Backend-focused Web Developer passionate about building clean and efficient web systems.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-semibold text-lg">Collaboration</h4>
                                    <p className="text-muted-foreground">
                                        {" "}
                                        Open to collaboration, freelance opportunities, and junior backend roles.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-semibold text-lg">
                                        <span className="text-primary">Connect </span> With Me
                                    </h4>
                                    
                                    <p className="text-muted-foreground">
                                        {" "}
                                         <a href="https://www.linkedin.com/in/michael-chenn/" target="_blank">
                                            <Linkedin/>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};