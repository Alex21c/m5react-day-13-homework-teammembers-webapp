export default function Employees({stateTeammembersWebApp, dispatch}){
  // //console.log(stateTeammembersWebApp)
  function addTeamMember(event){
    // //console.log(event.target)
    // //console.log(event.target.getAttribute('data-employee-id'));
    let employeeID = event.target.getAttribute('data-employee-id');
    dispatch({type: 'addEmployeeToTheTeam', payload: employeeID});
  }

  function isTeamMemberAlreadyInTeam(employeeId){
    return stateTeammembersWebApp.teamIds.includes(employeeId);
  }
  return (
    <section className="border-[.8rem] border-blue-900 p-[2rem] rounded-md flex flex-col gap-[1rem] items-center" >
      <h2 className="font-semibold text-[2rem]">Employees</h2>
      <div className="flex flex-col gap-[1rem]  max-h-[30rem] overflow-y-scroll scrollbar-blue pr-[1rem] rounded-md">
        {stateTeammembersWebApp.employees.map((employee)=>
          {
            let flagIsTeamMemberAlreadyInTeam  = isTeamMemberAlreadyInTeam(employee.id);

            return (

            <div key={employee.id} className={`employee flex gap-[1rem] bg-blue-300 p-[1rem] text-slate-900 rounded-md items-center justify-between text-[1.5rem] font-semibold ${flagIsTeamMemberAlreadyInTeam ? 'inactive' : ''  }`}>
              <span>{employee.first_name}</span>
              <span>{employee.age}</span>
              {
                !flagIsTeamMemberAlreadyInTeam && <button className={`btn select-none wrapperGeneratePassword  flex gap-[1rem] items-center justify-center outline outline-2 outline-amber-50  hover:bg-yellow-400 transition cursor-pointer px-[1rem] py-[.5rem] rounded-md  text-slate-900    bg-yellow-300 hover:text-white text-[1rem] `} onClick={addTeamMember} data-employee-id={employee.id}>ADD</button>
              }
            </div>

            );

        })}
      </div>
    </section>
  );
}