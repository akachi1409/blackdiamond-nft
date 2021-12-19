import {HomeDemo2Feature1 , HomeDemo2SmallCar} from '../../utils/allImgs'

const FuelFeatures = () => {

    return (

      <section className="special fuel-features section-padding-100 clearfix">
        <div className="container has-shadow">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
              <div className="welcome-meter mb-30">
                <img draggable="false" src={HomeDemo2Feature1} alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-6 offset-lg-0">
              <div className="who-we-contant">
                <div className="dream-dots text-left">
                  <span className="gradient-text blue">Crypto Trading</span>
                </div>
                <h4 className="fadeInUp" data-wow-delay="0.3s">If it's crypto you want, Trading Your Favorite Cryptocurrency Just Got Easier. </h4>
                <p className="fadeInUp" data-wow-delay="0.4s">BlackDiamondSCInc1 "BDSCI1" Can Be Found & Traded On Most Of Your Favorite Avalanche Exchanges.</p>
                <div className="services-block-four align-items-center">
                  <div className="inner-box">
                    <div className="icon-img-box">
                      <img draggable="false" src={HomeDemo2SmallCar} alt="" width={140} />
                    </div>
                    <h3><a href="#">great customer experience</a></h3>
                    <div className="text">Lorem ipsum dolor sit amet, adipisicing elit. Laudantium modi assumenda beatae.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

}

export default FuelFeatures;
