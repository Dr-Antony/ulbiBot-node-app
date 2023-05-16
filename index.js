const TelegramBot = require('node-telegram-bot-api');


const token = '6207997807:AAHJW7K8sSzymMiHUnMvuZGG59T-2kKqL78';
const webAppUrl = 'https://www.youtube.com/watch?v=MzO-0IYkZMU&t=925s';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    await bot.sendMessage(chatId,'Ниже появится кнопка, заполни форму', {
        reply_markup: {
            inline_keyboard: [
                [{text:'Заполнить форму', web_app:{url:webAppUrl}}]
            ]
        }
    })
});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    await bot.sendMessage(chatId,'Ниже появится кнопка, заполни форму', {
        reply_markup: {
            keyboard: [
                [{text:'Зайти в интернет магазин', web_app:{url:webAppUrl}}]
            ]
        }
    })
});