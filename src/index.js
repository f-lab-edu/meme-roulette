import { hello, add } from './pages/TestPage/testpage';

import './styles/reset.scss';
import './styles/common.scss';

import minju from './assets/images/minju.jpg';

const text = hello('나는 밍쥬~~~~bbbbfffffffffffffbb');
const num = add(1, 2);
const img = `<img src=${minju} alt="민주사진" />`;
const button = `<button className="test">show me the button 버튼을 보여줘</button>`;

document.getElementById('root').innerHTML = img + text + num + button;
