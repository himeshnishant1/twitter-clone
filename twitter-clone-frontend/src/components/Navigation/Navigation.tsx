import React from 'react'
import XIcon from '@mui/icons-material/X';
import navigationMenu, { NavigationItem } from "./NavigationMenu";
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Navigation() {
    const naviagte = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        handleClose();
    };

    function onClickNavItemNavigate(navItem: NavigationItem): void {
        if (navItem.title === "Profile") {
            naviagte(`/profile/${5}`);
        }
        else {
            naviagte(navItem.path);
        }
    }

    return (
        <div className='h-screen sticky top-0'>
            <div className='py-5'>
                <XIcon fontSize='large' />
            </div>
            <nav className='space-y-6'>
                {navigationMenu.map((navItem, key) => (
                    <div key={key} onClick={() => onClickNavItemNavigate(navItem)} className='cursor-pointer flex space-x-3 items-center'>
                        {<navItem.icon />}
                        <p className='text-xl'>{navItem.title}</p>
                    </div>
                ))}
            </nav>
            <div className='py-10'>
                <Button
                    sx={{ width: '100%', borderRadius: '29px', py: '15px', bgcolor: '#1d9bf0', color: 'white' }}
                    variant={'contained'}>
                    Tweet
                </Button>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex flex-row items-center space-x-1">
                    <Avatar
                        alt='username'
                        src='https://img.icons8.com/bubbles/100/user.png'
                    />
                    <div className='flex flex-col'>
                        <span>Himesh Maurya</span>
                        <span className='opacity-70'>@himeshnishant1</span>
                    </div>

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
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
