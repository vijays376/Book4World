import { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);

    const searchBook = async (evt) => {
        if (evt.key === "Enter") {
            try {
                const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}&maxResults=40`);
                // console.log("Response:", response.data)
                setData(response.data.items ?? []);
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        }
    };

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=computer engineering');
                setData(response.data.items ?? []);
            } catch (error) {
                console.error("Error fetching initial data:", error);
            }
        };

        fetchInitialData();
    }, []);

    return (
        <>
            <div className="header">
                <div className="page1">
                    <div className="row1">
                        <h2>Book4World</h2>
                        <div id="h1">
                            <h3>Explore Read Learn</h3>
                        </div>
                        <div className="search">
                            <input
                                type="text"
                                id="search-field"
                                placeholder="Search Book"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                onKeyDown={searchBook}
                            />
                        </div>
                    </div>
                </div>
                <div className="container">
                    {bookData.length > 0 ? (
                        <Card book={bookData} />
                    ) : (
                        <p>No books found.</p>
                    )}
                </div>
                <div>
                    <p className="intro">
                        <strong>Welcome to Book4World</strong>, your ultimate online destination for discovering, exploring, and enjoying a <strong>World of Books</strong>!
                        At Book4World, dive into a world of endless reading possibilities! Whether you're a fan of timeless classics, contemporary fiction, academic texts,
                        or rare historical books, we have something for every reader. From the comfort of your home, explore a vast collection of <strong>Millions of Books</strong> across
                        various genres and languages, all at your fingertips. Our user-friendly platform makes it easy to find your next great read, with the option to
                        read online or conveniently purchase the books. Start your reading adventure today, and unlock a universe of knowledge, inspiration and entertainment!
                    </p>
                </div>
            </div>
        </>
    );
};

export default Main;
