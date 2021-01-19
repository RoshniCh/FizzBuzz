function fizzbuzz()
{
    var i = 0;
    for (i=1; i<101; i++)
    {
        if (i%11 == 0)
        {
            console.log('Bong'); 
        }
        else if (i%3 == 0 && i%5 == 0)
        {
            console.log('FizzBuzz'); 
        }
        else if (i%3 == 0 && i%7 == 0)
        {
            console.log('FizzBang'); 
        }
        else if (i%5 == 0 && i%7 == 0)
        {
            console.log('BuzzBang'); 
        }
        else if (i%3 == 0 )
        {
           console.log('Fizz');
        }
        else if (i%5 == 0 )
        {
           console.log('Buzz');
        }
        else if (i%7 == 0 )
        {
           console.log('Bang');
        }
        else
        {
           console.log(i);
        }
    
    }
}

fizzbuzz();