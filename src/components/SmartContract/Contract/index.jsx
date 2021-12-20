const Contract = ({ img, title }) => {

  return (
    <div className="services-block-four v3">
      <div className="inner-box">
        <div className="icon-img-box">
          <img draggable="false" src={img} alt="" />
        </div>
        <h3><a href="#">{title}</a></h3>
        <div className="text">BlackDiamondSCInc1 Smart Contract.</div>
      </div>
    </div>
  );
}

export default Contract;
