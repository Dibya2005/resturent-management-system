import React from 'react'
import { GrRadialSelected } from "react-icons/gr";
import { menus } from '../../constants'
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addItems } from '../../redux/slices/cartSlice';

const MenuContainer = () => {
    

    const [selected, setSelected] = React.useState(menus[0]);
    const [quantity, setQuantity] = React.useState(0);
    const [itemid, setItemId] = React.useState(null);
    const dispatch=useDispatch();
    const increaseQuantity = (id) => {
        setItemId(id);
        if(quantity >= 6){
            return;
        }
        setQuantity(quantity + 1);
    }
    const decreaseQuantity = (id) => {
        setItemId(id);
        if(quantity === 0){
            return;
        }   
        setQuantity(quantity - 1);
    }
    const handleAddToCart=(menu)=>{
        if(quantity===0){
            return;
        }
        const {name,price}=menu;
        const newobj={
            id:Date.now(),
            name,
            priceperunit:price,
            quantity:quantity,
            totalprice:price*quantity
        }
        dispatch(addItems(newobj));
        setQuantity(0);
        setItemId(null);
        }    
  return (
    <>
  
    <div className='grid grid-cols-4 gap-4 px-20 py-4  w-[100%]'>
        {
            menus.map((menu)=>{
                return(
                    <div key={menu.id} className='flex items-start flex-col justify-between p-4 rounded-lg h-[100px] cursor-pointer '
                    style={{backgroundColor: menu.bgColor}}
                    onClick={()=> {
                        setSelected(menu);
                        setItemId(null);
                        setQuantity(0);
                    }}
                    >
                        
                            <div className=' flex items-center justify-between w-full'>
                                <h1 className='text-[#f5f5f5] text-lg font-semibold'>{menu.icon} {menu.name}</h1>
{selected.id===menu.id && <GrRadialSelected className='text-white' size={20}/>}
                            </div>
                            <p className='text-[#ababab] text-sm font-semibold' >{menu.items.length} Items</p>
                    </div>
                )
            })
        }
        </div>
        <hr className='border-[#e0e0e0] border-t-2 mt-4'/>
          <div className='grid grid-cols-4 gap-4 px-20 py-4  w-[100%]'>
        {
            selected?.items.map((menu)=>{
                return(
                    <div key={menu.id} className='flex items-start flex-col justify-between p-4 rounded-lg h-[150px] cursor-pointer hover:bg-[#e8e8e8] bg-[#f5f5f5] '
                    
                    >
                        <div className='flex items-start justify-between w-full'>
                            <h1 className='text-[#1a1a1a] text-lg font-semibold'> {menu.name}</h1>
                            <button onClick={()=>
                            
                                handleAddToCart(menu)
                            }className='bg-[#d4edda] text-[#02ca3a]  p-2 rounded-lg'> <FaShoppingCart /> </button>
                        </div>
                        
                            <div className=' flex items-center justify-between w-full'>
                                <p className='text-[#555555] text-xl font-semibold' >{menu.price} rs</p>
                                <div className='flex items-center justify-between bg-[#eaeaea] px-4 py-3 rounded-lg gap-6'>
            
            <button onClick={()=>{
                decreaseQuantity(menu.id);
            }} className='text-[#d3a000] text-2xl'>&minus;</button>
            
            <span className='text-[#1a1a1a] '>{menu.id===itemid ? quantity : "0"}</span>
            
            <button onClick={()=>{
                increaseQuantity(menu.id);
            }} className='text-[#d3a000] text-2xl'>&#43;</button>
          
          </div>
                            </div>
                    </div>
                )
            })
        }
        </div>
        
    </>
  )
}

export default MenuContainer