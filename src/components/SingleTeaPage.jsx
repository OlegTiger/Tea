import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function SingleTeaPage() {
  return (
    <div className="m-2">
      <Card className="card_tea" style={{ width: '45rem' }}>
        <Card.Img className="img m-2" variant="top" src="https://moychay.ru/system/product_ng_fotos/39122/medium/9f3b3b188900b932843e2da7114964da25bd2b2b/moychay_59777.jpg" alt="img_tea" />
        <Card.Body>
          <Card.Title className="tea_name">Тай Габа Улун</Card.Title>
          <Card.Title className="location">Чианграй</Card.Title>
          <Card.Text>
            Букет готового чая яркий, фруктово-ягодный с древесными и пряными нотками. Аромат интенсивный, теплый, фруктовый. Вкус плотный, маслянистый, сладковатый, с легкой травянистой горчинкой, кислинкой фруктовой карамели и освежающим послевкусием.
            Заваривать горячей водой (85-90°С) в фарфоровой гайвани или чайнике из пористой глины. Пропорция заварки к воде: 6 г на 100 мл. Для первого раза настоять 20 секунд, после чего пить проливом с постепенным увеличением экспозиции. Выдерживает 8-9 завариваний.
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
