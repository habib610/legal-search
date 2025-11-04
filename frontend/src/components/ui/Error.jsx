import { MdReportGmailerrorred } from "react-icons/md";
import H1 from "../typography/H1";
import P from "../typography/P";

const Error = () => {
    return (
        <div className="border border-rose-300 bg-rose-50 shadow-md py-2 px-4 lg:py-4 flex flex-col items-center gap-1 max-w-[600px] mx-auto">
            <div>
                <MdReportGmailerrorred className="text-5xl lg:text-6xl text-rose-500" />
            </div>
            <H1 className="text-red-600 font-bold">404</H1>
            <P className="text-rose-500">No documents found</P>
        </div>
    );
};

export default Error;
