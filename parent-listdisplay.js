import React, {Component} from "react";
import ChildListDisplay from "./childlistdisplay";

class ParentListDisplay extends Component{
    render(){
        var StudentsObj =[
             {
                "id":1,
                "firstname":"John",
                "lastname":"Pathapati",
                "email":"john@gmail.com"
             },  
             {
                "id":2,
                "firstname":"Venkat",
                "lastname":"P",
                "email":"venkat@gmail.com"
             }, 
             {
                "id":3,
                "firstname":"Preesha",
                "lastname":"Joy",
                "email":"joy@gmail.com"
             } 
        ]
        var map_students = StudentsObj.map((studObj)=>{
          return  <h1>{studObj.firstname}</h1>
        });
        return(
            <div>
                <h1>Please find the below List Display</h1>
                <ChildListDisplay mystudents = {map_students}></ChildListDisplay>
            </div>
            
        )
    }
}

export default ParentListDisplay;