import { useState } from "react";
import Hero from "../../components/home/Hero";
import Results from "../../components/home/Results";
import SearchInfo from "../../components/home/SearchInfo";
import TabBar from "../../components/home/TabBar";
import Container from "../../components/ui/Container";
import Error from "../../components/ui/Error";
import Loader from "../../components/ui/Loader";
import { API_URL } from "../../constant/constant";

const HomePage = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError("");
            const res = await fetch(`${API_URL}/generate`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query }),
            });
            if (!res.ok) {
                const data = await res.json();
                throw data?.detail || "Something went wrong";
            }

            const data = await res.json();
            setResults(data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setError(typeof err === "string" ? err : "Something went wrong");
        }
    };

    const handleReset = () => {
        setQuery("");
        setError("");
        setResults([]);
    };

    let content = loading ? (
        <Loader />
    ) : error ? (
        <Error error={error} />
    ) : results.length ? (
        <Results results={results} />
    ) : (
        <SearchInfo />
    );
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
                <Container>{content}</Container>
            </div>
        </div>
    );
};

export default HomePage;
