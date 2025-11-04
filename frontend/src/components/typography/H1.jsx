import cn from "../../lib/cn";

const H1 = ({ children, className }) => {
    return (
        <h1
            className={cn(
                "text-4xl lg:text-5xl xl:text-6xl font-medium",
                className
            )}
        >
            {children}
        </h1>
    );
};

export default H1;
