import React from "react";
import { Layout, Menu } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import routes from "../routes";

import tutors from "../data/tutors";

const { Header, Content, Footer } = Layout;

const { SubMenu } = Menu;

const PublicLayout = props => {

  const goToPage = route => {
    props.history.push(route.key);
  }

  return (
    <Layout className="layout">
      <Header className="header" style={{ position: 'fixed', width: '100%', backgroundColor: 'black' }}>
        <Menu mode="horizontal" theme='dark' onClick={goToPage} style={{ backgroundColor: 'black', fontFamily: 'serif' }}>
          <Menu.Item key={routes.index}><SyncOutlined spin /></Menu.Item>
          <Menu.Item key={routes.home}>Home</Menu.Item>
          <Menu.Item key={routes.about}>About Us</Menu.Item>
          <SubMenu title="Tutors" key={routes.tutors} onTitleClick={goToPage}>
            {tutors.map(({id, name}) => {
              return <Menu.Item key={`${routes.tutornoid}/${id}`}>{name}</Menu.Item>
            })}
          </SubMenu>
          <Menu.Item key={routes.contact}>Contact Us</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-content" style={{ padding: 24, minHeight: 480 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>JMU Studio ©2020 - 1.0.0</Footer>
    </Layout>
  );
}

export default PublicLayout;
