import React, {Component} from 'react';
import {Breadcrumb, Layout, Menu} from "antd";
import {Link} from "umi";
const { Header, Content, Footer, Sider } = Layout;

class Index extends Component {
  render() {
    return (
      <div>
        <Layout hasSider>
          <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" selectedKeys={[window.location.pathname]}>
              <Menu.Item key='/page1'>
                <Link to='/page1'>徐罗旻</Link>
              </Menu.Item>
              <Menu.Item key='/page2'>
                <Link to='/page2'>林硕</Link>
              </Menu.Item>
              <Menu.Item key='/page3'>
                <Link to='/page3'>汤陈</Link>
              </Menu.Item>
              <Menu.Item key='/page4'>
                <Link to='/page4'>孔昊</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout
            className="site-layout"
            style={{
              marginLeft: 200,
            }}
          >
            <Header
              className="site-layout-background"
              style={{
                padding: 0,
              }}
            />
            <Content
              style={{
                margin: '24px 16px 0',
                overflow: 'initial',
              }}
            >
              <div
                className="site-layout-background"
                style={{
                  padding: 24,
                  textAlign: 'center',
                }}
              >
                {this.props.children}
              </div>
            </Content>
            <Footer
              style={{
                textAlign: 'center',
              }}
            >
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Index;
