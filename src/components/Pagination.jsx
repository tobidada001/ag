import React from 'react'

export default function Pagination() {
  return (
    
  <div className="mt-16">
  <ul className="flex space-x-5 justify-center font-[sans-serif]">
    <li className="flex items-center justify-center shrink-0 bg-gray-100 w-9 h-9 rounded-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-3 fill-gray-400"
        viewBox="0 0 55.753 55.753"
      >
        <path
          d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
          data-original="#000000"
        />
      </svg>
    </li>
    <li className="flex items-center justify-center shrink-0 bg-green-500  border hover:border-green-500 border-green-500 cursor-pointer text-base font-bold text-white px-[13px] h-9 rounded-md">
      1
    </li>
    <li className="flex items-center justify-center shrink-0 border hover:border-green-500 cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-md">
      2
    </li>
    <li className="flex items-center justify-center shrink-0 border hover:border-green-500 cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-md">
      3
    </li>
    <li className="flex items-center justify-center shrink-0 border hover:border-green-500 cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-md">
      4
    </li>
    <li className="flex items-center justify-center shrink-0 border hover:border-green-500 cursor-pointer w-9 h-9 rounded-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-3 fill-gray-400 rotate-180"
        viewBox="0 0 55.753 55.753"
      >
        <path
          d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
          data-original="#000000"
        />
      </svg>
    </li>
  </ul>
</div>
  )
}
