import ComponentsDatatablesMultipleTables from '@/components/hrm/data/bizmeka/bizmeka_tables';
import IconCode from '@/components/icon/icon-code';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Multiple Tables',
};

const MultipleTables = () => {
    return (
        <div>
            <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                    <IconCode />
                </div>
                <span className="ltr:mr-3 rtl:ml-3">👷‍♂️ 개발 중인 페이지입니다. 👷‍♀️ </span>
            </div>
            <ComponentsDatatablesMultipleTables />
        </div>
    );
};

export default MultipleTables;
