import React from "react";
import "./index.css";

export default function Modal({ isShow, data, onCancel }) {
    const placeholderImage =
        "https://raw.githubusercontent.com/FemasAriandaRizki/PrakPPB_modul6_tugas/c9d7d0d7279c256cdfbcc0d342696144268d68a3/image%20-%20placeholder.jpg";

    return (
        <div className={!isShow ? "hidden" : ""} datacy="modal-delete">
            <div className="modal-bg" onClick={onCancel}></div>
            <div className="modal">
                {data && (
                    <img
                        src={
                            data.i && data.i.imageUrl
                                ? data.i.imageUrl
                                : placeholderImage
                        }
                        alt={data.l || "No Title"}
                    />
                )}
            </div>
        </div>
    );
}
