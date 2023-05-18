const TelegramBot = require('node-telegram-bot-api');


const token = '6207997807:AAHJW7K8sSzymMiHUnMvuZGG59T-2kKqL78';
const webAppUrl = 'https://7de0-217-156-4-24.ngrok-free.app';
const form = `/form`

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    await bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Заполнить форму', web_app: { url: webAppUrl + form } }]
            ]
        }
    });
    await bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {
        reply_markup: {
            keyboard: [
                [{ text: 'Заполнить форму', web_app: { url: webAppUrl + form } }]
            ]
        }
    })
    if (msg?.web_app_data?.data) {
        try {
            const data = JSON.parse(msg?.web_app_data?.data);
            await bot.sendMessage(chatId, 'Спасибо за обратную связь!')
            await bot.sendMessage(chatId, `Your country: ${data?.country}`)
            await bot.sendMessage(chatId, `Your street: ${data?.street}`)

            setTimeout(async () => {
                await bot.sendMessage(chatId, 'Всю информацию вы получите в этом чате')
            }, 3000)
        } catch (e) {
            console.error(e);
        }

    }
});

