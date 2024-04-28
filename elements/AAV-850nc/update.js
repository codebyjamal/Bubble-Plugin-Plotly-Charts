function(instance, properties, context) {
let exp = "Math.sin(x)";
    
    function calculateYValues(xValues) {
    const yValues = [];
    for (let x of xValues) {
        yValues.push(eval(properties.exp));
    }
    return yValues;
}

const yValues = calculateYValues(properties.xArray.get(0, properties.xArray.length()));

var div =  document.getElementById(instance.data.id);


div.style.width = "100%";
div.style.height = "100%";
    const layout = {title:properties.title};
const data = [{
  x:properties.xArray.get(0, properties.xArray.length()),
  y:yValues,
	mode:properties.mode
}];

Plotly.newPlot(instance.data.id, data, layout);
    

}