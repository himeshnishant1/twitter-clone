import React, { useState } from 'react'
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VerifiedIcon from '@mui/icons-material/Verified';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import ReplyModal from '../ReplyModal/ReplyModal';

function TweetCard(props: {key: number}) {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [openReplyModal, setOpenReplyModal] = useState(false);
    const handleOpenReplyModal = () => setOpenReplyModal(true);
    const handleCloseReplyModal = () => setOpenReplyModal(false);

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = () => {
        handleClose();
    };

    const handleEdit = () => {
        handleClose();
    };

    const handleCreateReTweet = () => {
        console.log('handleCreateReTweet');
    }

    const handleLikeTweet = () => {
        console.log("handleLikeTweet");
    }

    return (
        <div key={props.key} className=''>
            {/* <div className='flex items-center font-semibold text-grey-700 py-2'>
        <RepeatIcon/>
        <p>You Tweet</p>
      </div> */}

            <div className='flex space-x-5'>
                <Avatar
                    onClick={() => navigate(`/profile/${6}`)}
                    className='cursor-pointer'
                    alt='username'
                    src='https://img.icons8.com/bubbles/100/user.png'
                />
                <div className='w-full'>
                    <div className='flex justify-between items-center'>
                        <div className='flex cursor-pointer items-center space-x-2'>
                            <span className='font-semibold'>Code With Himesh</span>
                            <span className='text-gray-600'>@himeshnishant1 · 2m</span>
                            <VerifiedIcon className='ml-2 w-5 h-5' sx={{ color: '#1d9bf0' }} />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div onClick={() => navigate(`/tweet/${3}`)} className="cursor-pointer">
                            <p className='mb-2 p-0'>Let have a protest tommorow - Himesh Maurya</p>
                            <img
                                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                                src="https://picsum.photos/1200/800"
                                alt="" />
                        </div>
                        <div className='py-5 flex flex-wrap justify-between items-center'>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleOpenReplyModal} />
                                <p>43</p>
                            </div>
                            <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                                <RepeatIcon className='cursor-pointer' onClick={handleCreateReTweet} />
                                <p>54</p>
                            </div>
                            <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                                {
                                    true ? <FavoriteIcon className='cursor-pointer' onClick={handleLikeTweet} /> :
                                        <FavoriteBorderIcon className='cursor-pointer' onClick={handleLikeTweet} />
                                }
                                <p>54</p>
                            </div>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <BarChartIcon className='cursor-pointer' onClick={handleOpenReplyModal} />
                                <p>430</p>
                            </div>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <FileUploadIcon className='cursor-pointer' onClick={handleOpenReplyModal} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-auto'>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MoreHorizIcon />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleDelete}>Logout</MenuItem>
                        <MenuItem onClick={handleEdit}>Edit</MenuItem>
                    </Menu>
                </div>
            </div>
            <ReplyModal open={openReplyModal} handleClose={handleCloseReplyModal}/>
        </div>
    );
}

export default TweetCard;
