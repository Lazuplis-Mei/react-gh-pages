import { base32Encode, base32Decode } from './baseCode/base32';
import React from 'react'
import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Flex, Input, Dropdown, Button, message } from 'antd';
import type { MenuProps } from 'antd';
const { TextArea } = Input;

function Base32() {
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: 'UTF-8',
        },
        {
            key: '2',
            label: 'Hex',
        }
    ]
    const [codec, setCodec] = useState('UTF-8');
    const handleMenuClick: MenuProps['onClick'] = (e) => {
        var item: any = items.find(i => i?.key === e.key);
        if (item) {
            setCodec(item.label);
        }
    };
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    function encode() {
        var text: string = (document.querySelector('#text') as any).value;
        if (codec === 'UTF-8') {
            text = base32Encode(new TextEncoder().encode(text));
            message.info('编码完成');
        }
        else if (codec === 'Hex') {
            var nums: number[] = [];
            text.replace(/[0-9a-fA-F]{2}/g, function (a): string {
                nums.push(parseInt(a, 16));
                return '';
            });
            text = base32Encode(new Uint8Array(nums));
            message.info('编码完成');

        }
        (document.querySelector('#text2') as any).value = text;
    };
    function decode() {
        var text = (document.querySelector('#text') as any).value;
        if (codec === 'UTF-8') {
            text = new TextDecoder('utf-8').decode(base32Decode(text))
            message.info('解码完成');
        }
        else if (codec === 'Hex') {
            var chars: string[] = [];
            base32Decode(text).forEach((c) => chars.push(c.toString(16)));
            text = chars.join('');
            message.info('解码完成');
        }
        (document.querySelector('#text2') as any).value = text;
    };
    return (
        <Flex gap="middle" vertical align="center">
            <h2>Base32编码</h2>
            <TextArea style={{ height: 120, minWidth: 400, width: 800, resize: 'none' }} id='text' />
            <Flex gap="middle" vertical={false} align='center'>
                <label>字符编码</label>
                <Dropdown menu={menuProps}>
                    <Button style={{ width: 120 }} >
                        <label>{codec}</label>
                        <DownOutlined />
                    </Button>
                </Dropdown>
                <Button type="primary" onClick={encode}>编码</Button>
                <Button type="primary" onClick={decode}>解码</Button>
            </Flex >
            <TextArea disabled style={{ height: 120, minWidth: 400, width: 800, resize: 'none' }} id='text2' />
        </Flex >
    )
}

export default Base32;