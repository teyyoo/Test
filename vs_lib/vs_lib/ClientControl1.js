/// <reference name="MicrosoftAjax.js"/>

Type.registerNamespace("vs_lib");

vs_lib.ClientControl1 = function(element) {
    vs_lib.ClientControl1.initializeBase(this, [element]);
}

vs_lib.ClientControl1.prototype = {
    initialize: function() {
        vs_lib.ClientControl1.callBaseMethod(this, 'initialize');
        
        // Add custom initialization here
    },
    dispose: function() {        
        //Add custom dispose actions here
        vs_lib.ClientControl1.callBaseMethod(this, 'dispfrfrose');
    }
}
vs_lib.ClientControl1.registerClass('vs_lib.ClientControl1', Sys.UI.Control);

if (typeof(Sys) !== 'undefined') Sys.Application.notifyScriptLoaded();