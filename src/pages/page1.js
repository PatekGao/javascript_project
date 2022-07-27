import React, {Component} from 'react';
import Sider from "antd/es/layout/Sider";
import {Descriptions, Layout, Menu} from "antd";
import {Content} from "antd/es/layout/layout";
import {connect} from "umi";
import axios from "axios";

@connect(({ data }) => (data))
class Page1 extends Component {
  dispatch = this.props.dispatch

  componentDidMount() {
    this.dispatch({
      type: 'data/getData'
    })
  }

  render() {
    return (
      <Layout>
        <Sider className="site-layout-background" width={200}>
          <Menu mode="inline" style={{ height: '100%' }}>
            hello
          </Menu>
        </Sider>
        <Content
          style={{
            padding: '0 24px',
            minHeight: "auto",
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              textAlign: 'center',
            }}
          >
            HELLO

            <p></p>
            <a>{this.props.Xu}</a>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default Page1;





