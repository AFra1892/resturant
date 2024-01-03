import React from 'react'
import './dashboard.css'
import Header from '../components/dashboard/Header'
import Sidebar from '../components/dashboard/Sidebar'
import StaticsCard from '../components/dashboard/StaticsCard'
import SocialTraffic from '../components/dashboard/SocialTraffic'
import RecentActivities from '../components/dashboard/RecentActivities'
import TaskSummeries from '../components/dashboard/TaskSummeries'
import ClientTable from '../components/dashboard/ClientTable'

const Dashboard = () => {
    
  return (
<>

<div>
    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">

      <Header/>
      <Sidebar/>
    
      <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
    
        <StaticsCard/>
    
        <div class="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
            <SocialTraffic/>
            <RecentActivities/>
        </div>
    
        <TaskSummeries/>
        <ClientTable/>
        
      
      </div>
    </div>
  </div>    

  <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.0/dist/alpine.min.js" defer></script>
 
</>
    )
}

export default Dashboard