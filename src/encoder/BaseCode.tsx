import { Button, Card, Flex, Typography } from "antd";
import { Link } from "react-router-dom";

function BaseCode() {
    return (
        <Flex vertical={false} gap='middle' wrap>
            <Card hoverable style={{ height: 150 }}>
                <Flex vertical align="center">
                    <Typography.Title level={3}>
                        Base64编码解码
                    </Typography.Title>
                    <Link to="/react-gh-pages/encoder_baseCode_base64">
                        <Button type="primary">进入</Button>
                    </Link>

                </Flex>
            </Card>
            <Card hoverable style={{ height: 150 }}>
                <Flex vertical align="center">
                    <Typography.Title level={3}>
                        Base32编码解码
                    </Typography.Title>
                    <Link to="/react-gh-pages/encoder_baseCode_base32">
                        <Button type="primary">进入</Button>
                    </Link>
                </Flex>
            </Card>
            <Card hoverable style={{ height: 150 }}>
                <Flex vertical align="center">
                    <Typography.Title level={3}>
                        Base100编码解码
                    </Typography.Title>
                    <Link to="/react-gh-pages/encoder_baseCode_base100">
                        <Button type="primary">进入</Button>
                    </Link>
                </Flex>
            </Card>
            <Card hoverable style={{ height: 150 }}>
                <Flex vertical align="center">
                    <Typography.Title level={3}>
                        Base16编码解码
                    </Typography.Title>
                    <Link to="/react-gh-pages/encoder_baseCode_base16">
                        <Button type="primary">进入</Button>
                    </Link>
                </Flex>
            </Card>
        </Flex>
    )
}

export default BaseCode;