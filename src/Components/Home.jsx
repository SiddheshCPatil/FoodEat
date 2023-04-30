import React from 'react'
import Card from './Card';
import Navbar from './Navbar';
import Carousel from './Carousel';


export default function Home() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='m-3'>
                <Carousel />
            </div>
            <div className='m-3'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

        </>

    );
}
