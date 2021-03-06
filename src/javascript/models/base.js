/*global $*/
// base model for models
import Model from 'ampersand-model';
import _ from 'underscore';


let Base = Model.extend({
    urlRoot: '/',
    props: {
        id: ['string', true, ''],
        pageContent: ['object', true, function(){ return []; }],
        pageTitle: ['string', true, ''],
        lang: ['string', true, 'de']
    },
    parse:function (resp, options) {
       var tempDom = document.createElement('document');
       tempDom.insertAdjacentHTML('afterbegin', resp);
       this.pageTitle = resp.split("<title>")[1].split("</title>")[0];
       this.pageContent = tempDom.querySelectorAll('.view')[0];

       return resp;
   },
    ajaxConfig: function () {
        return {
            xhrFields: {
                'withCredentials': true
            },
            headers: {
                'accept': 'application/php'
            }

        };
    },
    url: function () {
        var base = _.result(this, 'urlRoot') || _.result(this.collection, 'url') || urlError(),
            url;
        if (this.isNew()) url = base;
        else url = base + (base.charAt(base.length - 1) === '/' ? '' : '/') + this.getId() ;
        return url;
    }
});

export default Base;
