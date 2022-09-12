window.onload = function(){
    main();
};

const converter = {
    area :{
        name :'Area'
    },
    mass :{
        name:'Mass'
    },
    length : {
        name:'Length'
    },
    volume :{
        name:'Volume'
    },
    time :{
        name:'Time'
    },
    dataTansferRate:{
        name:'Data Transfer Rate'
    }
};
function main(){
    const categorySelect = document.getElementById('category-select');
    const converterKeys = Object.keys(converter).sort();
    removeAllChild(categorySelect);
    console.log(converterKeys);
    converterKeys.forEach((item) => {
		addOption(categorySelect, { value: item, text: converter[item].name });
	});

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
