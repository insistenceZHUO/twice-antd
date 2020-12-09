---
title: LModal
toc: content
---

## 弹出层提示组件。

- 防止意外电错误点击

### 基础示例

```tsx
import React, { useState } from 'react';
import { Button } from 'antd';
import { LModal } from 'demo';

export default () => {
  const [visible, setVisible] = useState(false);

  const handleClick = done => {
    console.log(6666666);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    setVisible(false);
  };

  return (
    <React.Fragment>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开弹出
      </Button>
      <LModal
        visible={visible}
        title="系统提示"
        text="勾选后确认弹出"
        destroyOnClose
        onCancel={handleCancel}
        onOK={handleOk}
      ></LModal>
    </React.Fragment>
  );
};
```
