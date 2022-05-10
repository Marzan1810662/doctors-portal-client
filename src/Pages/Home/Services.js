import React from 'react';
import Service from './Service';
import fluroide from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluroide
        },
        {
            _id: 2,
            name: 'Cavity Feeling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'teeth Whitening',
            description: '',
            img: whitening
        },
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service key={service._id} service={service} />)
                }
            </div>
            <div className='my-28'>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                        <div className='ml-20'>
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;