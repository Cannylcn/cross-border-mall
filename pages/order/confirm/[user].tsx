import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Row,
  Col,
  Steps,
  Divider,
  Button,
  Form,
  Input,
  Space,
  Select,
  Checkbox,
  Statistic,
  Descriptions,
  Card,
  Radio,
} from "antd";
import styles from "../../../styles/confirm.module.scss";
import { LeftOutlined, EditOutlined } from "@ant-design/icons";

const { Step } = Steps;
const { Option } = Select;

function deliveryForm() {
  return (
    <div>
      <h3>Distribution plan</h3>
      <Form.Item name="delivery" initialValue={1}>
        <Radio.Group>
          <Space direction="vertical">
            <Radio value={1}>Super Saving -- $6.99</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
      <h3>Remarks (Optional)</h3>
      <Form.Item name="remark">
        <Input size="large" placeholder="Remarks" />
      </Form.Item>
    </div>
  );
}

function payForm() {
  return (
    <div>
      <h3>Method of payment</h3>
      <Form.Item name="pay" initialValue={1}>
        <Radio.Group>
          <Space>
            <Radio value={1}>The credit card</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
      <Space>
        <Form.Item name="CardholderName">
          <Input size="large" placeholder="Cardholder's name" />
        </Form.Item>
        <Form.Item name="LastName">
          <Input size="large" placeholder="Cardholder's last name" />
        </Form.Item>
      </Space>
      <Form.Item name="cardNumber">
        <Input size="large" placeholder="The card number" />
      </Form.Item>
      <Space>
        <Form.Item name="indate">
          <Input size="large" placeholder="The period of validity（MM/YY）" />
        </Form.Item>
        <Form.Item name="securityCode">
          <Input size="large" placeholder="Security code（CVV）" />
        </Form.Item>
      </Space>
      <h3>Billing address</h3>
      <Form.Item name="bill">
        <Select
          size="large"
          style={{ width: "100%" }}
          placeholder="Consistent with the receiving address"
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </Form.Item>
    </div>
  );
}

function contactForm() {
  return (
    <div>
      <h3>Contact email</h3>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
        extra="Used to send order information"
      >
        <Input size="large" placeholder="email" />
      </Form.Item>
      <h3>Shipping address</h3>
      <Space>
        <Form.Item name="last">
          <Input size="large" placeholder="Name (Optional)" />
        </Form.Item>
        <Form.Item
          name="first"
          rules={[{ required: true, message: "Please input your firstname!" }]}
        >
          <Input size="large" placeholder="first" />
        </Form.Item>
      </Space>
      <Form.Item
        name="address"
        rules={[{ required: true, message: "Please input your address!" }]}
      >
        <Input size="large" placeholder="address" />
      </Form.Item>
      <Form.Item name="street">
        <Input
          size="large"
          placeholder="Building, apartment, etc. (Optional)"
        />
      </Form.Item>
      <Form.Item
        name="city"
        rules={[{ required: true, message: "Please input your city!" }]}
      >
        <Input size="large" placeholder="city" />
      </Form.Item>
      <Space>
        <Form.Item
          name="state"
          initialValue="china"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Select size="large" style={{ width: 120 }} placeholder="state">
            <Option value="china">China</Option>
            <Option value="syria">Syria</Option>
            <Option value="belize">Belize</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="province"
          rules={[{ required: true, message: "Please input your province!" }]}
        >
          <Select size="large" style={{ width: 120 }} placeholder="province">
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Form.Item>
        <Form.Item name="postcode">
          <Input size="large" placeholder="postcode" />
        </Form.Item>
      </Space>
      <Form.Item
        name="tel"
        rules={[{ required: true, message: "Please input your telphone!" }]}
        extra="For order information, we will contact you through this phone number"
      >
        <Input size="large" placeholder="telphone" />
      </Form.Item>

      <Form.Item name="save" initialValue={true} valuePropName="checked">
        <Checkbox>Save receipt information for future use</Checkbox>
      </Form.Item>
    </div>
  );
}

