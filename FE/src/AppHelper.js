import extentionImg from './assets/img/vs-code-extensions.jpg';
import chatImg from './assets/img/ChatApp.jpg';
import ERC20Img from './assets/img/ERC20.jpg';
import shortenUrlImg from './assets/img/ShortenUrl.jpg';
import cryptoTowerImg from './assets/img/CryptoTower.png';
import reactImg from './assets/img/React.png';
import nodeJsImg from './assets/img/nodejs.png';
import cssImg from './assets/img/css3.png';
import htmlImg from './assets/img/html5.png';
import JsImg from './assets/img/js.png';
import TsImg from './assets/img/ts.png';

export const textsImgsArr = [
  {
    img: extentionImg,
    name: 'react-style-component-helper',
    desc: 'Helping other devs to build react styled component faster',
    link: 'https://marketplace.visualstudio.com/items?itemName=NoamDadon.react-style-component-helper',
    tech: 'JS',
  },
  {
    img: chatImg,
    name: 'Chat App',
    desc: 'Simulate live chat application with instant messages',
    link: 'https://github.com/DadonStyle/ChatApp',
    tech: 'Ts, React, Node, Socket.io',
  },
  {
    img: ERC20Img,
    name: 'Transfer ERC20',
    desc: 'Connect & transfer Ethereum based token from one wallet to another',
    link: 'https://github.com/DadonStyle/TransferERC20/tree/main',
    tech: 'JS, React, Web3',
  },
  {
    img: shortenUrlImg,
    name: 'Url Shortener',
    desc: 'Shorten your URL & count the amount of clicks per URL',
    link: 'https://github.com/DadonStyle/Url-Shortener',
    tech: 'Ts, React, Node, MongoDB',
  },
  {
    img: cryptoTowerImg,
    name: 'Crypto Tower FE',
    desc: 'Game, imitation of Crash',
    link: 'https://github.com/DadonStyle/Crypto-Tower-FE',
    tech: 'Js, React, Redux',
  },
];

export const imgArr = [
  {
    frontImg: reactImg,
    backImg: nodeJsImg,
  },
  {
    frontImg: cssImg,
    backImg: htmlImg,
  },
  {
    frontImg: JsImg,
    backImg: TsImg,
  },
];
