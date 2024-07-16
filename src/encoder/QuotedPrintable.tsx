import { QuotedPrintable as QuotedPrintableEncoder } from './utils/QuotedPrintable';
import { Flex, Input, Button, message, Breadcrumb } from 'antd';
import { useMediaQuery, useWindowSize } from "@uidotdev/usehooks";
import { Link } from 'react-router-dom';
const { TextArea } = Input;

function QuotedPrintable() {

    function encode() {
        let text: string = (document.getElementById('text') as any).value;
        text = QuotedPrintableEncoder.encode(text);
        message.info('编码完成');
        (document.getElementById('text2') as any).value = text;
    };

    function decode() {
        let text = (document.getElementById('text') as any).value;
        text = QuotedPrintableEncoder.decode(text);
        message.info('解码完成');
        (document.getElementById('text2') as any).value = text;
    };

    const menuItems = [
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
                        title: 'QuotedPrintable',
                        menu: { items: menuItems },
                    },
                ]}
            />
            <h2>QuotedPrintable</h2>
            <TextArea style={style} id='text' />
            <Flex gap="middle" vertical={false} align='center'>
                <Button type="primary" onClick={encode}>编码</Button>
                <Button type="primary" onClick={decode}>解码</Button>
            </Flex >
            <TextArea disabled style={style} id='text2' />
        </Flex >
    )
}

export default QuotedPrintable