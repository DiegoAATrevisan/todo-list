import { useState } from "react";
import Todo from "../todo";

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
                return <div><h1>Home</h1></div>
            case routes.todo:
                return <div><h1><Todo></Todo></h1></div>
            case routes.sobre:
                return <div><h1>Sobre</h1></div>
            default:
                return <div><h1>Home</h1></div>
        }
    }

    const renderHeader = () => {
        <div>
            <button onClick={() => setRoute(routes.home)}>Início</button>
            <button onClick={() => setRoute(routes.todo)}>Tasks</button>
            <button onClick={() => setRoute(routes.sobre)}>Sobre</button>
        </div>
    }

    return (
        <div>
            {renderPage(getRoute)}
        </div>
    )

}

export default Router;