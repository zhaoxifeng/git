
var ia_cl="5313633333236323131303";

var ia_bmcl="8353835313236323131303";

var ia_tr2dmn="t23.intelliad.de";

var ia_tld2u=".bmwgroup.com";

var __ia_brand_kws = new Array("bmw", "bmwgroup");

var skip_rest = false;

var skip_seo = false;

var skip_ti = false;

var skip_ref = false;

//static part below




var ia_seo_only = false;

function __op_click_px(__script, __sb_keys, __sb_vals, __ptype, __bounce_only, tld4cookie, ia_location) {
    var ia_rand = Math.floor(Math.random() * 11111139435231);
    var _skip_client = 0;

    var __ia_px = 'http' + ((ia_location.protocol === 'https:') ? 's' : '') + '://'
        + ia_tr2dmn
        + __script
        + '?rand=' + ia_rand
        + '&iacbos=' + __ptype;

    if ((typeof iauid !== 'undefined')
        && (iauid != ''))
    {
        __sb_keys.push('uid');
        __sb_vals.push(iauid);
    }

    for (var __ia_x = 0; __ia_x < __sb_keys.length; __ia_x++) {
        __ia_px += '&' + __sb_keys[__ia_x] + '=' + __sb_vals[__ia_x];
       if (__sb_keys[__ia_x] == 'cl' && (__sb_vals[__ia_x] == '0' || __sb_vals[__ia_x] == 0 || __sb_vals[__ia_x] == '')) {
           _skip_client = 1;
       }
    }

    // set cookie for identifying 2x clicks
    __set_cookie('ia_c4dc_' + __sb_vals[0], '1', 1800, tld4cookie);
    __set_cookie('ia_u4pc_' + __sb_vals[0], '1', 864000, tld4cookie);

    if (_skip_client == 1 || __bounce_only == true) {
        // TO NOTHING -> NECK SEO !!!!
    } else {
        __ia_is_ie7_askjeu = (navigator.appVersion.indexOf("MSIE 7.") == -1) ? false : true;
        if (__ia_is_ie7_askjeu == false) {
            __ia_is_ie7_askjeu = (navigator.appVersion.indexOf("MSIE 6.") == -1) ? false : true;
        }

        if (__sb_keys[0] == 'cl' && (__sb_vals[0] == '2313433313236323131303' || __sb_vals[0] == '0373330323236323131303')) {
            if (document.body == null || __ia_is_ie7_askjeu == true) {
                document.write('<sc'+'ript src="' + __ia_px + '&rt=js"></sc'+'ript>');
            } else {
                var sct_tag = document.createElement('script');
                sct_tag.src = __ia_px + '&rt=js';
                document.body.appendChild(sct_tag);
            }
        } else {
            if (document.body == null || __ia_is_ie7_askjeu == true) {
                document.write('<img src="' + __ia_px + '" width="1" height="1" alt="" />');
            } else {
                var img_tag = document.createElement('img');
                img_tag.src = __ia_px;
                img_tag.width = 1;
                img_tag.height = 1;
                img_tag.alt = '';

                document.body.appendChild(img_tag);
            }
        }
    }
}

function __set_cookie(c_name, value, expires, tld4cookie) {
    var today = new Date();
    today.setTime(today.getTime());

    var expires_date = new Date(today.getTime() + (expires * 1000));
    if (typeof(tld4cookie) != "undefined" && (tld4cookie != "") && document.location && document.location.host && document.location.host.indexOf(tld4cookie) != "-1") {
        document.cookie = c_name + "=" + escape(value) + "; path=/; domain=" + tld4cookie + " ; expires=" + expires_date.toGMTString();
    } else {
        document.cookie = c_name + "=" + escape(value) + "; path=/; expires=" + expires_date.toGMTString();
    }
}

