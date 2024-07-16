import { Link } from 'react-router-dom'
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: 'main1',
        label: '编码',
        children: [
            {
                key: 'sub1',
                label: 'Base编码',
                children: [
                    {
                        key: 's1i1',
                        label: <Link to="/react-gh-pages/encoder_baseCode_base64">Base64</Link>
                    },
                    {
                        key: 's1i2',
                        label: <Link to="/react-gh-pages/encoder_baseCode_base32">Base32</Link>
                    },
                    {
                        key: 's1i3',
                        label: <Link to="/react-gh-pages/encoder_baseCode_base100">Base100</Link>
                    },
                    {
                        key: 's1i4',
                        label: <Link to="/react-gh-pages/encoder_baseCode_base16">Base16</Link>
                    }
                ]

            },
            {
                type: 'divider',
            },
            {
                key: 'sub2',
                label: '中文编码',
                children: [
                    {
                        key: 's2i1',
                        label: <Link to="/react-gh-pages/encoder_chineseCode_commercialCode">中文电码</Link>

                    },
                    {
                        key: 's2i2',
                        label: <Link to="/react-gh-pages/about">拼音注音</Link>
                    }
                ]
            },
            {
                type: 'divider',
            },
            {
                key: 's1',
                label: <Link to="/react-gh-pages/encoder_quotedPrintable">QuotedPrintable</Link>

            },
        ]
    },
]


function NavBar() {
    return (
        <Menu
            defaultOpenKeys={['main1']}
            mode="inline"
            items={items}
        />
    );
}

export default NavBar;