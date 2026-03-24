import React from "react";

const DownloadCTA = () => {
    return (
        <section className="py-5 ">
            <div className="container">

                <div className="download-card text-center p-5 mx-auto">
                    
                    <h2 className="fw-bold mb-2">Downloads</h2>
                    <p className=" text-white mb-4">
                        Get the complete documents instantly.
                    </p>

                    <div className="d-flex justify-content-center gap-3 flex-wrap">

                        <a
                            href="/QUESTIONNAIRE FOR DRYING SYSTEM.doc"
                            className="download-btn d-flex align-items-center gap-2"
                            download
                        >
                            <i className="bi bi-file-earmark-text-fill text-danger"></i>
                            <span>Drying System Questionnaire</span>
                        </a>

                        <a
                            href="/QUESTIONNAIRE FOR EVAPORATION SYSTEM.doc"
                            className="download-btn d-flex align-items-center gap-2"
                            download
                        >
                            <i className="bi bi-file-earmark-text-fill text-danger"></i>
                            <span>Evaporation System Questionnaire</span>
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default DownloadCTA;