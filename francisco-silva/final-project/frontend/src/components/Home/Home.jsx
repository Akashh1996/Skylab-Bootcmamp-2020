import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <>
      <article className="home-main_wrapper">
        <div className="home-main-img_wrapper">
          <img className="home-main-img" src="https://instagram.fbcn8-2.fna.fbcdn.net/v/t51.2885-15/e35/36588290_1524451737658784_5809493259877089280_n.jpg?_nc_ht=instagram.fbcn8-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=-WXmiTSttxsAX_RtpoM&tp=1&oh=8da7ee2db657c700e2c86b4ffd18db34&oe=600018C8" alt="" />
        </div>
        <div className="link-evnts-block">
          <img className="link-evnts-img_left" src="https://instagram.fbcn8-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/92220822_954458881638674_5347814347170591645_n.jpg?_nc_ht=instagram.fbcn8-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=hyuwDk8bwcUAX8PR7Um&tp=1&oh=faeceb7194a9c09b0fa18183c6a78d8f&oe=5FFF96F4" alt="" />
          <div className="link-evnts-txt_wrapper"><Link to="/events"><p>EVENTOS</p></Link></div>
          <div className="link-evnts-img_right_wrapper">
            <img className="link-evnts-img_right" src="https://instagram.fbcn8-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/92948807_146868726815400_6042196693899571790_n.jpg?_nc_ht=instagram.fbcn8-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=oE-S-NHKfGEAX-Vgv-W&tp=1&oh=91a093eaaff5b3b21a636266af64ec15&oe=60000A18" alt="" />
          </div>
        </div>
        <p className="home-subtitle">OS NOSSOS PRODUCTOS</p>
        <div className="illstrtn-block_wrapper">

          <div className="illstrtn-img_wrapper">
            <img className="illstrtn-img-home avocado-illstrtn" src="https://static.wixstatic.com/media/c6edad_dc1554ee4cd545b882718a65d1008d48~mv2.png/v1/fill/w_250,h_250,al_c,q_85,usm_0.66_1.00_0.01/c6edad_dc1554ee4cd545b882718a65d1008d48~mv2.webp" alt="" />
            <Link to="/products"><p className="home-link-txt">ENCOMENDAS</p></Link>
          </div>
          <div className="illstrtn-img_wrapper">
            <img className="illstrtn-img-home nut-illstratn" src="https://static.wixstatic.com/media/c6edad_0247642aa7f841c09e81b3745618d924~mv2.png/v1/fill/w_630,h_620,al_c,q_90,usm_0.66_1.00_0.01/c6edad_0247642aa7f841c09e81b3745618d924~mv2.webp" alt="" />
            <Link to="/contact"><p className="home-link-txt cntct-home-link-txt">CONTACTOS</p></Link>
          </div>
        </div>

      </article>
    </>
  );
}
