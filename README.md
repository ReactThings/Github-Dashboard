# Complete React Course for Creating Amazing UI

## Files we changed
- src/App.js (where we added the search box)

## Things we copied
0:37 - Import line for the <Search> component:
```
import { Input } from 'antd';
const Search = Input.Search;
```

1:27 - Copying the <Search> component:
```
<Search
  placeholder="input search text"
  onSearch={value => console.log(value)}
  enterButton
/>
```
