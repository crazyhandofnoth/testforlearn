import React from 'react';
import { Link } from 'react-router-dom';
import { atom, useAtom } from 'jotai';
import { LaptopOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useLocation } from 'react-router-dom';

const { Header, Content, Sider } = Layout;
const openKeysAtom = atom([]);

const items = [
  {
    key: 'sub1',
    icon: <UserOutlined />,
    label: 'utils',
    children: [
      {
        key: 'todo',
        label: <Link to="/todo">todo</Link>,
        icon: <UserOutlined />,
      },
      {
        key: 'themeswitcher',
        label: <Link to="/themeswitcher">themeswitcher</Link>,
        icon: <LaptopOutlined />,
      },
      {
        key: 'typo',
        label: <Link to="/typo">typo</Link>,
        icon: <LaptopOutlined />,
      }
    ],
  },

];

const BigLayout = ({ children }) => {
  const [openKeys, setOpenKeys] = useAtom(openKeysAtom);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  console.log(pathnames);
  const handleMenuOpenChange = (keys) => {
    setOpenKeys(keys);
  };
  console.log('OpenKeys', openKeys)
  return (


    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        width={160}
        style={{
          background: colorBgContainer,
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={pathnames}
          inlineIndent={0}
          items={items}
          defaultOpenKeys={openKeys}
          onOpenChange={handleMenuOpenChange}
        />
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >

        <Breadcrumb 
        

          items={[
            {
              title: <Link to="/">Home</Link>,
            },
            ...pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;

              return (
                {
                  title: <Link href={to}>{value}</Link>
                }

              );

            })
          ]}

        />
        <Content
          style={{
            padding: 35,
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