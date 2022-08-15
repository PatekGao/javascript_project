import React, { Component } from 'react';
import { Layout, Menu, PageHeader } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import { connect, Link } from 'umi';
import SubMenu from 'antd/es/menu/SubMenu';

let menuKey = [];
let keyFlag;

@connect(({ data }) => data)
class Page1 extends Component {
  dispatch = this.props.dispatch;

  handleClick = (e) => {
    menuKey = e;
    keyFlag = menuKey['key'].charAt(menuKey['key'].length - 1);
    console.log('click', e);
    console.log(menuKey['key']);
  };

  getMenuNodes = (menuList) => {
    return menuList.map((item) => {
      if (!item.children) {
        return (
          <Menu.Item key={item.key} icon={item.icon} onClick={this.handleClick}>
            <Link>{item.title}</Link>
          </Menu.Item>
        );
      } else {
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {this.getMenuNodes(item.children)}
          </SubMenu>
        );
      }
    });
  };

  componentDidMount() {
    this.dispatch({
      type: 'data/getData',
    });
  }

  render() {
    let menuList = this.props.menu_xu;
    return (
      <PageHeader onBack={() => window.history.back()}>
        <Layout>
          <Sider className="site-layout-background" width={200}>
            <Menu mode="inline" style={{ height: '100%' }}>
              {this.getMenuNodes(menuList)}
            </Menu>
          </Sider>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 'auto',
            }}
          >
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                textAlign: 'center',
              }}
            >
              <a>{this.props.Xu}</a>
              <p></p>
              <a>{keyFlag}</a>
            </div>
          </Content>
        </Layout>
      </PageHeader>
    );
  }
}

export default Page1;
