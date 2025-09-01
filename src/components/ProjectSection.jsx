import { ArrowRight, ExternalLink, Github, Section } from "lucide-react";

const projects = [
    {
        id:1,
        title:"Project_1",
        description:"Here is the description of project 1 is to be attached", 
        Image:"../src/assets/photos/project1.jpg",
        tags:["tag1","tag2","tag3"],
        demourl:"#",
        githuburl:"#" , 
    },
    {
        id:2,
        title:"Project_2",
        description:"Here is the description of project 2 is to be attached", 
        Image:"../src/assets/photos/project2.jpg",
        tags:["tag1","tag2","tag3"],
        demourl:"#",
        githuburl:"#" , 
    },
    {
        id:3,
        title:"Project_3",
        description:"Here is the description of project 3 is to be attached", 
        Image:"../src/assets/photos/project3.jpg",   
        tags:["tag1","tag2","tag3"],
        demourl:"#",
        githuburl:"#" , 
    },
];


export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative ">

            <div className="container mx-auto max-w-5xl ">
            <h2 className="text-3xl md:text-4xl font-bold m-4 text-center ">Featured<span className="text-primary"> Projects</span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Laboriosam error, veniam quaerat dicta saepe nemo, laudantium, obcaecati </p>

                <div className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-8 ">
                    {projects.map((project,key)=>(
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >   
                            <div className="h-48 oveflow-hidden">
                                <img src={project.Image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="pd-6 ">
                                <div className=" flex flex-wrap gap-2 m-4 ">
                                    {project.tags.map((tag)=>(
                                        <span className="px-2 py-1 border text-xs font-medium rounded-full bg-primary/40 text-secondary-foreground">
                                             {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description} </p>
                            <div className="flex justify-between  items-center px-3">
                                <div className="flex space-x-2 space-y-3 ">
                                    <a href={project.demourl} 
                                    className="text-foreground/80 hover:text-primary transtion-colors duration-300 px-2"
                                    target="_blank"
                                    >
                                        <ExternalLink size={20} />
                                    </a>

                                    <a href={project.demourl} 
                                    className="text-foreground/80 hover:text-primary transtion-colors duration-300"
                                    target="_blank"
                                    >
                                        <Github size={20}/>
                                    </a> 
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10 ">
                    <a href="https://github.com/Rout-Ankit" 
                    target="_blank"
                    className="cosmic-button w-fit flex items-center mx-auto gap-2">Check My Github <ArrowRight size={16}
                    /> </a>

                </div>
            </div>

        </section>
    );
};