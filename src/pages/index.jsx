import { Breadcrumb, Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link, connect } from 'umi'
import React, {Component} from 'react';
const { Header, Content, Footer, Sider } = Layout;

const checkTime = function (i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};

let showtime = function () {
  let date_now = new Date();
  let year = date_now.getFullYear(),
    month = date_now.getMonth() + 1,
    date = date_now.getDate(),
    day = date_now.getDay(),
    week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    h = date_now.getHours(),
    m = date_now.getMinutes(),
    s = date_now.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  return year + "年" + month + "月" + date + "日" + week[day] + " " + h + ":" + m + ":" + s;
}

function refresh(){
  location.reload();
}


@connect(({ data }) => (data))
class Index extends Component {
  dispatch = this.props.dispatch

  componentDidMount() {
    this.dispatch({
      type: 'data/getData'
    })
  }

  render() {
    console.log(this.props)
    return (
      // <div>
      //   <PageHeader
      //     className="site-page-header"
      //     onBack={() => window.history.back()}
      //     title="Benchmark"
      //     subTitle="Benchmark of Dafu"
      //     extra={[
      //       <Button onClick={refresh} key="1" type="primary">Refresh</Button>,
      //       <Button key="3">Operation</Button>,
      //       <Button key="2">Operation</Button>,
      //     ]}
      //   >
      //     <Descriptions size="small" column={3}>
      //       <Descriptions.Item label="Created">徐罗旻</Descriptions.Item>
      //       <Descriptions.Item label="Association">
      //         <a>{this.props.Xu}</a>
      //       </Descriptions.Item>
      //       <Descriptions.Item id='xu' label="Effective Time"><a>{showtime()}</a></Descriptions.Item>
      //       {/*<Descriptions.Item label="Remarks">*/}
      //       {/*  Gonghu Road, Xihu District, Hangzhou, Zhejiang, China*/}
      //       {/*</Descriptions.Item>*/}
      //     </Descriptions>
      //   </PageHeader>
      //   <br/>
      //   <PageHeader
      //     className="site-page-header"
      //     onBack={() => window.history.back()}
      //     title="Benchmark"
      //     subTitle="Benchmark of Dafu"
      //     extra={[
      //       <Button onClick={refresh} key="1" type="primary">Refresh</Button>,
      //       <Button key="3">Operation</Button>,
      //       <Button key="2">Operation</Button>,
      //     ]}
      //   >
      //     <Descriptions size="small" column={3}>
      //       <Descriptions.Item label="Created">孔昊</Descriptions.Item>
      //       <Descriptions.Item label="Association">
      //         <a>{this.props.Kong}</a>
      //       </Descriptions.Item>
      //       <Descriptions.Item id='kong' label="Effective Time"><a>{showtime()}</a></Descriptions.Item>
      //       {/*<Descriptions.Item label="Remarks">*/}
      //       {/*  Gonghu Road, Xihu District, Hangzhou, Zhejiang, China*/}
      //       {/*</Descriptions.Item>*/}
      //     </Descriptions>
      //   </PageHeader>
      //   <br/>
      //   <PageHeader
      //     className="site-page-header"
      //     onBack={() => window.history.back()}
      //     title="Benchmark"
      //     subTitle="Benchmark of Dafu"
      //     extra={[
      //       <Button onClick={refresh} key="1" type="primary">Refresh</Button>,
      //       <Button key="3">Operation</Button>,
      //       <Button key="2">Operation</Button>,
      //     ]}
      //   >
      //     <Descriptions size="small" column={3}>
      //       <Descriptions.Item label="Created">汤陈</Descriptions.Item>
      //       <Descriptions.Item label="Association">
      //         <a>{this.props.Tang}</a>
      //       </Descriptions.Item>
      //       <Descriptions.Item id='tang' label="Effective Time"><a>{showtime()}</a></Descriptions.Item>
      //       {/*<Descriptions.Item label="Remarks">*/}
      //       {/*  Gonghu Road, Xihu District, Hangzhou, Zhejiang, China*/}
      //       {/*</Descriptions.Item>*/}
      //     </Descriptions>
      //   </PageHeader>
      //   <br/>
      //   <PageHeader
      //     className="site-page-header"
      //     onBack={() => window.history.back()}
      //     title="Benchmark"
      //     subTitle="Benchmark of Dafu"
      //     extra={[
      //       <Button onClick={refresh} key="1" type="primary">Refresh</Button>,
      //       <Button key="3">Operation</Button>,
      //       <Button key="2">Operation</Button>,
      //     ]}
      //   >
      //     <Descriptions size="small" column={3}>
      //       <Descriptions.Item label="Created">林硕</Descriptions.Item>
      //       <Descriptions.Item label="Association">
      //         <a>{this.props.Lin}</a>
      //       </Descriptions.Item>
      //       <Descriptions.Item id='lin' label="Effective Time"><a>{showtime()}</a></Descriptions.Item>
      //       {/*<Descriptions.Item label="Remarks">*/}
      //       {/*  Gonghu Road, Xihu District, Hangzhou, Zhejiang, China*/}
      //       {/*</Descriptions.Item>*/}
      //     </Descriptions>
      //   </PageHeader>
      // </div>
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
            <p>HELLO</p>
            <p>Choose an account to see the benchmark.</p>
            <p>{showtime()}</p>
            <button onClick={refresh} type="primary">Refresh</button>
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
    );
  }
}

export default Index;


