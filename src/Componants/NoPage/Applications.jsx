import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Applications.scss'; 

const Applications = () => {
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        fetchApplicants();
    }, []);

    const fetchApplicants = () => {
        axios.get('http://localhost:3035/applicants')
            .then(response => {
                setApplicants(response.data);
            })
            .catch(error => {
                console.error('Error fetching applicants:', error);
            });
    };

    const handleDownload = (filename) => {
        window.open(`http://localhost:3035/download/${filename}`, '_blank');
    };

    return (
        <div className="Applications">
            <h2>Applicant List</h2>
            <ul>
                {applicants.map(applicant => (
                    <li key={applicant._id}>
                        <div>
                            <span>Name: {applicant.name}</span>
                            <span>Email: {applicant.email}</span>
                            <span>Phone: {applicant.phone}</span>
                            <span>Position: {applicant.position}</span>
                            <button onClick={() => handleDownload(applicant.resume)}>Download Resume</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Applications;
