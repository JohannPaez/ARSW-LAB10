

const bigInt = require("big-integer"); 
const redis = require("redis"); 
const bluebird = require("bluebird"); 

// Promisify all the functions 
bluebird.promisifyAll(redis);
    
// Create connection to the database
var client = redis.createClient(6380,'ARSW-Lab-FinalTest.redis.cache.windows.net',{
    auth_pass:'DMnkKOikg5cZjiZ4t190V5TmsLoU5U0jxAxJTPuSwWY=',
    tls:{
        servername:"ARSW-Lab-FinalTest.redis.cache.windows.net"
    }
});

async function fibonacciExists(nth) {
    let key = generateKey(nth);
    return (await client.existsAsync(key)) === 1;
}

async function getFibonacci(nth) {
    let key = generateKey(nth);
    return await bigInt(client.getAsync(key));
}

async function setFibonacci(nth, nthValue) {
    let key = generateKey(nth);
    await client.setAsync(key, nthValue.toString());
}

function generateKey(nth) {
    return `fibonacci:nth:${nth.toString()}`;
}


async function fibonacci(nth) {
    nth = bigInt(nth);    

    let nth_1 = bigInt.one;
    let nth_2 = bigInt.zero;
    let answer = bigInt.zero;

    if (nth.compare(0) < 0) {
        throw "Must be grater than zero (0)"
    } else if (nth.compare(0) === 0) {
        answer = nth_2;
    } else if (nth.compare(1) === 0) {
        answer = nth_1;
    } else if (await fibonacciExists(nth)) {
        answer = await getFibonacci(nth);
        //console.log("EXISTE");
    } else {
        //console.log("NO EXISTE");
        answer = (await fibonacci(nth.add(-1))).add(await fibonacci(nth.add(-2)));
        await setFibonacci(nth, answer);
    }

    return answer;
}

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let nth = req.body.nth;
    let answer = await fibonacci(nth);

    context.res = {
        body: answer.toString()
    }
};