/*global app, me, $*/
import _ from 'underscore';
import Router from './router';
import MainView from './main-view';

/* Class Defintion */
class App {

    _version = 1.0

    constructor (el) {
        this._sayHello()

        // Singleton Object
        if(window.CM == null) window.CM = {};
        window.CM.App = this;

        // init
        this._initial = true;
        this._params = {};

        this.router = new Router();
        this.mainView = new MainView({
            el: el
        });
    }
    // this is the the whole app initter
    blastoff () {
        let self = this;

        // Render Main View
        this.mainView.render();

        // watch for changes
        this.router.on("page", function(view, params){

            // save params in App or kill all if none where set in url
            self._setParams(params);

            // set listener on model
            view.model.on("sync", function(model, resp){
                if(!self._initial){
                    self.mainView.handleNewView(view);
                } else {
                    self.mainView.handleInitialView(view);
                    self._initial = false;
                }
            });
            view.model.on("error", function(model, resp){
                console.warn("failed to load: ", model.url);
            });
            // load html in model
            view.model.fetch();
        });

        // watch for Updates
        this.router.on("update", function(params){
          self._setParams(params);
          self.mainView.handleUpdateView();

        })

        // we have what we need, we can now start our router and show the appropriate page
        this.router.history.start();

    }

    // This is how you navigate around the app.
    // this gets called by a global click handler that handles
    // all the <a> tags in the app.
    // it expects a url without a leading slash.
    // for example: "costello/settings".
    navigate (page) {
        var url = (page.charAt(0) === '/') ? page.slice(1) : page;
        this.router.history.navigate(url, {trigger: true});
    }

    _setParams (params) {
      this._params = []
      if(params != null){
        let paramlist = params.split('&');
        for (let i = 0; i < paramlist.length; i++ ) {
            let parampair = paramlist[i].split('=')
            this._params[parampair[0]] = parampair[1];
        }
      }
    }

    _sayHello () { }

};
// Construct the APP in window
export default new App(document.body);
