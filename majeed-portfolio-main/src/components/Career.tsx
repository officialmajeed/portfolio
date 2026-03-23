import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Scientist Intern</h4>
                <h5>Rubixe</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked with real-world datasets, performed exploratory data analysis, and developed machine learning models to support operational decision-making and improve efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
