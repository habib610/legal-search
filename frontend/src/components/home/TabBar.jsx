import P from "../typography/P";
import Container from "../ui/Container";

const TabBar = () => {
    return (
        <div className="border-y-2 border-gray-200 pt-4 pb-2 ">
            <Container className="flex justify-center">
                <div className="inline-flex justify-center  relative">
                    <P className="text-base px-4">Documents</P>
                    <span className="absolute h-1 inset-x-0 top-7 bg-emerald-500 rounded-full"></span>
                </div>
            </Container>
        </div>
    );
};

export default TabBar;
