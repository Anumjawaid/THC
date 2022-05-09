import React from 'react'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import LoginPage from '../components/Login';
import AccountSettings from '../components/AccountSetting'

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
        </Router>
        </>
    )
}

export default AppRouter;