import Carousel from 'react-bootstrap/Carousel';

function Main() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/37/6f/73/376f733e325f1c3719efcb8b82786f91.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>COLECCIÓN INVIERNO - PRIMAVERA</h2>
          <p className='fs-4'>Small, Medium, Large</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/57/e0/0a/57e00a980a70ba979f31d1a9ce0ee5bf.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h2>COLECCIÓN INVIERNO - PRIMAVERA</h2>
          <p className='fs-4'>Small, Medium, Large</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/78/b2/fa/78b2fad3e8cc62155697eb7e0d55ad25.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h2>COLECCIÓN INVIERNO - PRIMAVERA</h2>
          <p className='fs-4'>Small, Medium, Large</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Main;