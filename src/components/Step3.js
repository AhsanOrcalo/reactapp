import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAppSelector } from '../services/store';
import { setJobExperience } from '../services/slices/form';

const Step3 = () => {
    const [jobExperience, setJobExperienceState] = useState({ jobTitle: '', company: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userInfoData = useAppSelector(
        (state) => state?.globalSlice?.userInfo,
    );

    const educationInfoData = useAppSelector(
        (state) => state?.globalSlice?.educationInfo,
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobExperienceState({ ...jobExperience, [name]: value });
    };

    const handleFinish = async () => {
        if (jobExperience === null || jobExperience.jobTitle === '' || jobExperience.company === '') {
            return alert('Please fill all the fields');
        } else {

        dispatch(setJobExperience(jobExperience));
        const dataToSubmit = { ...userInfoData,...educationInfoData, jobExperience };
        await axios.post('/post-endpoint', dataToSubmit);
        navigate('/summary');
        }
    };
    const handleBack = () => {
        navigate('/step2');
    };
    return (
        <div style={{width:"30%",margin:"auto"}}>
            <h2>Job Experience</h2>
            <div>
                <input
                    type="text"
                    name="jobTitle"
                    placeholder="Job Title"
                    value={jobExperience.jobTitle}
                    onChange={handleChange}
                    style={{
                        padding: '10px',
                        marginBottom: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                        width:"100%"
                    }}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={jobExperience.company}
                    onChange={handleChange}
                    style={{
                        padding: '10px',
                        marginBottom: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                        width:"100%"
                    }}
                />
            </div>
            <button onClick={handleBack}>Back</button>

            <button onClick={handleFinish}>Finish</button>
        </div>
    );
};

export default Step3;
