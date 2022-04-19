import './portfolioItem.css';
import Portfolio from '../portfolio/Portfolio';
import {portfolio} from '../../data';

const PortfolioItem = () => {
 
 
  return (
    <div className="pl">
      
      <div className="pl-texts">
        
        <h1 className="pl-title">Créés et Inspirés Par Fofana Ousseynou</h1>
        {/* <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni unde a ab aliquam esse dolorem saepe neque, fuga recusandae quis quo fugit, nesciunt cupiditate earum molestiae eum asperiores, ad architecto.
        </p> */}
      </div>
      <div className="pl-list">
        
        {portfolio.map (item => (
       
          <Portfolio
          
          key={item.id} img={item.img} link={item.link} technology={item.technology}/>
          
        ))}
   
      </div>
    </div>
  );
};

export default PortfolioItem;
