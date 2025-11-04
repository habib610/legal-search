import { useState } from "react";
import Modal from "../ui/Modal";
import ResultCard from "./ResultCard";

const Results = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-col items-center ">
            <ResultCard onClick={() => setIsOpen(true)} />
            <Modal
                modalContentClassName={"mt-0 lg:min-w-[400px]"}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <h1>Modal content</h1>
            </Modal>
        </div>
    );
};

export default Results;
