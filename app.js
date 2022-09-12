window.onload = function(){
    main();
};

const converter = {
    area :{
        name :'Area',
        units:{
            squaeKm:"Square Kilometer",
            squareMeter :"Square Meter",
            squareMile:"Square Mile",
            squareYard:"Square Yard",
            squareFoot:"Square Foot"
        }
    },
    mass :{
        name:'Mass',
        units:{
            tonne:"Tonne",
            kilogram:"Kilogram",
            gram:"Gram",
            milligram:"Milligram"
        }
    },
    length : {
        name:'Length',
        units:{
            kilometer:"Kilometer",
            meter:"Meter",
            centimeter:"Centimeter",
            millimeter:"Millimeter"
        }
    },
  
    time :{
        name:'Time',
        units:{
            second:"Second",
            minute:"Minute",
            hour:"Hour",
            day:"Day"
        }
    },
    
};
function main(){
    const categorySelect = document.getElementById('category-select');
    const leftSelect = document.getElementById('left-select');
    const rightSelect = document.getElementById('right-select');
    

    const converterKeys = Object.keys(converter).sort();
    removeAllChild(categorySelect);
    // console.log(converterKeys);
    converterKeys.forEach((item) => {
		addOption(categorySelect, { value: item, text: converter[item].name });
	});

    //change element change hand
    categorySelect.addEventListener('change',function(){


        const converterName = categorySelect.value;
        const units = converter[converterName].units;
    
        // Handle Left Select
       
        removeAllChild(leftSelect);
        const leftOptions = Object.keys(units);
        leftOptions.forEach((item) => {
            addOption(leftSelect, { value: item, text: units[item] });
        });
    
    
        // Right Left Select
        removeAllChild(rightSelect);
        const rightOptions = Object.keys(units);
        rightOptions.forEach((item) => {
            addOption(rightSelect, { value: item, text: units[item] });
        });
    
        rightSelect.getElementsByTagName('option')[1].selected = 'selected';

    })

    const converterName = categorySelect.value;
    const units = converter[converterName].units;

    // Handle Left Select
   
    removeAllChild(leftSelect);
    const leftOptions = Object.keys(units);
    leftOptions.forEach((item) => {
		addOption(leftSelect, { value: item, text: units[item] });
	});


    // Right Left Select
    removeAllChild(rightSelect);
    const rightOptions = Object.keys(units);
    rightOptions.forEach((item) => {
		addOption(rightSelect, { value: item, text: units[item] });
	});

    rightSelect.getElementsByTagName('option')[2].selected = 'selected';

}
function addOption(parent,option){
    const opt = document.createElement('option');
    opt.setAttribute('value',option.value);
    opt.innerText= option.text;
    parent.appendChild(opt);
}
function removeAllChild(parent){
    while(parent.firstChild){
        parent.firstChild.remove()
    }
}
