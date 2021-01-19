function fizzbuzz()
{
    var i = 0;
    for (i=1; i<300; i++)
    {
/*check for 13 in 3 combo */
        if (i%13 == 0 && i%3 == 0 && i%5 == 0)
        {
            console.log('FizzFezzBuzz'); 
        }
        else if (i%13 == 0 && i%3 == 0 && i%7 == 0)
        {
            console.log('FizzFezzBang'); 
        }
        else if (i%13 == 0 && i%3 == 0 && i%11 == 0)
        {
            console.log('FizzFezzBong'); 
        }
        else if (i%13 == 0 && i%5 == 0 && i%7 == 0)
        {
            console.log('FezzBuzzBang'); 
        }
        else if (i%13 == 0 && i%5 == 0 && i%11 == 0)
        {
            console.log('FezzBuzzBong'); 
        }
        else if (i%13 == 0 && i%7 == 0 && i%11 == 0)
        {
            console.log('FezzBangBang'); 
        }
/*check for 13 in 2 combo */
        else if (i%13 == 0 && i%3 == 0)
        {
             console.log('FizzFezz'); 
        }
        else if (i%13 == 0 && i%5 == 0)
        {
             console.log('FezzBuzz'); 
        }
        else if (i%13 == 0 && i%7 == 0)
        {
             console.log('FezzBang'); 
        }
        else if (i%13 == 0 && i%11 == 0)
        {
             console.log('FezzBong'); 
        }
 /*check for 11 */
        else if (i%11 == 0)
        {
            console.log('Bong'); 
        }
 /*check for 7 */       
        else if (i%3 == 0 && i%5 == 0 && i%7 == 0)
        {
            console.log('FizzBuzzBang'); 
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
 /*check for individual numbers */
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
        else if (i%13 == 0 )
        {
           console.log('Fezz');
        }
        else
        {
           console.log(i);
        }
    
    }
}

fizzbuzz();