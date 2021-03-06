const AboutUs = ({firstClass , data , img}) => {
  return(
      <section className={firstClass}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 offset-lg-0 col-xs-12">
              {data && data.map((item , key) => (
                <div className={`services-block-four transparent ${item.checkLast && "mb-0"}`}>
                  <div className="inner-box">
                    <div className="icon-icon bg4">
                      <img draggable="false" src={item.img} alt="" />
                    </div>
                    <h3><a className="normal" href="#">{item.title}</a></h3>
                    <p className="text">BlackDiamondSCInc1 Token, Wallet & Trading Platform looks to provide a comprehensive DeFi product for both advance-users and those new to the world of decentralized trading, with a web3 feature-packed non-custodial wallet; multi-chain native token swapping, synthetic asset trading and the ability to invest in multi-chain savings accounts are just some of the functionalities on offer, with a non-custodial design meaning that users are always in control of their funds.. True meaning of decentralization!.</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-12 col-lg-6">
              <div className="service-img-wrapper">
                <div className="image-box">
                  <img draggable="false" src={img} className="center-block img-responsive phone-img" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutUs
