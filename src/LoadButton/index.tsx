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


const LoadBuatton: React.FC<ILoadButton> = (props) => {
  const { onClick, loadingText, successText, loading, showMsg, title, showModal,  } = props;

  const [laloading, setLaloading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    let hide:any = null;
    if (showModal) {
      setVisible(true);
    } else {
      if (typeof loading === 'undefined' || loading === true) setLaloading(true);

      if (typeof showMsg === 'undefined' || showMsg === true)
        hide = message.loading(loadingText || '修改中...', 0);
    }

    onClick((success: any) => {
      setTimeout(hide, 0);
      if (typeof loading === 'undefined' || loading === true) setLaloading(false);

      if (success) {
        if (typeof showMsg === 'undefined' || showMsg === true)
          message.success({ content: successText || '修改成功', key: 1, duration: 1 });
      } else {
        setTimeout(hide, 0);
      }
      if (showModal && success) {
        setVisible(false);
      }
    });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    props.handleOk();
  };

  const renderModal = () => {
    return (
      <Modal
        visible={visible}
        title={title}
        onCancel={() => handleCancel()}
        onOk={() => handleOk()}
        okButtonProps={{ disabled: !disabled }}
      >
        <Checkbox defaultChecked={disabled} onChange={e => setDisabled(e.target.checked)}>
          勾选后确定删除
        </Checkbox>
      </Modal>
    );
  };

  return (
    <React.Fragment>
      <Button {...props} loading={laloading} onClick={() => handleClick()}>
        {laloading ? '提交中...' : props.children}
      </Button>
      {renderModal()}
    </React.Fragment>
  );
};
export default LoadBuatton;