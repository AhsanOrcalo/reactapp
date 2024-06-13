import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../services/store';
import { setEducationInfo } from '../services/slices/form';

const Step2 = () => {
    const [educationInfo, setEducationInfoState] = useState({ degree: '', school: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducationInfoState({ ...educationInfo, [name]: value });
    };

    const handleNext = () => {
        if (educationInfo === null || educationInfo.degree === '' || educationInfo.school === '') {
            return alert('Please fill all the fields');
        } else {
        dispatch(setEducationInfo(educationInfo));
        navigate('/step3');
        }
    };
    const handleBack = () => {
        navigate('/step1');
    };

    return (
        <div style={{ width: "30%", margin: "auto" }}>
            <h2>Educational Information</h2>
            <div>
                <input
                    type="text"
                    name="degree"
                    placeholder="Degree"
                    value={educationInfo.degree}
                    onChange={handleChange}
                    style={{
                        padding: '10px',
                        marginBottom: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                        width: "100%"
                    }}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="school"
                    placeholder="School"
                    value={educationInfo.school}
                    onChange={handleChange}
                    style={{
                        padding: '10px',
                        marginBottom: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                        width: "100%"
                    }}
                />
            </div>

            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default Step2;
