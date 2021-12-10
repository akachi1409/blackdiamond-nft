import SectionHeading from "../../../components/SectionHeading"

const HowItWorks = ({data , ClassSpanTitle}) => {

    return (

      <section className="darky how section-padding-0-0" style={{paddingBottom: '70px'}}>
        <div className="container">
          <SectionHeading
            title="Get Started"
            text="How it works"
            ClassSpanTitle={ClassSpanTitle}
          />

          <div className="row">
            {data && data.map((item , key) => (
              <div className="col-12 col-md-6 col-lg-4" key={key}>
                <div className="service_single_content box-shadow text-center mb-100">
                  <div className="service_icon">
                    <img draggable="false" src={item.img1} className="colored-icon" alt="" />
                    <img draggable="false" src={item.img2} className="white-icon" alt="" />
                    <span className="step-num">{item.steps}</span>
                  </div>
                  <h6>{item.title}</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, max imus ut accumsan ut, posuere sit.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default HowItWorks;