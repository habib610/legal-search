// import { LuLoaderPinwheel } from "react-icons/lu";
import { TbLoader3 } from "react-icons/tb";

import P from "../typography/P";

const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <TbLoader3 className="text-5xl lg:text-6xl text-emerald-600 animate-spin " />
            <P>Loading...</P>
        </div>
    );
};

export default Loader;
