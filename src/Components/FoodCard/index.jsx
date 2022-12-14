import {FaPlus} from "react-icons/fa"
import {FaMinus} from "react-icons/fa"
import { addFoodOrder , removeFoodOrder } from "../../redux/reducers/orderReducer/orderReducer"
import {useDispatch , useSelector } from "react-redux"

const FoodCard = ({id,name,price,picture,key}) => {
    const dispatch = useDispatch()    

    const orderCount = (useSelector((state)=> state.order.orderList)).find(item => item.foodId === id)?.count

    return(
        <div className="w-full bg-white rounded flex flex-row gap-3 text-black"> 
            <div className="w-[35%]">
                <img className="w-full h-[6.5rem]" alt="" src={picture}/>
            </div>       

            <div className="w-[65%] flex gap-2 justify-center items-start flex-col font-[vazir] pl-2">
                <p className="font-[vazirBold]">{name}</p>
                {console.log(name)}
                <p className="text-start font-[vazirdig]">{price}<span> تومان</span></p>
                

                <div className="w-full flex justify-between">                    
                    <div className="flex flex-row">
                        <button onClick={()=> dispatch(addFoodOrder(id))} className="text-[13px] rounded-tr-[.25rem] rounded-br-[.25rem] bg-[#9E1010] w-[1.5rem] flex justify-center items-center text-white"><><FaPlus/></></button>
                        <span className="pl-2 pr-2 bg-[#f0f8ff] font-[vazirdig] ">
                            {orderCount??0}
                        </span>
                        <button disabled={!(orderCount > 0)} onClick={()=> dispatch(removeFoodOrder(id))} className="text-[13px] rounded-tl-[.25rem] rounded-bl-[.25rem] bg-[#9E1010] w-[1.5rem] flex justify-center items-center text-white disabled:bg-gray-300 disabled:text-gray-500"><><FaMinus/></></button>
                    </div>
                    <div className="font-[vazirdig] flex gap-1">
                        <span>
                            {(orderCount??0) * price}
                        </span>
                        <span>تومان</span>
                    </div>
                </div>
            </div>            
        </div>        
    )
}

export default FoodCard