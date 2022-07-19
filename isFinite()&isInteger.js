    /*

                           isFinite(); and isInteger();
                            isFinite() is used to check the number is finite or not.
                            isInteger() is used to check the number is integer or not.

                            you should use Number to access isFinite() and isInteger() method.
                
     */
                             var a = "3.142";
                             var b = Number.isInteger(a);
                             document.write(b + "<br>");


                             var c = Infinity;
                             var d = Number.isFinite(c);
                             document.write(d + "<br>");
