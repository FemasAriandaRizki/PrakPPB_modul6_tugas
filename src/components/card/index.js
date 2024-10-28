// src\components\card\index.js
import React from "react";
import "./index.css";

export default function index({ data, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            {data ? (
                <>
                    <figure>
                        {data.i && data.i.imageUrl ? (
                            <img
                                src={data.i.imageUrl}
                                alt={data.l || "No Title"}
                            />
                        ) : (
                            <p>No Image Available</p>
                        )}
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
