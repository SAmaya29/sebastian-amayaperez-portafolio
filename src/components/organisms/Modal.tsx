"use client";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
};

export default function Modal({
    isOpen,
    onClose,
    title,
    children,
}: Props) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

            <div className="bg-white rounded-xl max-w-2xl w-full p-8 relative animate-in fade-in duration-200">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-2xl"
                >
                    ×
                </button>

                <h2 className="text-3xl font-bold mb-6">
                    {title}
                </h2>

                {children}

            </div>

        </div>
    );
}