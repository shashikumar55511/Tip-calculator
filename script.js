function calTot(){
    let billAmt=document.getElementById("billamt").value;
    console.log(billAmt)
    let noPeople=document.getElementById("peopleamt").value;
    // console.log(noPeople);
    let tip1=document.getElementById("tip").value;
    // console.log(tip1);

   
    if(tip1=='' || noPeople=='' || billAmt==''){
        alert("please fill up the value")
    }
    else{
        if(tip1>100){
            alert("please give value less than 100")
        }else{
            let amtDiv=billAmt/noPeople;
            amtDiv=(amtDiv*tip1)/100;
            // console.log(amtDiv)     
        
            let eachAmt=(billAmt/noPeople)+amtDiv;
            // console.log(eachAmt)
        
            let totalamt=amtDiv*noPeople+parseInt(billAmt);
            // console.log(totalamt)
            
            let a=document.createElement('div')
            a.setAttribute('id','display');
            a.innerHTML=`<div class="create">Per person Tip amount (₹):${amtDiv}</div>
                        <div class="create">Per person need to pay (₹):${eachAmt}</div>
                        <div class="create">Total amount + total tip (₹):${totalamt}</div>
                        <button id="clear" onclick="earse(this)">Clear</button>
                        <button id="print" onclick="window.print()">Print</button>`
        
            let b=document.getElementById("con")
            b.appendChild(a);

            clearText()
        }
        
    }
}
function clearText(){
    document.getElementById("billamt").value='';
    document.getElementById("peopleamt").value=1;
    document.getElementById("tip").value='';
}
function earse(event){
    event.parentElement.remove()
}