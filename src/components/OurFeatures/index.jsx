import SectionHeading from '../SectionHeading'

const OurFeatures = ({data , ClassSec , IdSec="" , ClassBox , ClassHead=""}) => {
  return(
      <section className={ClassSec} id={IdSec}>
        <div className="container">
          <SectionHeading title='OUR FEATURES' text=' Why Choose Us' />
          <div className="row">
            {data && data.map((item , key) => (
              <div className="col-12 col-md-6 col-lg-4" key={key}>
                <div className={ClassBox} data-wow-delay="0.2s">
                  <div className="service_icon">
                    <img draggable="false" src={item.img} alt="" />
                  </div>
                  <h6 className={ClassHead}>{item.title}</h6>
                  <p>Lorem ipsum dolor sit amet, adipiscing elit. Nulla neque quam, maxi ut ac cu msan ut, posuere sit Lorem ipsum qu.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default OurFeatures