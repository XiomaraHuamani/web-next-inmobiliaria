import Link from 'next/link';
import React from 'react';
import Image from "next/image";

const BreadCrumb = ({title, innerTitle, bgImage}) => {
    return (
        <div className="page__banner" style={{backgroundImage: `url(${bgImage})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="page__banner-title">
                            <h1>{title}</h1>
                            {/* <Image src="/img/quinta-tawa/logo.svg" alt="" width={450} height={250} style={{paddingBottom: '50px'}}/> */}
                            <div className="page__banner-title-menu">
                                <ul>
                                    <li><Link href="/">Inicio</Link></li>
                                    <li><span>-</span>{innerTitle}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadCrumb;