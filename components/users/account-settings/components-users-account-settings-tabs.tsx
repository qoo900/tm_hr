'use client';
import IconFacebook from '@/components/icon/icon-facebook';
import IconGithub from '@/components/icon/icon-github';
import IconLinkedin from '@/components/icon/icon-linkedin';
import IconTwitter from '@/components/icon/icon-twitter';
import IconUser from '@/components/icon/icon-user';
import React, { useState } from 'react';
import Image from 'next/image'
import ProfileLogo from '@/public/assets/images/technologyst_hires.png'

const ComponentsUsersAccountSettingsTabs = () => {
    const [tabs, setTabs] = useState<string>('home');
    const toggleTabs = (name: string) => {
        setTabs(name);
    };

    return (
        <div className="pt-5">
            <div>
                <ul className="mb-5 overflow-y-auto whitespace-nowrap border-b border-[#ebedf2] font-semibold dark:border-[#191e3a] sm:flex">
                    <li className="inline-block">
                        <button
                            onClick={() => toggleTabs('home')}
                            className={`flex gap-2 border-b border-transparent p-4 hover:border-primary hover:text-primary ${tabs === 'home' ? '!border-primary text-primary' : ''}`}
                        >
                            <IconUser className="h-5 w-5" />
                            기본
                        </button>
                    </li>
                </ul>
            </div>
            {tabs === 'home' ? (
                <div>
                    <form className="mb-5 rounded-md border border-[#ebedf2] bg-white p-4 dark:border-[#191e3a] dark:bg-black">
                        <h6 className="mb-5 text-lg font-bold">기본 사항</h6>
                        <div className="flex flex-col sm:flex-row">
                            <div className="mb-5 w-full sm:w-2/12 ltr:sm:mr-4 rtl:sm:ml-4">
                            <Image src={ProfileLogo} alt="userProfile" className="mx-auto h-20 w-20 rounded-full object-cover md:h-32 md:w-32"/>
                            </div>
                            <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name">성명</label>
                                    <input id="name" type="text" placeholder="TEST" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="rank">직급</label>
                                    <select id="rank" className="form-select text-white-dark" name="rank" defaultValue="대리">
                                        <option value="서울특별시">서울특별시</option>
                                        <option value="26">부산광역시</option>
                                        <option value="27">대구광역시</option>
                                        <option value="인천광역시">인천광역시</option>
                                        <option value="29">광주광역시</option>
                                        <option value="30">대전광역시</option>
                                        <option value="31">울산광역시</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="department">소속부서</label>
                                    <select id="department" className="form-select text-white-dark" name="department" defaultValue="경영지원본부">
                                        <option value="서울특별시">서울특별시</option>
                                        <option value="26">부산광역시</option>
                                        <option value="27">대구광역시</option>
                                        <option value="인천광역시">인천광역시</option>
                                        <option value="29">광주광역시</option>
                                        <option value="30">대전광역시</option>
                                        <option value="31">울산광역시</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="position">직책</label>
                                    <select id="position" className="form-select text-white-dark" name="position" defaultValue="팀원">
                                        <option value="서울특별시">서울특별시</option>
                                        <option value="26">부산광역시</option>
                                        <option value="27">대구광역시</option>
                                        <option value="인천광역시">인천광역시</option>
                                        <option value="29">광주광역시</option>
                                        <option value="30">대전광역시</option>
                                        <option value="31">울산광역시</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="address">주소(현 주거지)</label>
                                    <input id="address" type="text" placeholder="New York" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="phone">연락처</label>
                                    <input id="phone" type="text" placeholder="+1 (530) 555-12121" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="email">이메일</label>
                                    <input id="email" type="email" placeholder="Jimmy@gmail.com" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="web">비상 연락처</label>
                                    <input id="web" type="text" placeholder="+1 (530) 555-12121" className="form-input" />
                                </div>
                                <div>
                                    <label className="inline-flex cursor-pointer">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span className="relative text-white-dark checked:bg-none">변경 내용을 저장하시겠습니까?</span>
                                    </label>
                                </div>
                                <div className="mt-3 sm:col-span-2">
                                    <button type="button" className="btn btn-primary">
                                        저장하기
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default ComponentsUsersAccountSettingsTabs;
