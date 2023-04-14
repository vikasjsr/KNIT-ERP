import React from 'react'

const Header = ({ description, title }) => {
  return (
    <div className=" mb-10">
    <p className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-gray-200">
      {title}
    </p>
    <p className="text-lg text-gray-400 mt-5">{description}</p>
  </div>
  )
}

export default Header

