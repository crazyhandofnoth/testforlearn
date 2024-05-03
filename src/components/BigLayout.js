import React from 'react';
import { Link } from 'react-router-dom';

import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
 
const { Header, Content, Sider } = Layout;
 
const items2 = [
  {
    key: 'sub1',
    icon: <UserOutlined />,
    label: 'utils',
    children: [
      {
        key: '1',
        label: <Link to="/todo">todo</Link>,
        icon: <UserOutlined />,
      },
      {
        key: '2',
        label: <Link to="/option2">option2</Link>,
        icon: <LaptopOutlined />,
      }
    ],
  },

];




// [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
//   const key = String(index + 1);
//   const labels=['utils','settings']
//   return {
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: labels[index],
//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = index * labels.length + j + 1;
//       return {
//         key: subKey,
//         label: <Link to={`/option${subKey}`}>{`option${subKey}`}</Link> 

//       };
//     }),
//   };
// });
const BigLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    
  
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
  
  );
};
export default BigLayout;