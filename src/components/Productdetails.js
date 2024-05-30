import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import img1 from '../assets/images/Frame 895.png';
import img2 from '../assets/images/Frame 896.png';
import img3 from '../assets/images/Frame 897.png';
import img4 from '../assets/images/Frame 919.png';
import img5 from '../assets/images/Frame 894.png';
import img6 from '../assets/images/Frame 922.png';
import img7 from '../assets/images/UnderLine (2).png';
import img8 from '../assets/images/Group 1000005935.png';
import img9 from '../assets/images/Ellipse 8.png';
import img10 from '../assets/images/Wishlist.png';
import img11 from '../assets/images/Frame 911.png';
import Bestselling from './Bestselling';
export default function Productdetails() {
    const sty={
        width:'42px', height:'32px',backgroundColor:'white',color:'black',justifyContent: 'center',
                                alignItems: 'center',fontSize:'15px',display: 'flex'
    }
    const buttonStyle = {
        fontSize:'15px',        
        width: '40px',
        height: '32px',
        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
      };
      
      
    return (
        <>
            <div className="Container">
                <div className="row">
                    <div className="col-lg-3 col-sm-12 col-md-6">
                    <img className='mx-5 my-3' src={img1}/><br />
                    <img className='mx-5 my-3' src={img2}/><br />
                    <img className='mx-5 my-3' src={img3}/><br />
                    <img className='mx-5 my-3' src={img4}/>
                    </div>

                    <div className="col-lg-4 my-2 col-sm-12 col-md-6">
                    <img className='my-5' style={{height:'530px',width:'500px'}}src={img5}/>
                    </div>
                    <div className="col-lg-4 mx-5 col-sm-12 col-md-6">
                        <br />
                     <h2 className='my-3 fw-bold'>Applique Chaddar</h2>
                     <img src={img6}/>
                     <br />
                     <h3 className='my-3'>$192.00</h3>
                     <h6>Applic Work Hand Made Long Size Chadders <br /> Available  Stuff Swiss Voil Length 2.5 Yard</h6>
                     <img src={img7}/>
                     <p>
                           Colours: 
                            <img className='mx-3' src={img8}/>
                            <img  src={img9}/>
                        </p>
                        <p>
                           Size:
                           <ButtonGroup className="me-2" aria-label="First group">
                            <Button className='fw-bold mx-2' variant="secondary" style={buttonStyle}>XS</Button>{''}
                            <Button className='fw-bold mx-2' variant="secondary" style={buttonStyle}>S</Button>{''}
                            <Button style={{        width: '40px',
                                height: '32px',        display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',fontSize:'15px'
                                }} 
                            className=' gradient-container mx-2'>M</Button>{''}
                            <Button className='fw-bold mx-2' variant="secondary" style={buttonStyle}>L</Button>{''}
                            <Button className='fw-bold mx-2' variant="secondary" style={buttonStyle}>XL</Button>
                            </ButtonGroup>
                                                </p> 

                        <p>
                        <ButtonGroup className="me-2 " aria-label="First group">
              
  <ButtonGroup className="d-inline-flex">
  {/* Your other buttons or components here */}
             <Button  variant="secondary" style={{width:'55px', height:'50px',backgroundColor:'white',color:'black',display:'flex',justifyContent:'center',textAlign:'center',fontSize:'23px'}}>-</Button>{''}
                           <Button  variant="secondary" style={{width:'70px', height:'50px',backgroundColor:'white',color:'black',justifyContent:'center',textAlign:'center',display:'flex',fontSize:'23px'}}>2</Button>{''}
                           <Button  variant="secondary" style={{width:'55px', height:'50px',backgroundColor:'white',color:'white',display:'flex',justifyContent:'center',textAlign:'center',fontSize:'22px'}} className='gradient-container'>+</Button>
                           </ButtonGroup>
              
  <Button
    style={{ width: '160px', height: '50px', justifyContent: 'center', textAlign: 'center', fontSize: '15px' }}
    className='gradient-container mx-2'
  >
    Buy Now
  </Button>

  <Button
    className='d-flex align-items-center justify-content-center'
    variant="secondary"
    style={{ width: '55px', height: '50px', backgroundColor: 'white', color: 'black' }}
  >
    <img
      className=''
      style={{ width: '40px', height: '36px' }}
      src={img10}
      alt="Your Image Alt Text"
    />
  </Button>
</ButtonGroup>
                            </p> 
                            <p>
                            <img style={{width:'420px'}} src={img11}/>
                            </p>
                    </div>
                </div>
            </div>
            <br /><br />
<Bestselling/>
        </>
    )
} 