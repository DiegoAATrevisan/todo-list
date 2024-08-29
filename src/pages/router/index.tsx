import { useState } from "react";
import Todo from "../todo";
import Home from "../home";
import Sobre from "../sobre";

enum routes {
    home = "home",
    todo = "todo",
    sobre = "sobre"

}


const Router = () => {
    const [getRoute, setRoute] = useState<routes>(routes.home)

    const renderPage = (pageRoute: routes) => {
        switch (pageRoute) {
            case routes.home:
                return <Home />
            case routes.todo:
                return <div><h1><Todo></Todo></h1></div>
            case routes.sobre:
                return <Sobre></Sobre>
            default:
                return <Home></Home>
        }
    }

    const renderHeader = () => (
        <div>
            <button onClick={() => setRoute(routes.home)}>Início</button>
            <button onClick={() => setRoute(routes.todo)}>Tasks</button>
            <button onClick={() => setRoute(routes.sobre)}>Sobre</button>
        </div>
    )

    return (
        <div>
            {renderHeader()}
            {renderPage(getRoute)}
        </div>
    )

}

export default Router;