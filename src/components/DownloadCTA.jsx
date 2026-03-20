import React from "react";

const DownloadCTA = () => {
    return (
        <section className="py-5 bg-light text-center">
            <div className="container">

                <h2 className="fw-bold mb-3">Downloads</h2>
                <p className="text-muted mb-4">
                    Get the complete documents instantly.
                </p>

                <div className="d-flex justify-content-center gap-3 flex-wrap">

                    <a
                        href="/QUESTIONNAIRE FOR DRYING SYSTEM.doc"
                        className="btn d-flex align-items-center gap-2"
                        download
                    >
                        <i className="bi bi-file-earmark-pdf-fill text-danger"></i>
                        QUESTIONNAIRE FOR DRYING SYSTEM
                    </a>

                    <a
                        href="/QUESTIONNAIRE FOR EVAPORATION SYSTEM.doc"
                        className="btn  d-flex align-items-center gap-2"
                        download
                    >
                        <i className="bi bi-file-earmark-pdf-fill text-danger"></i>
                        QUESTIONNAIRE FOR EVAPORATORS
                    </a>

                </div>

            </div>
        </section>
    );
};

export default DownloadCTA;