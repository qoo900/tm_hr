'use client';
import Dropdown from '@/components/dropdown';
import IconHorizontalDots from '@/components/icon/icon-horizontal-dots';
import { IRootState } from '@/store';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';

const ComponentsDashboardAnalytics = () => {
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // totalOffdayOptions
    const totalOffday: any = {
        series: [{ data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100] }],
        options: {
            chart: {
                height: 58,
                type: 'line',
                fontFamily: 'Nunito, sans-serif',
                sparkline: {
                    enabled: true,
                },
                dropShadow: {
                    enabled: true,
                    blur: 3,
                    color: '#009688',
                    opacity: 0.4,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#009688'],
            grid: {
                padding: {
                    top: 5,
                    bottom: 5,
                    left: 5,
                    right: 5,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    // totalOutsideOptions
    const totalOutside: any = {
        series: [{ data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100] }],
        options: {
            chart: {
                height: 58,
                type: 'line',
                fontFamily: 'Nunito, sans-serif',
                sparkline: {
                    enabled: true,
                },
                dropShadow: {
                    enabled: true,
                    blur: 3,
                    color: '#e2a03f',
                    opacity: 0.4,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#e2a03f'],
            grid: {
                padding: {
                    top: 5,
                    bottom: 5,
                    left: 5,
                    right: 5,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };

    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <span>
                        Home
                    </span>
                    {/* <Link href="/" className="text-primary hover:underline">
                        TRENDMECCA HR
                    </Link> */}
                </li>
                {/* <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Dashboard</span>
                </li> */}
            </ul>
            <div className="pt-5">
                <div className="mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="panel h-full sm:col-span-2 lg:col-span-1">
                        {/* statistics */}
                        <div className="mb-5 flex justify-between dark:text-white-light">
                            <h5 className="text-lg font-semibold ">통계</h5>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:text-primary"
                                    button={<IconHorizontalDots className="text-black/70 hover:!text-primary dark:text-white/70" />}
                                >
                                    <ul>
                                        <li>
                                            <button type="button">{new Date().getFullYear()}년 {new Date().getMonth()+1}월</button>
                                        </li>
                                        <li>
                                            <button type="button">{new Date().getFullYear()}년 {new Date().getMonth()}월</button>
                                        </li>
                                        <li>
                                        <button type="button">{new Date().getFullYear()}년 {new Date().getMonth()-1}월</button>
                                        </li>
                                        <li>
                                            <button type="button">{new Date().getFullYear()}년 전체</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="grid gap-8 text-sm font-bold text-[#515365] sm:grid-cols-2">
                            <div>
                                <div>
                                    <div>연차</div>
                                    <div className="text-lg text-[#f8538d]">0,000</div>
                                </div>
                                {isMounted && <ReactApexChart series={totalOffday.series} options={totalOffday.options} type="line" height={58} width={'100%'} />}
                            </div>

                            <div>
                                <div>
                                    <div>외근</div>
                                    <div className="text-lg text-[#f8538d]">0,000</div>
                                </div>

                                {isMounted && <ReactApexChart series={totalOutside.series} options={totalOutside.options} type="line" height={58} width={'100%'} />}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ComponentsDashboardAnalytics;
