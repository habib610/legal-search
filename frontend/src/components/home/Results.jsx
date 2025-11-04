import { useState } from "react";
import H2 from "../typography/H2";
import P from "../typography/P";
import Modal from "../ui/Modal";
import ResultCard from "./ResultCard";

const Results = ({ results }) => {
    const [openDoc, setOpenDoc] = useState(null);
    return (
        <div className="flex flex-col items-center gap-4 lg:gap-6 ">
            {results.map((doc) => (
                <ResultCard
                    key={doc.id}
                    {...doc}
                    onClick={() => setOpenDoc(doc)}
                />
            ))}

            <Modal
                modalContentClassName={
                    "mt-0 w-full lg:min-w-[400px] overflow-auto max-h-[600px]"
                }
                isOpen={openDoc}
                onClose={() => setOpenDoc(null)}
            >
                <div className="pt-5 px-4">
                    <H2 className="font-medium">{openDoc?.title}</H2>
                    <P className="bg-gray-50 py-2 px-3">
                        {openDoc?.description}
                    </P>

                    <div className="flex mt-6 gap-6 items-center">
                        <P className="text-gray-500 ">
                            Owner: {openDoc?.owner}
                        </P>
                        <P className="text-gray-500 ">Date: {openDoc?.date}</P>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Results;
