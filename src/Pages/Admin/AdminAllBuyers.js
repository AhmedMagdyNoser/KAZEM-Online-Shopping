import AdminTabs from "../../Component/Admin/AdminTabs";
import BuyerInfo from "../../Component/Buyer/BuyerInfo";
export default function AdminAllBuyers() {

  const Buyers = [
    {
      name : "Karimzz" , 
      email : "Karimzz@gmail.com" ,
      password : "12345" , 
      address : "Cairo"
    } ,
    {
      name : "Ahmed" , 
      email : "Ahmed@gmail.com" ,
      password : '243434' ,
      address : "Zagaizg"
    } ,
    {
      name  :"Mshref" , 
      email : "Mshref@gmail.com", 
      password : "232133"  ,
      address : "London"
    } ,
    {
      name : "Ziad" , 
      email : "Ziad@gmail.com" ,
      password : "43432432" ,
      address : "Alex"
    } , 
    {
      name : "Moahmed" , 
      email : "Moahmed@gmail.com"  ,
      password : "23232" , 
      address : "US"
    }
  ]
  return (
    <div>
      <AdminTabs active='All Buyers' />
      
      <div className="container kcontainer">
          {
            Buyers.map((item , idx)=>{
              return <BuyerInfo key={idx} name={item.name} email={item.email} password={item.password} address={item.address} />
            })
          }
      </div>
      
    </div>
  )
}