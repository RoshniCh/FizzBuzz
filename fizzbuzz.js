function fizzbuzz()
{
    var i = 0;
    for (i=1; i<300; i++)
    {
        let output = [];
        let stringOutput = "";
        if (i%3 == 0 )
        {
           output.push("Fizz")
        }
        if (i%5 == 0)
        {
            output.push("Buzz")
        }
        if (i%7 == 0)
        {
            output.push("Bang")
        }

        /*join array to string*/
        stringOutput = output.join('');
        /*check for number without word*/
        if (stringOutput == "")
        {
            console.log(i);
        }
        else
        {
            console.log(stringOutput);
        }
    }
   
}
fizzbuzz();