import { Avatar, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { ChangeEvent, useState } from 'react';
import TweetCard from '../TweetCard/TweetCard';

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweet text is required")
});

function HomeSection() {
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleSubmit = (values: any) => {
    console.log("values", values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });


  function handleSelectImage(event: ChangeEvent<HTMLInputElement>): void {
    setUploadingImage(true);
    const imageUrl = (event.target.files!)[0];
    formik.setFieldValue("image", imageUrl);
    setSelectedImage(imageUrl);
    setUploadingImage(false);
  }

  return (
    <div className='space-y-5'>
      <section>
        <h1 className='py-5 text-xl font-bold opacity-90'>Home</h1>
      </section>
      <section className='pb-10'>
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
                  <FmdGoodIcon className='text-[#1d9bf0]'/>
                  <TagFacesIcon className='text-[#1d9bf0]'/>
                </div>
                <div>
                  <Button
                  sx={{ width: '100%', borderRadius: '20px', py: '8px',px: '20px', bgcolor: '#1d9bf0', color: 'white' }}
                  type='submit'>
                    Tweet
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section>
        {[1,2,3,4,5,6].map(key => <TweetCard key={key}/>)}
      </section>
    </div>
  );
}

export default HomeSection;
