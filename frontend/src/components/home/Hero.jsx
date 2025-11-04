import { IoSearchOutline } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import H1 from "../typography/H1";
import H2 from "../typography/H2";
import Container from "../ui/Container";
import Input from "../ui/Input";

const Hero = ({ query, setQuery, onSearch, onReset }) => {
    return (
        <section className="bg-emerald-100 pt-20 pb-10 lg:pb-12 xl:pb-15 lg:pt-25 xl:pt-30">
            <Container className="flex flex-col justify-center text-center gap-2 lg:gap-4">
                <H1>Discover the world's Legal Documents</H1>
                <H2>
                    Over 10+ million legal document, 1+ million questions, this
                    is where everyone can access Legal Docs
                </H2>
                <div className="">
                    <form onSubmit={onSearch} className="max-w-[600px] mx-auto">
                        <Input
                            leftIcon={IoSearchOutline}
                            rightIcon={LiaTimesSolid}
                            isVisibleIcon={query}
                            placeholder="Search Legal docs"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onRightIconClick={onReset}
                            onLeftIconClick={onSearch}
                        />
                    </form>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
