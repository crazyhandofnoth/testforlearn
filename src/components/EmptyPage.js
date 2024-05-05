import React from 'react';
import { Button, Empty } from 'antd';
const EmptyPage = () => (
  <Empty
    image="https://react.dev/images/uwu.png"
    imageStyle={{
      height: 60,
    }}
    description={
      <span>
        Customize <a href="#API">Description</a>
      </span>
    }
  >
   </Empty>
);
export default EmptyPage;