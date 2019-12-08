import React from 'react';
import { Icon } from 'antd';

 const Services = () => {
  return (
   <section id="services">
   <div className="contain">
    <div className="title">
    <div className="circle"></div> 
    <h1>Services</h1>
    </div>
    <div className="services-container">
    <div className="box blue">
    <div className="icon"><Icon type="star" /></div>
    <h5>Best Quality Ever</h5>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vehicula pulvinar neque eu consequat.Proin ac sollicitudin nibh, sit amet rutrum diam.Quisque pulvinar consequat. </p>
    </div>
    <div className="box red">
    <div className="icon"><Icon type="thunderbolt" /></div>
    <h5>Fastest Ever Deliver</h5>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vehicula pulvinar neque eu consequat.Proin ac sollicitudin nibh, sit amet rutrum diam.Quisque pulvinar consequat. </p>
    </div>
    <div className="box green">
    <div className="icon"><Icon type="global" /></div>
    <h5>Culture Quality Designs</h5>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vehicula pulvinar neque eu consequat.Proin ac sollicitudin nibh, sit amet rutrum diam.Quisque pulvinar consequat. </p>
    </div>
    </div>
    </div>
   </section>
  )
}


export default Services;