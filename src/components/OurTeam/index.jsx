import SectionHeading from "../SectionHeading"

const OurTeam = ({data , ClassSpanTitle}) => {

    return (

      <section className="our_team_area section-padding-100-0 clearfix" id="team">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SectionHeading
                title="Our Team"
                text="Awesome Team"
                ClassSpanTitle={ClassSpanTitle}
              />

            </div>
          </div>
          <div className="row">
            {data && data.map((item , key) => (
                <div className="col-12 col-sm-6 col-lg-3" key={key}>
                  <div className="single-team-member" data-aos="fade-up">
                    {/* Image */}
                    <div className="team-member-thumb">
                      <img draggable="false" src={item.img} className="center-block" alt="" />
                    </div>
                    {/* Team Info */}
                    <div className="team-info">
                      <h5 className="w-text">{item.title}</h5>
                      <p className="g-text">{item.text}</p>
                    </div>
                    {/* Social Icon */}
                    <div className="team-social-icon">
                      <a href="#"><i className="fa fa-linkedin" /></a>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    );

}

export default OurTeam