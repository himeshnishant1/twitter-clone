import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import { Avatar, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ChangeEvent } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    outline: 'none',
    borderRadius: 4
};

interface updateForm {
    fullName: string,
    website: string,
    location: string,
    bio: string,
    backgroundImage: string,
    image: string
}

function ProfileModal({open, handleClose}: {open: boolean, handleClose: any}) {
    // const [open, setOpen] = React.useState(false);
    const [uploading, setUploading] = React.useState(false);
    const handleSubmit = (values: updateForm) => {
        console.log("handle submit", values)
    };

    const formik = useFormik({
        initialValues: {
            fullName: "",
            website: "",
            location: "",
            bio: "",
            backgroundImage: "",
            image: ""
        },
        onSubmit: handleSubmit
    });

    function handleImageChange(event: ChangeEvent<HTMLInputElement>): void {
        setUploading(true);
        const { name } = event.target;
        const file = (event.target.files!)[0];
        formik.setFieldValue(name, file);
        setUploading(false);
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-3'>
                                <IconButton onClick={handleClose} aria-label='delete'>
                                    <CloseIcon />
                                </IconButton>
                                <p className=''>Edit Profile</p>
                            </div>
                            <Button type='submit'>
                                Save
                            </Button>
                        </div>
                        <div className='overflow-y-scroll hideScrollBar overflow-x-hidden h-[80vh]'>
                            <React.Fragment>
                                <div className='w-full'>
                                    <div className='relative'>
                                        <img
                                            className="w-full h-[12rem] object-cover object-center"
                                            src="https://cdn.pixabay.com/index/2025/04/07/10-34-36-593_1440x550.jpg"
                                            alt="" />
                                        <input type="file" className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                                            onChange={handleImageChange}
                                            name="" id="" />
                                    </div>
                                </div>
                                <div className='w-full transform -translate-y-20 ml-4 h-[6rem]'>
                                    <div className='relative'>
                                        <Avatar
                                            sx={{ width: '10rem', height: '10rem', border: '4px solid white', backgroundColor: 'white' }}
                                            src='https://img.icons8.com/bubbles/100/user.png' />
                                        <input
                                            type="file"
                                            className='absolute top-0 left-0 w-[10rem] h-full opacity-0 cursor-pointer'
                                            onChange={handleImageChange}
                                            name='image' />
                                    </div>
                                </div>
                            </React.Fragment>

                            <div className='flex flex-col justify-between h-[30rem] space-y-3'>
                                <TextField
                                    id='fullName'
                                    name='fullName'
                                    label="Full Name"
                                    value={formik.values.fullName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                    helperText={formik.touched.fullName && formik.errors.fullName}
                                />
                                <TextField
                                    multiline
                                    rows={4}
                                    id='bio'
                                    name='bio'
                                    label="Bio"
                                    value={formik.values.bio}
                                    onChange={formik.handleChange}
                                    error={formik.touched.bio && Boolean(formik.errors.bio)}
                                    helperText={formik.touched.bio && formik.errors.bio}
                                />
                                <TextField
                                    id='website'
                                    name='website'
                                    label="Website"
                                    value={formik.values.website}
                                    onChange={formik.handleChange}
                                    error={formik.touched.website && Boolean(formik.errors.website)}
                                    helperText={formik.touched.website && formik.errors.website}
                                />
                                <TextField
                                    id='location'
                                    name='location'
                                    label="Location"
                                    value={formik.values.location}
                                    onChange={formik.handleChange}
                                    error={formik.touched.location && Boolean(formik.errors.location)}
                                    helperText={formik.touched.location && formik.errors.location}
                                />
                                <div>
                                    <p className='text-lg'>Birth date . Edit</p>
                                    <p className='text-2xl'>October 26, 1999</p>
                                </div>
                                <p className='py-3 text-lg'>Edit Professional Profile</p>
                            </div>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}

export default ProfileModal;