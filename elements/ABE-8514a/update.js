function(instance, properties, context) {
    
var legend1 = properties.legend1;
var x1Array = properties.x1Array !== null ? properties.x1Array.get(0, properties.x1Array.length()) : [];
var y1Array = properties.y1Array !== null ? properties.y1Array.get(0, properties.y1Array.length()) : [];
var colors1 = properties.colors1 !== null ? properties.colors1.get(0, properties.colors1.length()) : [];
var size1 = properties.size1 !== null ? properties.size1.get(0, properties.size1.length()) : [];

var legend2 = properties.legend2;
var x2Array = properties.x2Array !== null ? properties.x2Array.get(0, properties.x2Array.length()) : [];
var y2Array = properties.y2Array !== null ? properties.y2Array.get(0, properties.y2Array.length()) : [];
var colors2 = properties.colors2 !== null ? properties.colors2.get(0, properties.colors2.length()) : [];
var size2 = properties.size2 !== null ? properties.size2.get(0, properties.size2.length()) : [];

var legend3 = properties.legend3;
var x3Array = properties.x3Array !== null ? properties.x3Array.get(0, properties.x3Array.length()) : [];
var y3Array = properties.y3Array !== null ? properties.y3Array.get(0, properties.y3Array.length()) : [];
var colors3 = properties.colors3 !== null ? properties.colors3.get(0, properties.colors3.length()) : [];
var size3 = properties.size3 !== null ? properties.size3.get(0, properties.size3.length()) : [];





    
    
    var div =  document.getElementById(instance.data.id);

    div.style.width = "100%";
    div.style.height = "100%";

    const trace1 = {
      x: x1Array,
      y: y1Array,
      mode: 'markers',
      marker: {
        color: colors1,
        size: size1,
      },
        name: legend1
    };
    
    const trace2 = {
      x: x2Array,
      y: y2Array,
      mode: 'markers',
      marker: {
        color: colors2,
        size: size2,
      },
       name: legend2
    };
   
    
    const trace3 = {
      x: x3Array,
      y: y3Array,
      mode: 'markers',
      marker: {
        color: colors3,
        size: size3,
      },
        name: legend3
    };

const data = [trace1,trace2,trace3];

const layout = {
  title: properties.title
};
    

Plotly.newPlot(instance.data.id, data, layout);
                                     
                                    
}