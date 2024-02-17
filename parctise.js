

const allBtn = document.getElementsByClassName('add-btn');
let count = 0;

for(const btn of allBtn){
    btn.addEventListener('click', function(e){
       count ++;

        // place Name dorche 
       const placeName = e.target.parentNode.childNodes[1].innerText

        //price dorche
       const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;

       //main container dorche
        const selecteContainer = document.getElementById('selected-place-container')

        // li, p, p2 tag create korche;
        const li = document.createElement('li');
        
         const p = document.createElement('p');
        p.innerText = placeName;
        const p2 = document.createElement('p');
        p2.innerText = price;

        //li er inside apenchild kore dichi
        li.appendChild(p);
        li.appendChild(p2);

        e.target.parentNode.parentNode.style.backgroundColor = 'gray'
        const budget = document.getElementById('budget').innerText;
        const convertBuget = parseInt(budget);


        if(convertBuget - parseInt(price) < 0 ){
            alert('Low Budget Please Earn More');
            return;
        }


        document.getElementById('budget').innerText = convertBuget - parseInt(price);


        // agula vore diche main container er vitore
        selecteContainer.appendChild(li);
    
      totalCost('total-cost',parseInt(price));
      grandTotalCost('others');
      setInnerText('cart-count', count);
    });
};


function setInnerText(id, value){
    document.getElementById(id).innerText = value;
};


function totalCost(id, value){
    const totalCost = document.getElementById(id).innerText;
    const convertTotalCost = parseInt(totalCost);
    const sum = convertTotalCost + parseInt(value);
    setInnerText('total-cost', sum);
  
}

function grandTotalCost(category){
    const totalCost = document.getElementById('total-cost').innerText;
    const convertTotalCost = parseInt(totalCost);
    
    if(category === 'bus'){
        setInnerText('grand-total', convertTotalCost + 100);
    }
    else if(category === 'train'){
        setInnerText('grand-total', convertTotalCost - 200);
    }
    else if(category === 'flight'){
        setInnerText('grand-total', convertTotalCost + 500);
    }
    else{
        setInnerText('grand-total', convertTotalCost);
    }
}

