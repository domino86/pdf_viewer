/**
 * @fileOverview  Contains various view functions for the use case listDocuments
 * @author Gerd Wagner
 */
 pl.view.listDocuments = {
  setupUserInterface: function () {
    // load all Document objects
    var keys=[], key="", i=0;
    // load all book objects
    Document.showAll();
    keys = Object.keys(Document.instances);
	console.log(keys);
	var i;
    for (i=0; i<keys.length; i++) {
		console.log(keys[i]);
		key = keys[i];
		var ext = keys[i].slice(-3);
		var without_ext = keys[i].slice(0, -3);
		console.log(without_ext);
		if(ext == "jpg"){
			 $('<img>', {
				 src: store + 'img/' + keys[i],
				 class: 'pdf_cover',
				 width: '140'
				 }).appendTo($('<a>', {          
				   href: store + 'img/' + without_ext + 'pdf'
				 }).appendTo('#images'));    
		}
    }
  }
};