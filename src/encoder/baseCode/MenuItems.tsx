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
        label: <Link to="/react-gh-pages/encoder_baseCode_base64">Base64</Link>,
    },
    {
        key: '2',
        label: <Link to="/react-gh-pages/encoder_baseCode_base32">Base32</Link>,
    },
    {
        key: '3',
        label: <Link to="/react-gh-pages/encoder_baseCode_base100">Base100</Link>,
    },
    {
        key: '4',
        label: <Link to="/react-gh-pages/encoder_baseCode_base16">Base16</Link>,
    },
];