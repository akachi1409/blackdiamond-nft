import Book from "../../utils/allImgs/whitepaper.pdf"

const SpreadMap = ({Wwhitepaper , SectionIcon11}) => {

  return (

    <section className="spread-map download">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-xs-12">
            <div className="welcome-meter">
              <img draggable="false" src={Wwhitepaper} className="center-block" alt="" />
            </div>
          </div> 
          <div className="col-lg-6 col-xs-12 mt-s">
            <div className="who-we-contant">
              <div className="dream-dots text-left">
                <img draggable="false" src={SectionIcon11} alt="" />
              </div>
              <h4 className="text-white">Downoad Our Whitepaper</h4>
              <p className="text-white">To Learn More About Why BDSCI1 Is Right For You, Read Our Whitepaper?</p>
              <a className="btn dream-btn mt-30" href={Book}>
                Get Whitepaper
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default SpreadMap
