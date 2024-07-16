import { Button, Card, Flex, Typography } from "antd";
import { Link } from "react-router-dom";

function ChineseCode() {
    return (
        <Flex vertical={false} gap='middle' wrap>
            <Card hoverable style={{ width: 300, height: 150 }}>
                <Flex vertical align="center">
                    <Typography.Title level={3}>
                        中文电码查询
                    </Typography.Title>
                    <Link to="/react-gh-pages/encoder_chineseCode_commercialCode">
                        <Button type="primary">进入</Button>
                    </Link>
                </Flex>
            </Card>
            <Card hoverable style={{ width: 300, height: 150 }}>
                <Flex vertical align="center">
                    <Typography.Title level={3}>
                        拼音注音转换
                    </Typography.Title>
                    <Link to="/react-gh-pages/about">
                        <Button type="primary">进入</Button>
                    </Link>
                </Flex>
            </Card>
        </Flex>
    )
}

export default ChineseCode;