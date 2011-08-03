function(doc, req) { 
	var Mustache = require( "common/js/mustache" );
	var page_template = this.common.html.show_basic_html ;  
	var default_css = this.common.html.default_css ; 
	var navigation_template = this.common.html.navigation ;

	nav = Object() ;
	nav.bid = doc._id ;
	nav.business_class = 'active' ;

	doc.navigation = Mustache.to_html( navigation_template, nav ) ;
	doc.default_css = default_css ;
	return Mustache.to_html( page_template, doc ) ; 
} 


