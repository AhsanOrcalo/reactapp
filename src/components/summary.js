import React from 'react';
import { useAppSelector } from '../services/store';
import { useNavigate } from 'react-router-dom';

const Summary = () => {

const navigate = useNavigate();
    const userInfoData = useAppSelector(
        (state) => state?.globalSlice?.userInfo,
    );

    const educationInfoData = useAppSelector(
        (state) => state?.globalSlice?.educationInfo,
    );
    const jobExperienceData = useAppSelector(
        (state) => state?.globalSlice?.jobExperience,
    );
    const formData = { ...userInfoData, ...educationInfoData, ...jobExperienceData };

    return (
        <div>
            <h2>Summary</h2>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
            <button onClick={()=> navigate('/step1')}>go to home</button>

        </div>
    );
};

export default Summary;
