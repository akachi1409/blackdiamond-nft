const PricingItem = ({ Round, dollar, bonus }) => {

    return (
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <div className="pricing-item ">
          <h4>Round {Round}</h4> 
          <h3><strong className="xzc-1-month">{dollar}</strong></h3> 
          <span>1 ETH = 500 Token</span>
          <div className="pricing">15,000,000 Token</div>
          <label><strong>{bonus} bonus</strong></label>
        </div>
      </div>
    );
}

export default PricingItem;