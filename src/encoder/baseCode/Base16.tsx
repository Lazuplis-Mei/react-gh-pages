import { Base16 as Base16Converter } from './utils/Base16'
import { GBK } from './utils/GBK';
import { DownOutlined } from '@ant-design/icons';
import { Flex, Input, Dropdown, Button, message, Breadcrumb } from 'antd';
import { useMediaQuery, useWindowSize } from "@uidotdev/usehooks";
import { menuItems, menuItems2 } from "./MenuItems";
import { useState } from 'react';
import type { MenuProps } from 'antd';
const { TextArea } = Input;

function Base16() {

    const dropdownItems = [
        {
            key: '1',
            label: 'UTF-8',
        },
        {
            key: '2',
            label: 'GBK',
        }
    ]
    const [method, setMethod] = useState('UTF-8');
    const handleMenuClick: MenuProps['onClick'] = (e) => {
        let item = dropdownItems.find(i => i?.key === e.key);
        if (item) {
            setMethod(item.label);
        }
    };
    const menuProps = {
        items: dropdownItems,
        onClick: handleMenuClick,
    };

    function encode() {
        let text: string = (document.getElementById('text') as any).value;

        let bytes = new Uint8Array();
        if (method === 'UTF-8') {
            bytes = new TextEncoder().encode(text);
        }
        else if (method === 'GBK') {
            bytes = GBK.gbkEncode(text);
        }
        text = Base16Converter.toBase16(bytes);

        message.info('编码完成');
        (document.getElementById('text2') as any).value = text;
    };

    function decode() {
        let text = (document.getElementById('text') as any).value;

        let bytes = Base16Converter.fromBase16(text);
        if (method === 'UTF-8') {
            text = new TextDecoder('utf-8').decode(bytes);
        }
        else if (method === 'GBK') {
            text = GBK.gbkDecode(bytes);
        }

        message.info('解码完成');
        (document.getElementById('text2') as any).value = text;
    };

    const size = useWindowSize();
    const style: any = { height: 120, resize: 'none', minWidth: 400 };
    if (size.width) {
        if (size.width <= 768)
            style.width = size.width - 80;
        else
            style.width = size.width - 280;
    }
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

    return (
        <Flex gap="middle" vertical align="center" style={{ margin: isSmallDevice ? '40px 40px' : '40px 0' }} >
            <Breadcrumb
                items={[
                    {
                        title: '编码',
                    },
                    {
                        title: 'Base编码',
                        menu: { items: menuItems },
                    },
                    {
                        title: 'Base16',
                        menu: { items: menuItems2 },
                    }
                ]}
            />
            <h2>Base16编码</h2>
            <TextArea style={style} id='text' />
            <Flex gap="middle" vertical={false} align='center'>
                <label>编码方式</label>
                <Dropdown menu={menuProps}>
                    <Button style={{ width: 120 }} >
                        <label>{method}</label>
                        <DownOutlined />
                    </Button>
                </Dropdown>
                <Button type="primary" onClick={encode}>编码</Button>
                <Button type="primary" onClick={decode}>解码</Button>
            </Flex >
            <TextArea disabled style={style} id='text2' />
        </Flex >
    )
}

export default Base16