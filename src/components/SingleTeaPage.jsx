import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function SingleTeaPage({teaPost}) {
  return (
    <div className="m-2">
      <Card className="card_tea" style={{ width: '45rem' }}>
        <Card.Img className="img m-2" variant="top" src={teaPost.img} alt="img_tea" />
        <Card.Body>
          <Card.Title className="tea_name">{teaPost.name}</Card.Title>
          <Card.Title className="location">{teaPost.place}</Card.Title>
          <Card.Text>
           {teaPost.description}
          </Card.Text>

        </Card.Body>
        {/* //для пользователя */}
        <div className="row">
          <div className="col">
            <Button variant="primary border m-1">Add comment</Button>
            <Button variant="danger border m-1">Delete</Button>
          </div>
        </div>

        {/* // для админа */}
        <div className="row">
          <div className="col">
            <Button variant="secondary border m-1">Add new tea</Button>
            <Button variant="warning border m-1">All tea</Button>
          </div>
        </div>
      </Card>

    </div>
  );
}
