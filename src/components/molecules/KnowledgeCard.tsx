import { ReactNode } from "react";

type Props = {
    title: string;
    description: string;
    icon: ReactNode;
};

export default function KnowledgeCard({
    title,
    description,
    icon,
}: Props) {
    return (
        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">

            <div className="text-5xl text-yellow-500 mb-6">
                {icon}
            </div>

            <h3 className="text-xl font-bold">
                {title}
            </h3>

            <p className="text-gray-500 mt-4 leading-relaxed">
                {description}
            </p>

        </div>
    );
}