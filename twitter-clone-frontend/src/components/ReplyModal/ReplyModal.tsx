import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import { Avatar, Button } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

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
    content: string,
    image: string,
    tweetId: number,
}

function ReplyModal(
    { open, handleClose }: { open: boolean, handleClose: any }
) {
    const [uploadingImage, setUploadingImage] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState<File | null>(null);
    const handleSubmit = (values: updateForm) => {
        console.log("handle submit", values)
    };

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            content: "",
            image: "",
            tweetId: 4,

        },
        onSubmit: handleSubmit
    });

    function handleSelectImage(event: ChangeEvent<HTMLInputElement>): void {
        setUploadingImage(true);
        const imageUrl = (event.target.files!)[0];
        formik.setFieldValue("image", imageUrl);
        setSelectedImage(imageUrl);
        setUploadingImage(false);
    }

    return (
        <React.Fragment>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className='py-10'>
                        <div className='flex space-x-5'>
                            <Avatar alt='username' src='https://img.icons8.com/bubbles/100/user.png' />
                            <div className='w-full'>
                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <input
                                            type="text"
                                            className='border-none outline-none text-xl bg-transparent'
                                            placeholder='what is happening'
                                            {...formik.getFieldProps("content")} />
                                        {formik.errors.content && formik.touched.content && (
                                            <span className='text-red-500'>{formik.errors.content}</span>
                                        )}
                                    </div>
                                    {/* <div>
                                            <img src="" alt="" />
                                    </div> */}
                                    <div className='flex justify-between items-center mt-5'>
                                        <div className='flex space-x-5 items-center'>
                                            <label className='flex items-center space-x-2 rounded-md cursor-pointer'>
                                                <ImageIcon className='text-[#1d9bf0]' />
                                                <input type="file" name='imageFile' className='hidden' onChange={handleSelectImage} />
                                            </label>
                                            <FmdGoodIcon className='text-[#1d9bf0]' />
                                            <TagFacesIcon className='text-[#1d9bf0]' />
                                        </div>
                                        <div>
                                            <Button
                                                sx={{ width: '100%', borderRadius: '20px', py: '8px', px: '20px', bgcolor: '#1d9bf0', color: 'white' }}
                                                type='submit'>
                                                Tweet
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

export default ReplyModal;