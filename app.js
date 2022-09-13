window.onload = function(){
    main();
};

const converter = {
    area :{
        name: 'Area',
		units: {
			squareKm: 'Square Kilometer',
			squareM: 'Square Meter',
			squareMile: 'Square Mile',
			squareYard: 'Square Yard',
			squareFoot: 'Square Foot',
		},
		variants: {
			'squareKm:squareM': {
				formula: 'Multiply the area value by 1000000',
				calculation(n) {
					return n * 1000000;
				},
			},
			'squareKm:squareMile': {
				formula: 'Divide the area value by 2.59',
				calculation(n) {
					return n / 2.59;
				},
			},
			'squareKm:squareYard': {
				formula: 'Multiply the area value by 1196000',
				calculation(n) {
					return n * 1196000;
				},
			},
			'squareKm:squareFoot': {
				formula: 'Multiply the area value by 10760000',
				calculation(n) {
					return n * 10760000;
				},
			},
			'squareM:squareKm': {
				formula: 'Divide the area value by 1e+6',
				calculation(n) {
					return n / new Number('1e+6');
				},
			},
			'squareM:squareMile': {
				formula: 'Divide the area value by 2.59e+6',
				calculation(n) {
					return n / new Number('2.59e+6');
				},
			},
			'squareM:squareYard': {
				formula: 'Multiply the area value by 1.196',
				calculation(n) {
					return n * 1.196;
				},
			},
			'squareM:squareFoot': {
				formula: 'Multiply the area value by 10.764',
				calculation(n) {
					return n * 10.764;
				},
			},
			'squareMile:squareKm': {
				formula: 'Multiply the area value by 2.59',
				calculation(n) {
					return n * 2.59;
				},
			},
			'squareMile:squareM': {
				formula: 'Multiply the area value by 2.59e+6',
				calculation(n) {
					return n * new Number('2.59e+6');
				},
			},
			'squareMile:squareYard': {
				formula:
					'For an approximate result, multiply the area value by 3.098e+6',
				calculation(n) {
					return n * new Number('3.098e+6');
				},
			},
			'squareMile:squareFoot': {
				formula:
					'For an approximate result, multiply the area value by 2.788e+7',
				calculation(n) {
					return n * new Number('2.788e+7');
				},
			},
			'squareYard:squareKm': {
				formula: 'Divide the area value by 1.196e+6',
				calculation(n) {
					return n / new Number('1.196e+6');
				},
			},
			'squareYard:squareM': {
				formula: 'Divide the area value by 1.196',
				calculation(n) {
					return n / 1.196;
				},
			},
			'squareYard:squareMile': {
				formula:
					'For an approximate result, divide the area value by 3.098e+6',
				calculation(n) {
					return n / new Number('3.098e+6');
				},
			},
			'squareYard:squareFoot': {
				formula: 'Multiply the area value by 9',
				calculation(n) {
					return n / 9;
				},
			},
			'squareFoot:squareKm': {
				formula:
					'For an approximate result, divide the area value by 1.076e+7',
				calculation(n) {
					return n / new Number('1.076e+7');
				},
			},
			'squareFoot:squareM': {
				formula: 'Divide the area value by 10.764',
				calculation(n) {
					return n / 10.764;
				},
			},
			'squareFoot:squareMile': {
				formula:
					'For an approximate result, divide the area value by 2.788e+7',
				calculation(n) {
					return n / new Number('2.788e+7');
				},
			},
			'squareFoot:squareYard': {
				formula: 'Divide the area value by 9',
				calculation(n) {
					return n / new Number('9');
				},
			},
		},
	},
    mass :{
        name:'Mass',
        units:{
            tonne:"Tonne",
            kilogram:"Kilogram",
            gram:"Gram",
            milligram:"Milligram",
			microgram:"Microgram",
			pound:"Pound",
			ounce:"Ounce",
        },
		variants:{
			'tonne:kilogram':{},
			'tonne:gram':{},
			'tonne:milligram':{},
			'tonne:microgram':{},
			'tonne:pound':{},
			'tonne:ounce':{},

			'kilogram:tonne':{},
			'kilogram:gram':{},
			'kilogram:milligram':{},
			'kilogram:microgram':{},
			'kilogram:pound':{},
			'kilogram:ounce':{},

			'gram:tonne':{},
			'gram:kilogram':{},
			'gram:milligram':{},
			'gram:microgram':{},
			'gram:pound':{},
			'gram:ounce':{},

			'milligram:tonne':{},
			'milligram:kilogram':{},
			'milligram:gram':{},
			'milligram:microgram':{},
			'milligram:pound':{},
			'milligram:ounce':{},

			'microgram:tonne':{},
			'microgram:kilogram':{},
			'microgram:gram':{},
			'microgram:milligram':{},
			'microgram:pound':{},
			'microgram:ounce':{},

			'pound:tonne':{},
			'pound:kilogram':{},
			'pound:gram':{},
			'pound:milligram':{},
			'pound:microgram':{},
			'pound:ounce':{},

			'ounce:tonne':{},
			'ounce:kilogram':{},
			'ounce:gram':{},
			'ounce:milligram':{},
			'ounce:microgram':{},
			'ounce:pound':{},
         
		}
    },
    length : {
        name:'Length',
        units:{
            kilometer:"Kilometer",
            meter:"Meter",
            centimeter:"Centimeter",
            millimeter:"Millimeter",
			micrometers:"Micrometers",
			mile:"Mile",
			yard:"Yard",
			foot:"Foot",
			inch:"Inch"

        },
		variants:{
			'kilometer:meter':{},
			'kilometer:centimeter':{},
			'kilometer:millimeter':{},
			'kilometer:micrometers':{},
			'kilometer:mile':{},
			'kilometer:yard':{},
			'kilometer:foot':{},
			'kilometer:inch':{},
			
			'meter:kilometer':{},
			'meter:centimeter':{},
			'meter:millimeter':{},
			'meter:micrometers':{},
			'meter:mile':{},
			'meter:yard':{},
			'meter:foot':{},
			'meter:inch':{},
            
			'centimeter:kilometer':{},
			'centimeter:meter':{},
			'centimeter:millimeter':{},
			'centimeter:micrometers':{},
			'centimeter:mile':{},
			'centimeter:yard':{},
			'centimeter:foot':{},
			'centimeter:inch':{},

			'millimeter:kilometer':{},
			'millimeter:meter':{},
			'millimeter:centimeter':{},
			'millimeter:micrometers':{},
			'millimeter:mile':{},
			'millimeter:yard':{},
			'millimeter:foot':{},
			'millimeter:inch':{},

			'micrometers:kilometer':{},
			'micrometers:meter':{},
			'micrometers:centimeter':{},
			'micrometers:millimeter':{},
			'micrometers:mile':{},
			'micrometers:yard':{},
			'micrometers:foot':{},
			'micrometers:inch':{},

			'mile:kilometer':{},
			'mile:meter':{},
			'mile:centimeter':{},
			'mile:millimeter':{},
			'mile:micrometers':{},
			'mile:yard':{},
			'mile:foot':{},
			'mile:inch':{},

			'yard:kilometer':{},
			'yard:meter':{},
			'yard:centimeter':{},
			'yard:millimeter':{},
			'yard:micrometers':{},
			'yard:mile':{},
			'yard:foot':{},
			'yard:inch':{},

			'foot:kilometer':{},
			'foot:meter':{},
			'foot:centimeter':{},
			'foot:millimeter':{},
			'foot:micrometers':{},
			'foot:mile':{},
			'foot:yard':{},
			'foot:inch':{},

			'inch:kilometer':{},
			'inch:meter':{},
			'inch:centimeter':{},
			'inch:millimeter':{},
			'inch:micrometers':{},
			'inch:mile':{},
			'inch:yard':{},
			'inch:foot':{}


		}
    },
  
    time :{
        name:'Time',
        units:{
            second:"Second",
            minute:"Minute",
            hour:"Hour",
            day:"Day"
        },
		variants:{
			'second:minute':{
				formula : 'Divide the time value by 60',
				calculation(n){
					return n/60;
				}
			},
			'second:hour':{
				formula: 'Divide the time value by 3600',
				calculation(n){
					return n/3600;
				}
			},
			'second:day':{
				formula: 'Divide the time value by 86400',
				calculation(n){
                   return n/86400;
				}
			},

			'minute:second':{
				formula:'Multiply the time value by 60',
				calculation(n){
					return n*60;
				}

			},
			'minute:hour':{
				formula:'Divide the time value by 60',
				calculation(n){
					return n/60;
				}
			},
			'minute:day':{
				formula:'Divide the time value by 1440',
				calculation(n){
					return n/1440;
				}		
			},
			
		}
    },
    
};
let lastLeftSelectedValue = '';
let lastRightSelectedValue = '';
function main(){
    const categorySelect = document.getElementById('category-select');
    const leftSelect = document.getElementById('left-select');
    const rightSelect = document.getElementById('right-select');
    const leftInput = document.getElementById('left-inp');
    const rightInput = document.getElementById('right-inp');
 
    

    const converterKeys = Object.keys(converter).sort();
    removeAllChild(categorySelect);
    converterKeys.forEach((item) => {
	addOption(categorySelect, { value: item, text: converter[item].name });
	});

    //defaults Category unit
    updateCategoryChanges(categorySelect,leftSelect,rightSelect);
    


    //change element change hand
    categorySelect.addEventListener('change',function(){
    updateCategoryChanges(categorySelect,leftSelect,rightSelect);

    });

    leftInput.addEventListener('keyup', function (event) {
		if (event.target.value && !isNaN(event.target.value)) {
			const converterName = categorySelect.value;
			const variants = converter[converterName].variants;
			const variantKey = `${leftSelect.value}:${rightSelect.value}`;
			const variant = variants[variantKey];
			leftInput.value = Number(event.target.value);
			rightInput.value = variant.calculation(Number(event.target.value));
		} else {
			rightInput.value = '';
		}
	});

	rightInput.addEventListener('keyup', function (event) {
		if (event.target.value && !isNaN(event.target.value)) {
			const converterName = categorySelect.value;
			const variants = converter[converterName].variants;
			const variantKey = `${leftSelect.value}:${rightSelect.value}`;
			const variant = variants[variantKey];
			rightInput.value = Number(event.target.value);
			leftInput.value = variant.calculation(Number(event.target.value));
		} else {
			leftInput.value = '';
		}
	});

    leftSelect.addEventListener('change',function(event){
        if(event.target.value == rightSelect.value){
            const options = rightSelect.getElementsByTagName('option');
            for(let i=0; i<options.length;i++){
               if(lastLeftSelectedValue == options[i].value){
                options[i].selected = 'selected';
                lastRightSelectedValue = options[i].value;
                break;
               }
            }
        }
        lastLeftSelectedValue = event.target.value;
        calculateValue(categorySelect,leftSelect,rightSelect);
        
        
    })
    rightSelect.addEventListener('change',function(event){
        if(event.target.value == leftSelect.value){
            const options = leftSelect.getElementsByTagName('option');
            for(let i=0; i<options.length;i++){
               if(lastRightSelectedValue == options[i].value){
                options[i].selected = 'selected';
                lastLeftSelectedValue = options[i].value;
                break;
               }
            }
        }
        lastRightSelectedValue = event.target.value;
        calculateValue(categorySelect,leftSelect,rightSelect);

    })

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
function updateCategoryChanges(categorySelect,leftSelect,rightSelect){
    const converterName = categorySelect.value;
    const units = converter[converterName].units;
    const options = Object.keys(units).sort();

    
    // Handle Left Select
    removeAllChild(leftSelect);
    options.forEach((item) => {
		addOption(leftSelect, { value: item, text: units[item] });
	});
    lastLeftSelectedValue = leftSelect.value;
       // Right right Select
       removeAllChild(rightSelect);
       options.forEach((item) => {
           addOption(rightSelect, { value: item, text: units[item] });
       });
    rightSelect.getElementsByTagName('option')[1].selected = 'selected';
    lastRightSelectedValue = rightSelect.value;
    calculateValue(categorySelect,leftSelect,rightSelect);
   
}
function calculateValue(categorySelect,leftSelect,rightSelect){
    const leftInput = document.getElementById('left-inp');
    const rightInput = document.getElementById('right-inp');
    const formulaText = document.getElementById('formula-text');

    const converterName = categorySelect.value;
    const variants = converter[converterName].variants;
    const variantKey = `${leftSelect.value}:${rightSelect.value}`;
    const variant = variants[variantKey];
    formulaText.innerText = variant.formula;
    leftInput.value =1;
    rightInput.value = variant.calculation(1);

}
