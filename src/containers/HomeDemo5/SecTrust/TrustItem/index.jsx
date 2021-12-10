const TrustItem = ({
  img,
  CheckIcon=false,
  value
}) => {

    return (
      <div className="col-12 col-sm-6 col-md-3 col-lg-2">
        <div className="trust-item text-center fadeInUp" data-aos="fade-up">
          <div className="ico-platform-logo">
            <img draggable="false" src={img} alt="" />
          </div>
          <div className="check">
            {value && <div className="value">{value}</div>}
            {CheckIcon && <div className="check-icon" />}
          </div>
        </div>
      </div>
    );
}

export default TrustItem;