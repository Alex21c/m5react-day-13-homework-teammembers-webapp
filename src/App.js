import './App.css';
import './Assests/fontAwesomeProIcons/fontAwesomeIcons.css';
import DB_EMPLOYEES from './DB.json';
import Team from './Components/Team';
import Employees from './Components/Employees';
import { useReducer } from 'react';

function App() {
  function reducer(state, action){
    switch (action.type){
      case 'testing':
        return state;
      default:
        return state;

    }
  }
  function initializeStateTeammembersWebApp(){
    return {
      employees: DB_EMPLOYEES
    }
  }
  let [stateTeammembersWebApp, dispatch] = useReducer(reducer, initializeStateTeammembersWebApp());

  // console.log(DB_EMPLOYEES)
  return (
    <div className='mt-[.5rem] pt-[1rem] p-[2rem] w-[70rem]  m-auto rounded-md  text-[1.2rem] text-slate-200 flex gap-[1rem]'>
      <Employees stateTeammembersWebApp={stateTeammembersWebApp}/>
      <Team/>
    </div>

  );
}

export default App;
