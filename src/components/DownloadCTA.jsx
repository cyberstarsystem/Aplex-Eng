import React from "react";

const DownloadCTA = () => {
  return (
    <section className="py-5 bg-light text-center">
      <div className="container">
        
        <h2 className="fw-bold mb-3">Download Our Questionnaire</h2>
        <p className="text-muted mb-4">
          Get the complete documents instantly.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          
          <a
            href="/UI-UX-Detail.docx"
            className="btn btn-primary btn-lg"
            download
          >
             Drying System
          </a>

          <a
            href="/QUESTIONNAIRE-FOR-EVAPORATION-SYSTEM.docx"
            className="btn btn-success btn-lg"
            download
          >
            Evoporators
          </a>

        </div>

      </div>
    </section>
  );
};

export default DownloadCTA;