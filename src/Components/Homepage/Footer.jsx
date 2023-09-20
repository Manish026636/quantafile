import React from 'react'

const Footer = () => {
  return (
    <div>
      
<footer className="bg-[#191c1f]    dark:bg-gray-900 ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                <span className="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">Quantafile</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                <li>
                    <button  className="mr-4  hover:underline md:mr-6 ">About</button>
                </li>
                <li>
                    <button  className="mr-4 hover:underline md:mr-6">Privacy Policy</button>
                </li>
                <li>
                    <button  className="mr-4 hover:underline md:mr-6 ">Licensing</button>
                </li>
                <li>
                    <button hclassName="hover:underline">Contact</button>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <button className="hover:underline">Quntafile™</button>. All Rights Reserved.</span>
    </div>
</footer>


    </div>
  )
}

export default Footer
