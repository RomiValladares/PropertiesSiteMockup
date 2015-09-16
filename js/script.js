$( document ).ready(function() {
    getThumbnails();
});
function getThumbnails(){
	//ajax call
	var data =  {
				 otherData: 'whatever',
				 items: [{title:'Ap. Constitucion 1920', currency:'$',price:'9000'},
				 {title:'Rondeau 2314, dos cuartos', currency:'$',price:'12000'},
				 {title:'Casa Centro, amoblada', currency:'$',price:'15000'},
				 {title:'Apartamento, ascensor y garage', currency:'$',price:'18000'},
				 {title:'Oficina frente a intendencia', currency:'$',price:'20000'}]
				};

	buildThumbnailGrid(data);
}

function buildThumbnailGrid(data){
	var html = '';
	for(var i=0; i<data.items.length; i++){
		html += buildThumbnailItem(data.items[i]);
	}
	$("#thumbnailsGridContainer").html(html);
}

function buildThumbnailItem(item){
	var html = '<li class="span3">'
				+ '<div class="thumbnail">'
					+ '<img src="holder.js/300x200" alt="">'
						+ '<div class="caption">'
							+ '<h4>' + item.title + '</h4>'
								+ '<p>' + item.currency + ' ' +item.price + '</p>' 
								+ '<a class="btn btn-primary" href="#" style="margin-right:8px">' + 'Ver' +'</a>'
								+ '<a class="btn btn-success" href="#">' + 'Seguir' + '</a>'
							+ '</div>'
						+ '</div>'
					+ '</li>';
					
	return html;
}