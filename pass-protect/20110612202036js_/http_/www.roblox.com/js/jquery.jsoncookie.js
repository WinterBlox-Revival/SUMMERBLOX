var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/** 
 * JSON Cookie - jquery.jsoncookie.js
 *
 * Sets and retreives native JavaScript objects as cookies.
 * Depends on the object serialization framework provided by JSON2.
 *
 * Dependencies: jQuery, jQuery Cookie, JSON2
 * 
 * @project JSON Cookie
 * @author Randall Morey
 * @version 0.9
 */

(function($) {
    var isObject = function(x) {
        return (typeof x === 'object') && !(x instanceof Array) && (x !== null);
    };

    $.extend({
        getJSONCookie: function(cookieName, jsonFormat) {
            var cookieData = $.cookie(cookieName);
            if (jsonFormat)
                return cookieData;
            else
                return cookieData ? JSON.parse(cookieData) : {};
        },
        setJSONCookie: function(cookieName, data, options) {
            var cookieData = '';

            options = $.extend({
                expires: 90,
                path: '/'
            }, options);

            if (!isObject(data)) {	// data must be a true object to be serialized
                // Must be in JSON already...
                cookieData = data;
            }
            else {
                cookieData = JSON.stringify(data);
            }

            return $.cookie(cookieName, cookieData, options);
        },
        removeJSONCookie: function(cookieName) {
            return $.cookie(cookieName, null);
        },
        JSONCookie: function(cookieName, data, options) {
            if (data) {
                $.setJSONCookie(cookieName, data, options);
            }
            return $.getJSONCookie(cookieName);
        }
    });
})(jQuery);



function RobloxJSONCookie(name) {
    this._cookiename = name;
}

RobloxJSONCookie.prototype =
{
    Delete: function() {
        return ($.removeJSONCookie(this._cookiename));
    },
    SetObj: function(obj, options) {
        if (!options)
            options = { path: '/' }
        return $.JSONCookie(this._cookiename, obj, options);
    },
    SetJSON: function(json, options) {
        if (!options)
            options = { path: '/' }
        return $.JSONCookie(this._cookiename, json, options);
    },
    GetObj: function() {
        var obj = $.getJSONCookie(this._cookiename, false);
        if (obj == null)
            return new Object();
        else
            return obj;
    },
    GetJSON: function() {
        return $.getJSONCookie(this._cookiename, true);
    }
}



}
/*
     FILE ARCHIVED ON 20:20:36 Jun 12, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:00:20 Jun 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.579
  exclusion.robots: 0.023
  exclusion.robots.policy: 0.01
  esindex: 0.009
  cdx.remote: 219.83
  LoadShardBlock: 240.521 (3)
  PetaboxLoader3.datanode: 92.805 (4)
  PetaboxLoader3.resolve: 476.42 (2)
  load_resource: 382.15
*/