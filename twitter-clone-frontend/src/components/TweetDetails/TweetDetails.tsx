import React from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from "react-router-dom";
import TweetCard from "../TweetCard/TweetCard";
import { Divider } from "@mui/material";

function TweetDetails() {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);

    return (
        <React.Fragment>
            <section className={`z-50 flex items-center sticky top-0 bg-white/95 backdrop-blur-sm`}>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
                <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>Tweet</h1>
            </section>
            <section>
                <TweetCard key={1} />
                <Divider sx={{margin: '2rem 0rem',}}/>
            </section>
            <section>
                {[1, 2, 3, 4].map(item => (
                    <TweetCard key={item} />
                ))}
            </section>
        </React.Fragment>
    );
}

export default TweetDetails;
