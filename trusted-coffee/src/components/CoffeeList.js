import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Card } from 'antd';
import { fetchCoffees } from '../features/coffeeSlice';

const CoffeeList = () => {
  const dispatch = useDispatch();
  const coffees = useSelector((state) => state.coffee.coffees);
  const coffeeStatus = useSelector((state) => state.coffee.status);

  useEffect(() => {
    if (coffeeStatus === 'idle') {
      dispatch(fetchCoffees());
    }
  }, [coffeeStatus, dispatch]);

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={coffees}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.name}>{item.description}</Card>
        </List.Item>
      )}
    />
  );
};

export default CoffeeList;
