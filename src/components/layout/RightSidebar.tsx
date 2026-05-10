"use client";

import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import { personalInfo } from "@/data/personalInfo";

export default function RightSidebar() {
    return (
        <aside className="flex lg:flex-col flex-row items-center justify-center w-full lg:w-[120px] h-[90px] lg:h-screen bg-white border-l sticky top-0 gap-6">

            <a
                href={personalInfo.github}
                target="_blank"
                className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xl hover:scale-110 transition"
            >
                <FaGithub />
            </a>

            <a
                href={personalInfo.linkedin}
                target="_blank"
                className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xl hover:scale-110 transition"
            >
                <FaLinkedin />
            </a>

        </aside>
    );
}