const quickFilters = [
  "Women Entrepreneurs",
  "Students",
  "Farmers",
  "Senior Citizens",
  "Startups",
  "Housing",
];

const schemes = [
  {
    title: "PM-KISAN Support",
    tag: "Agriculture",
    description:
      "Direct income support for eligible farmer families with seasonal installment payouts.",
    benefit: "Up to Rs 6,000/year",
    timeline: "Verification in 2-4 weeks",
  },
  {
    title: "NSP Scholarship",
    tag: "Education",
    description:
      "Centralized scholarship opportunities for school and college students across income bands.",
    benefit: "Tuition + maintenance support",
    timeline: "Processing in 3-6 weeks",
  },
  {
    title: "PMAY Urban",
    tag: "Housing",
    description:
      "Housing assistance and interest subsidy for economically weaker sections in urban areas.",
    benefit: "Interest subsidy up to 6.5%",
    timeline: "Approval timeline varies by state",
  },
];

function SchemeFinder() {
  return (
    <div className="d-flex flex-column gap-4">
      <div>
        <h3 className="h4 mb-1" style={{ color: "#1d3557" }}>
          Scheme Finder
        </h3>
        <p className="mb-0 text-secondary">
          Discover the most relevant government schemes based on your profile.
        </p>
      </div>

      <div
        className="rounded-4 p-3 p-md-4"
        style={{ backgroundColor: "#f6f9ff", border: "1px solid #dbe6ff" }}
      >
        <div className="row g-3 align-items-end">
          <div className="col-12 col-md-5">
            <label className="form-label fw-semibold mb-1">Search scheme</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. scholarship, pension, startup grant"
            />
          </div>
          <div className="col-12 col-md-3">
            <label className="form-label fw-semibold mb-1">State</label>
            <select className="form-select" defaultValue="">
              <option value="" disabled>
                Select state
              </option>
              <option>Andhra Pradesh</option>
              <option>Arunachal Pradesh</option>
              <option>Assam</option>
              <option>Bihar</option>
              <option>Chhattisgarh</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Himachal Pradesh</option>
              <option>Jharkhand</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Manipur</option>
              <option>Meghalaya</option>
              <option>Mizoram</option>
              <option>Nagaland</option>
              <option>Odisha</option>
              <option>Punjab</option>
              <option>Rajasthan</option>
              <option>Sikkim</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Tripura</option>
              <option>Uttar Pradesh</option>
              <option>Uttarakhand</option>
              <option>West Bengal</option>
            </select>
          </div>
          <div className="col-12 col-md-2">
            <label className="form-label fw-semibold mb-1">Category</label>
            <select className="form-select" defaultValue="">
              <option value="" disabled>
                Category
              </option>
              <option>Education</option>
              <option>Health</option>
              <option>Agriculture</option>
              <option>Housing</option>
            </select>
          </div>
          <div className="col-12 col-md-2 d-grid">
            <button type="button" className="btn btn-primary fw-semibold">
              Find
            </button>
          </div>
        </div>

        <div className="d-flex flex-wrap gap-2 mt-3">
          {quickFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              className="btn btn-sm"
              style={{
                border: "1px solid #c9d9ff",
                backgroundColor: "#ffffff",
                color: "#1d3557",
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="row g-3">
        <div className="col-12 col-lg-8 d-flex flex-column gap-3">
          {schemes.map((scheme) => (
            <div
              key={scheme.title}
              className="rounded-4 p-3 p-md-4 bg-white"
              style={{ border: "1px solid #e1e8f6" }}
            >
              <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-2">
                <div>
                  <h4 className="h5 mb-1">{scheme.title}</h4>
                  <span className="badge text-bg-primary-subtle text-primary-emphasis">
                    {scheme.tag}
                  </span>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                >
                  View details
                </button>
              </div>
              <p className="text-secondary mb-3">{scheme.description}</p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge text-bg-light border">
                  Benefit: {scheme.benefit}
                </span>
                <span className="badge text-bg-light border">
                  Timeline: {scheme.timeline}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="col-12 col-lg-4">
          <div
            className="rounded-4 p-3 p-md-4 h-100"
            style={{ backgroundColor: "#fff", border: "1px solid #e1e8f6" }}
          >
            <h5 className="mb-3">Eligibility Snapshot</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item px-0">
                Annual family income under threshold
              </li>
              <li className="list-group-item px-0">
                Valid Aadhaar and bank account linkage
              </li>
              <li className="list-group-item px-0">State residence proof</li>
              <li className="list-group-item px-0">
                Category-specific documents
              </li>
            </ul>

            <div
              className="rounded-3 p-3 mt-3"
              style={{
                backgroundColor: "#f6f9ff",
                border: "1px dashed #b7caff",
              }}
            >
              <p className="fw-semibold mb-1">Pro tip</p>
              <p className="mb-0 text-secondary">
                Keep scanned PDFs below 2MB to avoid application upload errors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchemeFinder;
