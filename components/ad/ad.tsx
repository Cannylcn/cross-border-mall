import React, { useState, useEffect } from "react";
import { Image } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import styles from "./ad.module.scss";

export default function Ad() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {}, []);

  // 关闭广告
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      {visible ? (
        <div className={styles["km-ad"]}>
          <Image
            src="/ad.png"
            preview={false}
            className={styles["km-ad-img"]}
          />
          <CloseOutlined className={styles["km-ad-close"]} onClick={onClose} />
        </div>
      ) : null}
    </div>
  );
}
