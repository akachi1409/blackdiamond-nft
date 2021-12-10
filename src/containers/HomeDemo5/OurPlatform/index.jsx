import {
  HomeDemo1Platform,
  HomeDemo1Rings,
} from "../../../utils/allImgs"

import SectionHeading from "../../../components/SectionHeading"

const OurPlatform = ({data}) => {

    return (

      <section className="features section-padding-0-100 ">
        <div className="container">

          <SectionHeading
            title="Try our Platform"
            text="Our Trading Platform"
          />

          <div className="row align-items-center">
            <div className="service-img-wrapper col-lg-5 col-md-12 col-sm-12 no-padding-right">
              <div className="features-list">
                <div className="who-we-contant">
                  <h4 className="w-text" data-aos="fade-up" data-aos-delay="200">Powerful platform.</h4>
                  <p className="w-text" data-aos="fade-up" data-aos-delay="300">We are dedicated to providing professional service with the highest degree of honesty and integrity, and strive to add value to our tax and consulting services.</p>
                </div>
                <ul className="list-marked">
                  {data && data.map((item , key) => (
                      <li key={key} className="text-white"><i className="fa fa-check" />{item.icoName}</li>
                  ))}
                </ul>
                <a className="btn more-btn mt-30" href="#">Read More</a>
              </div>
            </div>
            <div className="service-img-wrapper col-lg-7 col-md-12 col-sm-12 mt-s">
              <div className="image-box">
                <img draggable="false" src={HomeDemo1Platform} className="center-block img-responsive phone-img" alt="" />
                <img draggable="false" src={HomeDemo1Rings} className="center-block img-responsive rings " alt="" />
              </div>
            </div> 
          </div>
        </div>
      </section>
    );

}

export default OurPlatform;