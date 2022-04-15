find_is_prime(5); 

function find_is_prime(val){
    let value = parseInt(val);
    let isPrime = true;

    if (value === 1) {
        console.log("1 is neither prime nor composite value.");
    } else if (value > 1) {
        for (let i = 2; i < value; i++) {
            if (value % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(value,'is a prime value');
        } else {
            console.log(value,'is a not prime value');
        }
    }else {
        console.log("The value is not a prime number.");
    }
}

module.exports =  find_is_prime;