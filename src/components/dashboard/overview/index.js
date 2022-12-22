import React from 'react'
import Events from './Events'
import MktLeaders from './MktLeaders'

const Overview = () => {
  return (
    // layout to accomdate both components
    <div className='w-full flex space-x-10 pr-5'>
      <div className='w-full md:w-4/6'>
      <MktLeaders/>
      </div>
      <div className='w-full md:w-2/6'>
      <Events/>
      </div>
    </div>
  )
}

export default Overview