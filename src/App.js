import logo from './images/logo.svg';


import online from './images/icon-online.svg';  
import budgeting from './images/icon-budgeting.svg';  
import onboarding from './images/icon-onboarding.svg';  
import api from './images/icon-api.svg';  
import './App.css';
import Header from './Header/Header';
import Intro from './Intro/Intro';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      
      
      <section className='info'>
        
        <h2>Why choose Easybank?</h2>
        <h4>We leverage Open Banking to turn your bank account into your financial hub. Control 
        your finances like never before.</h4>

        <img src={online}/>
        <h3>Online Banking</h3>
        <h4>Our modern web and mobile applications allow you to keep track of your finances 
        wherever you are in the world.</h4>

        <img src={budgeting}/>
        <h3>Simple Budgeting</h3>
        <h4>See exactly where your money goes each month. Receive notifications when you’re 
        close to hitting your limits.</h4>

        <img src={onboarding}/>
        <h3>Fast Onboarding</h3>
        <h4>We don’t do branches. Open your account in minutes online and start taking control 
        of your finances right away.</h4>

        <img src={api}/>
        <h3>Open API</h3>
        <h4>Manage your savings, investments, pension, and much more from one account. Tracking 
        your money has never been easier.</h4>
        
        
      </section>
      <section className='articles'>
        Latest Articles

        By Claire Robinson
        Receive money in any currency with no fees
        The world is getting smaller and we’re becoming more mobile. So why should you be 
        forced to only receive money in a single …

        By Wilson Hutton
        Treat yourself without worrying about money
        Our simple budgeting feature allows you to separate out your spending and set 
        realistic limits each month. That means you …

        By Wilson Hutton
        Take your Easybank card wherever you go
        We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
        while you’re abroad. We’ll even show you …

        By Claire Robinson
        Our invite-only Beta accounts are now live!
        After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
        It’s easy to request an invite through the site ...
      </section>
      <footer>
        About Us
        Contact
        Blog
        Careers
        Support
        Privacy Policy

        Request Invite

        © Easybank. All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
