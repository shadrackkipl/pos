import React from 'react'
import BottomNav from '../components/shared/BottomNav'
import Greetings from '../components/home/Greetings'
import './Home.css'
import MiniCard from '../components/home/MiniCard'
import { BsCashCoin } from 'react-icons/bs'
import { GrInProgress } from 'react-icons/gr'
import RecentOrders from '../components/home/RecentOrders'
const Home = () => {
  return (
    <section className='home'>
      <div className='left-div'>
        <Greetings />

        <div className='home-content'>
          <MiniCard title="Total Earnings" icon={<BsCashCoin />} number={512} footerNum={1.6} variant="green" />
          <MiniCard title="In Progress" icon={<GrInProgress />} number={16} footerNum={3.6} variant="amber" />
        </div>
        <RecentOrders />

      </div>

      <div className='right-div'></div>

      <BottomNav />

       </section>
  )
}

export default Home