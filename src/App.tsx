import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Admin, Home, LeaderBoard, User, R_EditProfile } from './pages';
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
        <Route path='/admin' element={<Admin />} />
        </Route>

        <Route element={<MainLayout />}>
        <Route path='/programs' element={<Admin />} />
        </Route>

        <Route element={<MainLayout />}>
        <Route path='/user' element={<User />} />
        </Route>

        <Route element={<MainLayout />}>
        <Route path='/user/r_editprofile' element={<R_EditProfile />} />
        </Route>

        <Route element={<MainLayout />}>
        <Route path='/leaderboard' element={<LeaderBoard />} />
        </Route>
      </Routes>
    </div>
  )
}
