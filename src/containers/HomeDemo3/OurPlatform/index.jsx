import {
    HomeDemo3Platform,
    HomeDemo3Rings,
} from '../../../utils/allImgs'

import SectionHeading from "../../../components/SectionHeading"

const OurPlatform = ({data , ClassSpanTitle}) => {

    return (

      <section className="features section-padding-100">
        <div className="container">
          <SectionHeading
            title="Try our Patform"
            text="Our Trading Platform"
            ClassSpanTitle={ClassSpanTitle}
          />
          <div className="row align-items-center">
            <div className="service-img-wrapper col-lg-7 col-md-12 col-sm-12 mt-s">
              <div className="image-box">
                <img draggable="false" src={HomeDemo3Platform} className="center-block img-responsive phone-img" alt="" />
                <img draggable="false" src={HomeDemo3Rings} className="center-block img-responsive rings " alt="" />
              </div>
            </div> 
            <div className="service-img-wrapper how col-lg-5 col-md-9 col-sm-12 mt-s no-padding-right">
              <div className="features-list v2">
                <div className="who-we-contant">
                  <h4 className="w-text ">Powerful platform.</h4>
                  <p className="w-text ">We are dedicated to providing professional service with the highest degree of honesty and integrity.</p>
                </div>
                <ul className="list-marked">
                  {data && data.map((item , key) => (
                      <li key={key} className="text-white"><i className="fa fa-check" />{item.NameMarked}</li>
                  ))}
                </ul>
                <a className="btn more-btn mt-30 " href="#">Whitepaper</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default OurPlatform;