function(instance, properties) {
var id = "preview"+Math.random().toString(36).substring(2,7);
    var preview = $(`<p id="${id}" style="font-size:36px; color: #00000">${properties.type}</p>`);
    preview.style.width = "100%";
	preview.style.height = "100%";
     
    $(preview).appendTo('body');

}