import cn from "../../lib/cn";

const P = ({ className, children }) => {
    return (
        <p className={cn("text-sm lg:text-base text-gray-700", className)}>
            {children}
        </p>
    );
};

export default P;
