

function convert(event){
    //const number = document.querySelector('input[type="number"]').value;
   // console.log(number);

    let url = `https://api.coindesk.com/v1/bpi/currentprice/eur.json`;

    fetch(url)
    .then(response =>{
        return response.json();
    })

    .then(data =>{
        console.log(data.bpi.EUR);
        console.log(data.bpi.USD);
        const eur = data.bpi.EUR;
        let output = '';
        /*data.value.forEach(value=>{
            output +=`<li>${value.BitcoinCalc}</li>`
        });
        document.querySelector('BitcoinCalc').innerHTML = output;*/

    })

    .catch(error =>{
        console.log(error);

    });


    event.preventDefault();
}

document.querySelector('.Bitcoin').addEventListener('click', convert);