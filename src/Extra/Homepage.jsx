export default function HeroSimplewithLogoBrand(props) {
  const title = props.title;
  return (
    <>
      {/* Hero Section: Simple with Logo Brand */}
      <div className="dark">
        <div className="relative overflow-hidden bg-white dark:text-gray-100 dark:bg-blue-900">
          {/* Logo */}
          <div className="absolute inset-x-0 bottom-0 text-gray-50 dark:text-blue-950 dark:text-opacity-25">
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
            >
              <path d="M-0.84,34.03 C187.63,148.52 327.03,-4.44 499.72,40.95 L500.00,150.00 L0.00,150.00 Z" />
            </svg>
          </div>
          {/* END Logo */}

          {/* Hero Content */}
          <div className="relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
            <div className="text-center">
              <a
                href="#"
                className="group inline-block mb-10 text-blue-600 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-200"
              >
                <svg
                  className="hi-outline hi-cube-transparent inline-block w-12 h-12 transition group-hover:scale-110 group-active:scale-100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                  />
                </svg>
              </a>
              <h1 className="text-4xl font-black text-black mb-4 dark:text-white">
                {props.title}
              </h1>
              <h2 className="text-xl leading-relaxed font-medium text-gray-700 lg:w-2/3 mx-auto dark:text-gray-200">
                Carefully crafted, easy to customize, fully responsive UI
                components for your Tailwind CSS based projects.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-28">
              <a
                href="#"
                className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-7 py-3.5 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
              >
                <span>Get Started</span>
                <svg
                  className="hi-mini hi-arrow-right inline-block w-5 h-5 opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-7 py-3.5 leading-6 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-white/20 dark:bg-transparent dark:text-gray-100 dark:hover:border-blue-500 dark:hover:border-opacity-75 dark:hover:text-gray-50 dark:focus:ring-blue-600 dark:focus:ring-opacity-60 dark:active:border-blue-500 dark:active:border-opacity-50"
              >
                <span>Learn More</span>
              </a>
            </div>
            <div className="relative mx-5 lg:mx-32 -mb-5 sm:mb-0">
              <div className="absolute inset-0 rounded-xl -m-6 lg:-m-8 -rotate-2 bg-blue-100 dark:bg-blue-950 dark:bg-opacity-75" />
              <div className="absolute inset-0 rounded-xl -m-6 lg:-m-8 rotate-1 bg-blue-800 bg-opacity-75 shadow-inner dark:bg-blue-950 dark:bg-opacity-75" />
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-m_HRfLhgABo-1280x800.jpg"
                className="relative rounded-lg mx-auto shadow-lg"
                alt="Hero Image"
              />
            </div>
          </div>
          {/* END Hero Content */}
        </div>
      </div>
      {/* END Hero Section: Simple with Logo Brand */}
    </>
  );
}
