import cn from "../../lib/cn";

const iconStyle =
    "px-1 text-gray-500 w-[60px] lg:w-[80px]  h-full flex items-center justify-center text-xl lg:text-2xl hover:cursor-pointer";

const Input = ({
    className,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    onRightIconClick,
    isVisibleIcon,
    onLeftIconClick,
    ...rest
}) => {
    return (
        <div className="w-full border-1 border-gray-300 flex items-center justify-center h-[50px] focus-within:outline-2 focus-within:outline-emerald-600  rounded overflow-hidden outline-1 outline-transparent ">
            {LeftIcon && (
                <div
                    role="button"
                    onClick={rest.value ? onLeftIconClick : () => null}
                    className={iconStyle}
                >
                    <LeftIcon />
                </div>
            )}

            <input
                {...rest}
                className={cn("w-full px-2 h-full outline-0", className)}
            />
            {RightIcon && (
                <div
                    role="button"
                    onClick={rest.value ? onRightIconClick : () => null}
                    className={iconStyle}
                >
                    {isVisibleIcon && <RightIcon />}
                </div>
            )}
        </div>
    );
};

export default Input;
