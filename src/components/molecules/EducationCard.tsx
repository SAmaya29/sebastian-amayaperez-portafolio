type Props = {
    institution: string;
    degree: string;
    date: string;
    description: string;
};

export default function EducationCard({
    institution,
    degree,
    date,
    description,
}: Props) {
    return (
        <div className="bg-white rounded-xl p-8 shadow-sm">

            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">

                <div>
                    <h3 className="text-2xl font-bold">
                        {institution}
                    </h3>

                    <p className="text-yellow-500 font-semibold mt-1">
                        {degree}
                    </p>
                </div>

                <span className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm w-fit">
                    {date}
                </span>

            </div>

            <p className="text-gray-600 mt-6 leading-relaxed">
                {description}
            </p>

        </div>
    );
}