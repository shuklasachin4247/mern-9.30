'use client';
import React from 'react'
import Login from '../login/page';

const EventHandlig = () => {
    const previewImage = (e) => {};
    return (
        <div className="container mx-auto p-4">
            <h1 className='text-center text-3xl font-bold'>Event-handlig</h1>
            <p className='text-center text-xl'>In this section we will learn how to handle events in react</p>
            <div className='mt-8 space-y-10'></div>
            {/* <button className='bg-black text-white p-5' onClick={alert('Button is clicked')}>Click Button</button> */}
            {<button className='bg-black text-white p-5' onClick={() => { alert('Button is clicked') }}>Click Button</button>}
            <div className='w-1/2 mx-auto h-56 bg-amber-300'
                onMouseUp={(e) => {
                    console.log(e.clientX, e.clientY);


                }}
            >
                Move your mouse over this box
            </div>

            <input type="text" className='border-2 p-3 w-1/2' placeholder='Try typing something...'
                onKeyDown={(e) => {
                    console.log('Key Pressed:', e.key);
                    console.log('Key Code:', e.code);

                }}
            />
            <input type="text" className='border-2 p-3 w-1/2 block mx-auto' placeholder='Enter Text...'
                onChange={(e) => {
                    console.log('Input Value:', e.target.value);
                    // console.log('Key Code:', e.code);

                }}
                />

                <input type="color" onChange={(e) => { document.body.style.backgroundColor = e.target.value}} />

                <input type="file" className='border-2 p-5 bg-amber-300 block rounded-full'
                accept='image/*' onChange={previewImage}
                />
                
        </div>
    )
}

export default EventHandlig;