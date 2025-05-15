export const CustomCard = ({ title = "Título de la tarjeta" }) => {
    return (
        <>
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://via.placeholder.com/150" alt="Imagen" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Some quick example</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </>
        
    );
}