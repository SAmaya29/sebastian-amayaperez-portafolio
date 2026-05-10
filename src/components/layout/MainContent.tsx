"use client";

import {
    FaCode,
    FaLaptopCode,
    FaMobileAlt,
    FaDatabase,
    FaReact,
    FaServer,
} from "react-icons/fa";

import { useState } from "react";

import Modal from "../organisms/Modal";
import SectionTitle from "../atoms/SectionTitle";
import KnowledgeCard from "../molecules/KnowledgeCard";
import EducationCard from "../molecules/EducationCard";
import PortfolioCard from "../molecules/PortfolioCard";
import { portfolioProjects } from "@/data/portfolioProjects";

export default function MainContent() {

    const [openProfile, setOpenProfile] = useState(false);

    return (
        <main className="flex-1 h-screen overflow-y-auto p-8">

            {/* HERO */}
            <section className="bg-white rounded-xl p-10 min-h-105 flex flex-col justify-center shadow-sm">

                <h1 className="text-5xl font-bold leading-tight">
                    Sebastian Amaya
                </h1>

                <h2 className="text-4xl font-bold text-yellow-500 mt-2">
                    Backend Developer
                </h2>

                <p className="text-gray-600 mt-6 max-w-2xl leading-relaxed">
                    Software development student focused on backend
                    technologies, APIs and data-driven systems, while
                    still enjoying frontend interfaces and modern user
                    experiences. I like building reliable web
                    applications, working with databases and creating
                    scalable solutions with clean architecture.
                </p>

                <button
                    onClick={() => setOpenProfile(true)}
                    className="mt-8 bg-yellow-500 text-white px-6 py-3 rounded-lg w-fit hover:bg-yellow-600 transition"
                >
                    Hire Me
                </button>

            </section>

            {/* MODAL PERFIL */}
            <Modal
                isOpen={openProfile}
                onClose={() => setOpenProfile(false)}
                title="Professional Profile"
            >
                <p className="text-gray-600 leading-relaxed">
                    I am a software development student interested
                    in backend development, APIs, databases, cloud
                    technologies and modern system design. I also
                    like building polished frontend interfaces when
                    the project needs it.
                </p>
            </Modal>

            {/* KNOWLEDGE */}
            <section className="mt-20">

                <SectionTitle
                    title="My Knowledge"
                    subtitle="Technologies and areas where I have experience and knowledge."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                    <KnowledgeCard
                        title="API Development"
                        description="Design and implementation of REST APIs with clean endpoints and structured responses."
                        icon={<FaServer />}
                    />

                    <KnowledgeCard
                        title="Databases"
                        description="Modeling relational data and working with SQL databases for persistent backend systems."
                        icon={<FaDatabase />}
                    />

                    <KnowledgeCard
                        title="System Design"
                        description="Thinking about scalable backend structure, services, and maintainable application flow."
                        icon={<FaLaptopCode />}
                    />

                    <KnowledgeCard
                        title="Frontend Integration"
                        description="Connecting backend services with React and NextJS interfaces when a polished UI is needed."
                        icon={<FaReact />}
                    />

                    <KnowledgeCard
                        title="Programming"
                        description="Problem solving with Java across backend and frontend codebases."
                        icon={<FaCode />}
                    />

                    <KnowledgeCard
                        title="Responsive UI"
                        description="Keeping interfaces clean, adaptable and usable across desktop and mobile devices."
                        icon={<FaMobileAlt />}
                    />

                </div>

            </section>

            {/* EDUCATION */}
            <section className="mt-24">

                <SectionTitle
                    title="Education"
                    subtitle="My academic background and learning experience."
                />

                <div className="space-y-6">

                    <EducationCard
                        institution="Universidad de Antioquia"
                        degree="Software Development"
                        date="2021 - Present"
                        description="Learning software engineering principles, frontend technologies, databases and web development."
                    />

                    <EducationCard
                        institution="Online Courses"
                        degree="Backend Development"
                        date="2024"
                        description="Courses focused on Java and Spring Boot."
                    />

                </div>

            </section>

            {/* PORTFOLIO */}
            <section className="mt-24 mb-16">

                <SectionTitle
                    title="Portfolio"
                    subtitle="Some projects and practices I have developed."
                />

                <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x">

                    {portfolioProjects.map((project) => (
                        <PortfolioCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            details={project.details}
                            image={project.image}
                            github={project.github}
                        />
                    ))}

                </div>

            </section>

            {/* FOOTER */}
            <footer className="bg-white rounded-xl p-6 text-center text-gray-500 mb-10">
                © 2026 Sebastian Amaya Perez - Portfolio
            </footer>

        </main>
    );
}