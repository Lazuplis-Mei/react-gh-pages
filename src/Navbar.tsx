import React from 'react'
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
                        key: 'item1',
                        label: <li><Link to="/react-gh-pages">Base64</Link></li>

                    },
                    {
                        key: 'item2',
                        label: <li><Link to="/react-gh-pages/base32">Base32</Link></li>
                    }
                ]

            },
            {
                key: 'sub2',
                label: '中文编码',
                children: [
                    {
                        key: 'item3',
                        label: <li><Link to="/react-gh-pages/about">中文电码</Link></li>

                    },
                    {
                        key: 'item4',
                        label: <li><Link to="/react-gh-pages/about">中文拼音</Link></li>
                    }
                ]
            },
            {

                key: 'item5',
                label: <li><Link to="/react-gh-pages/about">BubbleBabble编码</Link></li>

            },
        ]
    },
    {
        type: 'divider',
    },

]



function NavBar() {
    return (
        <Menu style={{ width: 256, }}
            defaultOpenKeys={['main1']}
            mode="inline"
            items={items}
        />
    );
}

export default NavBar;