import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Admin, AdminNotification, Home, Programs, LeaderBoard, SubmitReport, Profile, AdminPrograms, AdminAccounts, AdminReports, AdminSettings, Login, PartnerInbox, PartnerOverview, PartnerPayout , ResearchRegister, Rewards, Hacktivity, PaymentHistory, PartnerPrograms, PartnerReports, Payout } from './pages';
import AdminLayout from './layouts/AdminLayout';
import MainLayout from './layouts/MainLayout';
import HomeLayout from './layouts/HomeLayout';
import AuthLayout from './layouts/AuthLayout';
import PartnerLayout from './layouts/PartnerLayout';
import AccountRegister from './pages/Auth/AccountRegister';
import ResearcherRegister from './pages/Auth/ResearcherRegister';
import PartnerRegister from './pages/Auth/PartnerRegister';
import PartnerAccount from './pages/Partner/PartnerAccount';
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
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/leaderboard' element={<LeaderBoard />} />
          <Route path='/SubmitReport' element={<SubmitReport />} />
          <Route path='/Rewards' element={<Rewards />} />
          <Route path='/Hacktivity' element={<Hacktivity />} />
          <Route path='/Payout' element={<Payout />} />
        </Route>

        <Route element={<PartnerLayout />}>
          <Route path='/partner/inbox' element={<PartnerInbox />}/>
          <Route path='/partner/overview' element={<PartnerOverview />}/>
          <Route path='/partner/paymenthistory' element={<PaymentHistory />}/>
          <Route path='/partner/programs' element={<PartnerPrograms />}/>
          <Route path='/partner/account' element={<PartnerAccount />}/>
          <Route path='/partner/payout' element={<PartnerPayout />}/>
        </Route>

      </Routes>
    </div>
  )
}
