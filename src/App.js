import './App.css';
import './Assests/fontAwesomeProIcons/fontAwesomeIcons.css';
import DB_EMPLOYEES from './DB.json';
import Team from './Components/Team';
import Employees from './Components/Employees';
import { useEffect, useReducer } from 'react';

function App() {
  function reducer(state, action){
    let teamIds = [];
    switch (action.type){
      case 'removePlayerFromTeam':
        // //console.log(action.payload, 'hmm');
        //console.log('removing')
        teamIds = state.teamIds.filter(teamId=> Number(teamId) != Number(action.payload));
        // //console.log(teamIds)
        return {
          ...state, 
          teamIds : [...teamIds]
        }
      case 'addEmployeeToTheTeam':
        // //console.log(action.payload, 'hmm');
        return {
          ...state, 
          teamIds : [...state.teamIds, Number(action.payload)]
        }
        
      default:
        return state;

    }
  }
  function initializeStateTeammembersWebApp(){
    return {
      employees: DB_EMPLOYEES,
      teamIds : [] // all the members who are in the team 
    }
  }
  let [stateTeammembersWebApp, dispatch] = useReducer(reducer, initializeStateTeammembersWebApp());
  // useEffect(()=>{//console.log(stateTeammembersWebApp)}, [stateTeammembersWebApp]);
  // //console.log(DB_EMPLOYEES)
  return (
    <div id='wrapperWebApp' className='mt-[.5rem] pt-[1rem] p-[2rem] w-[70rem]   rounded-md  text-[1.2rem] text-slate-200 flex gap-[1rem]  justify-center'>
      <Employees stateTeammembersWebApp={stateTeammembersWebApp} dispatch={dispatch}/>
      <Team stateTeammembersWebApp={stateTeammembersWebApp} dispatch={dispatch}/>
    </div>

  );
}

export default App;
