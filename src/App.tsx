import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Admin, Notification, Home, LeaderBoard, Profile, Programs } from './pages';
import AdminLayout from './layouts/AdminLayout';
import MainLayout from './layouts/MainLayout';
import HomeLayout from './layouts/HomeLayout';

export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path='/' element={<Home />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path='/admin' element={<Notification />} />
          <Route path='/admin/notification' element={<Notification />} />
        </Route>

        <Route element={<MainLayout />}>
          < Route path='/programs' element={<Programs />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/leaderboard' element={<LeaderBoard />} />
        </Route>

      </Routes>
    </div>
  )
}
