import React, {useState,useEffect} from 'react'

const Card = () => {
    const [initials,setInitials] = useState('VK')
	const [name,setName] = useState('Vikram Kamath')
	const [phone,setPhone] = useState('00000-11111')
	const [email,setEmail] = useState('VK@test.com')
	const [favorite,setFavourite] = useState(false)
	


useEffect(() =>{
	console.log(`Value has changed to:${favorite}`)
})

  const activeClass = favorite ? 'active' : ''

  return (
    <section className="card-container">
      <header className="card-header">
        <span initials={initials}></span>
        <h2>{name}</h2>
        <div
          className={`favorite ${activeClass}`}
          onClick={() => { setFavourite(!favorite) }}
        >
          ☆
        </div>
      </header>

      <main>
        <ul>
          <li>
            <span>Phone</span>
            {phone ? phone : 'n/a'}
          </li>
          <li>
            <span>Email</span>
            {email ? email : 'n/a'}
          </li>
        </ul>
      </main>
    </section>
  )
}
 
/* const Card = (props) => {
  const {
    contact,
    index
  } = props

const activeClass = contact.favorite ? 'active' : ''

return (
    <section className="card-container">
      <header className="card-header">
        <span initials={contact.initials}></span>
        <h2>{contact.name}</h2>
        <div
          className={`favorite ${activeClass}`}
          onClick={() => { props.handleFavoriteToggle(index) }}
        >
          ☆
        </div>
      </header>

      <main>
        <ul>
          <li>
            <span>Phone</span>
            {contact.phone ? contact.phone : 'n/a'}
          </li>
          <li>
            <span>Email</span>
            {contact.email ? contact.email : 'n/a'}
          </li>
        </ul>
      </main>
    </section>
  )
} */

export default Card