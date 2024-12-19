import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image'
import ErrorImage from '@/public/assets/images/error/404-error.svg'


export const metadata: Metadata = {
    title: 'Error 404',
};

const NotFound = () => {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
            <div className="px-6 py-16 text-center font-semibold before:container before:absolute before:left-1/2 before:aspect-square before:-translate-x-1/2 before:rounded-full before:bg-[linear-gradient(180deg,#4361EE_0%,rgba(67,97,238,0)_50.73%)] before:opacity-10 md:py-20">
                <div className="relative">
                    <Image src={ErrorImage} alt="404" className="dark-img mx-auto -mt-10 w-full max-w-xs object-cover h-100 w-96 md:-mt-14 md:max-w-xl"/>
                    <Image src={ErrorImage} alt="404" className="light-img mx-auto -mt-10 w-full max-w-xs object-cover h-100 w-96 md:-mt-14 md:max-w-xl"/>
                    <p className="mt-5 text-base dark:text-white">죄송합니다. 페이지를 찾을 수 없습니다.</p>
                    <p className="mt-5 text-sm dark:text-white">존재하지 않는 주소를 입력하셨거나, 요청하신 페이지에 주소가 변경, 삭제되어 찾을 수 없습니다.</p>
                    <Link href="/" className="btn btn-gradient mx-auto !mt-7 w-max border-0 uppercase shadow-none">
                        Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
