import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    outline: 'none',
    boxShadow: 24,
    p: 4,
    borderRadius: 4
};

export default function SubscriptionModal( { open, handleClose }: { open: boolean, handleClose: any }) {
    const [plan, setPlan] = React.useState("Anually");

    const features:string[] = [
        "Prioritize rankings in conversations and search.",
        "See approximately twice as many Tweets between ads in your for you and following timelines.",
        "Add bold and italic text in your Tweets.",
        "Post longer videos and 1080p video uploads.",
        "All the existing blue features, including Edit Tweet, Bookmark Folders and early access to new features."
    ];

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='flex items-center space-x-3'>
                        <IconButton onClick={handleClose} aria-label='delete'>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div className='flex justify-center py-10'>
                        <div className='w-[80%] space-y-10'>
                            <div className='p-5 rounded-md flex items-center justify-between shadow-lg bg-slate-400'>
                                <h1 className='text-xl pr-5'>Blue subscribers with a verified phone number will get a blue checkmark once approved.</h1>
                                <VerifiedIcon sx={{width: '5rem', height: '5rem', color: '#1d9bf0'}}/>
                            </div>
                            <div className="flex justify-between border rounded-full px-5 py-3 border-gray-500">
                                <div>
                                    <span onClick={() => setPlan('Anually')} className={`${plan === 'Anually' ? "text-black": "text-gray-400"} cursor-pointer`}>
                                        Anually
                                    </span>
                                    <span className='text-green-500 text-sm ml-5'>
                                        SAVE 12%
                                    </span>
                                </div>
                                <p onClick={() => setPlan('Monthly')} className={`${plan === 'Monthly' ? "text-black": "text-gray-400"} cursor-pointer`}>
                                    Monthly
                                </p>
                            </div>
                            <div className='space-y-3'>
                                {features.map((item, key) => (<div key={key} className='flex items-center space-x-5'>
                                    <FiberManualRecordIcon sx={{width: '7px', height: '7px'}}/>
                                    <p className='text-xs'>{item}</p>
                                </div>))}
                            </div>
                            <div className='cursor-pointer flex justify-center bg-gray-900 text-white rounded-full px-5 py-3'>
                                <span className='line-through italic'>₹7,800.00</span>
                                <span className='px-5'>₹6,000.00/year</span>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}