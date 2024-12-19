const Footer = () => {
    return (
            <div className="p-6 pt-0 mt-auto text-center dark:text-white-dark ltr:sm:text-left rtl:sm:text-right">
                <span className="float-left">
                    시스템 문의 : 인사/총무/보안팀 구본협 대리 010-9915-6572
                </span>
                <span className="float-right">
                    © {new Date().getFullYear()}. TRENDMECCA Co., Ltd. All rights reserved.
                </span>
            </div>
    );
};

export default Footer;
