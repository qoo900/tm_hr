'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { IRootState } from '@/store';
import { toggleTheme, toggleSidebar, toggleRTL } from '@/store/themeConfigSlice';
import Dropdown from '@/components/dropdown';
import IconMenu from '@/components/icon/icon-menu';
import IconSun from '@/components/icon/icon-sun';
import IconMoon from '@/components/icon/icon-moon';
import IconLaptop from '@/components/icon/icon-laptop';
import IconUser from '@/components/icon/icon-user';
import IconLogout from '@/components/icon/icon-logout';
import IconMenuDashboard from '@/components/icon/menu/icon-menu-dashboard';
import IconCaretDown from '@/components/icon/icon-caret-down';
import IconMenuApps from '@/components/icon/menu/icon-menu-apps';
import IconMenuComponents from '@/components/icon/menu/icon-menu-components';
import IconMenuElements from '@/components/icon/menu/icon-menu-elements';
import IconMenuDatatables from '@/components/icon/menu/icon-menu-datatables';
import IconMenuForms from '@/components/icon/menu/icon-menu-forms';
import IconMenuPages from '@/components/icon/menu/icon-menu-pages';
import IconMenuMore from '@/components/icon/menu/icon-menu-more';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image'
import SimbolLogoLight from '@/public/assets/images/light_tm_symbol_logo.svg'
import SimbolLogoDark from '@/public/assets/images/dark_tm_symbol_logo.svg'
import ProfileLogo from '@/public/assets/images/technologyst_hires.png'


