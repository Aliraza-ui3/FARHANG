import up from '../assets/images/up.png';
import customer from '../assets/images/customer.png'
import money from '../assets/images/money.png'
import delivery from '../assets/images/delivery.png';
export default function Features(){
return(
    <>
    <div className=" p-5 my-5 container-fluid row justify-content-center text-center">
    <div className="col-lg-4 col-md-6 cl-sm-12 justify-content-center text-center">
    <img className='my-3' src={delivery} alt="" />
    <p className='fw-bold'> FREE AND FAST DELIVERY</p>
    <p>Free delivery for all orders over $140</p>
    </div>
    <div className="col-lg-4 col-md-6 cl-sm-12 justify-content-center text-center">
        <img className='my-3' src={customer} alt="" />
        <p className='fw-bold'>24/7 CUSTOMER SERVICE</p>
        <p>Friendly 24/7 customer supports</p>
    </div>
    <div className="col-lg-4 col-md-6 cl-sm-12 justify-content-center text-center">
    <img className='my-3' src={money} alt="" />
    <p className='fw-bold'>MONEY BACK GUARANTEE</p>
    <p>We reurn money within 30 days</p>
    </div>
    </div>
    <div className='justify-content-end'>
        <p style={{textAlign:'right'}} className='mx-5 justify-content-end'><img src={up} alt="" /></p>
        </div>
    </>
)

}