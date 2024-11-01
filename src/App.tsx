import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Admin, AdminNotification, Home, Programs, LeaderBoard, SubmitReport, Profile, AdminPrograms, AdminAccounts, AdminReports, AdminSettings, Login } from './pages';
import AdminLayout from './layouts/AdminLayout';
import MainLayout from './layouts/MainLayout';
import HomeLayout from './layouts/HomeLayout';
import AuthLayout from './layouts/AuthLayout';
export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path='/' element={<Home />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
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

      </Routes>
    </div>
  )
}
