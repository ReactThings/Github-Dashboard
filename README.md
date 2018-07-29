# Complete React Course for Creating Amazing UI

## Files we changed
- src/App.js (where we added <Profile/>)
- src/App.css (where we styled our page)
- src/components/Profile.js (where we created the profile page)

## Things we copied
1:00 - The 3-column <Card> sample code ([source](https://ant.design/components/card/)):
```
<div style={{ background: '#ECECEC', padding: '30px' }}>
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Card title" bordered={false}>Card content</Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>Card content</Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>Card content</Card>
    </Col>
  </Row>
</div>
```
and the import line:
```
import { Card, Col, Row } from 'antd';
```

3:15 - The <List> component ([source](https://ant.design/components/list/)):
```
<List
  itemLayout="horizontal"
  dataSource={data}
  renderItem={item => (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title={<a href="https://ant.design">{item.title}</a>}
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      />
    </List.Item>
  )}
/>
```
The dummy data:
```
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
```
And the import line:
```
import { List, Avatar } from 'antd';
```

5:04 - [Pagination Configurations Docs](https://ant.design/components/pagination/)

7:20 - Large square avatar code snippet ([source](https://ant.design/components/avatar/)):
```
<Avatar shape="square" size="large" icon="user" />
```

13:43 - Spin component ([source](https://ant.design/components/spin/)):
```
<Spin />
```
