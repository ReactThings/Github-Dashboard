# Complete React Course for Creating Amazing UI

## Files we changed
- package.json and package-lock.json (due to the npm installation)
- src/App.js (where we created the basic layout)

## Things we copied
0:25 - To install Ant Design Library, type the following into your terminal ([source](https://ant.design/docs/react/introduce)):
```
npm install antd --save
```

0:35 - Import Ant Design Style in src/App.js ([source](https://ant.design/docs/react/introduce)):
```
import 'antd/dist/antd.css';
```

1:54 - We copied Ant Design's <Layout> code sample ([source](https://ant.design/components/layout/)):
```
<Layout>
  <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
    <div className="logo" />
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
      <Menu.Item key="1">
        <Icon type="user" />
        <span className="nav-text">nav 1</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="video-camera" />
        <span className="nav-text">nav 2</span>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="upload" />
        <span className="nav-text">nav 3</span>
      </Menu.Item>
      <Menu.Item key="4">
        <Icon type="bar-chart" />
        <span className="nav-text">nav 4</span>
      </Menu.Item>
      <Menu.Item key="5">
        <Icon type="cloud-o" />
        <span className="nav-text">nav 5</span>
      </Menu.Item>
      <Menu.Item key="6">
        <Icon type="appstore-o" />
        <span className="nav-text">nav 6</span>
      </Menu.Item>
      <Menu.Item key="7">
        <Icon type="team" />
        <span className="nav-text">nav 7</span>
      </Menu.Item>
      <Menu.Item key="8">
        <Icon type="shop" />
        <span className="nav-text">nav 8</span>
      </Menu.Item>
    </Menu>
  </Sider>
  <Layout style={{ marginLeft: 200 }}>
    <Header style={{ background: '#fff', padding: 0 }} />
    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
      <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
        ...
        <br />
        Really
        <br />...<br />...<br />...<br />
        long
        <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />
        content
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
</Layout>
```

5:50 - ([source](https://ant.design/components/icon/))
```
<Icon type="book" />
```

## Type Alert!
3:40 - A made a mistake by defining two style props in the same component like so:
```
<Layout style={{ marginLeft: 200 }} style={{height: '100vh'}}>
```
It should have been:
```
<Layout style={{ marginLeft: 200, height: '100vh' }}>
```
In that case, we wouldn't have to delete the `position: "fixed"` and `left: 0` properties from the <Sider> component.
