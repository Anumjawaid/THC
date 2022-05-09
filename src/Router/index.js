import React from 'react'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import LoginPage from '../Components/Login';
import AccountSettings from '../Components/AccountSettings'
import BookAppointment from '../Components/BookAppointment'
import CoachDashboard from '../Components/coachDashboard'
function AppRouter (){
    return(
        <>
        <Router>
            <Routes>
            <Route path='/' element={<LoginPage/>}></Route>
            </Routes>

            <Routes>
            <Route path='/accountsettings' element={<AccountSettings/>}></Route>
            </Routes>

            <Routes>
            <Route path='/bookappointment' element={<BookAppointment/>}></Route>
            </Routes>

            <Routes>
            <Route path='/coachdashboard' element={<CoachDashboard/>}></Route>
            </Routes>
        </Router>
        </>
    )
}

export default AppRouter;