import { SyntheticEvent, useState } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import VerifiedIcon from '@mui/icons-material/Verified';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TweetCard from '../../components/TweetCard/TweetCard';
import ProfileModal from '../../components/ProfileModal/ProfileModal';

function ProfilePage() {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
    const [tabValue, setTabValue] = useState("1");

    const handleFollowUserModal = () => {
        console.log("handleFollowUserModal");
    };

    const [openProfileModal, setOpenProfileModal] = useState(false);
    const handleOpenProfileModal = () => setOpenProfileModal(true);
    const handleCloseProfileModal = () => setOpenProfileModal(false);

    const handleTabChange = (event: SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
        if (newValue === "4") {
            console.log("Likes Tweets");
        }
        else if (newValue === "1") {
            console.log("Users Tweets");
        }
    };

    return (
        <div>
            <section className={`z-50 flex items-center sticky top-0 bg-white/95 backdrop-blur-sm`}>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
                <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>Himesh Maurya</h1>
            </section>
            <section>
                <img className='w-full h-[15rem] object-cover' src="https://cdn.pixabay.com/index/2025/04/03/05-02-43-324_1440x550.jpg" alt="" />
            </section>
            <section className='pl-6'>
                <div className='flex justify-between items-start mt-5 h-[5rem]'>
                    <Avatar
                        className='transform -translate-y-24 bg-white'
                        alt='code with Himesh'
                        src='https://img.icons8.com/bubbles/100/user.png'
                        sx={{ width: '10rem', height: '10rem', border: '4px solid white' }}
                    />
                    {
                        true ? <Button onClick={handleOpenProfileModal} variant='contained' sx={{ borderRadius: '20px' }}>
                            Edit Profile
                        </Button> :
                            <Button onClick={handleFollowUserModal} variant='contained' sx={{ borderRadius: '20px' }}>
                                {true ? "Follow" : "Unfollow"}
                            </Button>
                    }
                </div>
                <div>
                    <div className='flex items-center'>
                        <h1 className='font-bold text-lg'>code with himesh</h1>
                        {true && <VerifiedIcon className='ml-2 w-5 h-5' sx={{ color: '#1d9bf0' }} />}
                    </div>
                    <h1 className='text-gray-500'>@himeshnishant1</h1>
                </div>
                <div className='mt-2 space-y-3'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, aperiam sint. In, non sint.</p>
                    <div className='py-1 flex space-x-5'>
                        <div className='flex items-center text-gray-500'>
                            <BusinessCenterIcon />
                            <p className='ml-2'>Education</p>
                        </div>
                        <div className='flex items-center text-gray-500'>
                            <LocationOnIcon />
                            <p className='ml-2'>Noida, India</p>
                        </div>
                        <div className='flex items-center text-gray-500'>
                            <CalendarMonthIcon />
                            <p className='ml-2'>Joined Jun 2024</p>
                        </div>
                    </div>
                    <div className='py-1 flex space-x-5'>
                        <div className='flex items-centre space-x-1 font-semibold'>
                            <span>500</span>
                            <span className='text-gray-500'>Followers</span>
                        </div>
                        <div className='flex items-centre space-x-1 font-semibold'>
                            <span>187</span>
                            <span className='text-gray-500'>Following</span>
                        </div>
                    </div>
                </div>
            </section >
            <section className='py-5'>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={tabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                                <Tab label="Tweets" value="1" />
                                <Tab label="Replies" value="2" />
                                <Tab label="Media" value="3" />
                                <Tab label="Likes" value="4" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            {[1,2,3,4,5].map(key => (
                                <TweetCard key={key}/>
                            ))}
                        </TabPanel>
                        <TabPanel value="2">Users Replies</TabPanel>
                        <TabPanel value="3">Media</TabPanel>
                        <TabPanel value="4">Likes</TabPanel>
                    </TabContext>
                </Box>
            </section>
            <section>
                <ProfileModal open={openProfileModal} handleClose={handleCloseProfileModal}/>
            </section>
        </div >
    );
}

export default ProfilePage;
