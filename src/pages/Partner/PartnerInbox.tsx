import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PartnerInbox = () => {
    const navigate = useNavigate();

    const handleNavigate = (path: string) => {
        navigate(path);
    };
    return (
        <div>Inbox</div>
    )
}

export default PartnerInbox;