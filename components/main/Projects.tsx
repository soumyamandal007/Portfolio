import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pb-20 py-10"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/photo-1460925895917-afdab827c52f.avif"
          title="E-Commerce Web Application"
          description="Developed and maintained a fully functional e-commerce website with secure payment gateways, responsive design, SEO optimization, and regular maintenance."
        />
        <ProjectCard
          src="/photo-1480694313141-fce5e697ee25.avif"
          title="Social Media Platform"
          description="Utilized React for the front-end, implemented authentication, employed MongoDB for storage, and utilized Node.js for the back-end in developing a social media platform, fostering seamless user interaction and data management."
        />
        <ProjectCard
          src="/photo-1551288049-bebda4e38f71.avif"
          title="House Pricing"
          description="Developed a predictive model for house prices using big data analysis techniques, machine learning algorithms, and data visualization tools, considering factors such as location, size, amenities, and market trends"
        />
        <ProjectCard
          src="/machine_translation.avif"
          title="Machine Translation"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        
      </div>
    </div>
  );
};

export default Projects;