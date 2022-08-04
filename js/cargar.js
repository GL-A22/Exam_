/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Num_perfect(){
    
    var num_ = $('#numero_').val();
    for(var i =1; i<num_; i++){
        if(num_ % i === 0){
           var sum_ = sum_ + i;
           
        }
    }
    
    if(sum_ === num_){
        alert("Numero Perfecto");
    }else{
        alert("El numero no es perfecto");
    }
    
}

