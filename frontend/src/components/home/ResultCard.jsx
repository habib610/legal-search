import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import P from "../typography/P";

const ResultCard = (props) => {
    return (
        <div
            role="button"
            onClick={props.onClick}
            className="border border-gray-200 shadow-md py-2 px-4 flex flex-col gap-4 max-w-[600px] hover:cursor-pointer w-full"
        >
            <P className="font-semibold">{props?.title}</P>
            <div className="flex items-center gap-2">
                <div className="inline-flex items-center py-1 px-2 bg-emerald-300 text-white">
                    {props.type}
                </div>
                <P>{props.date}</P>
            </div>
            <div className="flex items-center gap-2">
                <HiOutlineClipboardDocumentList className="text-2xl text-gray-400" />
                <P>{props.owner}</P>
            </div>
        </div>
    );
};

export default ResultCard;
