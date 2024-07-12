import React from 'react'
function Footer() {
    let d = new Date(Date.now());
    d = d.toDateString();
    return (
        <div className='flex justify-between p-4'>
            <div className='w-1/3 text-gray-600'>
                {/* Logo and Company Name */}
                <img src='/src/Assets/Logo.png' alt="" className='w-[300px]' />
                <div>Falana Denkha Inc.</div>
                <div>Managed by Bhaang Bhosda Agency, Lundpur</div>
                <div>You visited here on {d}</div>
            </div>
            <div className='w-2/3 ml-4 flex justify-between'>
                {/* Link Name */}
                <div className='text-lg'>
                    <p className='text-gray-500 mb-1'>Company</p>
                    <ul>
                        <li className='hover:underline'>Features </li>
                        <li className='hover:underline'>Pricing </li>
                        <li className='hover:underline'>Affiliate Program </li>
                        <li className='hover:underline'>Press Kit</li>
                    </ul>
                </div>
                <div className='text-lg'>
                    <p className='text-gray-500 mb-1'>Support</p>
                    <ul>
                        <li className='hover:underline'>Account </li>
                        <li className='hover:underline'>Help </li>
                        <li className='hover:underline'>Contact Us </li>
                        <li className='hover:underline'>Customer Support</li>
                    </ul>
                </div>
                <div className='text-lg'>
                    <p className='text-gray-500 mb-1'>Company</p>
                    <ul>
                        <li className='hover:underline'>Terms & Conditions </li>
                        <li className='hover:underline'>Privacy Policy </li>
                        <li className='hover:underline'>Licensing </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer