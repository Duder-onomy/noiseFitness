define(['masseuse', 'index/options'], function(masseuse, options) {
    'use strict';

    return masseuse.plugins.rivets.RivetsView.extend({
        defaultOptions :  options,
        afterRender : afterRender,
        toggleLoading : toggleLoading
    });
    
    function afterRender() {
        window.ivm = this.model;
    }
    
    function toggleLoading() {
        var currentVal = this.model.get('loading');
                                        
        if(currentVal) {
            this.model.set('loading', false);    
        } else {
            this.model.set('loading', true);   
        }
                    
    }
});