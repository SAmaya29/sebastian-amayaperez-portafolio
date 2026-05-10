import { personalInfo } from "@/data/personalInfo";
import Image from "next/image";

export default function LeftSidebar() {
    return (
        <aside className="flex lg:flex flex-col w-full lg:w-[280px] lg:h-screen bg-white border-r p-6 sticky top-0 overflow-y-auto">

            {/* Perfil */}
            <div className="flex flex-col items-center text-center border-b pb-6">

                {/* FOTO */}
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-yellow-500">
                    <Image
                        src="/images/profile.jpg"
                        alt="Profile"
                        fill
                        className="object-cover"
                    />

                </div>

                <h2 className="text-xl font-bold">
                    {personalInfo.name}
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                    {personalInfo.title}
                </p>
            </div>

            {/* Información */}
            <div className="mt-6 space-y-3 text-sm border-b pb-6">
                <div className="flex justify-between">
                    <span className="font-semibold">City:</span>
                    <span>{personalInfo.city}</span>
                </div>

                <div className="flex justify-between">
                    <span className="font-semibold">Email:</span>
                    <span className="text-right break-all">
                        {personalInfo.email}
                    </span>
                </div>
            </div>

            {/* Idiomas */}
            <div className="mt-6 border-b pb-6">
                <h3 className="font-bold mb-4">Languages</h3>

                <div className="space-y-4">

                    <div>
                        <div className="flex justify-between text-sm">
                            <span>Spanish</span>
                            <span>100%</span>
                        </div>

                        <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
                            <div className="w-full h-2 bg-yellow-500 rounded-full"></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between text-sm">
                            <span>English</span>
                            <span>75%</span>
                        </div>

                        <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
                            <div className="w-[75%] h-2 bg-yellow-500 rounded-full"></div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Tecnologías */}
            <div className="mt-6 border-b pb-6">
                <h3 className="font-bold mb-4">
                    Programming Languages
                </h3>

                <div className="space-y-4">

                    {[
                        ["Java", "80%"],
                        ["Python", "75%"],
                        ["React", "85%"],
                        ["NextJS", "70%"],
                    ].map(([name, value]) => (
                        <div key={name}>
                            <div className="flex justify-between text-sm">
                                <span>{name}</span>
                                <span>{value}</span>
                            </div>

                            <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
                                <div
                                    className="h-2 bg-yellow-500 rounded-full"
                                    style={{ width: value }}
                                />
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* Extra Skills */}
            <div className="mt-6">
                <h3 className="font-bold mb-4">
                    Extra Skills
                </h3>

                <ul className="space-y-2 text-sm text-gray-700">
                    <li>✔ Teamwork</li>
                    <li>✔ Problem Solving</li>
                    <li>✔ Git & Github</li>
                    <li>✔ REST APIs</li>
                </ul>
            </div>

        </aside>
    );
}