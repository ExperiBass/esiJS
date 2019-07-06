'use strict'

const { doGet } = require('../../shared/utils.js')

function icons(corpID) {
	if (!corpID) {
		console.error(`The function 'icons()' needs a corp ID!`)
		throw new Error('icons() needs a corporation ID')
	}
	return doGet(`corporations/`, `${corpID}/icons/`)
}

function info(corpID) {
	if (!corpID) {
			console.error(`The function 'info()' needs a corp ID!`)
			throw new Error('info() needs a corporation ID')
	}
	return doGet(`corporations/`, `${corpID}/`)
}

function npcCorps() {
	return doGet(`corporations/`, `npccorps/`)
}

function allianceHistory(corpID) {
	if (!corpID) {
			console.error(`The function 'allianceHistory()' needs a corp ID!`)
			throw new Error('allianceHistory() needs a corporation ID')
	}
	return doGet(`corporations/`, `${corpID}/alliancehistory/`)

}

module.exports = {
	icons,
	info,
	npcCorps,
	allianceHistory
}