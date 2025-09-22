import ModuleTitle from "./components/ModuleTitle"
import GreetingTitle from "./components/GreetingTitle"
import Clicky from "./components/Clicky"

const App = () => {
    return (
        <>
            <h1>Hello app</h1>
            <ModuleTitle title = "Front End Dev" />
            <ModuleTitle title = "AI" />
            <ModuleTitle title = "Advanced Javascript" />

            <GreetingTitle title = "Johnny" />
            <GreetingTitle title = "Mark" />
            <GreetingTitle title = "Sam" />


            <Clicky/>
        </>
    );
};

export default App;