export default function Home() {
  // store数据
  const userCartProduct = () => {
    const addCartProduct = useSelector((state: any) => state.addCartProduct);
    return { addCartProduct };
  };

  const { addCartProduct } = userCartProduct();

  const [form] = Form.useForm();

  const router = useRouter();
  const { user, step } = router.query;

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    formatStep(step);
  }, [user, step, addCartProduct]);

  function formatStep(step) {
    switch (step) {
      case "contact_information":
        setCurrent(0);
        break;
      case "shipping_method":
        setCurrent(1);
        break;
      case "payment_method":
        setCurrent(2);
        break;
      default:
        setCurrent(0);
        break;
    }
  }
  function buttonName() {
    switch (current) {
      case 0:
        return "Selecting Delivery Mode";
      case 1:
        return "Selecting Pay Mode";
      case 2:
        return "To complete the order";
      default:
        return "Selecting Delivery Mode";
    }
  }

  const onFinish = (values: any) => {
    console.log("Success:", values);
    switch (current) {
      case 0:
        router.push("/order/confirm/86697?step=shipping_method");
        break;
      case 1:
        router.push("/order/confirm/86697?step=payment_method");
        break;
      case 2:
        router.push("/order/success");
        break;
      default:
        return;
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  function contactInfo() {
    return (
      <Card
        style={{ marginBottom: 24 }}
        actions={[
          <a href="/order/confirm/86697?step=contact_information">
            <EditOutlined key="edit" />
            edit
          </a>,
        ]}
      >
        <Descriptions
          title="Receiving information"
          layout="vertical"
          labelStyle={{ fontWeight: 600 }}
        >
          <Descriptions.Item label="name">Zhou Maomao</Descriptions.Item>
          <Descriptions.Item label="phone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Provinces and cities">Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label="address" span={24}>
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
          {current === 2 ? (
            <Descriptions.Item label="Distribution plan" span={24}>
              Super Saving
            </Descriptions.Item>
          ) : null}
        </Descriptions>
      </Card>
    );
  }

  return (
    <div>
      <Head>
        <title>Komi</title>
        <meta name="description" content="Generated by Komi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Row>
          <Col span={13} className={styles["kz-main-left"]}>
            <h1>Komi</h1>
            <Steps
              size="small"
              current={current}
              style={{ marginBottom: 24, width: 440 }}
            >
              <Step title="Customer information" />
              <Step title="Delivery" />
              <Step title="Pattern of payment" />
            </Steps>
            {/* <Divider>快速结账</Divider>
            <Button type="primary" danger block size="large" htmlType="submit">
              PayPal
            </Button>
            <Divider>或者</Divider> */}
            {current !== 0 ? contactInfo() : null}
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              {current === 0
                ? contactForm()
                : current === 1
                ? deliveryForm()
                : payForm()}
              <Space className={styles["kz-flex-space-between"]}>
                <a onClick={() => router.back()}>
                  <LeftOutlined />
                  Back
                </a>
                <Form.Item>
                  <Button size="large" type="primary" htmlType="submit">
                    {buttonName()}
                  </Button>
                </Form.Item>
              </Space>
              <Divider />
              <div className={styles["km-paytype"]}>
                <Image src="/pay.png" layout="fill" />
              </div>
            </Form>
          </Col>
          <Col span={11} className={styles["kz-main-right"]}>
            <Row>
              <Col span={20}>
                {addCartProduct.map((item) => (
                  <Row
                    key={item.product_id}
                    className={styles["km-cart-product"]}
                  >
                    <Col span={4}>
                      <div className={styles["km-cart-product-img"]}><Image src={item.product_img} layout="fill" /></div>
                    </Col>

                    <Col span={10} offset={1}>
                      <h4>{item.product_name}</h4>
                      <Space size={12} direction="vertical">
                        <span>Color：black</span>
                        <span>Size：S</span>
                      </Space>
                    </Col>
                    <Col span={2}>X1</Col>
                    <Col span={7}>
                      <Statistic
                        value={item.price}
                        precision={2}
                        valueStyle={{
                          color: "#3f8600",
                          fontSize: 16,
                        }}
                        prefix="$"
                      />
                    </Col>
                  </Row>
                ))}
                <Divider />
                <dl className={styles["kz-dl"]}>
                  <dt>Subtotal：</dt>
                  <dd>$22.98</dd>
                </dl>
                <dl className={styles["kz-dl"]}>
                  <dt>Discount：</dt>
                  <dd>- $2.30</dd>
                </dl>
                <dl className={styles["kz-dl"]}>
                  <dt>Freight：</dt>
                  <dd>Calculate later</dd>
                </dl>
                <Divider />
                <dl className={styles["kz-dl"]}>
                  <dt>Total：</dt>
                  <dd>$22.98</dd>
                </dl>
              </Col>
            </Row>
          </Col>
        </Row>
      </main>
    </div>
  );
}
