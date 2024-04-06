import { useEffect, useState } from "react";
export default function Team({stateTeammembersWebApp, dispatch}){
  // //console.log(stateTeammembersWebApp)
  
    // let data=stateTeammembersWebApp.employees.filter((employee)=>stateTeammembersWebApp.teamIds.includes( employee.id));
    // //console.log(data);
  let [stateTeamMembers, updateStateTeamMembers]  = useState([]);
  
  useEffect(()=>{
    updateStateTeamMembers(stateTeammembersWebApp.employees.filter((employee)=>stateTeammembersWebApp.teamIds.includes( employee.id)));

  }, [stateTeammembersWebApp]);
  function removePlayerFromTeam(event){
    let employeeID = event.target.getAttribute('data-employee-id');
    dispatch({type: 'removePlayerFromTeam', payload: employeeID});
  }
  function sortByAge(){
    //console.log('ok sorting')
    let sortedData = [...stateTeamMembers].sort((emp1, emp2)=>emp1.age-emp2.age);
    updateStateTeamMembers(sortedData);

  }
  let aveargeAge=0;
  return (
    <section className="wrapperTeam border-[.8rem] border-blue-900 p-[2rem] rounded-md flex flex-col  items-center min-w-[20rem]  pb-[1rem] justify-between" >
      <div className="flex flex-col items-center gap-[1rem] pb-[2rem]">
        <h2 className="font-semibold text-[2rem]">Team</h2> 
        <div className=" self-end">
        {
          stateTeammembersWebApp.teamIds.length >0 && 
          <button className="select-none wrapperGeneratePassword  flex gap-[.5rem] items-center justify-center outline outline-2 outline-amber-50  hover:bg-yellow-400 transition cursor-pointer px-[1rem] py-[.3rem] rounded-md  text-slate-900    bg-yellow-300 hover:text-white text-[.8rem] font-medium" onClick={sortByAge}>
            <i className="fa-solid fa-bars-sort text-[1rem] "></i>
            <span>Sort By Age</span>
            
            </button>      
        }
      </div>               
        <div className="flex flex-col gap-[1rem]  max-h-[30rem] overflow-y-scroll scrollbar-blue pr-[1rem] rounded-md">

          {stateTeamMembers.map((employee)=>{
            aveargeAge+=employee.age;
            return (
              <div key={employee.id} className="employee flex gap-[1rem] bg-blue-300 p-[1rem] text-slate-900 rounded-md items-center justify-between text-[1.5rem] font-semibold">
                <span>{employee.first_name}</span>
                <span>{employee.age}</span>
                <button className="btn select-none wrapperGeneratePassword   outline outline-2 outline-amber-50  hover:bg-yellow-400 transition cursor-pointer px-[1rem] py-[.5rem] rounded-md  text-slate-900    bg-yellow-300 hover:text-white text-[1rem]" onClick={removePlayerFromTeam} data-employee-id={employee.id}>Remove</button>
            </div>
            );
          }
            
          )}
        </div>
      </div>
      <div className=" w-[100%] ">
        {
          stateTeammembersWebApp.teamIds.length >0 && 
            <div  className="flex gap-[1rem] bg-blue-900 p-[1rem] py-[.5rem] text-slate-200 rounded-md items-center justify-between text-[1.5rem] font-semibold">
              <span>Average Age</span>
              <span className="text-[2rem]">{Math.round(aveargeAge/stateTeammembersWebApp.teamIds.length)}</span>            
          </div>        
        }
      </div>
    </section>
  );
}