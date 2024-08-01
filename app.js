function stringMessage(message){
    console.log(message);
}

stringMessage('Call this function synchronously!');

setTimeout(() => {
    stringMessage('Call this function after waiting 3 seconds!');
},3000);

//Page break: the following code is unrelated and will make a mess in the console log

function getWords(){
    console.log('First!');
    setTimeout(() => {
        console.log('Second!');
        setTimeout(() => {
            console.log('Third!');
            setTimeout(() => {
                console.log('Final!');
            },1000);
        },2000);
    },3000);
}

getWords();

//Page break: the following code is unrelated and will make a mess in the console log

function done(){
    console.log('Jobs Done!');
}

function countdown(num, callback){
    setTimeout(() => {
        if (num > 0){
            console.log(num);
            countdown(num - 1,callback);
        } else {
            callback();
        }

    },1000);
}

countdown(10,done);

//Page break: the following code is unrelated and will make a mess in the console log

let lunchTime = true;

function orderMeSomeFood(){
    return new Promise((resolve,reject) => {
        if (lunchTime == true){
            let myLunch = {
                lunch : 'Taco Bell',
                drink : 'Baja Blast'
            }
            resolve (myLunch);
        }else{
            let error = new Error('It is not lunch time.');
            reject (error);
        }
    });
}

orderMeSomeFood()
.then((myLunch) => {
    console.log('success', myLunch);
}).catch((error) => {
    console.log('failure', error.message);
});

lunchTime = false;


orderMeSomeFood()
.then((myLunch) => {
    console.log('success', myLunch);
}).catch((error) => {
    console.error('failure', error.message);
});