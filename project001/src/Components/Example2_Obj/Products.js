import React from 'react'

function Products(){

 


    let productList = [

        {
            id: 110,
            category: 'sneaker',
            photo: './img/shoe1.jpg',
            brand: 'Reebok',
            cost: 40,
            size: 'small',
            description: 'This is the running shoe, and it soft and comfortable'
        },

        {
            id: 111,
            category: 'sneaker',
            photo: './img/shoe2.jpg',
            brand: 'Puma',
            cost: 90,
            size: 'medium',
            description: 'This is the running shoe, and it soft and comfortable'
        },

        {
            id: 112,
            category: 'sneaker',
            photo: './img/shoe3.jpg',
            brand: 'Reebok',
            cost: 55,
            size: 'small',
            description: 'This is the running shoe, and it soft and comfortable'
        },

        {
            id: 113,
            category: 'sneaker',
            photo: './img/shoe4.jpg',
            brand: 'Reebok',
            cost: 60,
            size: 'medium',
            description: 'This is the running shoe, and it soft and comfortable'
        },

        {
            id: 114,
            category: 'sneaker',
            photo: './img/shoe5.jpg',
            brand: 'Puma',
            cost: 40,
            size: 'small',
            description: 'This is the running shoe, and it soft and comfortable'
        },

        {
            id: 115,
            category: 'sneaker',
            photo: './img/shoe6.jpg',
            brand: 'Puma',
            cost: 40,
            size: 'medium',
            description: 'This is the running shoe, and it soft and comfortable'
        },

        {
            id: 116,
            category: 'sneaker',
            photo: './img/shoe7.jpg',
            brand: 'Puma',
            cost: 140,
            size: 'small',
            description: 'This is the running shoe, and it soft and comfortable'
        },

        {
            id: 117,
            category: 'sneaker',
            photo: './img/shoe8.jpg',
            brand: 'Nike',
            cost: 30,
            size: 'large',
            description: 'This is the running shoe, and it soft and comfortable'
        },

        {
            id: 118,
            category: 'sneaker',
            photo: './img/shoe9.jpg',
            brand: 'Abc',
            cost: 50,
            size: 'small',
            description: 'This is the running shoe, and it soft and comfortable'
        },


    ]





    // const [sortType, setSortType] = useState('');

    // const sorted = productList.sort((a,b)=>{

    //     const isReversed = (sortType === 'asc') ? 1 : -1;
    //     return isReversed * a.brand.localeCompare(b.brand)
    // })




    return(
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <h1>Shoe Store</h1>
                   
           
                </div>

                <div className="row">
                    {productList.map((item)=>(
                    <div className="col-md-3 mb-4">
                        <div className="card border-warning" key={item.id}>
                            <img src={item.photo} className="photo" />
                            <div className="card-body">
                                <h4>{item.brand}</h4>
                                <h6>${item.cost}.00</h6>
                                <p>Size: {item.size} {item.category}</p>
                            </div>
                            <div class="card-footer">{item.description}</div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
 

        </>
    )
}

export default Products