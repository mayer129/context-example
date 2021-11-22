import Head from 'next/head'
import ItemCard from '../components/ItemCard'
import { useUser } from '../context/UserContext'

export default function Checkout() {
  const { user, setUser } = useUser()

  var total = 0;

  return (
    <div>
      <Head>
        <title>Checkout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{user.name}, let's checkout!</h1>
        <p>You have {user.cart.length} items in your cart.</p>
        <div>
          {/* TODO: Style the checkout page so the cart maps through
            * to a component for each item in the cart
          */
            user.cart.map((e) => {
              total += e.price;
              return (
                <div class="gallery">
                  <article className="card">
                    <div className="img-wrapper">
                      <img src={e.img} alt={e.name} />
                    </div>
                    <div className="content">
                      <h2 className="plant-name">{e.name}</h2>
                      <p className="price">${e.price}</p>
                    </div>
                  </article>
                </div>
                
              )})
          }
          <h2>Total: ${total}</h2>
          {/*<p>{JSON.stringify(user.cart)}</p>*/}
        </div>
      </main>
      <style jsx>{`
          .card {
            margin: 1rem;
            display: flex;
            flex-direction: row;
            background-color: white;
            min-height: 250px;
            justify-content: space-between;
            min-width: 900px;
          }
          
          .card .img-wrapper {
            padding-left: 25px;
            padding-top: 25px;
          }
          .card .img-wrapper img {
            height: 200px;
            width: 200px;
            border-radius: 20px;
          }

          .card .content h2 {
            color: green;
            font-size: 32px;
            font-weight: bold;
          }

          h1, p {
            color: white;
            padding-left: 20px;
          }

          .price {
            color: black;
            text-align: right;
          }

          h2 {
            color: white;
            text-align: right;
            padding-right: 20px;
          }
          
      `}</style>
    </div>
  )
}
