const SecAbout = ({imgDwon=false , title , text , img}) => {

  return (
    <>
      {imgDwon ? (
          <section className="about-us-area section-padding-100 clearfix">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 offset-lg-0">
                  <div className="who-we-contant mt-s">
                    <div className="dream-dots text-left" data-aos="fade-up" data-aos-delay="300">
                      <span className="gradient-text blue">{title}</span>
                    </div>
                    <h4 data-aos="fade-up" data-aos-delay="300">{text}</h4>
                    <p data-aos="fade-up" data-aos-delay="300">BlackDiamondSCInc1 ICO Decentralized Wallet And Trading Platform .</p>
                    <p data-aos="fade-up" data-aos-delay="400">BDSCI1 Built On Avalanche Blockchain.</p>
                    <a className="btn more-btn mt-30" href="#">Read More</a>
                  </div>
                </div>
                <div className="col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
                  <div className="welcome-meter" data-aos="fade-up" data-aos-delay="200">
                    <img draggable="false" src={img} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (

          <section className="about-us-area section-padding-100 clearfix">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
                  <div className="welcome-meter" data-aos="fade-up" data-aos-delay="200">
                    <img draggable="false" src={img} alt="" />
                  </div>
                </div>
                <div className="col-12 col-lg-6 offset-lg-0">
                  <div className="who-we-contant mt-s">
                    <div className="dream-dots text-left" data-aos="fade-up" data-aos-delay="300">
                      <span className="gradient-text ">Decentralized Trading Platform</span>
                    </div>
                    <h4 data-aos="fade-up" data-aos-delay="300">Connect blockchain to the real world and start crypto tading.</h4>
                    <p data-aos="fade-up" data-aos-delay="300">BlackDiamondSCInc1 ICO Decentralized Wallet And Trading Platform.</p>
                    <p data-aos="fade-up" data-aos-delay="400">We Are The Stones That The Builder Refused, We Are The Head Cornerstones.</p>
                    <a className="btn more-btn mt-30" href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

        )}
    </>
  );
}

export default SecAbout;
