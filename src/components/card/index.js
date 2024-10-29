import React from "react";
import "./index.css";

const placeholderImage = "https://raw.githubusercontent.com/FemasAriandaRizki/PrakPPB_modul6_tugas/c9d7d0d7279c256cdfbcc0d342696144268d68a3/image%20-%20placeholder.jpg";

export default function index({ data, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            {data ? (
                <>
                    <figure>
                        <img 
                            src={data.i && data.i.imageUrl ? data.i.imageUrl : placeholderImage} 
                            alt={data.l || "No Title"} 
                        />
                    </figure>
                    <div className="card-info">
                        <h3>{data.l || "No Title Available"}</h3>
                        <p>{data.q || "No Description Available"}</p>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
