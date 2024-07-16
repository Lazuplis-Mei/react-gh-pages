import { CommercialCode as CommercialCodeConverter } from './utils/CommercialCode'
import { Flex, Input, Button, message, Breadcrumb } from 'antd';
import { useMediaQuery, useWindowSize } from "@uidotdev/usehooks";
import { menuItems, menuItems2 } from "./MenuItems";
const { TextArea } = Input;

function CommercialCode() {

    function encode() {
        let text: string = (document.getElementById('text') as any).value;

        text = CommercialCodeConverter.toCodesString(text);

        message.info('编码完成');
        (document.getElementById('text2') as any).value = text;
    };

    function decode() {
        let text = (document.getElementById('text') as any).value;

        try {
            text = CommercialCodeConverter.fromCodeString(text);
        } catch (error: any) {
            message.error('解码失败:' + error.message);
            return;
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
                        title: '中文编码',
                        menu: { items: menuItems },
                    },
                    {
                        title: '中文电码',
                        menu: { items: menuItems2 },
                    }
                ]}
            />
            <h2>中文电码</h2>
            <TextArea style={style} id='text' />
            <Flex gap="middle" vertical={false} align='center'>
                <Button type="primary" onClick={encode}>编码</Button>
                <Button type="primary" onClick={decode}>解码</Button>
            </Flex >
            <TextArea disabled style={style} id='text2' />
        </Flex >
    )
}

export default CommercialCode