"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
    useEffect(() => {
        document.title = pageTitle + ' - Inmobiliaria';
    }, []);
};

export default SEO;
