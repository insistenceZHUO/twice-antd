import { Button, Checkbox, Modal, message } from 'antd';
import React, { useEffect, useState } from 'react';

import { ILoadButton } from './type.t';

/* 

------ **** {Props} **** --------

    LdBuatton @params {
      loadingText: {
        type:    String;
        explain: 提交中的loading message提示文字
        default: 'looding...'
      };

      successText: {
        type:    String;
        explain: 提交成功后的message提示文字
        default: 'success'
      };                      

      loading: {
        type: Boolean;
        explain: 点击时，是否展示loading状态;
        default: 默认时true，展示loading状态;
      }

      showMsg: {
        type: Boolean;
        explain: 点击时，是否展示msg;
        default:true，展示explain状态;
      }

      onClick: {
        type: callback;
        explain:  点击事件的回掉函数
        default: callback (done) => { done() }
      };
      buttonText: string
    }
*/

const LoadBuatton: React.FC<ILoadButton> = props => {
  const {
    onClick,
    loadingText = '提交中',
    successText = '提交成功',
    loading,
    showMsg,
    title,
    showModal,
    timer,
  }: ILoadButton = props;

  const [laloading, setLaloading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [count, setCount] = useState(undefined);
  const handleClick = () => {
    let hide: any = null;
    if (!timer) {
      if (typeof loading === 'undefined' || loading === true)
        setLaloading(true);

      if (typeof showMsg === 'undefined' || showMsg === true)
        hide = message.loading(loadingText, 0);
    } else {
      setLaloading(true);
    }

    onClick((success: boolean) => {
      if (timer) {
        timerHandle();
        setLaloading(false);
        return;
      }
      setTimeout(hide, 0);
      if (typeof loading === 'undefined' || loading === true)
        setLaloading(false);

      if (success) {
        if (typeof showMsg === 'undefined' || showMsg === true)
          message.success({
            content: successText || '修改成功',
            key: 1,
            duration: 1,
          });
      } else {
        setTimeout(hide, 0);
      }
    });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    props.handleOk();
  };

  // 如果为发送短信按钮
  const timerHandle = () => {
    setDisabled(true);
    let tmr = null;
    let data = 20;
    tmr = setInterval(() => {
      data = data - 1;
      if (data !== -1) {
        setCount(data);
      } else {
        clearInterval(tmr);
        setDisabled(false);
      }
    }, 1000);
  };

  return (
    <React.Fragment>
      <Button
        {...props}
        loading={laloading}
        disabled={disabled}
        onClick={() => handleClick()}
      >
        {timer ? (
          <span>{count ? count : props.children}</span>
        ) : (
          <span>{laloading ? '提交中...' : props.children}</span>
        )}
      </Button>
    </React.Fragment>
  );
};
export default LoadBuatton;
