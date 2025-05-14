import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SubscriptionModal from '../SubscriptionModal/SubscriptionModal';
import React from 'react';

function SideBar() {
    const [openSubscriptionModal, setOpenSubscriptionModal] = React.useState(false);
    const handleOpenSubscriptionModal = () => setOpenSubscriptionModal(true);
    const handleCloseSubscriptionModal = () => setOpenSubscriptionModal(false);

    const handleChangeTheme = () => {
        console.log("handleChangeTheme");
    }
    return (
        <aside className='py-5 sticky top'>
            <div className='flex relative items-center'>
                <input type="text" className='py-3 rounded-full text-gray-500 w-full pl-12' />
                <div className='absolute top-0 left-0 pl-3 pt-3'>
                    <SearchIcon className='text-gray-500' />
                </div>
                <Brightness4Icon className='ml-3 curson-pointer' onClick={handleChangeTheme} />
            </div>
            <section className='my-5'>
                <h1 className='text-xl font-bold'>Get Verified</h1>
                <h1 className='font-bold my-2'>Subscribe to unlock new features</h1>
                <Button onClick={handleOpenSubscriptionModal} variant='contained' sx={{ padding: '10px', paddingX: '20px', borderRadius: '25px', }}>
                    Get Verified
                </Button>
            </section>
            <section className='mt-7 space-y-5'>
                <h1 className='font-bold text-xl py-1'>What's happening</h1>
                <div>
                    <p className='text-sm'>DurgaAshtami · LIVE</p>
                    <p className='font-bold'>#LSGvsMI</p>
                </div>
                {[1, 2, 3, 4, 5].map(key => (<div key={key} className='flex justify-between w-full'>
                    <div>
                        <p>Max Verstappen . LIVE</p>
                        <p className='font-bold'>#GoodBadUglyTrailer</p>
                        <p>3.3k Tweets</p>
                    </div>
                    <MoreHorizIcon />
                </div>))}
            </section>
            <section>
                <SubscriptionModal open={openSubscriptionModal} handleClose={handleCloseSubscriptionModal}/>
            </section>
        </aside>
    );
}

export default SideBar;
