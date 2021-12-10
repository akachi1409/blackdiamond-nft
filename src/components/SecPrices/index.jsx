import SectionHeading from "../SectionHeading"
import PricingItem from "./PricingItem"

const SecPrices = ({ClassSec="features section-padding-0-70" , data , ClassSpanTitle}) => {

    return (

      <section className={ClassSec}>
        <div className="container">

          <SectionHeading
            title="Token Prices"
            text="Our Token Prices"
            ClassSpanTitle={ClassSpanTitle}
          />          
          <div className="row align-items-center">
            {data && data.map((item , key) => (
              <PricingItem
                key={key}
                Round={item.Round}
                dollar={item.dollar}
                bonus={item.bonus}
              />
            ))}
          </div>
        </div>
      </section>
    );
}

export default SecPrices;