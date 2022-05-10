import React from 'react'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import LoginPage from '../Components/Login';
import AccountSettings from '../Components/AccountSettings'
import BookAppointment from '../Components/BookAppointment'
import AddHealthCheck from '../Components/addhealthcheck';
import Dashboard from '../Components/dashboard';
// import CoachDashboard from '../coachdashboard'
// import Coach from '../component/coachDashboard1';
import HealthCheckHistory from '../Components/healthcheckhistory';
// import AddHealthForm from '../component/addhealthForm' 
import BloodGlucoseGraph from '../Components/bloodglucosegraph';
import BloodPressureGraph from '../Components/graph';
import HealthCheckDetail from "../Components/healthcheckdetail";
import UserDetail from '../Components/UserDetailPage'
function AppRouter (){
    return(
        <>
          <Router>
               
                
                <Routes>
                <Route path='/addhealthcheck' element={<AddHealthCheck/>}></Route>
                </Routes>

                
                {/* <Routes>
                <Route path='/coachdashboard' element={<Coach/>}></Route>
                </Routes> */}

                <Routes>
                <Route path='/dashboardpractioner' element={<Dashboard/>}></Route>
                </Routes>

                <Routes>
                <Route path='/healthcheckhistory' element={<HealthCheckHistory/>}></Route>
                </Routes>

                {/* <Routes>
                <Route path='/healthcheckhistory1' element={<AddHealthForm/>}></Route>
                </Routes> */}

                <Routes>
                <Route path='/bloodglucose' element={<BloodGlucoseGraph/>}></Route>
                </Routes>

                 <Routes>
                <Route path='/bloodgraphs' element={<BloodPressureGraph/>}></Route>
                </Routes>

                <Routes>
                <Route path='/userdetail' element={<UserDetail/>}></Route>
                </Routes>

               
                <Routes>
                <Route path='/healthcheckDetails' element={<HealthCheckDetail/>}></Route>
                </Routes> 
               
                <Routes>
                  <Route path='/' element={<LoginPage/>}></Route>
                </Routes>

                <Routes>
                <Route path='/accountsettings' element={<AccountSettings/>}></Route>
                </Routes>

                <Routes>
                <Route path='/bookappointment' element={<BookAppointment/>}></Route>
                </Routes>

            </Router>
      
        </>
    )
}

export default AppRouter;