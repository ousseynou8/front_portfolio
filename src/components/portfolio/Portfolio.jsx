import './portfolio.css';

const portfolio = ({img, link, technology}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle" />
        <div className="p-circle" />
        <div className="p-circle" />
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt={img} className="p-img" />
      </a>
<div>{technology}</div>
    </div>  
  );
};

export default portfolio;
