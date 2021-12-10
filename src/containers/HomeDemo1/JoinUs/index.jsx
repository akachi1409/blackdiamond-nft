import {HomeDemo1JoinBottom} from "../../../utils/allImgs"

import SectionHeading from "../../../components/SectionHeading"

import Join from "./Join"


const OurJoinUs = ({OurJoinUsFirst , OurJoinUsSecond}) => {

  return (

    <section className="join-us section-padding-0-100 clearfix" id="services">
      <div className="container">
        <SectionHeading
          title="Our Services"
          text="What we speciaized in"
        />
        <div className="row dark-row pt-60">
          {OurJoinUsFirst && OurJoinUsFirst.map((item , key) => (
            <Join
              key={key}
              ClassTop={item.ClassTop}
              ClassDown={item.ClassDown}
              ClassSteps={item.ClassSteps}
              Steps={item.Steps}
              title={item.title}
            />
          ))}
          <div className="col-lg-4 hidden-md hidden-sm hidden-xs text-center">
            <img draggable="false" src={HomeDemo1JoinBottom} className="arrow-img rotated" alt="" />
          </div>
          <div className="col-lg-4 text-center hidden-md hidden-sm hidden-xs">
            <div className="dream-dots justify-content-center fadeInUp" data-aos="fade-up" data-aos-delay="200">
              <span>Join us</span>
            </div>
            <h2 className="fadeInUp" data-aos="fade-up" data-aos-delay="300">Contribution Cycle</h2>
          </div>
          <div className="col-lg-4 hidden-md hidden-sm hidden-xs text-center">
            <img draggable="false" src={HomeDemo1JoinBottom} className="arrow-img" alt="" />
          </div>
          {OurJoinUsSecond && OurJoinUsSecond.map((item , key) => (
            <Join
              key={key}
              ClassTop={item.ClassTop}
              ClassDown={item.ClassDown}
              ClassSteps={item.ClassSteps}
              Steps={item.Steps}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurJoinUs;