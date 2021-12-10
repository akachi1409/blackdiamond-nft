const Service = ({ img, title }) => {

  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="service_single_content text-center mb-100" data-aos="fade-up">
        <div className="service_icon">
          <img draggable="false" src={img} alt="" />
        </div>
        <h6>{title}</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.</p>
      </div>
    </div>
  );
}

export default Service;