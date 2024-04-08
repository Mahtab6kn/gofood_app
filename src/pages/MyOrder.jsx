import React, { useEffect, useState } from 'react'

const MyOrder = () => {
    const [orderData, setOrder] = useState('');

    const fetchOrder = async () => {
        // console.log(localStorage.getItem("userEmail"))
     let response =   await fetch('http://localhost:5000/myOrder', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('userEmail')
            })
        })
         response = await response.json()
            // console.log(response)
            await setOrder(response)
    
    }
    useEffect(() => {
        fetchOrder();
    }, [])

    return (
        <>
            <div div className='container' >
                <div className='row'>

                    {orderData != {} ? Array(orderData).map(data => {

                        return (
                            data.orderData ?
                                data.orderData.order_data.slice(0).reverse().map((item) => {

                                    return (
                                        item.map((arrayData) => {
                                            return (
                                                <div className='mt-3 text-danger fs-4'>
                                                    {
                                                        arrayData.order_date ? <div className='m-auto mt-s'>
                                                            {data = arrayData.order_date}
                                                            <hr />
                                                        </div> :

                                                            <div className='col-12 col-md-6 col-lg-4 fs-6'>
                                                                <div className='card mt-3' style={{ width: '16rem', maxHeight: '360px' }}>
                                                                    {/* <img src={arrayData.img} alt="" /> */}

                                                                    <div className='card-body'>
                                                                        <h5 className='card-title'>{arrayData.name}</h5>
                                                                        <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                            <span className='m-1'>{arrayData.qty}</span>
                                                                            <span className='m-1'>{arrayData.size}</span>
                                                                            <span className='m-1'>{data}</span>
                                                                            <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                                                                Rs.{arrayData.price}/-
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                </div>
                                                            </div>

                                                    }
                                                </div>
                                            )
                                        })
                                    )
                                }) : "No Orders Available"
                        )

                    }) : ""}

                </div>
            </div>

        </>
    )



}

export default MyOrder