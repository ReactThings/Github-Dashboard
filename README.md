# Complete React Course for Creating Amazing UI

## Files we changed
- package.json and package-lock.json (due to npm installation)
- src/index.js (where we set up React Router)
- src/App.js (where we added a <Repo> component and React Router code)
- src/components/Repo.js (NEW, we created it to display all repositories)

## Things we copied
0:15 - Installing React Router:
```
npm install --save react-router-dom
```

4:00 - Helper constants for the <Table> component:
```
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Action 一 {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
      <Divider type="vertical" />
      <a href="javascript:;" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];
```
The import line:
```
import { Table, Icon, Divider } from 'antd';
```
And the actual <Table> component
```
<Table columns={columns} dataSource={data} />
```
