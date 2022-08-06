import React from "react"
import HeroImg from '../assets/hero.svg'
import FeatImg from '../assets/feat.svg'
import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <div className='md:mx-28 mx-4 text-white py-10'>

            <div className='md:grid md:grid-cols-2 items-center'>
                <div className=''>
                    <h1 className='text-3xl md:text-6xl'>Who we are</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>Wild life SOS where users can learn how to help the animals with just one click. On our website, you can donate money using Coil to support animal rescue and adoption. On Wild life SOS you can identify the animal and their injury and it will tell you what you should do and should not to help the distressed animals.</p>

                    <Link to="/treatment">
                        <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>Animal Treatment</button>
                    </Link>

                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={HeroImg} alt="img" width="300" height="300" />
                </div>
            </div>

            <div className='md:grid md:grid-cols-2 pt-12 items-center'>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={FeatImg} alt="img" width="300" height="300" />
                </div>
                <div className=''>
                    <h1 className='text-5xl'>What else do we have</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider'>Wild life SOS is a web app where you can:
                    </p>
                    <ul className="text-2xl">
                        <li className="list-disc">Know the species of animal.</li>
                        <li className="list-disc">Donate to the cause of animal.</li>
                        <li className="list-disc">First aid required for the animals.</li>
                        <li className="list-disc">Get information about the tratment for any injured animal.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
