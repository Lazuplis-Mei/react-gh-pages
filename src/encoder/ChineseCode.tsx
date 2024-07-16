import { Button, Card, Flex, Typography, Divider } from 'antd';
import { Link } from "react-router-dom";
import logoCommercialCode from './CommercialCode.png'
import logoZhuyin from './Zhuyin.png'

function ChineseCode() {

    const cardStyle: React.CSSProperties = {
        width: 400,
        height: 240
    };

    const imgStyle: React.CSSProperties = {
        display: 'block',
        width: 50,
        height: 50,
    };

    return (
        <Flex wrap gap="middle" style={{ padding: '32px 0 0 32px' }}>
            <Card hoverable style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden' } }}>
                <Flex vertical={false} gap="middle" style={{ padding: '32px 0 0 32px' }}>
                    <img
                        alt="avatar"
                        src={logoCommercialCode}
                        style={imgStyle}
                    />
                    <Flex vertical>
                        <Typography.Text>中文电码查询</Typography.Text>
                        <Typography.Text type="secondary">[编码][中文]</Typography.Text>
                    </Flex>
                </Flex>
                <Divider />
                <Typography.Text type="secondary" style={{ padding: 16 }}>中文电码在线查询</Typography.Text>
                <Flex justify='flex-end' style={{ padding: 16 }}>
                    <Link to="/react-gh-pages/encoder_chineseCode_commercialCode">
                        <Button type="primary">进入</Button>
                    </Link>
                </Flex>
            </Card>
            <Card hoverable style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden' } }}>
                <Flex vertical={false} gap="middle" style={{ padding: '32px 0 0 32px' }}>
                    <img
                        alt="avatar"
                        src={logoZhuyin}
                        style={imgStyle}
                    />
                    <Flex vertical>
                        <Typography.Text>拼音注音转换</Typography.Text>
                        <Typography.Text type="secondary">[编码][中文]</Typography.Text>
                    </Flex>
                </Flex>
                <Divider />
                <Typography.Text type="secondary" style={{ padding: 16 }}>拼音注音在线转换</Typography.Text>
                <Flex justify='flex-end' style={{ padding: 16 }}>
                    <Link to="/react-gh-pages/about">
                        <Button type="primary">进入</Button>
                    </Link>
                </Flex>
            </Card>
        </Flex>
    )
}

export default ChineseCode;