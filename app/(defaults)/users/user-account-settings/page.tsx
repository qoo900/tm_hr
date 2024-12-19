import ComponentsUsersAccountSettingsTabs from '@/components/users/account-settings/components-users-account-settings-tabs';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: '인적사항 수정',
};

const UserAccountSettings = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="/users/profile" className="text-primary hover:underline">
                        인사정보
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>인적사항 수정</span>
                </li>
            </ul>
            <ComponentsUsersAccountSettingsTabs />
        </div>
    );
};

export default UserAccountSettings;
