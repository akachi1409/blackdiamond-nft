import SectionHeading from "../SectionHeading"

const Roadmap = ({data , ClassSpanTitle}) => {

    return (

      <section className="roadmap section-padding-0-0" id="roadmap">
        <SectionHeading
          title="ICO Roadmap"
          text="Our ICO Roadmap"
          ClassSpanTitle={ClassSpanTitle}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="main-timeline">
                {data && data.map((item , key) => (
                  <div className="timeline" key={key}>
                    <div className="icon" />
                    <div className="date-content">
                      <div className="date-outer"> <span className="date"> <span className="month">{item.month}</span> <span className="year">{item.year}</span> </span>
                      </div>
                    </div>
                    <div className="timeline-content">
                      <h5 className="title">{item.title}</h5>
                      <p className="description text-light-gray"> This Roadmap Represents The Journey And MilestonesWe Have Reached And Intend To Reach.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );

}

export default Roadmap
