
        function price()
        {
            var x;
            x=document.getElementById("fruits").value;
            switch(x)
            {
                case 'mango':
                    price=120;
                    break;
                case 'apple':
                    price=130;
                    break;
                case 'orange':
                    price=140;
                    break;
                case 'grape':
                    price=150;
                    break;
            }
            document.getElementById('result').value=price;
        }