function __get_cookie(c_name) {
    if (document.cookie.length>0) {
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1) {
            c_start=c_start + c_name.length+1;
            c_end=document.cookie.indexOf(";",c_start);
           if (c_end==-1) c_end=document.cookie.length;
           return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return 0;
}

function __read_write_u_session(boclid, tld4cookie, bounce_only, ia_location, ia_referrer) {
    var _string_hashing,
        _apply_cm_pixels,
        _insert_pixel,
        _add_product_marker_pixel,
        s = (ia_location.protocol == 'https:') ? 's' : '';

    _session_lifetime = 300;
    _cookie_name = 'ia_bncl_' + boclid;
    _split_char = ' ';
    _raw_cookie_data = __get_cookie(_cookie_name);

    // hashing of string -> used to define unique names for pixels
    _string_hashing = function(str) {
        var hash = 0, i, char;

        if (!str || typeof str != 'string') {
            return hash;
        }

        for (i = 0; i < str.length; i++) {
            char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // convert to 32bit integer
        }

        return Math.abs(hash); // return always positive number
    };

    // pixel injector
    _insert_pixel = function(src, type, onLoadCallback) {
        // cookie matching pixel should be placed only once
        var _pixel_id = type + '-0',
            _html_callback_property,
            _html_img_tag;

        if (document && document.body && ia_location) {
            _pixel_id = type + '-' + _string_hashing(ia_location.host + ia_location.pathname);
        }

        if (document.getElementById(_pixel_id) == null) {
            if (document.body == null) {
                _html_img_tag = '<img id="' + _pixel_id + '" src="' + src + '" width="1" height="1" alt="" ';

                // add execution of onload callback
                if (onLoadCallback) {
                    _html_callback_property = 'ia' + _string_hashing(_pixel_id);

                    document[_html_callback_property] = function() {
                        onLoadCallback();
                    };

                    _html_img_tag += ' onload="document.' + _html_callback_property + '();" ';
                }

                _html_img_tag += ' />';

                document.write(_html_img_tag);
            } else {
                var img_tag = document.createElement('img');
                img_tag.id = _pixel_id;
                img_tag.src = src;
                img_tag.width = 1;
                img_tag.height = 1;
                img_tag.alt = '';

                // add execution of onload callback
                if (onLoadCallback) {
                    img_tag.onload = function() {
                        onLoadCallback();
                    };
                }

                document.body.appendChild(img_tag);
            }
        }
    };

    // RTB Product Marker Pixel - global "ia_pi" variable, additionally "ia_pi_viewed" or "ia_pi_bought" are handled
    _add_product_marker_pixel = function() {
        if (typeof(ia_pi) != "undefined" && ia_pi != "" && ia_pi != null) {
            var _ia_pi_viewed = (typeof(ia_pi_viewed) != "undefined") ? ia_pi_viewed : 1; // default as viewed
            var _ia_pi_bought = (typeof(ia_pi_bought) != "undefined") ? ia_pi_bought : 0; // default as not bought

            var _p_marker_pixel = 'http' + (ia_location.protocol == 'https:' ? 's' : '') +
                '://adsrv.intelliad.com/p-marker.php?cl=' + boclid +
                '&pi=' + encodeURIComponent(String(ia_pi).split('|', 8).join('|')) +
                '&v=' + _ia_pi_viewed + '&b=' + _ia_pi_bought;

            _insert_pixel(_p_marker_pixel, 'ia-product-marker');
        }
    };

    // either cookie is empty or we don't have a referrer
    if (_raw_cookie_data == 0 || !ia_referrer || ia_referrer.indexOf( 'www.google' ) != -1) {
        // callback function, that will be triggered after global iA pixel is loaded
        _apply_cm_pixels = function() {
            var _px_url,
                __dccm_px = 'http' + (ia_location.protocol == 'https:' ? 's' : '') +
                '://cm.g.doubleclick.net/pixel' +
                '?google_nid=intelliad&google_sc' +
                '&google_ula=1125454&google_ula=1125334&google_ula=1122694&google_ula=1122454&google_ula=773134';

            // blacklist - adx
            if (typeof ia_rtb_cm_pixels == 'undefined' || !ia_rtb_cm_pixels.blacklist ||
                (',' + ia_rtb_cm_pixels.blacklist.toString() + ',').indexOf(',google,') == -1
            ) {
                // our cm hosting matching
                _insert_pixel(
                    __dccm_px + '&google_cm&cl=' + boclid,
                    'google-cm'
                );

                // hosted match table
                _insert_pixel(
                    'http' + s + '://' + ia_tr2dmn + '/icm.php?iacbos=session&ia_uc=feea97f4ebbcc74bdfe2bef03357a088' +
                    '&cl=' + boclid + '&ia_ru=' + escape(__dccm_px + '&google_hm=[[BASE64_UID]]'),
                    'google-hm'
                );
            }

            // whitelist
            if (typeof ia_rtb_cm_pixels != 'undefined' && ia_rtb_cm_pixels.whitelist) {

                ia_rtb_cm_pixels.whitelist_string = (',' + ia_rtb_cm_pixels.whitelist.toString() + ',');

                // improve
                if (ia_rtb_cm_pixels.whitelist_string.indexOf(',improve,') != -1) {
                    _insert_pixel(
                        'http' + s + '://' + ia_tr2dmn + '/icm.php?iacbos=rtbwimp&ia_uc=feea97f4ebbcc74bdfe2bef03357a088' +
                        '&cl=' + boclid + '&ia_ru=' +
                        encodeURIComponent(
                            'http' + s + '://ad.360yield.com/match?publisher_dsp_id=189&external_user_id=[[UID]]&dsp_callback=1'
                        ),
                        'improve'
                    );
                }

                // appnexus
                if (ia_rtb_cm_pixels.whitelist_string.indexOf(',appnexus,') != -1) {
                    // uses different hosts for http and https
                    if (s == 's') {
                        _px_url = 'http' + s + '://' + ia_tr2dmn + '/icm.php?iacbos=rtbwan&ia_uc=feea97f4ebbcc74bdfe2bef03357a088' +
                            '&cl=' + boclid + '&ia_ru=' +
                            escape('http' + s + '://secure.adnxs.com/setuid?entity=202&seg=1529077&code=[[UID]]');
                    } else {
                        _px_url = 'http' + s + '://' + ia_tr2dmn + '/icm.php?iacbos=rtbwan&ia_uc=feea97f4ebbcc74bdfe2bef03357a088' +
                            '&cl=' + boclid + '&ia_ru=' +
                            escape('http' + s + '://ib.adnxs.com/setuid?entity=202&seg=1529077&code=[[UID]]');
                    }

                    _insert_pixel(
                        _px_url,
                        'appnexus'
                    );
                }

                // yieldlab
                if (ia_rtb_cm_pixels.whitelist_string.indexOf(',yieldlab,') != -1) {
                    _insert_pixel(
                        'http' + s + '://' + ia_tr2dmn + '/icm.php?iacbos=rtbwyl&ia_uc=feea97f4ebbcc74bdfe2bef03357a088' +
                        '&cl=' + boclid + '&ia_ylm=1&ia_ru=' +
                        escape('http' + s + '://ad.yieldlab.net/m?dt_id=36146&ext_id=[[UID]]'),
                        'yieldlab'
                    );
                }

                // nuggad
                if (ia_rtb_cm_pixels.whitelist_string.indexOf(',nuggad,') != -1) {
                    _insert_pixel(
                        'http' + s + '://' + ia_tr2dmn + '/icm.php?iacbos=rtbwna&ia_uc=feea97f4ebbcc74bdfe2bef03357a088' +
                        '&ia_ru=%2F%2Fia-sync.nuggad.net%2Fsyncuid%3Fdpid%3D1589%26uid%3D[[UID]]',
                        'nuggad'
                    );
                }

                // rubicon
                if (ia_rtb_cm_pixels.whitelist_string.indexOf(',rubicon,') != -1) {
                    _insert_pixel(
                        'http' + s + '://' + ia_tr2dmn + '/gcm.php?iacbos=rtbwrc&dmp_id=2' + '&dmp_uid=IA_UID' +
                        '&redirect=' + escape('http' + s + '://pixel.rubiconproject.com/tap.php?v=44898&nid=2715&put=[[UID]]') +
                        '&diar=1&cl=' + boclid,
                        'rubicon'
                    );
                }

                // adscale
                if (ia_rtb_cm_pixels.whitelist_string.indexOf(',adscale,') != -1) {
                    _insert_pixel(
                        'http' + s + '://' + ia_tr2dmn + '/icm.php?iacbos=rtbwas&ia_uc=feea97f4ebbcc74bdfe2bef03357a088&' +
                        'ia_ru=%2F%2Fih.adscale.de%2Fadscale-ih%2Ftpui%3Ftpid%3D59%26tpuid%3D[[UID]]' +
                        '%26cburl%3D%252F%252F' + ia_tr2dmn + '%252Fgcm.php' +
                        '%253Fiacbos%253Drtbwas2%2526dmp_id%253D3%2526cl%253D' + boclid + '%2526dmp_uid%253D__ADSCALE_USER_ID__',
                        'adscale'
                    );
                }

            }
        };

        // set global iA pixel -> onload -> set defined cm pixels
        var iapixsrc = 'http' + s + '://' + ia_tr2dmn + '/ia-pixel.php?iacbos=cbpix&cl='+ia_cl;
        if ((typeof iauid !== 'undefined') && (iauid != '')) {
            iapixsrc += '&uid=' + iauid;
        }

        _insert_pixel(iapixsrc, 'ia-pixel', _apply_cm_pixels);
    }

    _session_id = Math.random();
    _first_click_time = Math.round((new Date()).getTime() / 1000);
    _last_click_time = _first_click_time;
    _num_session_clicks = 0;
    _chain_secs = 0;

    if (_raw_cookie_data != 0 && _raw_cookie_data.length > 0) {
        _cookie_data = _raw_cookie_data.split(_split_char);
        if ((typeof _cookie_data === 'object')
            && (_cookie_data.length === 5)
            && (parseInt(_cookie_data[1]) !== 'NaN')
            && (parseInt(_cookie_data[2]) !== 'NaN')
            && (parseInt(_cookie_data[3]) !== 'NaN'))
        {
            _session_id = _cookie_data[0];
            _first_click_time = parseInt(_cookie_data[1]);
            _num_session_clicks = (parseInt(_cookie_data[3]) + 1);
            _chain_secs = _last_click_time - _first_click_time;
        }
    }

    _cookie_string = _session_id +
                     _split_char +
                     _first_click_time +
                     _split_char +
                     _last_click_time +
                     _split_char +
                     _num_session_clicks +
                     _split_char +
                     _chain_secs;
    __set_cookie(_cookie_name, _cookie_string, _session_lifetime, tld4cookie);

    __bc_px = 'http'+(ia_location.protocol=='https:'?'s':'') +
              '://' + ia_tr2dmn + '/bnc.php' +
              '?iacbos=bnc' + ((bounce_only) ? '-only' : '') +
              '&cl=' + boclid +
              '&sid=' + _session_id +
              '&fct=' + _first_click_time +
              '&lct=' + _last_click_time +
              '&nsc='  + _num_session_clicks +
              '&cls=' + _chain_secs +
              '&rand=' + Math.floor(Math.random()*11111139435231);

    if (boclid == '2313433313236323131303' || boclid == '0373330323236323131303') {
        if (document.body == null) {
            document.write('<sc'+'ript src="' + __bc_px + '&rt=js"></sc'+'ript>');
        } else {
            var sct_tag_bnc = document.createElement('script');
            sct_tag_bnc.src = __bc_px + '&rt=js';
            document.body.appendChild(sct_tag_bnc);
        }
    } else {
        _insert_pixel(__bc_px, 'ia-bnc');
    }

    // RTB Product Marker
    _add_product_marker_pixel();
}

function setPm (conf_pm, ia_location)
{
    if (!ia_location.search
        || !conf_pm['default']['ia_tc']['param']
        || !conf_pm['default']['ia_tc']['param'].length)
    {
        return false;
    }

    var dl_params = {};
    var dl_parts = ia_location.search.substring(1).split('&');
    for (var i = 0; i < dl_parts.length; i++) {
        var kv = dl_parts[i].split('=');
        dl_params[decodeURI(kv[0])] = decodeURI(kv[1]);
    }

    var paComb = ['ia_tc', 'ia_sc', 'ia_kw'];
    var iaMapPrm = {};
    var iaMapVal = {
        'ia_bmcl': conf_pm['default']['ia_bmcl'],
        'ia_bm': 100
    };
    for (var paPos = 0, paLen = paComb.length; paPos < paLen; paPos++)
    {
        var fParm = false;
        for (var coPos = 0, coLen = conf_pm['default'][paComb[paPos]]['param'].length; coPos < coLen; coPos++)
        {
            var dl_key = conf_pm['default'][paComb[paPos]]['param'][coPos];
            if (dl_params.hasOwnProperty(dl_key)
                && (dl_params[dl_key] !== null))
            {
                iaMapPrm[paComb[paPos]] = dl_key;
                iaMapVal[paComb[paPos]] = dl_params[dl_key];
                fParm = true;
                break;
            }
        }
        if (!fParm) {
            break;
        }
    }

    if (typeof iaMapPrm['ia_tc'] === 'undefined') {
        return false;
    }
    if ((typeof iaMapVal['ia_sc'] == 'undefined')
        || (iaMapVal['ia_sc'] == ''))
    {
        iaMapVal['ia_sc'] = 'default';
    }
    if ((typeof iaMapVal['ia_kw'] != 'undefined')
        && (iaMapVal['ia_kw'] != ''))
    {
        iaMapVal['ia_crid'] = 0;
    }

    for (var conNum in conf_pm['conditions']) {
        var currCon = conf_pm['conditions'][conNum];
        for (var checkParm in currCon['con']) {
            var allConMet = true;
            var checkParmCon = currCon['con'][checkParm];
            if (typeof checkParmCon === 'string') {
                checkParmCon = {
                    'val': checkParmCon,
                    'src': ''
                };
            }

            if (!(new RegExp('^'+checkParmCon['val']+'$')).test(iaMapVal[checkParm])
                || (checkParmCon.src
                && iaMapPrm[checkParm]
                && checkParmCon.src != iaMapPrm[checkParm]))
            {
                allConMet = false;
                break;
            }
        }

        if (!allConMet) {
            continue;
        }

        for (var setParm in currCon['res']) {
            var setParmMap = currCon['res'][setParm];
            if (!setParmMap) {
                break;
            }

            if ((typeof setParmMap['value'] !== 'undefined')
                && (setParmMap['value'].toString() != ''))
            {
                iaMapVal[setParm] = setParmMap['value'];
            } else if (setParmMap['param']
                && dl_params[setParmMap['param']])
            {
                iaMapVal[setParm] = dl_params[setParmMap['param']];
            }
        }
        break;
    }

    if (iaMapVal['ia_bmcl'] == 0)
    {
        return false;
    }

    for (var winParm in iaMapVal) {
        window[winParm] = iaMapVal[winParm];
    }

    return true;
}

function blockOs(conf_bos, ia_location)
{
    if (!ia_location.search
        || !conf_bos.length)
    {
        return false;
    }

    var dl_params = {};
    var dl_parts = ia_location.search.substring(1).split('&');
    for (var i = 0; i < dl_parts.length; i++) {
        var kv = dl_parts[i].split('=');
        dl_params[decodeURI(kv[0])] = decodeURI(kv[1]);
    }

    for (var ip = 0, nl = conf_bos.length; ip < nl; ip++)
    {
        var curr_bos = conf_bos[ip];
        if (typeof dl_params[curr_bos['param']] === 'string')
        {
            if (!curr_bos['value']
                || !curr_bos['value'].length
                || (new RegExp('^' + curr_bos['value'] + '$')).test(dl_params[curr_bos['param']]))
            {
                return true;
            }
        }
    }

    return false;
}

// DON'T CHANGE ANYTHING BELOW THIS LINE !!!
var ia_sq = "";
var ia_ios = 0;
var ia_bm = 10;
var ia_sb = 1;
var ia_pos = 0;
var ia_cp = "";
var ia_ag = "";
var ia_crid = 100;
var ia_kw = "";
var ptype = false;
var referring_domain = "";
var has_pkpmtrack_param = 0;
var submit_urlm = 0;
var is_aclk = 0;
var ia_tc_orig = "";
var ia_sc_orig = "";
var ia_bmcl_overwritten = false;
var ia_location = "";
var ia_referrer = "";

if (typeof(ia_bmcl) == "undefined") {
    var ia_bmcl = "8353835313236323131303";
} else if (ia_bmcl == "5393835313236323131303") {
    ia_bmcl = "8353835313236323131303";
}
if (typeof(bounce_only) == "undefined") {
    var bounce_only = false;
}
if (typeof(skip_rest) == "undefined") {
    var skip_rest = false;
}
if (typeof(skip_seo) == "undefined") {
    var skip_seo = false;
}
if (typeof(skip_ti) == "undefined") {
    var skip_ti = false;
}
if (typeof(skip_ref) == "undefined") {
    var skip_ref = false;
}
if (typeof(ia_tld2u) == "undefined") {
    var ia_tld2u="";
}
if (typeof(ia_tc) != "undefined") {
    var ia_tc_orig = ia_tc;
} else {
    if (ia_cl === '5353132313236323131303') {
        ia_tc = '';
    }
}
if (typeof(ia_sc) != "undefined") {
    var ia_sc_orig = ia_sc;
} else {
    if (ia_cl === '5353132313236323131303') {
        ia_sc = '';
    }
}

// check for bounce only
if (typeof(ia_bounce_only) != "undefined" && (ia_bounce_only == 1 || ia_bounce_only == "1")) {
    bounce_only = true;
}

if (typeof(ia_seo_only) != "undefined" && (ia_seo_only == 1 || ia_seo_only == "1")) {
    skip_rest = true;
    skip_ti = true;
    skip_ref = true;
}

//document.location to variable
if (typeof(ia_extracted_loc) == "undefined") {
    ia_location = document.location;
} else {
    //from client-snippet
    ia_location = ia_extracted_loc;
}

if (typeof(ia_extracted_ref) == "undefined") {
    ia_referrer = document.referrer;
} else {
    //from client-snippet
    ia_referrer = ia_extracted_ref;
}

if (typeof(ia_cl) == "undefined") {
  ia_cl = 0;
} else if (ia_cl != '4393932313236323131303') {
    __read_write_u_session(ia_cl, ia_tld2u, bounce_only, ia_location, ia_referrer);
}

if ((undefined != ia_location.search && ia_location.search != "") || (undefined != ia_location.hash && ia_location.hash != ""))
{
    var url_match = /(\?|&)ia-pkpmtrack=([^&]*)/;
    var regs_pkpmtrack = null;
    if (undefined != ia_location.search && ia_location.search != "") {
        regs_pkpmtrack = url_match.exec(ia_location.search);
    }

    if (regs_pkpmtrack == null && undefined != ia_location.hash && ia_location.hash != "") {
        var url_match_hash = /(\#|&)ia-pkpmtrack=([^&]*)/;
        regs_pkpmtrack = url_match_hash.exec(ia_location.hash);
    }

    if (regs_pkpmtrack != null) {
        pkpmtrack_parts = regs_pkpmtrack[2].split('-');

        if (pkpmtrack_parts.length == 5) {
            has_pkpmtrack_param = 1;
            ia_bmcl_overwritten = true;
            ptype = "urlm";
            submit_urlm = 1;

            ia_bm = pkpmtrack_parts[0];
            ia_bmcl = pkpmtrack_parts[1];
            ia_cp = pkpmtrack_parts[2];
            ia_ag = pkpmtrack_parts[3];
            ia_crid = pkpmtrack_parts[4];
        }
    }
}

if(ia_referrer) {
    var referring_domain_match = /^[a-z]+:\/\/([^\/]+|[^$]+)/;
    var ref_match = referring_domain_match.exec(ia_referrer);
    if (ref_match != null) {
        referring_domain = ref_match[1];
    }

    doc_loc_match = new RegExp('^http[s]?:\/\/' + ia_location.hostname, 'i');
    doc_loc_regs = doc_loc_match.exec(ia_referrer);

    ref_ios_match = new RegExp('^http[s]?:\/\/(?:[a-z]+\.)?google(?:\.com|\.co)?\.[a-z]+(?:[\/\?&]|$)', 'i');
    ref_ios_regs = ref_ios_match.exec(ia_referrer);

    if (referring_domain != "" && ia_location.hostname.indexOf(referring_domain) != -1 && has_pkpmtrack_param == 0) {
        ptype = "view";
    } else if (doc_loc_regs != null && has_pkpmtrack_param == 0) {
        ptype = "view";
    } else if(ref_ios_regs != null && has_pkpmtrack_param == 0) {
        ia_ios = 1;
        ptype = "ios";

        var url_match = /(?:[\?&])(?:q|as_q)=([^&]*)/i;
        var regs = url_match.exec(ia_referrer);
        if(regs != null && regs[1] != null && regs[1] != '') {
            ia_sq = regs[1];
        }

        if (ia_sq == '' && (typeof ia_location.hash !== "undefined") && ia_location.hash != "")
        {
            var url_match_hash = /(?:[#&])(?:q|as_q)=([^&]*)/i;
            var regs = url_match_hash.exec(ia_location.hash);
            if(regs != null && regs[1] != null && regs[1] != '') {
                ia_sq = regs[1];
            }
        }

        var url_match = /([\?&])source=([^&]*)/i;
        var regs2 = url_match.exec(ia_referrer);
        if(regs2 != null && (regs2[2] == 'web'))
        {
            var url_match = /([\?&])cd=([^&]*)/i;
            var regs3 = url_match.exec(ia_referrer);
            if (regs3 != null) {
                ia_pos = regs3[2];
            }
        }

        var url_match = /([\?&])oi=([^&]*).*(&)resnum=([^&]*)/i;
        var regs = url_match.exec(ia_referrer);
        if (regs != null) {
            if (regs[4] != null && regs[4] != "") {
                ia_pos = regs[4];
            }
        }

        var url_match = /([\?&])url=([^&]*)/i;
        var regs = url_match.exec(ia_referrer);
        if (regs != null && regs[2] != null && regs[2] != "") {
            var url_match_aclk = /^\/(aclk).*http.*$/i;
            var regs_aclk = url_match_aclk.exec(regs[2]);
            if (regs_aclk != null && regs_aclk[1] == "aclk") {
                ia_ios = 0;
                is_aclk = 1;
            }
        }

        var url_match = /^.*(google(?:\.com|\.co)?\.[a-z]+)\/(aclk)\?.*$/i;
        var regs = url_match.exec(ia_referrer);
        if (regs != null && regs[2] != null && regs[2] == 'aclk') {
            ia_ios = 0;
            is_aclk = 1;
        }

        var url_match = /(googleads).g.(doubleclick).net/i;
        var regs = url_match.exec(ia_referrer);
        if (regs != null && regs[2] != null) {
            ia_ios = 0;
            is_aclk = 1;
        }

        var url_match = /^.*(google(?:\.com|\.co)?\.[a-z]+)\/uds\/(afs)\?.*$/i;
        var regs = url_match.exec(ia_referrer);
        if (regs != null && regs[2] != null && regs[2] == 'afs') {
            ia_ios = 0;
            is_aclk = 1;
        }

        var url_param = /([\?&])adurl=([^&]*)/i;
        var regs = url_param.exec(ia_referrer);
        if (regs != null && regs[2] != "") {
            ia_ios = 0;
            is_aclk = 1;
        }

        // check for adword parameter
        var url_param = /([\?&])adword=([^&]*)/i;
        var regs = url_param.exec(ia_referrer);
        if (regs != null && regs[2] != "") {
            ia_ios = 0;
            is_aclk = 1;
        }

        // base
        var url_param = /google(?:\.com|\.co)?\.([a-z]+)\/(products)\/catalog/i;
        var regs = url_param.exec(ia_referrer);
        if (regs != null && regs[2] != "") {
            ptype = "ref";
            ia_ios = 0;
        }

        // base
        var url_param = /google(?:\.com|\.co)?\.([a-z]+)\/(products)\?/i;
        var regs = url_param.exec(ia_referrer);
        if (regs != null && regs[2] != "") {
            ptype = "ref";
            ia_ios = 0;
        }

        // base
        var url_param = /([\?&])source=productsearch([^&]*)/i;
        var regs = url_param.exec(ia_referrer);
        if (regs != null && regs[2] != "") {
            ptype = "ref";
            ia_ios = 0;
        }

        // base
        var url_param = /google(?:\.com|\.co)?\.([a-z]+)\/search.*&(tbm=shop)&/i;
        var regs = url_param.exec(ia_referrer);
        if (regs != null && regs[2] != "") {
            ptype = "ref";
            ia_ios = 0;
        }

        // pages
        var url_param = /(docs)\.google(?:\.com|\.co)?\.([a-z]+)/i;
        var regs = url_param.exec(ia_referrer);
        if (regs != null && regs[1] != "" && ia_ios == 1) {
            ptype = "ref";
            ia_ios = 0;
        }

        var url_param = /(maps)\.google(?:\.com|\.co)?\.([a-z]+)/i;
        var regs = url_param.exec(ia_referrer);
        if (regs != null && regs[1] != "" && ia_ios == 1) {
            ptype = "ref";
            ia_ios = 0;
        }

        var url_param = /(images)\.google(?:\.com|\.co)?\.([a-z]+)/i;
        var regs = url_param.exec(ia_referrer);
        if (regs != null && regs[1] != "" && ia_ios == 1) {
            ptype = "ref";
            ia_ios = 0;
        }

        var url_param = /http[s]?:\/\/([a-z]+\.)?google(?:\.com|\.co)?\.([a-z]+)\/imgres\?/i;
        var regs = url_param.exec(ia_referrer);
        if (regs != null && regs[2] != "" && ia_ios == 1) {
            ptype = "ref";
            ia_ios = 0;
        }

        var url_param = /([a-z]+)\.google(?:\.com|\.co)?\.([a-z]+)/i;
        var regs = url_param.exec(ia_referrer);
        if (regs != null && regs[1] != "www" && regs[2] != "www" && ia_ios == 1) {
            ptype = "ref";
            ia_ios = 0;
        }

        var url_param = /google(?:\.com|\.co)?\.([a-z]+)\/(cse)\?/i;
        var regs = url_param.exec(ia_referrer);
        if (regs != null && regs[2] != "") {
            ptype = "ref";
            ia_ios = 0;
        }

        var url_param = /([\?&])gclid=([^&]*)/i;
        var regs = url_param.exec(ia_location.href);
        if (regs != null && regs[2] != "") {
            ia_ios = 0;
        }

        if (ia_ios == 1) {
            var url_match = /([\?&])cd=([^&]*)/i;
            var regs3 = url_match.exec(ia_referrer);
            if (regs3 != null) {
              ia_pos = regs3[2];
            }

            if (is_aclk == 0 && ia_sq == '') {
                var url_match_seo = /^http[s]?:\/\/([a-z]+\.)?google(?:\.com|\.co)?\.([a-z]+)[\/]+url\?/i;
                var regs_seo = url_match_seo.exec(ia_referrer);

                if (regs_seo != null && regs_seo[2] != "" && ia_ios == 1) {
                    ia_sq = '(not provided)';
                } else {
                    var url_match = /^http[s]?:\/\/([a-z]+\.)?google(?:\.com|\.co)?\.([a-z]+)[\/]?/i;
                    var regs = url_match.exec(ia_referrer);
                    if (regs != null && regs[2] != "") {
                        ptype = "ref";
                        ia_ios = 0;
                    }
                }
            }
        }
    } else if ((undefined != ia_location.search && ia_location.search != "") || (undefined != ia_location.hash && ia_location.hash != "")) {
        var url_match = /(\?|&)intelliad_pk=([^&]*)/;
        if (undefined != ia_location.search && ia_location.search != "") {
            var regs2 = url_match.exec(ia_location.search);
        }
        if (regs2 == null && undefined != ia_location.hash && ia_location.hash != "") {
            var url_match_hash = /(\#|&)intelliad_pk=([^&]*)/;
            var regs2 = url_match_hash.exec(ia_location.hash);
        }

        var has_pk = 0;
        ptype = "urlm";

        if (regs2 != null) {

            parts = regs2[2].split("|");

            if (parts.length >= 5) {
                if (parts[0] != undefined) {
                    ia_cl = parts[0];
                }
                if (parts[1] != undefined) {
                    ia_bmcl_overwritten = true;
                    ia_bmcl = parts[1];
                }
                if (parts[2] != undefined) {
                    ia_bm = parts[2];
                }
                if (parts[3] != undefined) {
                    ia_cp = parts[3];
                }
                if (parts[4] != undefined) {
                    ia_ag = parts[4];
                }
                if (parts[5] != undefined) {
                    ia_crid = parts[5];
                }
                has_pk = 1;
            }
        }
        if (has_pk == 1) {
            submit_urlm = 1;
            var url_match = /(\?|&)intelliad_subid=([^&]*)/;
            var regs2 = url_match.exec(ia_location.search);
            if (regs2 != null) {
                ia_kw = regs2[2];
                // unset criterionId FME
                ia_crid = "";
            } else {
                ia_crid = 100;
            }
        } else {
            if (ptype != "urlm") {
                ptype = "";
            } else if (has_pkpmtrack_param == 0) {
                ptype = false;
            }
        }
    }

    // nothing matching ==> referrer
    if (ptype == false || ptype == "ref") {
        ptype = "ref";
        ia_tc = "default";
        ia_sc = "default";
        var url_match = /^http[s]?:\/\/([^\/]+)([\/]?[^\?]*)/;

        var regs2 = url_match.exec(ia_referrer);
        if (regs2 != null) {
            if (regs2[1] != undefined && regs2[1] != "") {
                ia_tc = regs2[1];
            }
            if (regs2[2] != undefined && regs2[2] != "") {
                ia_sc = regs2[2];
            }
        }

        if (ia_tc == "www.bing.com" || ia_tc == "suche.t-online.de" || ia_tc == "www.bing.de" || ia_tc == "search.icq.com" || ia_tc == "search.conduit.com") {
            ptype = "rest";
            var url_match = /(\?|&)q=([^&]*)/;

            var regs_sq = url_match.exec(ia_referrer);
            if(regs_sq != null) {
                if (regs_sq[2] != null && regs_sq[2] != '') {
                    ia_sq = regs_sq[2];
                }
            }
        }
        if (ia_tc == "de.search.yahoo.com" || ia_tc == "uk.search.yahoo.com" || ia_tc == "search.yahoo.com" || ia_tc == "us.search.yahoo.com") {
            ptype = "rest";
            var url_match = /(\?|&)p=([^&]*)/;

            var regs_sq = url_match.exec(ia_referrer);
            if(regs_sq != null) {
                if (regs_sq[2] != null && regs_sq[2] != '') {
                    ia_sq = regs_sq[2];
                }
            }
        }
        if (ia_tc == "suche.web.de") {
            ptype = "rest";
            var url_match = /(\?|&)su=([^&]*)/;

            var regs_sq = url_match.exec(ia_referrer);
            if(regs_sq != null) {
                if (regs_sq[2] != null && regs_sq[2] != '') {
                    ia_sq = regs_sq[2];
                }
            }
        }
        if (ia_tc == 'www.baidu.com') {
            ptype = "rest";
            var url_match = /(\?|&)wd=([^&]*)/;

            var regs_sq = url_match.exec(ia_referrer);
            if(regs_sq != null) {
                if (regs_sq[2] != null && regs_sq[2] != '') {
                    ia_sq = regs_sq[2];
                }
            }
        }
        if (ia_tc == 'www.yandex.com' || ia_tc == 'yandex.ru' || ia_tc == 'www.yandex.com.tr' || ia_tc == 'yandex.com.tr' ) {
            ptype = "rest";
            var url_match = /(\?|&)text=([^&]*)/;

            var regs_sq = url_match.exec(ia_referrer);
            if(regs_sq != null) {
                if (regs_sq[2] != null && regs_sq[2] != '') {
                    ia_sq = regs_sq[2];
                }
            }
        }
        if (ia_tc == 'search.seznam.cz') {
            ptype = "rest";
            var url_match = /(\?|&)q=([^&]*)/;

            var regs_sq = url_match.exec(ia_referrer);
            if(regs_sq != null) {
                if (regs_sq[2] != null && regs_sq[2] != '') {
                    ia_sq = regs_sq[2];
                }
            }
        }

        //enable creating structure for certain ia_cl for rest and referer
        if (ia_cl == '2353236303236323131303')
        {
            ia_tc = ia_tc_orig;
            ia_sc = ia_sc_orig;

            //fallback
            if (typeof(ia_tc) == 'undefined' || ia_tc == '')
            {
                ia_tc = 'default';
                ia_sc = 'default';
            }
        }
    }
} else if (ptype != "urlm") {
    ptype = "ti";
}

if (ptype == "ref" && typeof(ia_tld2u) != "undefined" && ia_tld2u != "") {
    var referring_domain_match = /^[a-z]+:\/\/([^\/]+|[^$]+)/;
    var ref_match = referring_domain_match.exec(ia_referrer);
    if (ref_match != null) {
        referring_domain = ref_match[1];
        if (referring_domain != "") {
            referring_domain = "."+referring_domain;
            if (referring_domain.indexOf(ia_tld2u) != -1 && has_pkpmtrack_param == 0) {
                ptype = "view";
            }
        }
    }
}

// Parameter-Mapping
var ia_dcc = 0;
if (((ptype == 'ref') || (ptype == 'ti') || (ptype == 'view'))
    && (typeof conf_pm === 'object')
    && (setPm(conf_pm, ia_location) === true))
{
    ptype = 'shift-all';
    if (ia_bm == 100) {
        ia_dcc = 1;
        ptype = 'shift-custom';
    } else if ((ia_bm == 10)
        || (ia_bm == 11)
        || (ia_bm == 12)
        || (ia_bm == 13))
    {
        ptype = 'shift-seo';
    }
}

// Rewrite
if ((ptype == "ref")
    && ia_referrer
    && (typeof ref_rewrite !== "undefined")
    && Array.isArray(ref_rewrite)
    && (ref_rewrite.length > 0))
{
    var referrer_match = /^http[s]?:\/\/([^\/]+)([\/]?[^\?]*)/;
    var referrer_parts = referrer_match.exec(ia_referrer);

    if ((referrer_parts != null)
        && (!referrer_parts[2]
            || (referrer_parts[2] == '')))
    {
        referrer_parts[2] = '/';
    }

    for (var pos = 0, size = ref_rewrite.length; pos < size; pos++)
    {
        var host_match = new RegExp(ref_rewrite[pos]['host_match'], 'i');
        var path_query_match = ((ref_rewrite[pos]['path_query_match'] !== null) ? new RegExp(ref_rewrite[pos]['path_query_match'], 'i')
                                                                                : new RegExp('^\/?$', 'i'));
        if ((referrer_parts != null)
            && host_match.test(referrer_parts[1])
            && path_query_match.test(referrer_parts[2]))
        {
            ia_bm       = ref_rewrite[pos]['bm'];
            ia_bmcl     = ref_rewrite[pos]['bmcl'];
            ia_cp       = ref_rewrite[pos]['cp'];
            ia_ag       = ref_rewrite[pos]['ag'];
            ia_crid     = ref_rewrite[pos]['crid'];
            var ia_uos  = ref_rewrite[pos]['uos'];

            if (!ia_uos) {
                ia_tc = (ia_cp == 0) ? referrer_parts[1] : '';
                if (ia_ag == 0) {
                    ia_sc = (referrer_parts[2] != '') ? referrer_parts[2] : '/';
                }
            } else {
                ia_tc = ia_tc_orig;
                ia_sc = ia_sc_orig;
            }

            if (ia_tc == '') {
                ia_tc = 'default';
                ia_sc = 'default';
            }
            ia_sc = (ia_sc == '') ? 'default' : ia_sc;

            ptype = 'shift-all';
            if (ia_bm == 100) {
                ia_dcc = 1;
                ptype = 'shift-custom';
                ia_kw = "default";
            } else if ((ia_bm == 10)
                || (ia_bm == 11)
                || (ia_bm == 12)
                || (ia_bm == 13))
            {
                ptype = 'shift-seo';
            }

            break;
        }
    }
}

// Block
if ((typeof conf_bos === 'object')
    && blockOs(conf_bos, ia_location) === true)
{
    ptype = '';
}

switch (ptype)
{
    case "view":
        ia_script = '/c2.php';

        ia_bm = 13;
        ia_cp = 102;
        ia_ag = 102;
        ia_crid = 102;
        ia_kw = "internal";

        ia_ref = '';
        if (ia_referrer) {
            ia_ref = escape(ia_referrer);
        }

        var sb_keys = new Array("cl", "bm", "bmcl", "cp", "ag", "crid", "sq", "re", "sbm");
        var sb_vals = new Array(ia_cl, ia_bm, ia_bmcl, ia_cp, ia_ag, ia_crid, ia_kw, ia_ref, "1");

        var double_click_cookie = __get_cookie('ia_u4pc_' + ia_cl);
        var double_click_cookie2 = __get_cookie('ia_c4dc_' + ia_cl);
        if (double_click_cookie == 0 && double_click_cookie2 == 0) {
            if (ia_cl != '4393932313236323131303' && ia_cl != '0313836313236323131303' && !skip_ref && !skip_ti && !skip_seo && !skip_rest) {
                __op_click_px(ia_script, sb_keys, sb_vals, ptype, bounce_only, ia_tld2u, ia_location);
            }
        }
    break;

    case "ios":
        ia_script = '/c2.php';

        if(ia_cl == '9313536313236323131303' || ia_cl == '2323238313236323131303' || ia_cl == '4343338313236323131303' || ia_cl == '2353538313236323131303' || ia_cl == '4383639313236323131303') {
            ia_bmcl = '5393835313236323131303';
        }

        if (typeof(ia_sc) == 'undefined' || ia_sc == 'undefined' || ia_sc == "") {
            ia_ag = "";
            ia_sc = ia_location.pathname;
        }
        if (typeof(ia_ag) == 'undefined') {
            ia_ag = "";
        }
        ia_cp = "";

        ia_ref = '';
        if (ia_referrer) {
            ia_ref = escape(ia_referrer);
        }
        ia_bm = 10;

        if (ia_ios == 1 && ia_sq != "" && is_aclk == 0 && !skip_seo) {
            var __ia_has_brand_match_found = false;
            var __ia_has_brand_match_type = false;
            // brand detection
            if (typeof(__ia_brand_kws) != 'object' || __ia_brand_kws.length <= 0) {
                // do nothing
            } else {
                var ia_tmp_sq = ia_sq;
                var ia_tmp_sq_decoded = "";
                ia_tmp_sq = ia_tmp_sq.replace(/%20/g, " ");
                ia_tmp_sq = ia_tmp_sq.replace(/\+/g, " ");
                ia_tmp_sq_decoded = decodeURIComponent(ia_tmp_sq);

                for (var __ia_brd_mtc = 0; __ia_brd_mtc < __ia_brand_kws.length; __ia_brd_mtc++) {
                    if (__ia_has_brand_match_found == true && __ia_has_brand_match_type == 'exact') continue;
                    if (__ia_brand_kws[__ia_brd_mtc] == "") continue;
                    if (__ia_brand_kws[__ia_brd_mtc] == " ") continue;
                    var __ia_url_match_brand = new RegExp("^"+ __ia_brand_kws[__ia_brd_mtc] + "$", "i");
                    var __ia_regs_brand = __ia_url_match_brand.exec(ia_tmp_sq);
                    var __ia_regs_brand_decoded = __ia_url_match_brand.exec(ia_tmp_sq_decoded);
                    if (null != __ia_regs_brand || null != __ia_regs_brand_decoded) {
                        __ia_has_brand_match_found = true;
                        __ia_has_brand_match_type = 'exact';
                        ia_tc = "Brand";
                        ia_sc = "Brand Exact";
                        ia_cp = 407;
                    } else {
                        if (__ia_has_brand_match_found) continue;
                        var __ia_url_match_brand_phrase1 = new RegExp(__ia_brand_kws[__ia_brd_mtc] + "[ ]+", "i");
                        var __ia_url_match_brand_phrase2 = new RegExp("[ ]+" + __ia_brand_kws[__ia_brd_mtc], "i");

                        var __ia_regs_brand_phrase1 = __ia_url_match_brand_phrase1.exec(ia_tmp_sq);
                        var __ia_regs_brand_phrase1_decoded = __ia_url_match_brand_phrase1.exec(ia_tmp_sq_decoded);
                        var __ia_regs_brand_phrase2 = __ia_url_match_brand_phrase2.exec(ia_tmp_sq);
                        var __ia_regs_brand_phrase2_decoded = __ia_url_match_brand_phrase2.exec(ia_tmp_sq_decoded);

                        if (null != __ia_regs_brand_phrase1 || null != __ia_regs_brand_phrase2 || null != __ia_regs_brand_phrase1_decoded || null != __ia_regs_brand_phrase2_decoded) {
                            __ia_has_brand_match_found = true;
                            __ia_has_brand_match_type = 'phrase';
                            ia_tc = "Brand";
                            ia_sc = "Brand Phrase";
                            ia_cp = 407;
                        }
                    }
                }
            }
            if (ia_tc == "default") {
                ia_cp = 100;
            }
            if (ia_cl == "4353538323236323131303" && ia_sc != "") {
                ia_sc = ia_sc.replace(/;jsessionid=[A-F0-9]+/, '');
            }

            var sb_keys = new Array("cl", "bmcl", "bm", "sb", "ag", "sq", "tc", "sc", "pos", "re", "cp");
            var sb_vals = new Array(ia_cl, ia_bmcl, ia_bm, ia_sb, ia_ag, ia_sq, ia_tc, ia_sc, ia_pos, ia_ref, ia_cp);

            __op_click_px(ia_script, sb_keys, sb_vals, ptype, bounce_only, ia_tld2u, ia_location);
        }
    break;

    case "urlm":
        ia_script = '/click.php';
        if (!ia_bmcl_overwritten) {
            ia_bmcl = '5393835313236323131303';
        }

        var sb_keys = new Array("cl", "bmcl", "bm", "sbm", "bk", "cp", "ag", "crid");
        var sb_vals = new Array(ia_cl, ia_bmcl, ia_bm, "1", ia_kw, ia_cp, ia_ag, ia_crid);

        if (submit_urlm == 1) {
            __op_click_px(ia_script, sb_keys, sb_vals, ptype, bounce_only, ia_tld2u, ia_location);
        }
    break;

    case "ti":
        ia_script = '/c2.php';

        ia_bm = 13;
        ia_cp = 100;
        ia_ag = 100;
        ia_crid = 100;
        ia_kw = "Type In";

        if ((typeof(ia_tc) != 'undefined')
            && (ia_tc != ""))
        {
            ia_cp = 0;
            ia_ag = 0;
            ia_crid = 0;
            ia_kw = "";

            if ((typeof(ia_sc) == 'undefined')
                || (ia_sc == ""))
            {
                ia_sc = "default";
            }
        } else {
            ia_tc = "";
            ia_sc = "";
        }

        var sb_keys = new Array("cl", "bm", "bmcl", "cp", "ag", "crid", "tc", "sc", "sq", "sb");
        var sb_vals = new Array(ia_cl, ia_bm, ia_bmcl, ia_cp, ia_ag, ia_crid, ia_tc, ia_sc, ia_kw, ia_sb);

        var double_click_cookie = __get_cookie('ia_c4dc_' + ia_cl);
        if (double_click_cookie == 0 && !skip_ti) {
            __op_click_px(ia_script, sb_keys, sb_vals, ptype, bounce_only, ia_tld2u, ia_location);
        }
    break;

    case "ref":
        ia_script = '/c2.php';
        ia_bm = 12;
        ia_cp = "";
        ia_ag = "";
        ia_sq = "default";
        ia_crid = 100;

        if ((ia_sc == 'default')
            || (ia_sc == ''))
        {
            ia_sc =  '/';
        }

        ia_ref = '';
        if (ia_referrer) {
            ia_ref = escape(ia_referrer);
        }

        

        var sb_keys = new Array("cl", "bm", "bmcl", "sb", "cp", "ag", "crid", "sq", "tc", "sc", "pos", "re");
        var sb_vals = new Array(ia_cl, ia_bm, ia_bmcl, ia_sb, ia_cp, ia_ag, ia_crid, ia_sq, ia_tc, ia_sc, "", ia_ref);

        if (!skip_ref) {
            __op_click_px(ia_script, sb_keys, sb_vals, ptype, bounce_only, ia_tld2u, ia_location);
        }
    break;

    case "rest":
        ia_script = '/c2.php';
        ia_bm = 11;
        ia_cp = "";
        ia_ag = "";
        //ia_sq = "default";

        if (ia_cl == '2353236303236323131303')
        {
            ia_sq = "default";
            ia_crid = 100;
        }

        ia_ref = '';
        if (ia_referrer) {
            ia_ref = escape(ia_referrer);
        }

        var sb_keys = new Array("cl", "bm", "bmcl", "sb", "cp", "ag", "crid", "sq", "tc", "sc", "pos", "re");
        var sb_vals = new Array(ia_cl, ia_bm, ia_bmcl, ia_sb, ia_cp, ia_ag, ia_crid, ia_sq, ia_tc, ia_sc, "", ia_ref);

        if (!skip_rest) {
            __op_click_px(ia_script, sb_keys, sb_vals, ptype, bounce_only, ia_tld2u, ia_location);
        }
    break;

    case "shift-all":
        ia_script = '/click.php';
        ia_kw = "default";

        var sb_keys = new Array("cl", "bmcl", "bm", "sbm", "bk", "cp", "ag", "crid");
        var sb_vals = new Array(ia_cl, ia_bmcl, ia_bm, "1", ia_kw, ia_cp, ia_ag, ia_crid);

        __op_click_px(ia_script, sb_keys, sb_vals, ptype, bounce_only, ia_tld2u, ia_location);
    break;

    case "shift-custom":
        ia_script = '/click.php';

        var sb_keys = new Array("cl", "bmcl", "bm", "sbm", "bk", "cp", "ag", "crid", "cp_name", "ag_name", "iadcc");
        var sb_vals = new Array(ia_cl, ia_bmcl, ia_bm, "1", ia_kw, ia_cp, ia_ag, ia_crid, ia_tc, ia_sc, ia_dcc);

        __op_click_px(ia_script, sb_keys, sb_vals, ptype, bounce_only, ia_tld2u, ia_location);
        break;

    case "shift-seo":
        ia_script = '/c2.php';
        ia_ref = '';
        ia_sq = "default";
        if (ia_referrer) {
            ia_ref = escape(ia_referrer);
        }

        var sb_keys = new Array("cl", "bm", "bmcl", "sb", "cp", "ag", "crid", "sq", "tc", "sc", "pos", "re");
        var sb_vals = new Array(ia_cl, ia_bm, ia_bmcl, ia_sb, ia_cp, ia_ag, ia_crid, ia_sq, ia_tc, ia_sc, "", ia_ref);

        __op_click_px(ia_script, sb_keys, sb_vals, ptype, bounce_only, ia_tld2u, ia_location);
    break;

    default:
    break;
}




