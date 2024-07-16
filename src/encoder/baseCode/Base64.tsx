import { Base16 } from './utils/Base16';
import { Base64 as Base64Converter } from './utils/Base64';
import { GBK } from './utils/GBK';
import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Flex, Input, Dropdown, Button, message, Breadcrumb, Card, Typography } from 'antd';
import { useMediaQuery, useWindowSize } from "@uidotdev/usehooks";
import { menuItems, menuItems2 } from "./MenuItems";
import type { MenuProps } from 'antd';
const { TextArea } = Input;

function Base64() {

    const dropdownItems = [
        {
            key: '1',
            label: 'UTF-8',
        },
        {
            key: '2',
            label: 'GBK',
        },
        {
            key: '3',
            label: 'Hex',
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
        else if (method === 'Hex') {
            bytes = Base16.fromBase16(text);
        }
        text = Base64Converter.toBase64(bytes);

        message.info('编码完成');
        (document.getElementById('text2') as any).value = text;
    };

    function decode() {
        let text: string = (document.getElementById('text') as any).value;

        let bytes: Uint8Array;
        try {
            bytes = Base64Converter.fromBase64(text);
        } catch (error) {
            message.error('解码失败');
            return;
        }
        if (method === 'UTF-8') {
            text = new TextDecoder().decode(bytes);
        }
        else if (method === 'GBK') {
            text = GBK.gbkDecode(bytes);
        }
        else if (method === 'Hex') {
            text = Base16.toBase16(bytes);
        }

        message.info('解码完成');
        (document.getElementById('text2') as any).value = text;
    };

    const windowSize = useWindowSize();
    const style: any = { height: 120, minWidth: 400 };
    if (windowSize.width) {
        if (windowSize.width <= 768)
            style.width = windowSize.width - 80;
        else
            style.width = windowSize.width - 280;
    }
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

    return (
        <Flex gap="middle" vertical align="flex-start" style={{ margin: isSmallDevice ? '40px 40px' : '40px 0' }} >
            <Breadcrumb style={{ padding: '0  0  0 32px' }}
                items={[
                    {
                        title: '编码',
                    },
                    {
                        title: 'Base编码',
                        menu: { items: menuItems },
                    },
                    {
                        title: 'Base64',
                        menu: { items: menuItems2 },
                    }
                ]}
            />
            <Card hoverable>
                <Flex gap="small" vertical>
                    <Typography.Title level={4}>Base64编码</Typography.Title>
                    <Typography.Text type='secondary'>在线BASE64编码解码</Typography.Text>
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
            </Card>
        </Flex >
    )
}

export default Base64;