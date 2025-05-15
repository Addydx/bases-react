import { CustomCard } from "./components/CustomCard";

export const FirstApp = () => {
    return (
        <>
        <div className="container my-4">
            <div className="row">
                <div className="col-auto">
                    <CustomCard title="Imagen 1" />
                </div>
                <div className="col-auto">
                    <CustomCard title="Imagen 2" />
                </div>
            </div>
        </div>
        </>
    );
}