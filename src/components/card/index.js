// src\components\card\index.js
import React from "react";
import "./index.css";

const placeholderImage =
    "https://github.com/FemasAriandaRizki/PrakPPB_modul6_tugas/blob/eabf8cf55d8880c8df732c786f133b701a5ce6f8/src/images/image%20-%20placeholder.jpg"; //

export default function index({ data, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            {data ? (
                <>
                    <figure>
                        <img
                            src={
                                data.i && data.i.imageUrl
                                    ? data.i.imageUrl
                                    : placeholderImage
                            }
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
