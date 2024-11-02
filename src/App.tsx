import { Routes, Route } from 'react-router-dom';
import './App.css'
<<<<<<< HEAD
import { Admin, AdminNotification, Home, Programs, LeaderBoard, SubmitReport, Profile, AdminPrograms, AdminAccounts, AdminReports, AdminSettings, Login, Inbox } from './pages';
=======
import { Admin, AdminNotification, Home, Programs, LeaderBoard, SubmitReport, Profile, AdminPrograms, AdminAccounts, AdminReports, AdminSettings, Login, ResearchRegister } from './pages';
>>>>>>> 547bff3bda8b9cfd2e7462ff0e996cf8c66e9fb7
import AdminLayout from './layouts/AdminLayout';
import MainLayout from './layouts/MainLayout';
import HomeLayout from './layouts/HomeLayout';
import AuthLayout from './layouts/AuthLayout';
<<<<<<< HEAD
import PartnerLayout from './layouts/PartnerLayout';
=======
import AccountRegister from './pages/Auth/AccountRegister';
import ResearcherRegister from './pages/Auth/ResearcherRegister';
import PartnerRegister from './pages/Auth/PartnerRegister';
>>>>>>> 547bff3bda8b9cfd2e7462ff0e996cf8c66e9fb7
export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path='/' element={<Home />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/Register' element={<AccountRegister />} />
          <Route path='/Register/Researcher' element={<ResearcherRegister />} />
          <Route path='/Register/Partner' element={<PartnerRegister />} />
        </Route>

        <Route element={<AdminLayout />}>
          {/* <Route path='/admin' element={<Notification />} /> */}
          <Route path='/admin/notification' element={<AdminNotification />} />
          <Route path='/admin/accounts' element={<AdminAccounts />} />
          <Route path='/admin/programs' element={<AdminPrograms />} />
          <Route path='/admin/reports' element={<AdminReports />} />
          <Route path='/admin/settings' element={<AdminSettings />} />
        </Route>

        <Route element={<MainLayout />}>
          < Route path='/programs' element={<Programs />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/leaderboard' element={<LeaderBoard />} />
          <Route path='/SubmitReport' element={<SubmitReport />} />
        </Route>

        <Route element={<PartnerLayout />}>
          <Route path='inbox' element={<Inbox />}/>
        </Route>

      </Routes>
    </div>
  )
}
