import { Button, Checkbox, Modal } from 'antd';
import React, { useEffect, useState } from 'react';

import { I_LModla } from './type.t';

const LModal: React.FC<I_LModla> = props => {
  const { text } = props;
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    setDisabled(false);
    console.log(6666);
    return () => {
      setDisabled(false);
    };
  }, []);

  return (
    <Modal
      footer={[
        <Button>取消</Button>,
        <Button disabled={!disabled} type="primary">
          确定
        </Button>,
      ]}
      {...props}
    >
      <Checkbox onChange={e => setDisabled(e.target.checked)}>{text}</Checkbox>
    </Modal>
  );
};
export default LModal;
