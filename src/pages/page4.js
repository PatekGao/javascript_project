import React, {Component} from 'react';
import {Layout, Menu} from "antd";
import Sider from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";

class Page4 extends Component {
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
            minHeight: 280,
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              textAlign: 'center',
            }}
          >
            BYE
          </div>
        </Content>
      </Layout>
    );
  }
}

export default Page4;
