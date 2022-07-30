import React, {Component} from 'react';
import {Layout, Menu} from "antd";
import { connect, Link } from "umi";
const { Header, Content, Footer } = Layout;

@connect(({ data }) => (data))
class Index extends Component {
  dispatch = this.props.dispatch

  componentDidMount() {
    this.dispatch({
      type: 'data/getData'
    })
  }

  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
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
        </Header>
        <Content
          style={{
            padding: '0 50px',
          }}
        >
          <Layout
            className="site-layout-background"
            style={{
              padding: '24px 0',
            }}
          >
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
                WELCOME TO THE BENCHMARK OF SELF SIGHT.
                {this.props.children}
              </div>
            </Content>
          </Layout>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
           Website of Benchmark ©2022 Created by Patek Gao, All rights reserved.
        </Footer>
      </Layout>
    );
  }
}

export default Index;
