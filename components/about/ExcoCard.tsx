import { Reveal } from "../home/Reveal";
import { useState } from 'react';


const GitHubButton = ({ profileUrl }) => {
    return (
      <a href={profileUrl} className="px-2 hover:-translate-y-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          className="h-4 w-4 text-primary dark:text-primary-400"
        >
          <path
            fill="currentColor"
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          />
        </svg>
      </a>
    );
  };

const LinkedinButton = ({ profileUrl }) => {
    return (
      <a href={profileUrl} className="px-2 hover:-translate-y-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="h-3.5 w-3.5 text-primary dark:text-primary-400"
        >
          <path
            fill="currentColor"
            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
          />
        </svg>
      </a>
    );
  };

const EmailButton = ({ emailAddress }) => {
    const mailToLink = `mailto:${emailAddress}`;
  
    return (
      <a href={mailToLink} className="px-2 hover:-translate-y-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="h-3.5 w-3.5 text-primary dark:text-primary-400"
        >
          <path
            fill="currentColor"
            d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
          />
        </svg>
      </a>
    );
  };

const TelegramButton = ({ profileUrl }) => {
    return (
      <a href={profileUrl} className="px-2 hover:-translate-y-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          className="h-3.5 w-3.5 text-primary dark:text-primary-400"
        >
          <path
            fill="currentColor"
            d="M248 8C111.033 8 0 119.033 0 256S111.033 504 248 504 496 392.967 496 256 384.967 8 248 8ZM362.952 176.66c-3.732 39.215-19.881 134.378-28.1 178.3-3.476 18.584-10.322 24.816-16.948 25.425-14.4 1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25 5.342-39.5 3.652-3.793 67.107-61.51 68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608 69.142-14.845 10.194-26.894 9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7 18.45-13.7 108.446-47.248 144.628-62.3c68.872-28.647 83.183-33.623 92.511-33.789 2.052-.034 6.639.474 9.61 2.885a10.452 10.452 0 0 1 3.53 6.716A43.765 43.765 0 0 1 362.952 176.66Z"
          />
        </svg>
      </a>
    );
  };

export const ExcoCards = ({name, member_role, description, github_link, linkedin_link, email, telegram, image_link, href}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleCardClick = () => {
      setIsFlipped(!isFlipped);
    };

    return (
        
      <div className="mb-24 md:mb-0 py-20">
          <div
              className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 transform transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="flex justify-center">
                  <div className="flex justify-center -mt-[75px]">
                      <img src= {image_link}
                      className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]" alt="Avatar" />
                  </div>
              </div>

              <div className="p-6">
                <Reveal>
                  <h5 className="mb-1 text-lg font-bold">{name}</h5>
                </Reveal>
                <Reveal>  
                  <p className="mb-6 italic">{member_role}</p>
                </Reveal> 
                <Reveal>
                  <p className="mb-6">{description}</p>
                </Reveal>   
                  <ul className="mx-auto flex list-inside justify-center">
                
                  <GitHubButton profileUrl={github_link}/>
                  <LinkedinButton profileUrl={linkedin_link}/>
                  <EmailButton emailAddress={email}/>
                  <TelegramButton profileUrl={telegram}/>

                  </ul>
              </div>
          </div>
      </div>



  );
}