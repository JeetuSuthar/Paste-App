import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const ViewPaste = () => {
    const {id}=useParams();

    const allPastes=useSelector((state)=>state.paste.pastes);

    const paste=allPastes.filter((p)=>p._id===id)[0];
    if (!paste) {
        return <div>Paste not found</div>;
    }
  return (
    <div>
            <div className='flex flex-row gap-7 place-content-between'>
                <input
                    className='p-1 w-[67] border rounded-lg mt-2 pl-4'
                    type='text'
                    placeholder='Enter title here'
                    value={paste.title}
                    disabled
                    onChange={(e) => setTitle(e.target.value)}
                />
                
            </div>
            <div className='mt-8'>
                <textarea
                    className='border rounded-2xl mt-4 min-w-[500px] p-4s'
                    value={paste.content}
                    placeholder='Enter Content here ..'
                    disabled
                    onChange={(e) => setValue(e.target.value)}
                    rows={20}
                />
            </div>
        </div>
    )
}

export default ViewPaste
