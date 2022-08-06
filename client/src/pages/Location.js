import React from 'react'

export default function Location() {
    return (
        <div>
            <div className='grid place-items-center py-8'>
                <h1 className='text-5xl font-semibold py-2 text-white'>Add Marker</h1>
                <div className="bg-secondary w-96 h-1 rounded-full"></div>
                <p className='text-xl md:text-2xl py-4 tracking-wider text-justify text-white'>Add marker on the map where animal rescure in required.</p>
                {/* <iframe src="" title="map" width="1200px" height="600px" className='my-4 border-2 border-secondary rounded-md' /> */}
            </div>
        </div>
    )
}
