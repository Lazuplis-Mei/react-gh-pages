import { Link } from "react-router-dom";

export const menuItems = [
    {
        key: '1',
        label: <Link to="/react-gh-pages/encoder_baseCode">Base编码</Link>,
    },
    {
        key: '2',
        label: <Link to="/react-gh-pages/encoder_chineseCode">中文编码</Link>,
    },
    {
        key: '3',
        label: <Link to="/react-gh-pages/encoder_quotedPrintable">QuotedPrintable</Link>,
    },
];

export const menuItems2 = [
    {
        key: '1',
        label: <Link to="/react-gh-pages/encoder_chineseCode_commercialCode">中文电码</Link>,
    },
    {
        key: '2',
        label: <Link to="/react-gh-pages/about">拼音注音</Link>,
    },
];