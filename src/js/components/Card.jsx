const Card = (props) => {
  return (
    <div className="w-100">
      <div className="container">
        <div className="row">
          <div className="card shadow-sm w-100 col-12 col-md-12 col-xl-auto mx-auto p-0">
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.text}</p>
            </div>
            <div className="btn-card">
              <a href="#" className="btn btn-primary">
                Find out more!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
