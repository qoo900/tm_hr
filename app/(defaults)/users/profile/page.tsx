import IconCalendar from '@/components/icon/icon-calendar';
import IconCoffee from '@/components/icon/icon-coffee';
import IconCreditCard from '@/components/icon/icon-credit-card';
import IconDribbble from '@/components/icon/icon-dribbble';
import IconGithub from '@/components/icon/icon-github';
import IconMail from '@/components/icon/icon-mail';
import IconMapPin from '@/components/icon/icon-map-pin';
import IconPencilPaper from '@/components/icon/icon-pencil-paper';
import IconPhone from '@/components/icon/icon-phone';
import IconShoppingBag from '@/components/icon/icon-shopping-bag';
import IconTag from '@/components/icon/icon-tag';
import IconTwitter from '@/components/icon/icon-twitter';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image'
import ProfileLogo from '@/public/assets/images/technologyst_hires.png'

export const metadata: Metadata = {
    title: '인사정보',
};

const Profile = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="/users/profile" className="text-primary hover:underline">
                        인사정보
                    </Link>
                </li>
                {/* <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>인사정보</span>
                </li> */}
            </ul>
            <div className="pt-5">
                <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="panel">
                        <div className="mb-5 flex items-center justify-between">
                            <h5 className="text-lg font-semibold dark:text-white-light">인적사항</h5>
                            <Link href="/users/user-account-settings" className="btn btn-primary rounded-full p-2 ltr:ml-auto rtl:mr-auto">
                                <IconPencilPaper />
                            </Link>
                        </div>
                        <div className="mb-5">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={ProfileLogo} alt="img" className="mb-5 h-24 w-24 rounded-full  object-cover"/>
                                <p className="text-xl font-semibold text-primary">TEST</p>
                            </div>
                            <ul className="m-auto mt-5 flex max-w-[160px] flex-col space-y-4 font-semibold text-white-dark">
                                <li className="flex items-center gap-2">
                                    <IconCoffee className="shrink-0" /> Web Developer
                                </li>
                                <li className="flex items-center gap-2">
                                    <IconCalendar className="shrink-0" />
                                    0000.00.00
                                </li>
                                <li className="flex items-center gap-2">
                                    <IconMapPin className="shrink-0" />
                                    서울시 강남구
                                </li>
                                <li>
                                    <button className="flex items-center gap-2">
                                        <IconMail className="h-5 w-5 shrink-0" />
                                        <span className="truncate text-primary">bhgu00@trendmecca.co.kr</span>
                                    </button>
                                </li>
                                <li className="flex items-center gap-2">
                                    <IconPhone />
                                    <span className="whitespace-nowrap" dir="ltr">
                                        010-9915-6572
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="panel lg:col-span-2 xl:col-span-3">
                        <div className="mb-5">
                            <h5 className="text-lg font-semibold dark:text-white-light">근태현황</h5>
                        </div>
                        <div className="mb-5">
                            <div className="table-responsive font-semibold text-[#515365] dark:text-white-light">
                                <table className="whitespace-nowrap">
                                    <thead>
                                        <tr>
                                            <th>구분 1</th>
                                            <th>구분 2</th>
                                            <th>구분 3</th>
                                            <th className="text-center">구분 4</th>
                                        </tr>
                                    </thead>
                                    <tbody className="dark:text-white-dark">
                                        <tr>
                                            <td>AAAA</td>
                                            <td>
                                                <div className="flex h-1.5 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                                    <div className="w-[50%] rounded-full bg-danger"></div>
                                                </div>
                                            </td>
                                            <td className="text-danger">50%</td>
                                            <td className="text-center">0000</td>
                                        </tr>
                                        <tr>
                                            <td>BBBB</td>
                                            <td>
                                                <div className="flex h-1.5 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                                    <div className="w-1/2 rounded-full bg-info"></div>
                                                </div>
                                            </td>
                                            <td className="text-success">50%</td>
                                            <td className="text-center">0000</td>
                                        </tr>
                                        <tr>
                                            <td>CCCC</td>
                                            <td>
                                                <div className="flex h-1.5 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                                    <div className="w-[50%] rounded-full  bg-warning"></div>
                                                </div>
                                            </td>
                                            <td className="text-danger">50%</td>
                                            <td className="text-center">0000</td>
                                        </tr>
                                        <tr>
                                            <td>DDDD</td>
                                            <td>
                                                <div className="flex h-1.5 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                                    <div className="w-[50%] rounded-full  bg-success"></div>
                                                </div>
                                            </td>
                                            <td className="text-success">50%</td>
                                            <td className="text-center">0000</td>
                                        </tr>

                                        <tr>
                                            <td>EEEE</td>
                                            <td>
                                                <div className="flex h-1.5 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                                    <div className="w-1/2  rounded-full  bg-secondary"></div>
                                                </div>
                                            </td>
                                            <td className="text-success">50%</td>
                                            <td className="text-center">0000</td>
                                        </tr>
                                        <tr>
                                            <td>FFFF</td>
                                            <td>
                                                <div className="flex h-1.5 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                                    <div className="w-[50%] rounded-full  bg-danger"></div>
                                                </div>
                                            </td>
                                            <td className="text-danger">50%</td>
                                            <td className="text-center">0000</td>
                                        </tr>
                                        <tr>
                                            <td>GGGG</td>
                                            <td>
                                                <div className="flex h-1.5 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                                    <div className="w-[50%] rounded-full bg-primary"></div>
                                                </div>
                                            </td>
                                            <td className="text-success">50%</td>
                                            <td className="text-center">0000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
