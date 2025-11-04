import { IoSearchOutline } from "react-icons/io5";
import P from "../typography/P";

const SearchInfo = () => {
    return (
        <div className=" flex justify-center items-center gap-2 lg:gap-3 xl:gap-4">
            <IoSearchOutline className="text-4xl lg:text-5xl" />
            <P>Enter your documents query to search</P>
        </div>
    );
};

export default SearchInfo;
