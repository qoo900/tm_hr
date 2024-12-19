import ComponentsDatatablesColumnChooser from '@/components/hrm/data/total/data_total_column_chooser';
import IconCode from '@/components/icon/icon-code';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Column Chooser Table',
};

const ColumnChooser = () => {
    return (
        <div>
            <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                    <IconCode />
                </div>
                <span className="ltr:mr-3 rtl:ml-3">👷‍♂️ 개발 중인 페이지입니다. 👷‍♀️ </span>
            </div>
            <ComponentsDatatablesColumnChooser />
        </div>
    );
};

export default ColumnChooser;
