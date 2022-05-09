import React from 'react'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import LoginPage from '../Components/Login';
import AccountSettings from '../Components/AccountSettings'
import BookAppointment from '../Components/BookAppointment'
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
        </Router>
        </>
    )
}

export default AppRouter;