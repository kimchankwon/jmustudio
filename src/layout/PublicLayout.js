import React, { useEffect, useState } from "react";
import { Layout, Menu } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import LoadingPage from "../pages/LoadingPage";
import routes from "../routes";

import tutors from "../data/tutors";

const { Header, Content, Footer } = Layout;

const PublicLayout = props => {

  const [loading, setLoading] = useState(true);
  const [currentKey, setCurrentKey] = useState("");

  const goToPage = route => {
    if (route.key !== currentKey) {
      props.history.push(route.key);
    }
  }

  const currentKeyIs = (key) => {
    return currentKey === key;
  };

  useEffect(() => {
    setLoading(true);
    setCurrentKey(props.history.location.pathname);
    setLoading(false);
  }, [props.history.location.pathname]);

  return (
    loading ?
      <LoadingPage />
      :
      <Layout>
        <Header style={{ position: 'fixed', width: '100%', background: 'black', zIndex: 100 }}>
          <Menu className="menu" theme="dark" mode="horizontal" onClick={goToPage} defaultSelectedKeys={[`${currentKey}`]} style={{background: 'black', fontFamily: 'Open Sans'}}>
            <Menu.Item className="menuitem" key={routes.index}><SyncOutlined spin />LOGO <SyncOutlined spin /></Menu.Item>
            {currentKeyIs("/tutors") ?
              <Menu.Item className="menuitem" key={routes.tutors} style={{float: 'right'}}>TUTORS</Menu.Item>
              :
              <Menu.SubMenu className="submenu" title="TUTORS" key={routes.tutors} onTitleClick={goToPage} style={{float: 'right', backgroundColor: currentKeyIs("/tutors") ? 'white' : '', color: currentKeyIs("/tutors") ? 'black' : ''}}>
                {tutors.map(({id, name}) => {
                  return <Menu.Item className="submenuitem" key={`${routes.tutornoid}/${id}`}>{name}</Menu.Item>
                })}
              </Menu.SubMenu>
            }
            <Menu.Item className="menuitem" key={routes.contact} style={{float: 'right'}}>CONTACT</Menu.Item>
            <Menu.Item className="menuitem" key={routes.about} style={{float: 'right'}}>ABOUT</Menu.Item>
            <Menu.Item className="menuitem" key={routes.home} style={{float: 'right'}}>HOME</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-content">
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>JMU Studio ©2020</Footer>
      </Layout>
  );
}

export default PublicLayout;
