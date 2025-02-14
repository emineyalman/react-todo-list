import { useNavigate } from "react-router-dom"
export const data = [ 
  {
    id:0,
    name:"react",
    description:"react aciklama"
  },
  {
    id:1,
    name:"vue",
    description:"react aciklama"
  },
  {
    id:2,
    name:"angular",
    description:"react aciklama"
  }
]
const Home = () => {
const navigate = useNavigate();


    return (
      <div>
          {
            data.map((item,index)=> (
             
                <div onClick={() => navigate(`detail/${item.id}`)} style={{cursor:'pointer',marginBottom:'30px'}} key={index}>
                  <div>{item.name}</div>
                  <div>{item.description}</div>
                </div>
              
            ))
          }
      </div>
    )
  }
  
  export default Home