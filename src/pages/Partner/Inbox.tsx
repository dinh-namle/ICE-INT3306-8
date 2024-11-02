import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Inbox = () => {
    const navigate = useNavigate();

    const handleNavigate = (path: string) => {
        navigate(path);
    };
    return (
        <div>Inbox</div>
    )
}

export default Inbox;