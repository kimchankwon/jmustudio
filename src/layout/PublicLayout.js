import React from "react";
import { Layout, Menu } from 'antd';
import routes from "../routes";

const { Header, Content, Footer } = Layout;

const { SubMenu } = Menu;

const PublicLayout = props => {

  const goToPage = route => {
    props.history.push(route.key);
  }

  return (
    <Layout className="layout">
      <Header className="header" style={{ position: 'fixed', width: '100%', 'background-color': 'black' }}>
        <div className="logo" />
        <Menu mode="horizontal" theme='dark' onClick={goToPage} style={{ 'background-color': 'black', 'font-family': 'serif' }}>
          <Menu.Item key={routes.home}>Home</Menu.Item>
          <Menu.Item key={routes.about}>About Us</Menu.Item>
          <SubMenu title="Tutors">
            <Menu.Item key={routes.tutor}>Jae Kwon Kim</Menu.Item>
          </SubMenu>
          <Menu.Item key={routes.contact}>Contact Us</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-content" style={{ padding: 24, minHeight: 480 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>JMU Studio ©2020</Footer>
    </Layout>
  );
}

export default PublicLayout;
