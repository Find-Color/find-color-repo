import MissingPersonCard from "./missingPersonCard"
import dummyData from "../dummyData"
console.log(dummyData)

export default function MissingPeopleList(){

    return(
        <>
        <div className="ui centered cards missing-people-container">
            {dummyData.map((person, i)=>{
                return <MissingPersonCard key={i} {...person}/>
            })}
        </div>
        
        </>
    )
}