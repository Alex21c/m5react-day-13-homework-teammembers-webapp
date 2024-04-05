export default function Employees({stateTeammembersWebApp}){
  console.log(stateTeammembersWebApp)
  return (
    <section className="border-[.8rem] border-blue-900 p-[2rem] rounded-md flex flex-col gap-[1rem] items-center" >
      <h2 className="font-semibold text-[2rem]">Employees</h2>
      <div className="flex flex-col gap-[1rem]  max-h-[30rem] overflow-y-scroll scrollbar-blue pr-[1rem]">
        {stateTeammembersWebApp.employees.map((employee)=>(
          <div key={employee.id} className="flex gap-[1rem] bg-blue-300 p-[1rem] text-slate-900 rounded-md items-center justify-between text-[1.5rem] font-semibold">
            <span>{employee.first_name}</span>
            <span>{employee.age}</span>
            <button className="select-none wrapperGeneratePassword  flex gap-[1rem] items-center justify-center outline outline-2 outline-amber-50  hover:bg-yellow-400 transition cursor-pointer px-[1rem] py-[.5rem] rounded-md  text-slate-900    bg-yellow-300 hover:text-white text-[1rem]">ADD</button>
          </div>
        ))}
      </div>
    </section>
  );
}