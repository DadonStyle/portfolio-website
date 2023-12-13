import extensionImg from '../../assets/img/vs-code-extensions.jpg';
import chatImg from '../../assets/img/ChatApp.jpg';
import ERC20Img from '../../assets/img/ERC20.jpg';
import shortenUrlImg from '../../assets/img/ShortenUrl.jpg';
import cryptoTowerImg from '../../assets/img/CryptoTower.png';
import weatherImg from '../../assets/img/WeatherImg.webp';
import galleryImg from '../../assets/img/GalleryImg.webp';

export const textsImgsArr = [
  {
    img: extensionImg,
    name: 'react-style-component-helper (Deployed)',
    desc: 'VS Code extension, helping other devs to build react styled component faster',
    link: 'https://marketplace.visualstudio.com/items?itemName=NoamDadon.react-style-component-helper',
    tech: 'JS',
  },
  {
    img: weatherImg,
    name: 'Worldwide weather (Deployed)',
    desc: 'Check the weather every where in the world',
    link: 'https://noams-weather.vercel.app/',
    tech: 'Ts, React, Redux',
  },
  {
    img: galleryImg,
    name: 'Photos Gallery (Deployed)',
    desc: 'Present gallery of imgs, have the option to import from Drive',
    link: 'https://noams-gallery-dadonstyle.vercel.app/',
    tech: 'Ts, React',
  },
  {
    img: chatImg,
    name: 'Chat App (UI Coming soon)',
    desc: 'Simulate live chat application with instant messages',
    link: 'https://github.com/DadonStyle/ChatApp',
    tech: 'Ts, React, Node, Socket.io',
  },
  {
    img: ERC20Img,
    name: 'Transfer ERC20 (UI Coming soon)',
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
];
