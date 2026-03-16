import React from 'react';
import './mainFooter.css';

const Footer = () => {
  return (
    <footer class='cssFooter'>
      <h1 class='cssFooterTitle'>HotWheels Lab</h1>
      <p>Conheça nossas redes sociais e fique por dentro das novidades!</p>
      <ul>
        <li><a href="https://www.facebook.com/HotWheels">Facebook</a></li>
        <li><a href="https://www.instagram.com/hotwheels/">Instagram</a></li>
        <li><a href="https://twitter.com/HotWheels">Twitter</a></li>
        <li><a href="https://www.youtube.com/user/HotWheels">YouTube</a></li>
      </ul>
      <hr />
      <p>&copy; 2023 HotWheels Lab. Non-official fan project.</p>
    </footer>
  );
};

export default Footer;