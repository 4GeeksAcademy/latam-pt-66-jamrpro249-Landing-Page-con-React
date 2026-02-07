

//create your first component
const Jumboton = () => {
  return (
    <div className="container">
      <div className="row Card-Home">
        <div className="col-12">
          <h1>A Warm Welcome!</h1>
        </div>
        <div className="col-12 mt-4">
          <p className="lead">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
            recusandae minus sunt distinctio harum explicabo porro odit
            architecto officiis dolor excepturi eaque iste laborum laboriosam
            obcaecati asperiores id non! Sint.
          </p>
        </div>
        <div className="col-12 mt-4">
          <button type="button" className="btn btn-primary btn-lg">
            {" "}
            Call to action!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jumboton;
