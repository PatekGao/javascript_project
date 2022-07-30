import React, {Component} from 'react';
import Sider from "antd/es/layout/Sider";
import {Descriptions, Layout, Menu} from "antd";
import {Content} from "antd/es/layout/layout";
import {connect} from "umi";
import data from "../models/data";

@connect(({ data }) => (data))
class Page1 extends Component {
  dispatch = this.props.dispatch

  constructor(props) {
    super(props);
  }

  recursion(dataSource){
    return(
      dataSource.map((menu,index)=> {
        return (<Menu.Item key={menu.key}>{menu.title}</Menu.Item>)
      })
    )
  }
  componentDidMount() {
    this.dispatch({
      type: 'data/getData'
    })
  }

  render() {
    return (
      <Layout>
        {/*<Menu*/}
        {/*  mode = 'inline'*/}
        {/*  style = {{width:240}}*/}
        {/*>{this.recursion(data)}*/}
        {/*</Menu>*/}
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
            <p></p>
            <a>{this.props.Xu}</a>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default Page1;