const Header = () => {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]');
        if (selector) {
            const all: any = document.querySelectorAll('ul.horizontal-menu .nav-link.active');
            for (let i = 0; i < all.length; i++) {
                all[0]?.classList.remove('active');
            }

            let allLinks = document.querySelectorAll('ul.horizontal-menu a.active');
            for (let i = 0; i < allLinks.length; i++) {
                const element = allLinks[i];
                element?.classList.remove('active');
            }
            selector?.classList.add('active');

            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link');
                if (ele) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele?.classList.add('active');
                    });
                }
            }
        }
    }, [pathname]);

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';

    const themeConfig = useSelector((state: IRootState) => state.themeConfig);


    return (
        <header className={`z-40 ${themeConfig.semidark && themeConfig.menu === 'horizontal' ? 'dark' : ''}`}>
            <div className="shadow-sm">
                <div className="relative flex w-full items-center bg-white px-5 py-2.5 dark:bg-black">
                    <div className="horizontal-logo flex items-center justify-between ltr:mr-2 rtl:ml-2 lg:hidden">
                        <Link href="/" className="main-logo flex shrink-0 items-center">
                        
                            <Image src={SimbolLogoLight} alt="logo" className="light-img inline w-8 ltr:-ml-1 rtl:-mr-1"/>
                            <Image src={SimbolLogoDark} alt="logo" className="dark-img inline w-8 ltr:-ml-1 rtl:-mr-1"/>
                            
                            <span className="hidden align-middle text-2xl  font-semibold  transition-all duration-300 ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light md:inline">HR</span>
                        </Link>
                        <button
                            type="button"
                            className="collapse-icon flex flex-none rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary ltr:ml-2 rtl:mr-2 dark:bg-dark/40 dark:text-[#d0d2d6] dark:hover:bg-dark/60 dark:hover:text-primary lg:hidden"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <IconMenu className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="flex items-center space-x-1.5 ltr:ml-auto rtl:mr-auto rtl:space-x-reverse dark:text-[#d0d2d6] sm:flex-1 ltr:sm:ml-0 sm:rtl:mr-0 lg:space-x-2">
                        <div className="sm:ltr:mr-auto sm:rtl:ml-auto">

                        </div>
                        <div>
                            {themeConfig.theme === 'light' ? (
                                <button
                                    className={`${
                                        themeConfig.theme === 'light' &&
                                        'flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60'
                                    }`}
                                    onClick={() => dispatch(toggleTheme('dark'))}
                                >
                                    <IconSun />
                                </button>
                            ) : (
                                ''
                            )}
                            {themeConfig.theme === 'dark' && (
                                <button
                                    className={`${
                                        themeConfig.theme === 'dark' &&
                                        'flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60'
                                    }`}
                                    onClick={() => dispatch(toggleTheme('system'))}
                                >
                                    <IconMoon />
                                </button>
                            )}
                            {themeConfig.theme === 'system' && (
                                <button
                                    className={`${
                                        themeConfig.theme === 'system' &&
                                        'flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60'
                                    }`}
                                    onClick={() => dispatch(toggleTheme('light'))}
                                >
                                    <IconLaptop />
                                </button>
                            )}
                        </div>

                        <div className="dropdown flex shrink-0">
                            <Dropdown
                                offset={[0, 8]}
                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                btnClassName="relative group block"
                                button={
                                    <Image src={ProfileLogo} alt="userProfile" className="h-9 w-9 rounded-full object-cover saturate-50 group-hover:saturate-100"/>
                                }
                            >
                                <ul className="w-[230px] !py-0 font-semibold text-dark dark:text-white-dark dark:text-white-light/90">
                                    <li>
                                        <div className="flex items-center px-4 py-4">
                                            <Image src={ProfileLogo} alt="userProfile" className="h-10 w-10 rounded-md object-cover"/>
                                            <div className="truncate ltr:pl-4 rtl:pr-4">
                                                <h4 className="text-base">
                                                    TEST
                                                    <span className="rounded bg-success-light px-1 text-xs text-success ltr:ml-2 rtl:ml-2">Admin</span>
                                                </h4>
                                                <button type="button" className="text-black/60 hover:text-primary dark:text-dark-light/60 dark:hover:text-white">
                                                    bhgu00@trendmecca.co.kr
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <Link href="/users/profile" className="dark:hover:text-white">
                                            <IconUser className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" />
                                            인사정보
                                        </Link>
                                    </li>
                                    <li className="border-t border-white-light dark:border-white-light/10">
                                        <Link href="/auth/boxed-signin" className="!py-3 text-danger">
                                            <IconLogout className="h-4.5 w-4.5 shrink-0 rotate-90 ltr:mr-2 rtl:ml-2" />
                                            로그아웃
                                        </Link>
                                    </li>
                                </ul>
                            </Dropdown>
                        </div>
                    </div>
                </div>

                {/* horizontal menu */}
                <ul className="horizontal-menu hidden border-t border-[#ebedf2] bg-white px-6 py-1.5 font-semibold text-black rtl:space-x-reverse dark:border-[#191e3a] dark:bg-black dark:text-white-dark lg:space-x-1.5 xl:space-x-8">
                    <li className="menu nav-item relative">
                        <button type="button" className="nav-link">
                            <div className="flex items-center">
                                <IconMenuDashboard className="shrink-0" />
                                <span className="px-1">{('dashboard')}</span>
                            </div>
                            <div className="right_arrow">
                                <IconCaretDown />
                            </div>
                        </button>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/">{('sales')}</Link>
                            </li>
                            <li>
                                <Link href="/analytics">{('analytics')}</Link>
                            </li>
                            <li>
                                <Link href="/finance">{('finance')}</Link>
                            </li>
                            <li>
                                <Link href="/crypto">{('crypto')}</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="menu nav-item relative">
                        <button type="button" className="nav-link">
                            <div className="flex items-center">
                                <IconMenuApps className="shrink-0" />
                                <span className="px-1">{('apps')}</span>
                            </div>
                            <div className="right_arrow">
                                <IconCaretDown />
                            </div>
                        </button>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/apps/chat">{('chat')}</Link>
                            </li>
                            <li>
                                <Link href="/apps/mailbox">{('mailbox')}</Link>
                            </li>
                            <li>
                                <Link href="/apps/todolist">{('todo_list')}</Link>
                            </li>
                            <li>
                                <Link href="/apps/notes">{('notes')}</Link>
                            </li>
                            <li>
                                <Link href="/apps/scrumboard">{('scrumboard')}</Link>
                            </li>
                            <li>
                                <Link href="/apps/contacts">{('contacts')}</Link>
                            </li>
                            <li className="relative">
                                <button type="button">
                                    {('invoice')}
                                    <div className="-rotate-90 ltr:ml-auto rtl:mr-auto rtl:rotate-90">
                                        <IconCaretDown />
                                    </div>
                                </button>
                                <ul className="absolute top-0 z-[10] hidden min-w-[180px] rounded bg-white p-0 py-2 text-dark shadow ltr:left-[95%] rtl:right-[95%] dark:bg-[#1b2e4b] dark:text-white-dark">
                                    <li>
                                        <Link href="/apps/invoice/list">{('list')}</Link>
                                    </li>
                                    <li>
                                        <Link href="/apps/invoice/preview">{('preview')}</Link>
                                    </li>
                                    <li>
                                        <Link href="/apps/invoice/add">{('add')}</Link>
                                    </li>
                                    <li>
                                        <Link href="/apps/invoice/edit">{('edit')}</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/apps/calendar">{('calendar')}</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="menu nav-item relative">
                        <button type="button" className="nav-link">
                            <div className="flex items-center">
                                <IconMenuComponents className="shrink-0" />
                                <span className="px-1">{('components')}</span>
                            </div>
                            <div className="right_arrow">
                                <IconCaretDown />
                            </div>
                        </button>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/components/tabs">{('tabs')}</Link>
                            </li>
                            <li>
                                <Link href="/components/accordions">{('accordions')}</Link>
                            </li>
                            <li>
                                <Link href="/components/modals">{('modals')}</Link>
                            </li>
                            <li>
                                <Link href="/components/cards">{('cards')}</Link>
                            </li>
                            <li>
                                <Link href="/components/carousel">{('carousel')}</Link>
                            </li>
                            <li>
                                <Link href="/components/countdown">{('countdown')}</Link>
                            </li>
                            <li>
                                <Link href="/components/counter">{('counter')}</Link>
                            </li>
                            <li>
                                <Link href="/components/sweetalert">{('sweet_alerts')}</Link>
                            </li>
                            <li>
                                <Link href="/components/timeline">{('timeline')}</Link>
                            </li>
                            <li>
                                <Link href="/components/notifications">{('notifications')}</Link>
                            </li>
                            <li>
                                <Link href="/components/media-object">{('media_object')}</Link>
                            </li>
                            <li>
                                <Link href="/components/list-group">{('list_group')}</Link>
                            </li>
                            <li>
                                <Link href="/components/pricing-table">{('pricing_tables')}</Link>
                            </li>
                            <li>
                                <Link href="/components/lightbox">{('lightbox')}</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="menu nav-item relative">
                        <button type="button" className="nav-link">
                            <div className="flex items-center">
                                <IconMenuElements className="shrink-0" />
                                <span className="px-1">{('elements')}</span>
                            </div>
                            <div className="right_arrow">
                                <IconCaretDown />
                            </div>
                        </button>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/elements/alerts">{('alerts')}</Link>
                            </li>
                            <li>
                                <Link href="/elements/avatar">{('avatar')}</Link>
                            </li>
                            <li>
                                <Link href="/elements/badges">{('badges')}</Link>
                            </li>
                            <li>
                                <Link href="/elements/breadcrumbs">{('breadcrumbs')}</Link>
                            </li>
                            <li>
                                <Link href="/elements/buttons">{('buttons')}</Link>
                            </li>
                            <li>
                                <Link href="/elements/buttons-group">{('button_groups')}</Link>
                            </li>
                            <li>
                                <Link href="/elements/color-library">{('color_library')}</Link>
                            </li>
                            <li>
                                <Link href="/elements/dropdown">{('dropdown')}</Link>
                            </li>
                            <li>
                                <Link href="/elements/infobox">{('infobox')}</Link>
                            </li>
                            <li>
                                <Link href="/elements/jumbotron">{('jumbotron')}</Link>
                            </li>
                            <li>
                                <Link href="/elements/loader">{('loader')}</Link>
                            </li>
                            <li>
                                <Link href="/elements/pagination">{('pagination')}</Link>
                            </li>
                            <li>
                                <Link href="/elements/popovers">{('popovers')}</Link>
                            </li>
                            <li>
                                <Link href="/elements/progress-bar">{('progress_bar')}</Link>
                            </li>
                            <li>
                                <Link href="/elements/search">{('search')}</Link>
                            </li>
                            <li>
                                <Link href="/elements/tooltips">{('tooltips')}</Link>
                            </li>
                            <li>
                                <Link href="/elements/treeview">{('treeview')}</Link>
                            </li>
                            <li>
                                <Link href="/elements/typography">{('typography')}</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="menu nav-item relative">
                        <button type="button" className="nav-link">
                            <div className="flex items-center">
                                <IconMenuDatatables className="shrink-0" />
                                <span className="px-1">{('tables')}</span>
                            </div>
                            <div className="right_arrow">
                                <IconCaretDown />
                            </div>
                        </button>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/tables">{('tables')}</Link>
                            </li>
                            <li className="relative">
                                <button type="button">
                                    {('datatables')}
                                    <div className="-rotate-90 ltr:ml-auto rtl:mr-auto rtl:rotate-90">
                                        <IconCaretDown />
                                    </div>
                                </button>
                                <ul className="absolute top-0 z-[10] hidden min-w-[180px] rounded bg-white p-0 py-2 text-dark shadow ltr:left-[95%] rtl:right-[95%] dark:bg-[#1b2e4b] dark:text-white-dark">
                                    <li>
                                        <Link href="/datatables/basic">{('basic')}</Link>
                                    </li>
                                    <li>
                                        <Link href="/datatables/advanced">{('advanced')}</Link>
                                    </li>
                                    <li>
                                        <Link href="/datatables/skin">{('skin')}</Link>
                                    </li>
                                    <li>
                                        <Link href="/datatables/order-sorting">{('order_sorting')}</Link>
                                    </li>
                                    <li>
                                        <Link href="/datatables/multi-column">{('multi_column')}</Link>
                                    </li>
                                    <li>
                                        <Link href="/datatables/multiple-tables">{('multiple_tables')}</Link>
                                    </li>
                                    <li>
                                        <Link href="/datatables/alt-pagination">{('alt_pagination')}</Link>
                                    </li>
                                    <li>
                                        <Link href="/datatables/checkbox">{('checkbox')}</Link>
                                    </li>
                                    <li>
                                        <Link href="/datatables/range-search">{('range_search')}</Link>
                                    </li>
                                    <li>
                                        <Link href="/datatables/export">{('export')}</Link>
                                    </li>
                                    <li>
                                        <Link href="/datatables/column-chooser">{('column_chooser')}</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="menu nav-item relative">
                        <button type="button" className="nav-link">
                            <div className="flex items-center">
                                <IconMenuForms className="shrink-0" />
                                <span className="px-1">{('forms')}</span>
                            </div>
                            <div className="right_arrow">
                                <IconCaretDown />
                            </div>
                        </button>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/forms/basic">{('basic')}</Link>
                            </li>
                            <li>
                                <Link href="/forms/input-group">{('input_group')}</Link>
                            </li>
                            <li>
                                <Link href="/forms/layouts">{('layouts')}</Link>
                            </li>
                            <li>
                                <Link href="/forms/validation">{('validation')}</Link>
                            </li>
                            <li>
                                <Link href="/forms/input-mask">{('input_mask')}</Link>
                            </li>
                            <li>
                                <Link href="/forms/select2">{('select2')}</Link>
                            </li>
                            <li>
                                <Link href="/forms/touchspin">{('touchspin')}</Link>
                            </li>
                            <li>
                                <Link href="/forms/checkbox-radio">{('checkbox_and_radio')}</Link>
                            </li>
                            <li>
                                <Link href="/forms/switches">{('switches')}</Link>
                            </li>
                            <li>
                                <Link href="/forms/wizards">{('wizards')}</Link>
                            </li>
                            <li>
                                <Link href="/forms/file-upload">{('file_upload')}</Link>
                            </li>
                            <li>
                                <Link href="/forms/quill-editor">{('quill_editor')}</Link>
                            </li>
                            <li>
                                <Link href="/forms/markdown-editor">{('markdown_editor')}</Link>
                            </li>
                            <li>
                                <Link href="/forms/date-picker">{('date_and_range_picker')}</Link>
                            </li>
                            <li>
                                <Link href="/forms/clipboard">{('clipboard')}</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="menu nav-item relative">
                        <button type="button" className="nav-link">
                            <div className="flex items-center">
                                <IconMenuPages className="shrink-0" />
                                <span className="px-1">{('pages')}</span>
                            </div>
                            <div className="right_arrow">
                                <IconCaretDown />
                            </div>
                        </button>
                        <ul className="sub-menu">
                            <li className="relative">
                                <button type="button">
                                    {('users')}
                                    <div className="-rotate-90 ltr:ml-auto rtl:mr-auto rtl:rotate-90">
                                        <IconCaretDown />
                                    </div>
                                </button>
                                <ul className="absolute top-0 z-[10] hidden min-w-[180px] rounded bg-white p-0 py-2 text-dark shadow ltr:left-[95%] rtl:right-[95%] dark:bg-[#1b2e4b] dark:text-white-dark">
                                    <li>
                                        <Link href="/users/profile">{('profile')}</Link>
                                    </li>
                                    <li>
                                        <Link href="/users/user-account-settings">{('account_settings')}</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/pages/knowledge-base">{('knowledge_base')}</Link>
                            </li>
                            <li>
                                <Link href="/pages/contact-us-boxed" target="_blank">
                                    {('contact_us_boxed')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/pages/contact-us-cover" target="_blank">
                                    {('contact_us_cover')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/pages/faq">{('faq')}</Link>
                            </li>
                            <li>
                                <Link href="/pages/coming-soon-boxed" target="_blank">
                                    {('coming_soon_boxed')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/pages/coming-soon-cover" target="_blank">
                                    {('coming_soon_cover')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/pages/maintenence" target="_blank">
                                    {('maintenence')}
                                </Link>
                            </li>
                            <li className="relative">
                                <button type="button">
                                    {('error')}
                                    <div className="-rotate-90 ltr:ml-auto rtl:mr-auto rtl:rotate-90">
                                        <IconCaretDown />
                                    </div>
                                </button>
                                <ul className="absolute top-0 z-[10] hidden min-w-[180px] rounded bg-white p-0 py-2 text-dark shadow ltr:left-[95%] rtl:right-[95%] dark:bg-[#1b2e4b] dark:text-white-dark">
                                    <li>
                                        <Link href="/pages/error404" target="_blank">
                                            {('404')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/error500" target="_blank">
                                            {('500')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/error503" target="_blank">
                                            {('503')}
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative">
                                <button type="button">
                                    {('login')}
                                    <div className="-rotate-90 ltr:ml-auto rtl:mr-auto rtl:rotate-90">
                                        <IconCaretDown />
                                    </div>
                                </button>
                                <ul className="absolute top-0 z-[10] hidden min-w-[180px] rounded bg-white p-0 py-2 text-dark shadow ltr:left-[95%] rtl:right-[95%] dark:bg-[#1b2e4b] dark:text-white-dark">
                                    <li>
                                        <Link href="/auth/cover-login" target="_blank">
                                            {('login_cover')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/auth/boxed-signin" target="_blank">
                                            {('login_boxed')}
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative">
                                <button type="button">
                                    {('register')}
                                    <div className="-rotate-90 ltr:ml-auto rtl:mr-auto rtl:rotate-90">
                                        <IconCaretDown />
                                    </div>
                                </button>
                                <ul className="absolute top-0 z-[10] hidden min-w-[180px] rounded bg-white p-0 py-2 text-dark shadow ltr:left-[95%] rtl:right-[95%] dark:bg-[#1b2e4b] dark:text-white-dark">
                                    <li>
                                        <Link href="/auth/cover-register" target="_blank">
                                            {('register_cover')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/auth/boxed-signup" target="_blank">
                                            {('register_boxed')}
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative">
                                <button type="button">
                                    {('password_recovery')}
                                    <div className="-rotate-90 ltr:ml-auto rtl:mr-auto rtl:rotate-90">
                                        <IconCaretDown />
                                    </div>
                                </button>
                                <ul className="absolute top-0 z-[10] hidden min-w-[180px] rounded bg-white p-0 py-2 text-dark shadow ltr:left-[95%] rtl:right-[95%] dark:bg-[#1b2e4b] dark:text-white-dark">
                                    <li>
                                        <Link href="/auth/cover-password-reset" target="_blank">
                                            {('recover_id_cover')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/auth/boxed-password-reset" target="_blank">
                                            {('recover_id_boxed')}
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative">
                                <button type="button">
                                    {('lockscreen')}
                                    <div className="-rotate-90 ltr:ml-auto rtl:mr-auto rtl:rotate-90">
                                        <IconCaretDown />
                                    </div>
                                </button>
                                <ul className="absolute top-0 z-[10] hidden min-w-[180px] rounded bg-white p-0 py-2 text-dark shadow ltr:left-[95%] rtl:right-[95%] dark:bg-[#1b2e4b] dark:text-white-dark">
                                    <li>
                                        <Link href="/auth/cover-lockscreen" target="_blank">
                                            {('unlock_cover')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/auth/boxed-lockscreen" target="_blank">
                                            {('unlock_boxed')}
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="menu nav-item relative">
                        <button type="button" className="nav-link">
                            <div className="flex items-center">
                                <IconMenuMore className="shrink-0" />
                                <span className="px-1">{('more')}</span>
                            </div>
                            <div className="right_arrow">
                                <IconCaretDown />
                            </div>
                        </button>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/dragndrop">{('drag_and_drop')}</Link>
                            </li>
                            <li>
                                <Link href="/charts">{('charts')}</Link>
                            </li>
                            <li>
                                <Link href="/font-icons">{('font_icons')}</Link>
                            </li>
                            <li>
                                <Link href="/widgets">{('widgets')}</Link>
                            </li>
                            <li>
                                <Link href="https://vristo.sbthemes.com" target="_blank">
                                    {('documentation')}
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
