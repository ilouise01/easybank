import './Intro.css';
import mockups from '../../images/image-mockups.png';

function Intro() {
  return (
    <section className='intro'>
        <img className='mockup-image' src={mockups} />
        <div className='intro-title'>
          <h1>Next generation digital banking</h1>
          <h4>
            Take your financial life online. Your Easybank account will be a one-stop-shop 
            for spending, saving, budgeting, investing, and much more.
          </h4>
          

          <button className='ri-btn'><h4>Request Invite</h4></button>
        </div>
        
      </section>
  );
}

export default Intro;
