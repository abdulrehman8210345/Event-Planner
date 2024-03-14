// import React from 'react'

const Services = () => {
  const services = [
    {
    id:1,
    url:"/anniversary.jpg",
    title:"Anniversary Planning",
  },
    {
    id:2,
    url:"/birthday.jpg",
    title:"Birthday Planning",
  },
    {
    id:3,
    url:"/camping.jpg",
    title:"Compaign Planning",
  },
    {
    id:4,
    url:"/gamenight.jpg",
    title:"Game night Planning",
  },
    {
    id:5,
    url:"/party.jpg",
    title:"Party Planning",
  },
    {
    id:6,
    url:"/wedding.jpg",
    title:"Wedding Planning",
  },
]
  return (
    <div className="container services">
      <h2>Our Services</h2>
      <div className="banner">
        {
          services.map((ele)=>{
            return(
              <div className="item" key={ele.id}>
                <h3>{ele.title}</h3>
                <img src={ele.url} alt={ele.title} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Services