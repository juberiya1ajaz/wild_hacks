import React from 'react'
import ProgressBar from './ProgressBar'
import { HiX } from "react-icons/hi"

function PredictionResultTreatment({ prediction }) {

  const [showNavbar, setShowNavbar] = React.useState(false);

  const precision = ((prediction.probability * 100) - 10.1).toFixed(2)

  return prediction.probability > 0.6 ? (
    <article className="w-[500px] bg-gray-100 rounded-xl p-3 h-56">
      <h2 className="text-xl py-8 font-bold">
        {prediction.className.replace(/(_)/gi, ' ')}
      </h2>
      <h5 className='text-xl py-2'>Probability</h5>
      <ProgressBar min="0" max="100" value={precision}>
        {precision.replace('.', ',')} %
      </ProgressBar>
      <div className='grid place-items-center mt-2 mb-4'>
        <button className='bg-secondary py-2 px-8 rounded-md text-md font-semibold text-white text-xl' onClick={() => setShowNavbar(true)}>Check Treatment methods</button>
        {showNavbar ? (
          <div>
            <div className=" flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none items-center justify-center w-screen">
              <div className="relative my-6 mx-auto w-screen">
                <div className="ml-[25rem] border-0   shadow-lg relative flex flex-col w-128 bg-gray-800 outline-none focus:outline-none ">
                  <div className="flex items-start justify-between p-5 border-solid rounded-t">
                    <div>
                      <div className="text-2xl font-base tracking-wide cursor-pointer text-white">
                        Treatment methods
                      </div>
                    </div>

                    <button
                      className="absolute right-6"
                      onClick={() => setShowNavbar(false)}
                      aria-hidden="false"
                      aria-label="button"
                    >
                      <HiX
                        className="h-7 w-7 text-white"
                        aria-hidden="false"
                      />
                    </button>
                  </div>

                  <div className="grid justify-center">
                    <div className="inline-flex w-64 h-1 bg-indigo-500 rounded-full"></div>
                  </div>

                  <div className='text-white px-3 pb-2 pt-6'>
                    <h1 className='text-xl'>The following are the treatment method if {prediction.className.replace(/(_)/gi, ' ')}</h1>

                    <ul className='text-lg ml-4 py-2'>
                      <li className="list-disc">Cool the area immediately with cool running water or a cool compress.</li>
                      <li className="list-disc">Immerse in or flush with water or apply a cool pack to the effected area for a minimum of 5 minutes.</li>
                      <li className='list-disc'>Apply a moist, cool compress to the effected area.</li>
                      <li className='list-disc'>Keep the animal warm by wrapping in a blanket.</li>
                      <li className='list-disc'>Transport the animal to a vet.</li>
                    </ul>

                  </div>

                </div>
              </div>
            </div>

            <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black"></div>
          </div>
        ) : null}
      </div>
    </article>
  ) : (
    <div type="warning">
      Fail to identity, try again with a different image.
    </div>
  )
}

export default PredictionResultTreatment
