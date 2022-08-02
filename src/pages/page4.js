import React, {Component} from 'react';
import {Layout, Menu} from "antd";
import Sider from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";
import {connect, Link} from "umi";
import menuList from "../models/menuConfig_kong";
import SubMenu from "antd/es/menu/SubMenu";

@connect(({data}) => (data))
class Page4 extends Component {
  dispatch = this.props.dispatch

  getMenuNodes = (menuList) => {
    return menuList.map(item => {
      if (!item.children) {
        return (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.key}>
              {item.title}
            </Link>
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {this.getMenuNodes(item.children)}
          </SubMenu>
        )
      }
    })
  }

  componentDidMount() {
    this.dispatch({
      type: 'data/getData'
    })
  }

  render() {
    return (
      <Layout>
        <Sider className="site-layout-background" width={200}>
          <Menu mode="inline" style={{height: '100%'}}>
            {this.getMenuNodes(menuList)}
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
            <a>{this.props.Kong}</a>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default Page4;
