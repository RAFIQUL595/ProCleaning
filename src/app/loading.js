'use client';
import React, { useState, useEffect } from 'react';
import { FadeLoader } from "react-spinners";

const Loading = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!showLoader) return null;

    return (
        <div className="flex items-center justify-center min-h-screen">
            <FadeLoader color="#04BE64" />
        </div>
    );
};

export default Loading;
