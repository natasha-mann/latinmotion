import "./FilterStrip.css";

const FilterStrip = (props) => {
  return (
    <div className="filter-strip-container">
      <div className="filter-strip-elements-container gutter">
        <div className="dropdown">
          <button
            className="btn dropdown-toggle filter-btn"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            SHOW FILTERS
          </button>
          <ul
            className="dropdown-menu px-3"
            aria-labelledby="dropdownMenuButton1"
          >
            <h6 className="my-2">Event Type</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="salsa-party"
              />
              <label className="form-check-label">Salsa</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="bachata-party"
              />
              <label className="form-check-label">Bachata</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="kizomba-party"
              />
              <label className="form-check-label">Kizomba</label>
            </div>
            <h6 className="my-2">Venue</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="bearwood-venue"
              />
              <label className="form-check-label">Bearwood</label>
            </div>
            <div className="submit-btn-div">
              <button
                className="btn apply-filter-btn"
                type="button"
                id="apply-filter-btn"
              >
                FILTER
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterStrip;
