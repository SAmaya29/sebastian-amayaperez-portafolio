"use client";
import Image from "next/image";

import { useState } from "react";
import Modal from "../organisms/Modal";

type Props = {
    title: string;
    description: string;
    details: string;
    image?: string;
    github?: string;
};

export default function PortfolioCard({
    title,
    description,
    details,
    image,
    github,
}: Props) {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="min-w-[320px] bg-white rounded-xl overflow-hidden shadow-sm">

                <div className="relative h-55">
                    {image ? (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, 320px"
                            className="object-cover"
                        />
                    ) : (
                        <div className="flex h-full items-center justify-center bg-gray-100 text-sm text-gray-400">
                            No image available
                        </div>
                    )}

                </div>

                <div className="p-6">

                    <h3 className="text-2xl font-bold">
                        {title}
                    </h3>

                    <p className="text-gray-500 mt-4">
                        {description}
                    </p>

                    <button
                        onClick={() => setOpen(true)}
                        className="mt-6 text-yellow-500 font-semibold"
                    >
                        Learn More →
                    </button>

                </div>

            </div>

            <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                title={title}
            >
                <p className="text-gray-600 leading-relaxed">
                    {details}
                </p>
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        className="inline-block mt-6 bg-yellow-500 text-white px-5 py-3 rounded-lg hover:bg-yellow-600 transition"
                    >
                        View Github Repository
                    </a>
                )}
            </Modal>
        </>
    );
}