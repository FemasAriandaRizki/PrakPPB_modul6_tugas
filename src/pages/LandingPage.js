// // src/pages/LandingPage.js
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // Components
// import Card from "../components/card";
// import Modal from "../components/modal";

// export default function LandingPage() {
//     const [data, setData] = useState(null);
//     const [isLoaded, setisLoaded] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);
//     const [query, setQuery] = useState(
//         localStorage.getItem("lastQuery") || "One Piece"
//     );

//     // Modal
//     const [modalShow, setModalShow] = useState(false);
//     const [modalItem, setModalItem] = useState(null);

//     useEffect(() => {
//         const fetchData = async (query) => {
//             setIsLoading(true);
//             try {
//                 const response = await axios.get(
//                     "https://imdb8.p.rapidapi.com/auto-complete",
//                     {
//                         params: { q: query },
//                         headers: {
//                             "x-rapidapi-host": "imdb8.p.rapidapi.com",
//                             "x-rapidapi-key":
//                                 "da2fb7d27amsh0d76cecc7e23c59p176247jsne2181d0120c8",
//                         },
//                     }
//                 );
//                 if (response.status === 200) {
//                     setData(response.data);
//                     setisLoaded(true);
//                     setIsLoading(false);
//                     localStorage.setItem(
//                         "lastData",
//                         JSON.stringify(response.data)
//                     );
//                     localStorage.setItem("lastQuery", query);
//                 }
//             } catch (err) {
//                 console.log(err);
//                 const cachedData = localStorage.getItem("lastData");
//                 if (cachedData) {
//                     setData(JSON.parse(cachedData));
//                 }
//                 setIsLoading(false);
//             }
//         };
//         if (!isLoaded) {
//             fetchData(query);
//         }
//     }, [isLoaded, query]);

//     const onSearch = (e) => {
//         if (e.key === "Enter") {
//             setisLoaded(false);
//             setQuery(e.target.value);
//         }
//     };

//     const handleClick = (item) => {
//         setModalShow(!modalShow);
//         setModalItem(item);
//     };

//     return (
//         <main>
//             <input
//                 type="text"
//                 placeholder="Search film by name"
//                 onKeyDown={(e) => onSearch(e)}
//             />
//             <h3 className="title">Search : {query}</h3>
//             {!data || isLoading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <div className="card-container">
//                     {data.d.map((item, index) => (
//                         <Card
//                             data={item}
//                             key={index}
//                             onClick={() => handleClick(item)}
//                         />
//                     ))}
//                 </div>
//             )}
//             <Modal
//                 data={modalItem}
//                 isShow={modalShow}
//                 onCancel={() => setModalShow(false)}
//             />
//         </main>
//     );
// }

// src/pages/LandingPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Card from "../components/card";
import Modal from "../components/modal";

export default function LandingPage() {
    const [data, setData] = useState(null);
    const [isLoaded, setisLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("One Piece");

    // Modal
    const [modalShow, setModalShow] = useState(false);
    const [modalItem, setModalItem] = useState(null);

    useEffect(() => {
        const fetchData = async (query) => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    "https://imdb8.p.rapidapi.com/auto-complete",
                    {
                        params: { q: query },
                        headers: {
                            "x-rapidapi-host": "imdb8.p.rapidapi.com",
                            "x-rapidapi-key":
                                "da2fb7d27amsh0d76cecc7e23c59p176247jsne2181d0120c8",
                        },
                    }
                );
                if (response.status === 200) {
                    // Urutkan berdasarkan tahun rilis, terbaru hingga terlama
                    const sortedData = response.data.d.sort((a, b) => {
                        const yearA = a.y || 0; // Gunakan 0 jika tidak ada tahun
                        const yearB = b.y || 0;
                        return yearB - yearA; // Urutkan menurun
                    });
                    setData({ ...response.data, d: sortedData });
                    setisLoaded(true);
                    setIsLoading(false);
                }
            } catch (err) {
                console.log(err);
                setIsLoading(false);
            }
        };
        if (!isLoaded) {
            fetchData(query);
        }
    }, [isLoaded, query]);

    const onSearch = (e) => {
        if (e.key === "Enter") {
            setisLoaded(false);
            setQuery(e.target.value);
        }
    };

    const handleClick = (item) => {
        setModalShow(!modalShow);
        setModalItem(item);
    };

    return (
        <main>
            <input
                type="text"
                placeholder="Search film by name"
                onKeyDown={(e) => onSearch(e)}
            />
            <h3 className="title">Search : {query}</h3>
            {!data || isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="card-container">
                    {data.d.map((item, index) => (
                        <Card
                            data={item}
                            key={index}
                            onClick={() => handleClick(item)}
                        />
                    ))}
                </div>
            )}
            <Modal
                data={modalItem}
                isShow={modalShow}
                onCancel={() => setModalShow(false)}
            />
        </main>
    );
}
