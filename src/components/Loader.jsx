import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary z-[100]' >
      <div className="flex gap-5 font-semibold text-6xl sm:text-3xl">
        <h1 className='text-secondary h'>H</h1>
        <h1 className='text-normal r'>R</h1>
        <h1 className='text-tertiary j'>J</h1>
      </div>
    </div>
  )
}

export default Loader