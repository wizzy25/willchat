import Moment from 'moment'
import { Meteor } from 'meteor/meteor'
import { Chats, Messages }	from '../lib/collections'

Meteor.startup(() => {
	if (Chats.find().count() !== 0) return

	Messages.remove({})

	let messages = [
		{
			text: 'You still on your way?',
      timestamp: Moment().subtract(1, 'hours').toDate()
    },
    {
      text: 'Hey, it\'s me, your fav dev',
      timestamp: Moment().subtract(2, 'hours').toDate()
    },
    {
      text: 'Care for coffeeeee?',
      timestamp: Moment().subtract(1, 'days').toDate()
    },
    {
      text: 'Nice to have met you!',
      timestamp: Moment().subtract(4, 'days').toDate()
    },
    {
      text: 'I could\'t get any more bored...',
      timestamp: Moment().subtract(2, 'weeks').toDate()
    }
	]

	messages.forEach((m) => {
		Messages.insert(m)
	})

  let chats = [
    {
      name: 'Ethan Gonzalez',
      picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
    },
    {
      name: 'Bryan Wallace',
      picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg'
    },
    {
      name: 'Avery Stewart',
      picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg'
    },
    {
      name: 'Katie Peterson',
      picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg'
    },
    {
      name: 'Ray Edwards',
      picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg'
    }
  ];

  chats.forEach((chat) => {
  	let message = Messages.findOne({ chatId: { $exists: false } })
  	chat.lastMessage = message
  	let chatId = Chats.insert(chat)
  	Messages.update(message._id, { $set: { chatId } })
  })
})