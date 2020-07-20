import React from "react";
import { Card } from 'antd';
import tutors from "../../data/tutors";
import routes from "../../routes";

import jaekwon1 from "../../data/jaekwon1.jpg"

const { Meta } = Card;

const TutorsPage = props => {
  return (
    tutors.map(({id, name}) => {
    return  <Card
                onClick={() => {props.history.push(`${routes.tutornoid}/${id}`)}}
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={jaekwon1} />}
              >
                <Meta title={name} description="desc" />
              </Card>
    })
  );
};

export default TutorsPage;