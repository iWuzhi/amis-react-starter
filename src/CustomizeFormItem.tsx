/**
 * author iWuzhi
 * date 2021-02-07 10:10:26
 */

import React from 'react';
import {FormItem} from 'amis';

const CustomizeFormItem: React.FC<any> = (props) => {
  const { value } = props;
  const onChange = (e: any) => {
    let val = e.target.value;
    if (val === '') val = undefined;  // 区别 ''
    props.onChange(val);
  }
  return (
    <input type="text" value={value} onChange={onChange} />
  )
}

export default FormItem({
  type: 'customize',
})(CustomizeFormItem);
