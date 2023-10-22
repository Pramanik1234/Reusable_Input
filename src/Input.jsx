import React, { useState } from 'react'
import { MdOutlineContentCopy } from "react-icons/md"
import { TiTick } from "react-icons/ti"
import { AiFillLock, AiFillUnlock } from "react-icons/ai"

const Input = ({ name, type, placeholder, values, handleBlur, handleChange, errors, touched, }) => {

    const [lock, setLock] = useState(false);
    const [read, setRead] = useState(false);
    const [copyIcon, setCopyIcon] = useState(true);

    const handleCopy = () => {
        navigator.clipboard.writeText(values)
        setCopyIcon(false)
    }

    const lockText = () => {
        setLock(lock === false ? true : false);
        setRead(read === false ? true : false)

    }

  return (
      <div className=" flex flex-col gap-1 text-start">
          <div className={` ${errors && touched ? " border-red-500" : ""} w-full flex items-center justify-between border-2 border-gray-600 p-2 rounded-md gap-2`}>
          <button type='button' className=' border-r-2 border-gray-500 pr-2 outline-none' onClick={lockText}>
              {lock === true ? <AiFillLock className='text-red-600 text-2xl' /> : <AiFillUnlock className='text-gray-600 text-2xl' />}
          </button>
          <input
              readOnly={read} 
              className={` w-full px-4  rounded-md  bg-none  outline-none bg-transparent  text-white  `}
              id={name}
              type={type}
              name={name}
              value={values}
              placeholder={placeholder}
              onChange={handleChange}
              onBlur={handleBlur} 
          />
          <button type="button" onClick={handleCopy}>
              {copyIcon === true ? <MdOutlineContentCopy className=' text-gray-400 text-2xl ' /> : <TiTick className=' text-green-400 font-thin text-2xl' />}
          </button>
          </div>
          {errors && touched && (
              <p className="text-red-600 text-sm">
                  {errors}
              </p>
          )}
      </div>
  )
}

export default Input