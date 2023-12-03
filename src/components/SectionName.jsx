import React from 'react'

const SectionName = ({name, align}) => {
  return (
    <div className={`w-[100%] flex justify-${align} items-center mt-[100px]`}>
        <span 
          className='text-sm font-medium text-purple px-2 py-1  bg-white rounded-md border border-slate-300 font-outfit'
        >
          {name}
        </span>
    </div>
  )
}

export default SectionName;