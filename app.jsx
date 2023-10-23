import ProfileCard from "./components/card";
import Parrey from "./components/profile1";

function App(){
    function fillCard(man){
    return(<ProfileCard
        name={man.name}
        lastName={man.lastName}
        imageSrc={man.pic}
        />)
    }

    return(
        <div>
            {Parrey.map((man)=>
                fillCard(man)
            )}            
        </div>
    )
}
export default App
