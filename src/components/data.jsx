import imga from '../assets/IMG_7564.jpg';
import imgb from '../assets/IMG_7565.jpg';
import imgc from '../assets/IMG_7566.jpg';
import imgd from '../assets/IMG_7567.jpg';
import imge from '../assets/IMG_7568.jpg';

import porta from '../assets/port1 (1).jpg';
import portb from '../assets/port1 (2).jpg';
import portc from '../assets/port1 (3).jpg';
import portd from '../assets/port1 (4).jpg';
import porte from '../assets/port1 (5).jpg';

import portfa from '../assets/portf (1).jpg';
import portfb from '../assets/portf (2).jpg';
import portfc from '../assets/portf (3).jpg';
import portfd from '../assets/portf (4).jpg';
import portfe from '../assets/portf (5).jpg';

import fasha from '../assets/fash (1).jpg';
import fashb from '../assets/fash (2).jpg';
import fashc from '../assets/fash (3).jpg';
import fashd from '../assets/fash (4).jpg';
import fashe from '../assets/fash (5).jpg';
import fashf from '../assets/fash (6).jpg';
import fashg from '../assets/fash (7).jpg';

import weda from '../assets/wed (1).jpg';
import wedb from '../assets/wed (2).jpg';
import wedc from '../assets/wed (3).jpg';
import wedd from '../assets/wed (4).jpg';
import wede from '../assets/wed (5).jpg';

import casa from '../assets/cas1 (1).jpg';
import casb from '../assets/cas1 (2).jpg';
import casc from '../assets/cas1 (3).jpg';
import casd from '../assets/cas1 (4).jpg';
import casue from '../assets/cas1 (5).jpg';


const items = [
    {
      id: 1,
      title: 'Fashion',
      cover: imga,
      image: [fasha, fashb, fashc, fashd, fashe, fashf, fashg],
    },
    {
      id: 2,
      title: 'Portfolio',
      cover: imgb,
      image: [portfa, portfb, portfc, portfd, portfe],
    },
    {
      id: 3,
      title: 'Wedding',
      cover: imgc,
      image: [weda, wedb, wedc, wedd, wede],
    },
    {
      id: 4,
      title: 'Portraits',
      cover: imgd,
      image: [porta, portb, portc, portd, porte],
    },
    {
      id: 5,
      title: 'Casual',
      cover: imge,
      image: [casa, casb, casc, casd, casue],
    },
  ];

export default items;