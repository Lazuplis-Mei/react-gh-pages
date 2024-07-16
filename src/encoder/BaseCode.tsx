import { Button, Card, Flex, Typography, Divider } from 'antd';
import { Link } from "react-router-dom";

function BaseCode() {

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
                        src="https://ctf.bugku.com/upload/20201118/edb7edd135d3d46f709930a95445161e.png"
                        style={imgStyle}
                    />
                    <Flex vertical>
                        <Typography.Text>Base64编码解码</Typography.Text>
                        <Typography.Text type="secondary">[编码][Base系列]</Typography.Text>
                    </Flex>
                </Flex>
                <Divider />
                <Typography.Text type="secondary" style={{ padding: 16 }}>Base64在线编码解码</Typography.Text>
                <Flex justify='flex-end' style={{ padding: 16 }}>
                    <Link to="/react-gh-pages/encoder_baseCode_base64">
                        <Button type="primary">进入</Button>
                    </Link>
                </Flex>
            </Card>
            <Card hoverable style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden' } }}>
                <Flex vertical={false} gap="middle" style={{ padding: '32px 0 0 32px' }}>
                    <img
                        alt="avatar"
                        src="https://ctf.bugku.com/upload/20201118/ec1c30344705c1c7ceb608e7af9b8c28.png"
                        style={imgStyle}
                    />
                    <Flex vertical>
                        <Typography.Text>Base32编码解码</Typography.Text>
                        <Typography.Text type="secondary">[编码][Base系列]</Typography.Text>
                    </Flex>
                </Flex>
                <Divider />
                <Typography.Text type="secondary" style={{ padding: 16 }}>Base32在线编码解码</Typography.Text>
                <Flex justify='flex-end' style={{ padding: 16 }}>
                    <Link to="/react-gh-pages/encoder_baseCode_base32">
                        <Button type="primary">进入</Button>
                    </Link>
                </Flex>
            </Card>
            <Card hoverable style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden' } }}>
                <Flex vertical={false} gap="middle" style={{ padding: '32px 0 0 32px' }}>
                    <img
                        alt="avatar"
                        src="https://ctf.bugku.com/upload/20210217/018573cca0e9da668f2b0ea79c8caed6.png"
                        style={imgStyle}
                    />
                    <Flex vertical>
                        <Typography.Text>Base100编码解码</Typography.Text>
                        <Typography.Text type="secondary">[编码][Base系列]</Typography.Text>
                    </Flex>
                </Flex>
                <Divider />
                <Typography.Text type="secondary" style={{ padding: 16 }}>Base100在线编码解码</Typography.Text>
                <Flex justify='flex-end' style={{ padding: 16 }}>
                    <Link to="/react-gh-pages/encoder_baseCode_base100">
                        <Button type="primary">进入</Button>
                    </Link>
                </Flex>
            </Card>
            <Card hoverable style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden' } }}>
                <Flex vertical={false} gap="middle" style={{ padding: '32px 0 0 32px' }}>
                    <img
                        alt="avatar"
                        src="https://ctf.bugku.com/upload/20201118/c22eba5d9de8809c367c5c23cf89cd40.png"
                        style={imgStyle}
                    />
                    <Flex vertical>
                        <Typography.Text>Base16编码解码</Typography.Text>
                        <Typography.Text type="secondary">[编码][Base系列]</Typography.Text>
                    </Flex>
                </Flex>
                <Divider />
                <Typography.Text type="secondary" style={{ padding: 16 }}>Base16在线编码解码</Typography.Text>
                <Flex justify='flex-end' style={{ padding: 16 }}>
                    <Link to="/react-gh-pages/encoder_baseCode_base16">
                        <Button type="primary">进入</Button>
                    </Link>
                </Flex>
            </Card>
        </Flex>
    )
}

export default BaseCode;