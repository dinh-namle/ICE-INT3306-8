import { Routes, Route } from 'react-router-dom';
import './App.css'
import HomeLayout from './layouts/HomeLayout';
import { Admin, Home } from './pages';
import AdminLayout from './layouts/AdminLayout';

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
      </Routes>
    </div>
  )
}
