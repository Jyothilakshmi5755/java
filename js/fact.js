function fact()
{
    var x,y;
    x=1;
            y=document.getElementById("num1").value;
            for(i=1;i<=y;i++)
            {
                x=x*i;
            }
            document.getElementById('fact').value=fact;
}