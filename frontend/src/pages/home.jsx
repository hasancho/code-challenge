export default function main() {
  return (
    <div>
      <div className='mx-auto container py-5 px-6'>
        <h1 className='text-4xl font-black text-gray-900 text-center dark:text-white mb-5'>
          Notes
        </h1>
        <div className='mb-5'>
          <a href='/add-note'>
            <button
              type='button'
              className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
            >
              Add Note
              <svg
                fill='none'
                className='w-5 h-5 ml-2 -mr-1'
                stroke='currentColor'
                strokeWidth='3'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 6v12m6-6H6'
                />
              </svg>
            </button>
          </a>
          <a href='/add-tag'>
            <button
              type='button'
              className='text-white ml-5 bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800'
            >
              Add Tag
              <svg
                fill='none'
                className='w-5 h-5 ml-2 -mr-1'
                stroke='currentColor'
                strokeWidth='3'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 6v12m6-6H6'
                />
              </svg>
            </button>
          </a>
        </div>
        <div>
          <form className='mb-7'>
            <label
              htmlFor='default-search'
              className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
            >
              Search
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg
                  aria-hidden='true'
                  className='w-5 h-5 text-gray-500 dark:text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </div>
              <input
                type='search'
                id='default-search'
                className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Search Notes'
                required
              />
              <button
                type='submit'
                className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          <div className='rounded'>
            <div className='w-full h-64 flex flex-col justify-between items-start bg-blue-300 rounded-lg border border-blue-300 mb-6 py-5 px-4'>
              <div>
                <h4 className='text-gray-800 font-bold mb-3'>
                  13 things to work on
                </h4>
                <p className='text-gray-800 text-sm'>
                  Probabo, inquit, sic agam, ut labore et voluptatem sequi
                  nesciunt, neque porro quisquam est, quid malum, sensu iudicari
                </p>
              </div>
              <div>
                <span className='bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300'>
                  Study
                </span>
                <span className='bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300'>
                  Work
                </span>
                <span className='bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300'>
                  College
                </span>
              </div>
              <div className='w-full flex flex-col items-start'>
                <div className='flex items-center justify-between text-gray-800 w-full'>
                  <p className='text-sm pr-20'>March 28, 2020</p>
                  <button
                    className='w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-blue-300  focus:ring-black'
                    aria-label='edit note'
                    role='button'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='icon icon-tabler icon-tabler-eye'
                      width={20}
                      height={20}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <circle cx='12' cy='12' r='2' />
                      <path d='M2 12s4 -8 10 -8c6 0 10 8 10 8s-4 8 -10 8c-6 0 -10 -8 -10 -8' />
                      <path d='M22 12c-1.4 2.8 -4.5 6 -10 6c-5.5 0 -8.6 -3.2 -10 -6c1.4 -2.8 4.5 -6 10 -6c5.5 0 8.6 3.2 10 6z' />
                    </svg>
                  </button>
                  <button
                    className='w-8 h-8 rounded-full bg-blue-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-blue-300  focus:ring-black'
                    aria-label='edit note'
                    role='button'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='icon icon-tabler icon-tabler-pencil'
                      width={20}
                      height={20}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <path d='M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4' />
                      <line x1='13.5' y1='6.5' x2='17.5' y2='10.5' />
                    </svg>
                  </button>
                  <button
                    className='w-8 h-8 rounded-full bg-red-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-blue-300  focus:ring-black'
                    aria-label='edit note'
                    role='button'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='icon icon-tabler icon-tabler-trash'
                      width={20}
                      height={20}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <line x1='4' y1='7' x2='20' y2='7' />
                      <line x1='10' y1='11' x2='10' y2='17' />
                      <line x1='14' y1='11' x2='14' y2='17' />
                      <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
                      <path d='M9 4h6a2 2 0 0 1 2 2v2h-10v-2a2 2 0 0 1 2 -2' />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}