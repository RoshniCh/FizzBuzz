function fizzbuzz()
{
    var i = 0;
    for (i=1; i<300; i++)
    {
    if (i%17 == 0) /*code for if multiple of 17*/
    {
        /*check for 13 in 3 combo */
        if (i%13 == 0 && i%3 == 0 && i%5 == 0)
        {
            console.log('BuzzFezzFizz'); 
        }
        else if (i%13 == 0 && i%3 == 0 && i%7 == 0)
        {
            console.log('BangFezzFizz'); 
        }
        else if (i%13 == 0 && i%3 == 0 && i%11 == 0)
        {
            console.log('BongFezzFizz'); 
        }
        else if (i%13 == 0 && i%5 == 0 && i%7 == 0)
        {
            console.log('BangBuzzFezz'); 
        }
        else if (i%13 == 0 && i%5 == 0 && i%11 == 0)
        {
            console.log('BongBuzzFezz'); 
        }
        else if (i%13 == 0 && i%7 == 0 && i%11 == 0)
        {
            console.log('BongBangFezz'); 
        }
/*check for 13 in 2 combo */
        else if (i%13 == 0 && i%3 == 0)
        {
             console.log('FezzFizz'); 
        }
        else if (i%13 == 0 && i%5 == 0)
        {
             console.log('BuzzFezz'); 
        }
        else if (i%13 == 0 && i%7 == 0)
        {
             console.log('BangFezz'); 
        }
        else if (i%13 == 0 && i%11 == 0)
        {
             console.log('BongFezz'); 
        }
 /*check for 11 */
        else if (i%11 == 0)
        {
            console.log('Bong'); 
        }
 /*check for 7 */       
        else if (i%3 == 0 && i%5 == 0 && i%7 == 0)
        {
            console.log('BangBuzzFizz'); 
        }
        else if (i%3 == 0 && i%5 == 0)
        {
            console.log('BuzzFizz'); 
        }
        else if (i%3 == 0 && i%7 == 0)
        {
            console.log('BangFizz'); 
        }
        else if (i%5 == 0 && i%7 == 0)
        {
            console.log('BangBuzz'); 
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

    else /*code for if not multiple of 17*/
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
            console.log('FezzBangBong'); 
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
}
fizzbuzz();