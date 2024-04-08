import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Footer from '../components/Footer'
import Carousel from '../components/Carousel';
const Home = () => {
  const [search, setSearch] = useState([]);
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/dataList", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();
    setFoodItem(response)
  }
  const loadCategory = async () => {
    let category = await fetch("http://localhost:5000/foodCategory", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    category = await category.json();
    setFoodCat(category)
  }

  useEffect(() => {
    loadData();
    loadCategory();
  }, [])

  return (
    <div>
      {/* <div><Navbar /></div> */}
      {/* Carousel  */}
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain" }}>
          <div className="carousel-inner">
            <div className="carousel-caption d-none d-md-block" style={{ zIndex: 10 }}>
              <div className="d-flex justify-content-center">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>setSearch(e.target.value)} />
                {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
              </div>
            </div>
            <div className="carousel-item active">
              <img src='/images/burger.avif' alt="error" className='d-block w-100 imgSize' style={{ filter: "brightness(40%)" }} />
            </div>
            <div className="carousel-item">
              <img src="/images/pastry.avif" className="d-block w-100 imgSize" style={{ filter: "brightness(40%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/images/barbeque.avif" className="d-block w-100 imgSize" style={{ filter: "brightness(40%)" }} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Card container  */}
      <div className='container'>
        {
          foodCat.map((data) => {
            return (
              <div className='row mb-3'>
                <div key={data._id} className='fs-3 m-3 text-danger'>
                  {data.CategoryName}
                </div>
                <hr />
                {
                  foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search)) )
                    .map((filterItmes) => {
                      return (
                        <div key={filterItmes._id} className='col-12 col-md-6 col-lg-4'>
                          <Card
                            foodItem = {filterItmes}
                            options={filterItmes.options[0]}
                          >

                          </Card>
                        </div>
                      )
                    })
                }
              </div>
            )
          })

        }
      </div>
      <div><Footer /></div>
    </div>
  )
}

export default Home