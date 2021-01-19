function fizzbuzz()
{
    var i = 0;
    for (i=1; i<500; i++)
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
        if (i%11 == 0)
        {
            output[0] = "Bong"
        }
        if (i%13 == 0)
        {
            if (i%3 == 0)
            {
                output.splice(1,0,"Fezz");
            }
            else
            {
                output.splice(0,0,"Fezz")
            }
        }
        if (i%17 == 0)
        {
            output.reverse();
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