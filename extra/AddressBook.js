import React, { Component } from 'react'

import './AddressBook.css'
import Card from './Card'

class AddressBook extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: [
        {
          name: 'Mike Jason',
          initials: 'MJ',
          favorite: true,
          phone: '45562-11111',
          email: 'MJ@mail.com'
        },
        {
          name: 'Opion Jack',
          initials: 'OJ',
          favorite: false,
          phone: '23436-00998',
          email: 'OJ@ya.com'
        },
        {
          name: 'Billy Pear',
          initials: 'BP',
          favorite: false,
          phone: '98989-09090',
          email: 'BilPear@new.com'
        }
      ]
    }

    this.handleFavoriteToggle = this.handleFavoriteToggle.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    const prevStateString = JSON.stringify(prevState.contacts)
    const updatedStateString = JSON.stringify(this.state.contacts)

    if (prevStateString !== updatedStateString) {
      localStorage.setItem('contacts', updatedStateString)
    }
  }

  componentDidMount() {
    const savedStateFromLocalStorage = localStorage.getItem('contacts')

    if (savedStateFromLocalStorage) {
      this.setState({
        contacts: JSON.parse(savedStateFromLocalStorage)
      })
    }
  }

  handleFavoriteToggle(contactIndex) {
    const newContactsState = [...this.state.contacts]
    newContactsState[contactIndex] = {
      ...newContactsState[contactIndex],
      favorite: !newContactsState[contactIndex].favorite
    }

    this.setState({
      contacts: newContactsState
    })
  }

  render() {
    const {
      contacts
    } = this.state

    return (
      <>
      <h3>Address Book</h3>
      { !contacts.length && <p>No contacts!</p> }
      
      {contacts.map((contact, index) => {
        return (
          <Card
            contact={contact}
            handleFavoriteToggle={this.handleFavoriteToggle}
            index={index}
            key={index}
          />
        )
      })}
      </>
    )
  }
}

export default AddressBook;