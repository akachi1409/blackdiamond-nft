import {
  HomeDemo1Computer
} from '../../utils/allImgs'

const AboutOther = ({ClassTitle="gradient-text blue"}) => {

  return (

    <section className="about-us-area section-padding-0-100 clearfix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 offset-lg-0">
            <div className="who-we-contant">
              <div className="dream-dots text-left fadeInUp" data-aos="fade-up" data-aos-delay="200">
                <span className={ClassTitle}>Decentralized Trading Platform</span>
              </div>
              <h4 className="fadeInUp" data-aos="fade-up" data-aos-delay="200">Connect blockchain to the real world and start crypto tading.</h4>
              <p className="fadeInUp" data-aos="fade-up" data-aos-delay="200">BDSCI1 Read and Write Functions Located Write Here On The Platform, No Need To Go Anywhere Else.</p>
              <p className="fadeInUp" data-aos="fade-up" data-aos-delay="300">BlackDiamondSCInc1 can be traded on these exchange, Trader Joe, Pangolin, Canary, Kyber Swap & Yeti Swap .</p>
              <a className="btn more-btn mt-30" href="#">Read More</a>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-0 col-md-12 mt-30 no-padding-left">
            <div className="welcome-meter floating-anim fadeInUp">
              <img draggable="false" src={HomeDemo1Computer} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutOther;
