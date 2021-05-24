import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { server } from '@/config';
import { productData } from "@/pages/api/productData";
import {
  Button,
  Space,
  Carousel,
  Affix,
  Menu,
  Row,
  Col,
  Modal,
  Form,
  Radio,
  Statistic,
  Drawer,
  InputNumber,
  Divider,
  Badge,
} from "antd";
import Image from "next/image";
import {
  UserOutlined,
  ShoppingOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Ad from "@/components/ad/ad";

import Head from "next/head";
import styles from "@/styles/index.module.scss";
import Router from "next/router";

// export async function getStaticProps() {
//   const res = await fetch(`${server}/api/product`);
//   const productList = await res.json();
//   return {
//     props: {
//       productList,
//     },
//   };
// }

let active_product: any = {};

export default function Home() {
  // store数据
  const userCartProduct = () => {
    const addCartProduct = useSelector((state: any) => state.addCartProduct);
    const dispatch = useDispatch();
    const addCart = (data) =>
      dispatch({
        type: "ADD_CART",
        data,
      });
    return { addCartProduct, addCart };
  };

  const { addCartProduct, addCart } = userCartProduct();

  const [form] = Form.useForm();

  const [current, setCurrent] = useState("home");

  const [visible, setVisible] = useState(false);

  const handleClick = (e) => {
    setCurrent(e.key);
    Router.push(`/collections/${e.key}`);
  };

  const navigateTo = (cate) => {
    let url = "";
    switch (cate) {
      case 1:
        url = "new";
        break;
      case 2:
        url = "host";
        break;
      case 3:
        url = "collaborations";
        break;
      case 4:
        url = "mail";
        break;
      default:
        return;
    }
    Router.push(`/collections/${url}`);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const addShoppingCart = () => {
    const data = addCartProduct.concat([active_product]);
    addCart(data);

    window.localStorage.setItem("km-cart", JSON.stringify(data));
    setVisible(false);
  };

  const navigateToDetail = (item) => {
    window.localStorage.setItem("km-product", JSON.stringify(item));
    Router.push(`/product/detail/${item.product_id}`);
  };

  return (
    <div className={styles.container}>
      <Modal
        visible={visible}
        bodyStyle={{ padding: "48px 24px 24px" }}
        onCancel={() => {
          setVisible(false);
        }}
        width={780}
        footer={null}
      >
        <Row gutter={24}>
          <Col span={10}>
            <Image src={active_product.product_img} layout="fill" />
          </Col>
          <Col span={14}>
            <h3>{active_product.product_name}</h3>
            <Statistic
              value={active_product.price}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix="$"
            />
            <Space size={12} className={styles["kz-original-price-container"]}>
              <span className={styles["kz-original-price"]}>
                ${active_product.original_price}
              </span>
              <span>30％ OFF</span>
            </Space>
            <Form form={form} onFinish={onFinish} layout="vertical">
              <Form.Item name="color" label="Color" initialValue="a">
                <Radio.Group>
                  <Space size={12}>
                    <Radio.Button value="a">white</Radio.Button>
                    <Radio.Button value="b">black</Radio.Button>
                    <Radio.Button value="c">yellow</Radio.Button>
                  </Space>
                </Radio.Group>
              </Form.Item>
              <Form.Item name="size" label="Size" initialValue="b">
                <Radio.Group>
                  <Space size={12}>
                    <Radio.Button value="a">S</Radio.Button>
                    <Radio.Button value="b">M</Radio.Button>
                    <Radio.Button value="c">L</Radio.Button>
                    <Radio.Button value="d">XL</Radio.Button>
                  </Space>
                </Radio.Group>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  danger
                  block
                  size="large"
                  className={styles["kz-product-btn-buy"]}
                  htmlType="submit"
                  onClick={addShoppingCart}
                >
                  加入购物车
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Modal>
      <Head>
        <title>Komi</title>
        <meta name="description" content="Generated by Komi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <Carousel autoplay effect="fade">
        <div className={styles["kz-carousel-item"]}>
          <Image src="/banner.jpeg" layout="fill" />
        </div>
        <div className={styles["kz-carousel-item"]}>
          <Image src="/banner2.jpeg" layout="fill" />
        </div>
        <div className={styles["kz-carousel-item"]}>
          <Image src="/banner3.jpeg" layout="fill" />
        </div>
      </Carousel> */}
      <main className={styles["km-main"]}>
        {/* <div className={styles["km-card-ceramics"]}>
          {[1, 2, 3, 4].map((item) => (
            <div className={styles["km-card-ceramics-item"]} key={item}>
              <Image
                src="/banner2.jpeg"
                layout="fill"
                className={styles["km-card-ceramics-item-img"]}
              />
              <Button
                type="primary"
                icon={<ArrowRightOutlined />}
                size="large"
                shape="round"
                className={styles["km-card-ceramics-item-buy"]}
                onClick={() => navigateTo(item)}
              >
                立即选购
              </Button>
            </div>
          ))}
        </div> */}
        {/* <div>
          <div className={styles["km-section-header"]}>
            <h1 className={styles["km-section-header-title"]}>新品上市</h1>
            <a onClick={() => navigateTo(1)}>选购其他产品</a>
          </div>
        </div> */}
        <div className={styles["kz-product-container"]}>
          {productData.map((item) => (
            <div
              key={item.product_id}
              className={styles["kz-product-item"]}
              onClick={() => navigateToDetail(item)}
            >
              <div className={styles["kz-product-img-container"]}>
                <Image
                  src={item.product_img}
                  layout="fill"
                  className={styles["kz-product-img"]}
                />
              </div>
              <div className={styles["kz-product-item-content"]}>
                <p>SALE</p>
                <div className={styles["kz-product-item-content-title"]}>
                  <p>{item.product_name}</p>
                </div>
                <Space
                  size={12}
                  className={styles["kz-product-item-content-price"]}
                >
                  <span>${item.price}</span>
                  <span className={styles["kz-original-price"]}>
                    ${item.original_price}
                  </span>
                </Space>
                <Button
                  danger
                  block
                  className={styles["kz-product-btn-buy"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.nativeEvent.stopImmediatePropagation();
                    active_product = item;
                    setVisible(true);
                  }}
                >
                  Quick Shop
                </Button>
              </div>
            </div>
          ))}
        </div>
        {/* <div>
          <div className={styles["km-section-header"]}>
            <h1 className={styles["km-section-header-title"]}>会员中心</h1>
          </div>
        </div>
        <div className={styles["km-vip"]}>
          <Image src="/banner2.jpeg" layout="fill" />
        </div> */}
      </main>
      <Footer />
    </div>
  );
}
