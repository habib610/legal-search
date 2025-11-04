import P from "../typography/P";
import Container from "../ui/Container";

const Footer = () => {
    return (
        <footer className="py-9 bg-emerald-800">
            <Container className="flex justify-center items-center">
                <P className="text-white">
                    &copy; {new Date().getFullYear()} Legal Docs. All rights
                    reserved{" "}
                </P>
            </Container>
        </footer>
    );
};

export default Footer;
