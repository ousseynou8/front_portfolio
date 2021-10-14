import "../portfolio/portfolio.css"

const portfolio = ({img, link}) => {
  return (
    <div className="p">
      <div className="p-brower">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
<img src={img} alt="" className="p-img"/>

      </a>
    </div>
  )
}

export default portfolio
