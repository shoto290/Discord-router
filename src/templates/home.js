const   Discord = require('discord.js'),
        Router = require('../index')

const embed = new Discord.RichEmbed()
    .setTitle('Bienvenue sur le serveur de Shoto')
    .setDescription('Cliquez sur l\'emoji de votre choix')

const template = new Router.Template()
    .setEmbed(embed)
    .addAction('⭐', 'steve')
    .addAction('🍆', 'loic')
    .addAction('❓', 'support')
    .addAction('👌', 'fanta')

module.exports = template