const Block = ({img , title}) => {

    return (

      <div className="services-block-four v2">
        <div className="inner-box">
          <div className="icon-img-box">
            <img draggable="false" src={img} alt="" />
          </div>
          <h3><a href="#">{title}</a></h3>
          <div className="text">Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing elit.</div>
        </div>
      </div>
    );

}

export default Block