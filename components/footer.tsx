import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";

import styles from "../styles/index.module.scss";

export default function Footer() {
  useEffect(() => {}, []);

  return (
    <footer className={styles["kz-footer"]}>
      <Row>
        <Col span={6}>
          <div>
            <p>Productes</p>
            <ul>
              <li>
                <a href="/" target="_blank">
                  New Arrival
                </a>
              </li>
            </ul>
          </div>
        </Col>
        {/* <Col span={6}>
          <div>
            <p>运动</p>
            <ul>
              <li>
                <a href="/" target="_blank">
                  跑步
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  训练
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  足球
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  篮球
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  户外
                </a>
              </li>
            </ul>
          </div>
        </Col> */}
        <Col span={6}>
          <div>
            <p>support center</p>
            <ul>
              <li>
                <a href="/" target="_blank">
                  Size specification
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col span={6}>
          <div>
            <p>Policy of website</p>
            <ul>
              <li>
                <a href="/" target="_blank">
                  Terms for usage
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  Privacy statement
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  Rules of Logistics Distribution
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  Return and exchange rules
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  Place the order guide
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col span={6}>
          <div className={styles["kz-footer-copyright"]}>
            <ul>
              <li>Copyright © 2021 Komi, Inc. All rights reserved.</li>
            </ul>
          </div>
        </Col>
      </Row>
    </footer>
  );
}
