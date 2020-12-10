---
title: DetailsResult
toc: content
order: 3
---

# DetailsResult

- 获取数据详情结果处理

## 基础示例

```jsx
import React, { useState } from 'react';
import { Button } from 'antd';
import { DetailsResult } from 'demo';

export default () => {
  const [visible, setVisible] = useState(false);
  const promise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject();
      }, 2000);
    });
  };
  return (
    <>
      <Button onClick={() => setVisible(true)}>发送请求</Button>
      {visible && (
        <DetailsResult
          visible={visible}
          getDetailsAjax={promise}
          id={12}
          onchange={() => {
            console.log(666666);
          }}
        ></DetailsResult>
      )}
    </>
  );
};
```
