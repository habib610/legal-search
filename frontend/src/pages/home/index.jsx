import { useState } from "react";
import Hero from "../../components/home/Hero";
import Results from "../../components/home/Results";
import SearchInfo from "../../components/home/SearchInfo";
import TabBar from "../../components/home/TabBar";
import Container from "../../components/ui/Container";
import Error from "../../components/ui/Error";
import Loader from "../../components/ui/Loader";

const HomePage = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
    };

    const handleReset = () => {
        setQuery("");
    };
    return (
        <div className="flex-1 flex flex-col">
            <Hero
                query={query}
                setQuery={setQuery}
                onSearch={handleSearch}
                onReset={handleReset}
            />
            <TabBar />
            <div className="bg-gray-50 py-10 lg:py-12 xl:py-15  flex-1">
                <Container>
                    {loading ? (
                        <Loader />
                    ) : results.length ? (
                        <Results />
                    ) : error ? (
                        <Error />
                    ) : (
                        <SearchInfo />
                    )}
                </Container>
            </div>
        </div>
    );
};

export default HomePage;
