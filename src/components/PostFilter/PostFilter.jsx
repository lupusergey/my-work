import React from 'react';
import MySelect from '../UI/select/MySelect';
import MyInput from '../UI/Input/MyInput';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
        placeholder='поиск'
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue='сортировка'
        options={[
          { value: 'title', name: 'по названию' },
          { value: 'body', name: 'по описанию' }
        ]}
      />
    </div>
  )
}

export default PostFilter;