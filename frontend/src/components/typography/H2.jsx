import cn from "../../lib/cn";

const H2 = ({ className, children }) => {
    return (
        <h2 className={cn("text-lg lg:text-2xl text-gray-700 mb-4", className)}>
            {children}
        </h2>
    );
};

export default H2;
