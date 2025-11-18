const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-graphic">
        <img src="/assets/cta-graphic.png" alt="" />
      </div>
      <div className="cta-container">
        <div className="cta-title-wrapper">
          <h2 className="cta-title">We can't wait to see<br />you at UBCON2026</h2>
        </div>
        <div className="cta-date-wrapper">
          <p className="cta-date-line1">April 18-22, 2026</p>
          <p className="cta-date-line2">Rosen Shingle Creek  |  Orlando, Florida</p>
        </div>
        <div className="cta-button-wrapper">
          <button className="btn btn-primary">Register for UBCON</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
