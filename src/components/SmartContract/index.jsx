import Contract from "./Contract"

const SmartContract = ({data}) => {

    return (

      <section className="smart-contract section-padding-0-70 mt-5 clearfix">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-6 offset-lg-0">
              <div className="who-we-contant">
                <div className="dream-dots text-left fadeInUp" data-wow-delay="0.2s">
                  <span className="gradient-text blue">Smart Contract</span>
                </div>
                <h4 className="fadeInUp" data-wow-delay="0.3s">Comprehensive smart contracts.</h4>
                <p className="fadeInUp" data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>
                <p className="fadeInUp" data-wow-delay="0.5s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsa ut quasi adipisci voluptates, voluptatibus aliquid alias beatae reprehenderit incidunt iusto laboriosam.</p>
                <a className="btn more-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="#">Read More</a>
              </div>
            </div>
            <div className="col-12 col-lg-6 offset-lg-0 mt-s">
              {data && data.map((item , key) => (
                <Contract
                  key={key}
                  img={item.img}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );

}

export default SmartContract;