

function calc()
            {
                var n1 = parseFloat(document.getElementById('n1').value);
                var n2 = parseFloat(document.getElementById('n2').value);
                
                var oper = document.getElementById('operators').value;
                
                if(oper === '+')
                {
                    alert("result is ++")
                    document.getElementById('result').value = n1+n2;
                }
                
                if(oper === '-')
                {
                    document.getElementById('result').value = n1-n2;
                }
                
                if(oper === '/')
                {
                    document.getElementById('result').value = n1/n2;
                }
                
                if(oper === 'X')
                {
                    document.getElementById('result').value = n1*n2;
                }
            }


            
               function isInputNumber(text1){
                
                var n1 = String.fromCharCode(text1.which);
                
                if(!(/[0-9]/.test(n1))){
                    text1.preventDefault();
                }
                
            }
            function isInputNumber(text2){
                
                var n2 = String.fromCharCode(text2.which);
                
                if(!(/[0-9]/.test(n2))){
                    text2.preventDefault();
                }
                
            }

