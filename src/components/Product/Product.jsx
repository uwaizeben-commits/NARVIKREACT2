import { Link } from 'react-router-dom'
import Data from '../../Data'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/actions/index'
import './Product.css'; // Import the CSS file for hover effects

const Product = () => {
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addItem(product));
  }

  const cardItem = (item) => {
    return(
      // Wrap the card in a column div for proper grid layout and spacing
      <div className="col-md-3 col-sm-6 mb-4" key={item.id}>
        <div className="card h-100 text-center p-4"> {/* h-100 for equal height, p-4 for padding */}
            <img src={item.image} className='card-img-top' alt={item.title} height={250}/>
            <div className='card-body text-center'>
              <h5 className='card-title'>{item.title}</h5>
              <p className="lead">${item.price}</p>
              <Link to={`/product/${item.id}`} className='btn btn-outline-primary me-2'>View Details</Link>
              <button onClick={()=>addProduct(item)} className='btn btn-primary'>Add to Cart</button>
            </div>
          </div>
      </div>
    )
  }

  return (
    <div>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1>Products</h1>
            <hr/>
          </div>
        </div>
      </div>


      <div className='container'>
        <div className='row justify-content-around'>
          {Data.map(cardItem)}
        </div>
      </div>
    </div>
  )
}

export default Product