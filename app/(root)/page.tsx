import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: "Tariq", lastName: "Kichawele", email: "TK@gmail.com" };

  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={'Guest'}
                    subtext="Access and manage your account and transactions efficiently"
                />

                <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1000}
                />
            </header>

            RECENT TRANSACTIONS
        </div>

        <RightSidebar 
            user={loggedIn}
            transactions={[]}
            banks={[
                {
                    currentBalance: 123.50
                }, 
                {
                    currentBalance: 500.50
                }
            ]}
        />
    </section>
  )
}

export default Home