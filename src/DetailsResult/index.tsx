import { Button, Result, Spin } from 'antd';
import { IDetailsResultProps, IDetailsResultStart } from './type.t';
import React, { Component } from 'react';

/* 
    封装了一个详情组件，对详情对loading， 错误做处理
*/
class DetailsResult extends Component<
  IDetailsResultProps,
  IDetailsResultStart
> {
  constructor(props: IDetailsResultProps | Readonly<IDetailsResultProps>) {
    super(props);
    this.state = {
      loading: false,
      status: false,
    };
  }

  componentDidMount() {
    const { visible, id, getDetailsAjax, onchange } = this.props;
    console.log('id: ', id);

    if (visible && id) {
      this.setState({
        loading: true,
      });
      getDetailsAjax({ id })
        .then(res => {
          const { success, data } = res;
          if (success) {
            onchange(data);
          } else {
            this.setState({
              status: true,
            });
          }
          this.setState({
            loading: false,
          });
        })
        .catch(() => {
          onchange();
          this.setState({
            loading: false,
            status: true,
          });
        });
    } else {
      onchange();
    }
  }

  render() {
    const { loading, status } = this.state;
    return (
      <Spin spinning={loading}>
        {status ? (
          <Result status="500" title="500" subTitle="请联系管理员" />
        ) : (
          this.props.children
        )}
      </Spin>
    );
  }
}

export default DetailsResult;
