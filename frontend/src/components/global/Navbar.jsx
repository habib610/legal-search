import Container from "../ui/Container";

const Navbar = () => {
    return (
        <header className="bg-emerald-600 py-4 px-4 ">
            <nav className="container mx-auto">
                <Container>
                    <div className="text-white font-bold text-xl xl:text-2xl hover:cursor-pointer ">
                        Legal Docs
                    </div>
                </Container>
            </nav>
        </header>
    );
};

export default Navbar;
