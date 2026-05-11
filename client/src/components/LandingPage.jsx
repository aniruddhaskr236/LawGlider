import ChatBot from "./ChatBot";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="position-relative rounded-4  p-4 p-md-5"
        style={{
          width: "min(860px, 100%)",
          border: "1px",
          background:
            "radial-gradient(180px 180px at 12% 16%, rgba(213, 164, 69, 0.18), transparent 70%), radial-gradient(280px 280px at 86% 24%, rgba(79, 134, 207, 0.2), transparent 75%), linear-gradient(140deg, #edf4ff 0%, #f8fbff 46%, #ffffff 100%)",
          backdropFilter: "blur(8px)",
          paddingBottom: "7rem",
        }}
      >
        <div className="text-center mb-4">
          <h1
            className="fw-bold mb-2"
            style={{
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              color: "#1d3557",
              letterSpacing: "0.02em",
            }}
          >
            SimplyLaw
          </h1>
          <p className="lead mb-0" style={{ color: "#2f4a6e" }}>
            Your personalized multilingual AI assistant
          </p>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          <button
            type="button"
            className="btn btn-primary px-4 py-2 fw-semibold"
            style={{ minWidth: "220px" }}
            onClick={() => navigate("/dashboard")}
          >
            Doc Simplifier
          </button>
          <button
            type="button"
            className="btn btn-primary px-4 py-2 fw-semibold"
            style={{ minWidth: "220px" }}
            onClick={() => navigate("/scheme")}
          >
            Scheme Finder
          </button>
        </div>
      </div>
      <ChatBot />
    </>
  );
}

export default LandingPage;
