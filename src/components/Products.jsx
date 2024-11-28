
import React,{useEffect} from 'react'
import { addProduct } from '../redux/features/cartSlice';
import { useDispatch,useSelector } from 'react-redux';
import { fetchProducts } from '../redux/features/producSlice';
import {STATUS} from "../redux/features/producSlice"
import { ScaleLoader } from 'react-spinners';

const Products = () => {
    // const [products, setProducts] = useState([]);
   const dispatch = useDispatch()
   const {data:products,status} = useSelector((state)=> state.product)
    useEffect(() =>{
      dispatch(fetchProducts())
        // axios.get("https://fakestoreapi.com/products")
        // .then((response) =>{
        //     setProducts(response.data)
        //   console.log(response)
        // }).catch((error) =>{
        //     console.log(error);
        // })
    },[dispatch]);

          function handleAdd(product) {
            dispatch(addProduct(product))
      }

        if(status === STATUS.LOADING){
          return <ScaleLoader loading={true} size={250} color={'#123abc'} cssOverride={{textAlign:'center'}} />
        }
        if(status === STATUS.ERROR){
          return <h2>Something went wrong!</h2>
        }


  return (
    <div className="productsWrapper">
      
      {products.length>0 && products.map((item)=>(
        <div key={item.id} className="card">
            <img src={item.image} alt='Product'/>
            <h4>{item.title}</h4>
            <h5>₹{item.price}</h5>
            <button className='btn' onClick={()=>handleAdd(item)}>Add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default Products
