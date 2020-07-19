import React from "react";
import { List, Avatar } from 'antd';
import tutors from "../../data/tutors";
import routes from "../../routes";

const TutorsPage = () => {

  const listData = [];
  for (let i = 0; i < 1; i++) {
    listData.push({
      href: `${routes.tutornoid}/${tutors[0].id}`,
      title: `${tutors[0].name}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description:
        'Description part.',
      content:
        'More description if needed.',
    });
  }

  return (
    <List
      itemLayout="vertical"
      size="large"
      // pagination={{
      //   onChange: page => {
      //     console.log(page);
      //   },
      //   pageSize: 3,
      // }}
      dataSource={listData}
      // footer={
      //   <div>
      //     <b>ant design</b> footer part
      //   </div>
      // }
      renderItem={item => (
        <List.Item
          key={item.title}
          // actions={[
          //   <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          //   <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          //   <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
          // ]}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default TutorsPage;