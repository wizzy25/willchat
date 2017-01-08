'use strict'

// Libs
import 'angular-animate'
import 'angular-meteor'
import 'angular-sanitize'
import 'angular-ui-router'
import 'ionic-scripts'
import Angular from 'angular'
import Loader from 'angular-ecmascript/module-loader'
import { Meteor } from 'meteor/meteor'

// Modules
import ChatsCtrl from '../controllers/chats.controller'
import CalendarFilter from '../filters/calenda.filter'
import RoutesConfig from '../routes'

const App = 'Willchat'

// App
Angular.module(App, [
	'angular-meteor',
	'ionic'
])

new Loader(App).load(RoutesConfig).load(RoutesConfig).load(CalendarFilter)

// Startup
if (Meteor.isCordova) {
	Angular.element(document).on('deviceready', onReady)
}
else {
	Angular.element(document).ready(onReady)
}

function onReady() {
	Angular.bootstrap(document, [App])
}