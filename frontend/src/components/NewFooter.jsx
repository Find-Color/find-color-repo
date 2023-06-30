import { Typography } from "@material-tailwind/react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshakeSimple } from '@fortawesome/free-solid-svg-icons'




export default function NewFooter() {
  return (
    <footer className="w-full bg-blue-gray white-text  p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-gray text-center md:justify-between white-text">
        
      
      <FontAwesomeIcon icon={faHandshakeSimple} size="2xl" style={{color: "#ffffff",}} className="logo" />
      <a id="logo" href="/">
        Find Color
      </a>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="gray-50"
              className="font-normal transition-colors hover:text-red-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="gray-50"
              className="font-normal transition-colors hover:text-red-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="gray-50"
              className="font-normal transition-colors hover:text-red-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="gray-50"
              className="font-normal transition-colors hover:text-red-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="gray-50" className="text-center font-normal">
        &copy; 2023 Find
      </Typography>
    </footer>
  );
}
