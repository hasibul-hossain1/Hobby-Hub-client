import React from 'react'
import GroupCard from '../AllGroup/GroupCard'
import { useLoaderData } from 'react-router'

function FeaturedGroup() {
  const groups=useLoaderData()
  
  return (
    <section className='px-8 md:px-15 lg:px-32 xl:px-64 2xl:px-72 my-32'>
      <h2 className='text-center mb-16 text-3xl font-bold'>Our Featured Group</h2>
    <div className='flex justify-around flex-wrap gap-10'>
      {groups.map((group)=><GroupCard key={group._id} group={group}/>)}  
    </div>
    </section>
  )
}

export default FeaturedGroup