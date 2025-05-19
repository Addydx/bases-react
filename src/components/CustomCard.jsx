import PropTypes from "prop-types";

export const CustomCard = ({ title , edad= 45 }) => {
console.log(title);  
//cual es la ventaja de utilizar logica en los componentes es 
//la desventaja de que si no se utiliza el nombre correcto
  return (
    <>
      <div className="card" style={{ width: '300px' }}>
        <img src="your-image-url.jpg" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">Card title {title}  </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card’s content. Edad: {edad}
          </p>
          <a href="#" className="btn btn-primary">Go somewhere</a>

        </div>
      </div>
    </>
  );

};