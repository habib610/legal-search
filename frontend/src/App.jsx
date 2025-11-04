import Footer from "./components/global/Footer";
import Navbar from "./components/global/Navbar";
import HomePage from "./pages/home";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 flex flex-col">
                <HomePage />
            </main>
            <Footer />
        </div>
    );
}

export default App;
