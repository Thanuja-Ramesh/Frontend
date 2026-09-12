//Basic syntax of an async function and use await inside it
const getData = async () => {

    const result = await Promise.resolve("Data Received");

    console.log(result);
};

getData();