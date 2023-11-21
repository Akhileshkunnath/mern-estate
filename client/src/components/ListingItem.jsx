import React from 'react'
import { Link } from 'react-router-dom'
import {MdLocationOn} from "react-icons/md"
import { list } from 'firebase/storage'

const ListingItem = ({listing}) => {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow w-full sm:w-[330px] overflow-hidden rounded-lg '>
        <Link to={`/listing/${listing._id}`}>
            <img src={listing.imageUrls[0] || "https://assets.entrepreneur.com/content/3x2/2000/20150622231001-for-sale-real-estate-home-house.jpeg"} alt="listing cover" className='h-[320px] sm:h-[220px]  w-full object-cover hover:scale-105 transition-scale duration-300' />
        <div className='p-3 flex flex-col gap-2 w-full'>
            <p className='truncate text-lg font-semibold text-slate-700'>{listing.name}</p>
            <div className='flex items-center gap-1'>
            <MdLocationOn className='h-4 w-4 text-green-700'/>
            <p className='text-sm text-gray-600 truncate w-full'>{listing.address}</p>
            </div>
            <p className='text-sm text-gray-600 line-clamp-3'>{listing.description}</p>
            <p className='text-slate-500 mt-2 font-semibold'>
                $
                {listing.offer ? parseInt(listing.discountPrice).toLocaleString('en-US'): parseInt(listing.regularPrice).toLocaleString('en-US') }
                {listing.type === "rent" && '/ month'}
            </p>
            <div className='text-slate-700 flex gap-4'>
                <div className='font-bold text-xs'>
                    {listing.bedrooms > 1 ? `${listing.bedrooms} beds`: `${listing.bedrooms} bed`}
                </div>
                <div className='font-bold text-xs'>
                    {listing.bathrooms > 1 ? `${listing.bathrooms} baths`: `${listing.bathrooms} bath`}
                </div>
            </div>


        </div>
        
        
        </Link>
        
        </div>
  )
}

export default ListingItem