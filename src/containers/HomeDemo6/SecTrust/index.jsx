import SectionHeading from "../../../components/SectionHeading"
import TrustItem from "./TrustItem"

const SecTrust = ({data}) => {

    return (

      <div className="trust-section section-padding-100-70">
        <SectionHeading
          title="ICO Rating"
          text="We are trusted"
        />
        <div className="container">
          <div className="row">
            {data && data.map((item , key) => (
              <TrustItem
                key={key}
                img={item.img}
                CheckIcon={item.CheckIcon}
                value={item.value}
              />
            ))}
          </div>
        </div>
      </div>
    );
}

export default SecTrust;