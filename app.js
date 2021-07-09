

        const  counter = document.getElementById('counter');
        const lowercount = document.getElementById('lowercount');
        const addcount = document.getElementById('addcount');

        let counterValue = 0;

        lowercount.addEventListener('click', function (event) {
            counterValue -= 1;
            counter.innerHTML = counterValue;
            if (counterValue <= 0) {
                counterValue =0
            }
        })
        addcount.addEventListener('click', function (event) {
            counterValue += 1;
            counter.innerHTML = counterValue;
            if (counterValue >=50) {
                counterValue =49;
            }
        })