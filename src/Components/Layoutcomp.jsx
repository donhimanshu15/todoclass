import React, { Component } from 'react'
import './tablecomp.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Tablecomp from './Tablecomp';
import Fetchapi from './Fetchapi';



const { Header, Content, Sider } = Layout;

export default class Layoutcomp extends Component {
  render() {
    return (
        <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">ToDo List</Menu.Item>
          
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              
          <Menu.Item key="1" >DashBoard</Menu.Item>
             <Menu.Item key="2">History</Menu.Item>
               
             
              
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
         <Fetchapi/>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
