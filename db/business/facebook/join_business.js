function(doc, req) { 
	var Mustache = require( "common/js/mustache" );
	var page_template = this.common.html.join_business_html ;  
	var default_css = this.common.html.default_css ; 
    var default_js = this.common.js.socialfarm ; 
	var navigation_template = this.common.html.navigation ;
	var osn_async = this.common.html.osn_async ;

	nav = Object() ;
	nav.bid = doc._id ;
	nav.business_class = 'active' ;

	doc.navigation = Mustache.to_html( navigation_template, nav ) ;
	doc.default_css = default_css ;
    doc.default_js =  '<script>' + default_js + '</script>' ;
	doc.osn_async = osn_async ;
	return Mustache.to_html( page_template, doc ) ; 
} 


