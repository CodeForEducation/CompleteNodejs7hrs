const { format } = require('date-fns');
const { v4: uuid } = require('uuid');


const fsPromise = require('fs').promises;

const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyyy-MM-dd\t hh:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message }\n`;
    console.log(logItem);
    try {
        await fsPromise.appendFile('dateuuid.txt', logItem );
    } catch (err) {
        console.error(err);
    }
};

module.exports = logEvents;
