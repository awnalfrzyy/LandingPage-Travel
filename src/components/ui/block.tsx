import { LucideIcon } from "lucide-react";

interface InfoBlockProps {
    number: string | number;
    text: string;
    Icon: LucideIcon; // passing icon component
    className?: string; // opsional styling tambahan
}

export default function InfoBlock({ number, text, Icon, className }: InfoBlockProps) {
    return (
        <div className={`flex flex-col items-start p-4 bg-[#bebebe] rounded-lg  ${className}`}>
            <div className="flex items-center gap-2">
                <h1 className="text-[50px] text-start font-light ">{number}</h1>
                <Icon className="w-8 h-8 ml-[-10px] text-black" />
            </div>
            <p className="text-gray-700 text-start text-sm mt-[-12px]">{text}</p>
        </div>

    );
}
