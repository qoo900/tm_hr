'use client';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { toggleSidebar } from '@/store/themeConfigSlice';
import AnimateHeight from 'react-animate-height';
import { IRootState } from '@/store';
import { useState, useEffect } from 'react';
import IconCaretsDown from '@/components/icon/icon-carets-down';
import IconMenuDashboard from '@/components/icon/menu/icon-menu-dashboard';
import IconCaretDown from '@/components/icon/icon-caret-down';
import IconMinus from '@/components/icon/icon-minus';
import IconMenuCalendar from '@/components/icon/menu/icon-menu-calendar';
import IconMenuTables from '@/components/icon/menu/icon-menu-tables';
import { usePathname } from 'next/navigation';
import Image from 'next/image'
import LogoImageLight from '@/public/assets/images/light_24_trendmecca_logo.svg'
import LogoImageDark from '@/public/assets/images/dark_24_trendmecca_logo.svg'


const Sidebar = () => {
    const dispatch = useDispatch();
    const pathname = usePathname();
    const [currentMenu, setCurrentMenu] = useState<string>('');
    // const [errorSubMenu, setErrorSubMenu] = useState(false);
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        setActiveRoute();
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const setActiveRoute = () => {
        let allLinks = document.querySelectorAll('.sidebar ul a.active');
        for (let i = 0; i < allLinks.length; i++) {
            const element = allLinks[i];
            element?.classList.remove('active');
        }
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        selector?.classList.add('active');
    };

    return (
        <div className={semidark ? 'dark' : ''}>
            <nav
                className={`sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}
            >
                <div className="h-full bg-white dark:bg-black">
                    <div className="flex items-center justify-between px-4 py-3">
                        <Link href="/" className="main-logo flex shrink-0 items-center">
                            
                            <Image src={LogoImageLight} alt="logo" className="light-img ml-[5px] w-32 flex-none"/>
                            <Image src={LogoImageDark} alt="logo" className="dark-img ml-[5px] w-32 flex-none"/>
                            
                            <span className="align-middle text-2xl font-semibold ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light lg:inline">HR</span>
                        </Link>

                        <button
                            type="button"
                            className="collapse-icon flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 rtl:rotate-180 dark:text-white-light dark:hover:bg-dark-light/10"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <IconCaretsDown className="m-auto rotate-90" />
                        </button>
                    </div>
                    <PerfectScrollbar className="relative h-[calc(100vh-80px)]">
                        <ul className="relative space-y-0.5 p-4 py-0 font-semibold">
                            <li className="menu nav-item">
                                <Link href="/">
                                    <button type="button" className={`${currentMenu === 'Home' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('Home')}>
                                        <div className="flex items-center">
                                            <IconMenuDashboard className="shrink-0 group-hover:!text-primary" />
                                            <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{('Home')}</span>
                                        </div>
                                    </button>
                                </Link>

                            </li>

                            <h2 className="-mx-4 mb-1 flex items-center bg-white-light/30 px-7 py-3 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
                                <IconMinus className="hidden h-5 w-4 flex-none" />
                                <span>{('인사관리')}</span>
                            </h2>

                            <li className="nav-item">
                                <ul>

                                    <li className="menu nav-item">
                                        <button type="button" className={`${currentMenu === 'hrmData' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('hrmData')}>
                                            <div className="flex items-center">
                                                <IconMenuCalendar className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{('근무기록')}</span>
                                            </div>

                                            <div className={currentMenu !== 'hrmData' ? '-rotate-90 rtl:rotate-90' : ''}>
                                                <IconCaretDown />
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu === 'hrmData' ? 'auto' : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <Link href="/hrm/data/total">{('전체 연동')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/hrm/data/caps">{('Caps 데이터')}</Link>
                                                </li>
                                                <li>
                                                    <Link href="/hrm/data/bizmeka">{('Bizmeka 데이터')}</Link>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/hrm/data/download" className="group">
                                            <div className="flex items-center">
                                                <IconMenuTables className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{('엑셀 다운로드')}</span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </PerfectScrollbar>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
