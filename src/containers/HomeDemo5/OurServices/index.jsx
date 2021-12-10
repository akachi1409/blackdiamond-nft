import SectionHeading from "../../../components/SectionHeading"

import Service from "./Service"


const OurServices = ({data}) => {

    return (

      <section className="our_services_area section-padding-100-0 clearfix">
        <div className="container">
          <SectionHeading
            title="Why choose us"
            text="Our Main Features"
          />

          <div className="row">
            {data && data.map((item , key) => (
              <Service
                key={key}
                img={item.img}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </section>
    );

}

export default OurServices;