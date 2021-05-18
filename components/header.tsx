import React, { useState, useEffect, Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Affix,
  Space,
  Badge,
  Menu,
  Drawer,
  Row,
  Col,
  Statistic,
  Divider,
  InputNumber,
  Button,
} from "antd";
import Image from "next/image";
import { UserOutlined, ShoppingOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

import styles from "../styles/index.module.scss";

export default function Header() {
  // store数据
  const userCartProduct = () => {
    const addCartProduct = useSelector((state: any) => state.addCartProduct);
    return { addCartProduct };
  };

  const router = useRouter();

  const { addCartProduct } = userCartProduct();

  const [visibleDrawer, setVisibleDrawer] = useState(false);

  const [settlement, setSettlement] = useState({
    subtotal: 0,
    discount: 0,
    total: 0,
  });

  useEffect(() => {
    settle();
  }, [addCartProduct]);

  const settle = () => {
    const subtotal = addCartProduct.reduce(
      (total, item) => total + item.price,
      0
    );
    const discount = 6.34;
    const total = subtotal - discount;
    setSettlement({ subtotal, discount, total });
  };

  const handleClick = (e) => {
    if (e.key === "home") {
      router.push("/");
      return;
    }
    router.push(`/${e.key}`);
  };

  const login = () => {
    router.push(`/login`);
  };

  const drawerFooter = () => {
    return (
      <div>
        {addCartProduct.length > 0 ? (
          <>
            <dl className={styles["kz-dl"]}>
              <dt>Subtotal：</dt>
              <dd>${settlement.subtotal}</dd>
            </dl>
            <dl className={styles["kz-dl"]}>
              <dt>Discount：</dt>
              <dd>- ${settlement.discount}</dd>
            </dl>
            <dl className={styles["kz-dl"]}>
              <dt>Total：</dt>
              <dd>${settlement.total}</dd>
            </dl>
          </>
        ) : null}
        <Button
          type="primary"
          danger
          block
          size="large"
          htmlType="submit"
          href="/order/confirm/86697?step=contact_information"
          onClick={() => setVisibleDrawer(false)}
          disabled={addCartProduct.length === 0}
        >
          Checkout
        </Button>
      </div>
    );
  };

  return (
    <>
      <Affix>
        <div className={styles["kz-header-container"]}>
          <div className={styles["kz-header"]}>
            <span>Komi</span>
            <Menu
              onClick={handleClick}
              mode="horizontal"
              className={styles["kz-menu"]}
              style={{ border: 0, fontWeight: 600, fontSize: 16 }}
            >
              <Menu.Item key="home">Home</Menu.Item>
              <Menu.Item key="new">New Arrival</Menu.Item>
              {/* <Menu.Item key="host">热卖</Menu.Item>
            <Menu.Item key="Collaborations">系列联名</Menu.Item>
            <Menu.Item key="mail">男装</Menu.Item>
            <Menu.Item key="women">女装</Menu.Item>
            <Menu.Item key="t">T恤</Menu.Item>
            <Menu.Item key="fleece">卫衣</Menu.Item>
            <Menu.Item key="tide">潮流配件</Menu.Item> */}
            </Menu>
            <Space size={24}>
              <UserOutlined onClick={login} />
              <Badge dot={addCartProduct.length > 0}>
                <ShoppingOutlined
                  style={{ fontSize: 18 }}
                  onClick={() => setVisibleDrawer(true)}
                />
              </Badge>
            </Space>
          </div>
          {/* <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          className={styles["kz-menu"]}
        >
          <Menu.Item key="home">首页</Menu.Item>
          <Menu.Item key="new">新品到货</Menu.Item>
          <Menu.Item key="host">热卖</Menu.Item>
          <Menu.Item key="collaborations">系列联名</Menu.Item>
          <Menu.Item key="mail">男装</Menu.Item>
          <Menu.Item key="women">女装</Menu.Item>
          <Menu.Item key="t">T恤</Menu.Item>
          <Menu.Item key="fleece">卫衣</Menu.Item>
          <Menu.Item key="tide">潮流配件</Menu.Item>
        </Menu> */}
        </div>
      </Affix>
      <Drawer
        title={`YOUR BAG（${addCartProduct.length}）`}
        width={400}
        placement="right"
        onClose={() => setVisibleDrawer(false)}
        visible={visibleDrawer}
        footer={drawerFooter()}
      >
        {addCartProduct.map((item) => (
          <div key={item.product_id} className={styles["kz-cart-product-item"]}>
            <Row gutter={24}>
              <Col span={6}>
                <Image src={item.product_img} layout="fill" />
              </Col>
              <Col span={18}>
                <h4>{item.product_name}</h4>
                <div className={styles["kz-flex-space-between"]}>
                  <Space size={12} className={styles["kz-product-sku"]}>
                    <span>specification</span>
                    <span>Black / S</span>
                  </Space>
                  <div>
                    <Statistic
                      value={item.price}
                      precision={2}
                      valueStyle={{
                        color: "#3f8600",
                        fontSize: 16,
                        marginBottom: 0,
                      }}
                      prefix="$"
                    />
                    <span className={styles["kz-original-price"]}>
                      ${item.original_price}
                    </span>
                  </div>
                </div>
                <InputNumber min={1} max={10} defaultValue={1} />
              </Col>
            </Row>
            <Divider />
          </div>
        ))}
      </Drawer>
    </>
  );
}
