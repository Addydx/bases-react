import { CustomCard } from "./components/CustomCard"
import { FirstHook } from "./components/FirstHook"


export const FirstApp = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <h3>Hook</h3>
                    <FirstHook initialValue={0}/>
                </div>
            </div>
        </>
    )

}