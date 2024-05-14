

import './Articles.css';
import img1 from '../../images/image-currency.jpg'
import img2 from '../../images/image-restaurant.jpg'
import img3 from '../../images/image-plane.jpg'
import img4 from '../../images/image-confetti.jpg'

function Articles() {

  const articles = [
    { 
      id: 1,
      img: img1,
      author: 'By Claire Robinson', 
      title: 'Receive money in any currency with no fees' ,
      desc: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    { 
      id: 2,
      img: img2,
      author: 'By Wilson Hutton', 
      title: 'Treat yourself without worrying about money' ,
      desc: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    { 
      id: 3,
      img: img3,
      author: 'By Wilson Hutton', 
      title: 'Take your Easybank card wherever you go' ,
      desc: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    },
    { 
      id: 4,
      img: img4,
      author: 'By Claire Robinson', 
      title: 'Our invite-only Beta accounts are now live!' ,
      desc: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    },
    
  ];


  return (
        <section className='articles'>
                <div className='article-head'>
                  <h1>Latest Articles</h1>
                </div>
                <div className='article-body'>
                  {articles.map(art => (
                    <div className='article-card' key={art.id} >
                    <div className='a-card-head' > 
                      <img className='a-img' src={art.img} />
                    </div>
                    <div className='a-card-body'>
                      <div style={{width: '80%'}}>
                        <h6>{art.author}</h6>
                        <h4>{art.title}</h4>
                        <h5>{art.desc}</h5>
                      </div>
                    </div>
                    </div>
                  ))}
                </div>
                
                
                
        </section>
  );
}

export default Articles;
