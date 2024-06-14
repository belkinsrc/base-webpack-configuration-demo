import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import styles from './App.module.scss';
import imagePng from '@/assets/avatar.png';
import imageJpg from '@/assets/avatar.jpg';
import Calendar from '@/assets/calendar.svg';

// Tree shaking (функия нигде не используется, значит в бандл не попадает)
function TODO(a: number) {
  console.log('TODO' + a);
}

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);

  //////////////////////////////

  const calendar = __PLATFORM__ === 'mobile' 
    ? <Calendar height={50} width={50} fill='red' /> 
    : <Calendar height={150} width={150} fill='blue' /> 

    // Если prod значит что то делаем, и т.д..
    if (__ENV__ === 'production') {
      // addSomeFunc();
    }
    
  //////////////////////////////

  return (
    <div data-testid={"App.DataTestId"}>
      <Link to={'/about'} >About</Link>
      <Link to={'/shop'} >Shop</Link>
      <button className={styles.button} onClick={increment}>
        Click!
      </button>
      <span>{count}</span>
      <Outlet/>
      <img height={100} width={100} src={imagePng} alt="" />
      <img height={100} width={100} src={imageJpg} alt="" />
    
      <div>
        {calendar}
      </div>
    </div>
  );
};

export { App };
