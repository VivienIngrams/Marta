import React from 'react'

import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer>
              <div className="flex flex-col items-center pt-12">
                <div className=" flex space-x-4">
                 
                 <a
         
          target="_blank"
          href="https://www.instagram.com/"
          rel="noopener noreferrer"
        >
          <Image alt="Instagram Icon" src='./icons8-instagram.svg' width={25} height={25} />
        </a>
                </div>
                <a href='/#Contact' className="mb-2 flex flex-col items-center uppercase leading-10 text-white space-x-2 text-sm ">
                Marque jà uma consulta
                            </a>
                </div>
            </footer>
  )
}

export default Footer;
