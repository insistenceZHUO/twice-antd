---
title: LoadButton
toc: menu
---

#####封装的全局 loading button 组件。

- 防止按钮的重复提交
- 对于提交后的请求做统一的反馈

## 基础示例

```tsx
import React from 'react';
import { LoadButton } from 'demo';

export default () => {
  const handleClick = done => {
    setTimeout(() => {
      done();
    }, 3000);
  };

  return (
    <>
      <LoadButton type="primary" onClick={done => handleClick(done)}>
        提交
      </LoadButton>
    </>
  );
};
```

## message 提示

如果需要在 loading 状态结束后，对处理的结果做出提示，可以给 dome()传递一个参数，参数类型为 boolean 值

```tsx
import React from 'react';
import { Space } from 'antd';
import { LoadButton } from 'demo';

export default () => {
  const handleSuccessClick = done => {
    setTimeout(() => {
      done(true);
    }, 2000);
  };

  const handleErrorClick = done => {
    setTimeout(() => {
      done(false);
    }, 2000);
  };

  return (
    <Space>
      <LoadButton type="primary" onClick={done => handleSuccessClick(done)}>
        提交
      </LoadButton>

      <LoadButton type="danger" onClick={done => handleErrorClick(done)}>
        error
      </LoadButton>
    </Space>
  );
};
```

## 短信倒计时按钮

```tsx
import React, { useState } from 'react';
import { LoadButton } from 'demo';

export default () => {
  const [type, setType] = useState(true);
  const handleSuccessClick = done => {
    console.log(6666);
    setTimeout(() => {
      done();
    }, 2000);
  };

  return (
    <LoadButton
      type="primary"
      timer={type}
      onClick={done => handleSuccessClick(done)}
    >
      发送短信
    </LoadButton>
  );
};
```

## 参数

| 参数        | 说明                               | 类型   | 默认值     |
| ----------- | ---------------------------------- | ------ | ---------- |
| loadingText | 提交中的 loading message 提示文字. | String | looding... |
| successText | 提交成功后的 message 提示文字      | String | success... |
| showMsg     | 点击时，是否展示 msg;              | String | success... |
| onClick     | 点击事件的回掉函数                 | String | success... |
