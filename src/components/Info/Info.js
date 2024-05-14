import online from '../../images/icon-online.svg';  
import budgeting from '../../images/icon-budgeting.svg';  
import onboarding from '../../images/icon-onboarding.svg';  
import api from '../../images/icon-api.svg';  
import './Info.css';

function Info() {
  return (
    <section className='info'>
        
        <div className='info-head'>

            <h1>Why choose Easybank?</h1>
            <h4>We leverage Open Banking to turn your bank account into your financial hub. Control 
            your finances like never before.</h4>

          
        </div>


        <div className='info-body'>


          <div className='info-card'>
            <img src={online}/>
            <h3>Online Banking</h3>
            <h4>Our modern web and mobile applications allow you to keep track of your finances 
            wherever you are in the world.</h4>
          </div>

          <div className='info-card'>
            <img src={budgeting}/>
            <h3>Simple Budgeting</h3>
            <h4>See exactly where your money goes each month. Receive notifications when you’re 
            close to hitting your limits.</h4>
          </div>

          <div className='info-card'>
            <img src={onboarding}/>
            <h3>Fast Onboarding</h3>
            <h4>We don’t do branches. Open your account in minutes online and start taking control 
            of your finances right away.</h4>
          </div>

          <div className='info-card'>
            <img src={api}/>
            <h3>Open API</h3>
            <h4>Manage your savings, investments, pension, and much more from one account. Tracking 
            your money has never been easier.</h4>
          </div>
          

        </div>
        

        
        


        
        
        
      </section>
  );
}

export default Info;
