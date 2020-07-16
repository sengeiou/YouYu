import { HttpClient, HttpHeaders } from '@angular/common/http';



export class ApiConfig {
	
    
    // public static getLocalPath() {
    //     return "https://alioss.app-link.org/alucard263096/youyucard/";
    // }

    // public static getApiUrl() {
    //     return "https://cmsdev.app-link.org/alucard263096/youyucard/api/";
    // }
    // public static getUploadPath() {
    //     return "https://alioss.app-link.org/alucard263096/youyucard/";
    // }
    // public static getFileUploadAPI() {
    //     return "https://cmsdev.app-link.org/alucard263096/youyucard/fileupload";
    // }

   
    

    public static getApiUrl() { 
         return "http://cms.kalianworld.com/api/";
    }
    public static getUploadPath() {
        return "https://kalianworld.oss-accelerate.aliyuncs.com/";
    }
    public static getFileUploadAPI() { 
        return "http://cms.kalianworld.com/fileupload";
    }



    public static ParamUrlencoded(json) {
        var arr = new Array();
        for (let i in json) {
            arr.push(  i + "=" + encodeURIComponent(json[i]));
        }
        return arr.join("&");
    }
    private static TOKEN="";
    private static RID = "";
    private static UNICODE = "";
    
    public static MDSalt = "";

    public static GetHeader(url, postparam):HttpHeaders {
        var sign = "";

        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Sign': sign,
            'Token': ApiConfig.TOKEN,
            'UNICODE': ApiConfig.UNICODE
        });
        return headers;
    }

    public static SetToken(token) {
        ApiConfig.TOKEN = token;
    }

    public static SetUnicode(Unicode){
        ApiConfig.UNICODE=Unicode;
    }

    public static MD5(str) {
        return md5.hex_md5(str);
    }


    public static SetLoadingCtrl(loadCtrl) {
        //ApiConfig.LoadingCtrl = loadCtrl;
    }
    private static loading = null;
    private static loadingQueueCount = 0;
    public static GetLoadingModal(){
        
        return null;
    }

    public static DimissLoadingModal() {
        try {
            ApiConfig.loadingQueueCount--;
            if (ApiConfig.loading != null && ApiConfig.loadingQueueCount == 0) {
                ApiConfig.loading.dismiss();
                ApiConfig.loading = null;
                ApiConfig.loadingQueueCount = 0;
            }
        } catch (e) {

        }
    }

    public static ForceDimissLoadingModal() {
        try {
            if (ApiConfig.loading != null) {
                ApiConfig.loading.dismiss();
                ApiConfig.loading = null;
                ApiConfig.loadingQueueCount = 0;
            }
        } catch (e) {

        }
    }
	public static DataLoadedHandle(url,post,data):boolean {
        try {
            data = data.json();
            if(data!=null)
			if(data.code!=null){
                if (data.code == "404" || data.code == "401" || data.code == "500") {
                    console.log(data);
                    console.error(data.return.debuggenSign);
                    console.error(data.return.genSign);
                    return false;
                }
			}
            return true;

        } catch (e) {
			return false;
        }
    }

	public static ErrorHandle(url,post,error: Response) {
        
    }  
}





class md5 {
    /*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
public static hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
    public static b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance   */
    public static chrsz = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

/*
 * These are the public statics you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
    public static hex_md5(s) { return md5.binl2hex(md5.core_md5(md5.str2binl(s), s.length * md5.chrsz)); }
    public static b64_md5(s) { return md5.binl2b64(md5.core_md5(md5.str2binl(s), s.length * md5.chrsz)); }
    public static str_md5(s) { return md5.binl2str(md5.core_md5(md5.str2binl(s), s.length * md5.chrsz)); }
    public static hex_hmac_md5(key, data) { return md5.binl2hex(md5.core_hmac_md5(key, data)); }
    public static b64_hmac_md5(key, data) { return md5.binl2b64(md5.core_hmac_md5(key, data)); }
    public static str_hmac_md5(key, data) { return md5.binl2str(md5.core_hmac_md5(key, data)); }

/*
 * Perform a simple self-test to see if the VM is working
 */
    public static md5_vm_test() {
        return md5.hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length
 */
    public static core_md5(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << ((len) % 32);
    x[(((len + 64) >>> 9) << 4) + 14] = len;

    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;

    for (var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;

        a = md5.md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
        d = md5.md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5.md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5.md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5.md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5.md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5.md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5.md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5.md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5.md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5.md5_ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5.md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5.md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5.md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5.md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5.md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

        a = md5.md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5.md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5.md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5.md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
        a = md5.md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5.md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5.md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5.md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5.md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5.md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5.md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5.md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5.md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5.md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5.md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5.md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

        a = md5.md5_hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5.md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5.md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5.md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5.md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5.md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5.md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5.md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5.md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5.md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
        c = md5.md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5.md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5.md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5.md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5.md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5.md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

        a = md5.md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
        d = md5.md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5.md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5.md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5.md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5.md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5.md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5.md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5.md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5.md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5.md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5.md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5.md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5.md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5.md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5.md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

        a = md5.safe_add(a, olda);
        b = md5.safe_add(b, oldb);
        c = md5.safe_add(c, oldc);
        d = md5.safe_add(d, oldd);
    }
    return Array(a, b, c, d);

}

/*
 * These public statics implement the four basic operations the algorithm uses.
 */
    public static md5_cmn(q, a, b, x, s, t) {
        return md5.safe_add(md5.bit_rol(md5.safe_add(md5.safe_add(a, q), md5.safe_add(x, t)), s), b);
}
public static md5_ff(a, b, c, d, x, s, t) {
    return md5.md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
public static md5_gg(a, b, c, d, x, s, t) {
    return md5.md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
public static md5_hh(a, b, c, d, x, s, t) {
    return md5.md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
public static md5_ii(a, b, c, d, x, s, t) {
    return md5.md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

/*
 * Calculate the HMAC-MD5, of a key and some data
 */
public static core_hmac_md5(key, data) {
    var bkey = md5.str2binl(key);
    if (bkey.length > 16) bkey = md5.core_md5(bkey, key.length * md5.chrsz);

    var ipad = Array(16), opad = Array(16);
    for (var i = 0; i < 16; i++) {
        ipad[i] = bkey[i] ^ 0x36363636;
        opad[i] = bkey[i] ^ 0x5C5C5C5C;
    }

    var hash = md5.core_md5(ipad.concat(md5.str2binl(data)), 512 + data.length * md5.chrsz);
    return md5.core_md5(opad.concat(hash), 512 + 128);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
public static safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
public static bit_rol(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
}

/*
 * Convert a string to an array of little-endian words
 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
 */
public static str2binl(str) {
    var bin = Array();
    var mask = (1 << md5.chrsz) - 1;
    for (var i = 0; i < str.length * md5.chrsz; i += md5.chrsz)
        bin[i >> 5] |= (str.charCodeAt(i / md5.chrsz) & mask) << (i % 32);
    return bin;
}

/*
 * Convert an array of little-endian words to a string
 */
public static binl2str(bin) {
    var str = "";
    var mask = (1 << md5.chrsz) - 1;
    for (var i = 0; i < bin.length * 32; i += md5.chrsz)
        str += String.fromCharCode((bin[i >> 5] >>> (i % 32)) & mask);
    return str;
}

/*
 * Convert an array of little-endian words to a hex string.
 */
public static binl2hex(binarray) {
    var hex_tab = md5.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var str = "";
    for (var i = 0; i < binarray.length * 4; i++) {
        str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) +
            hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
    }
    return str;
}

/*
 * Convert an array of little-endian words to a base-64 string
 */
public static binl2b64(binarray) {
    var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var str = "";
    for (var i = 0; i < binarray.length * 4; i += 3) {
        var triplet = (((binarray[i >> 2] >> 8 * (i % 4)) & 0xFF) << 16)
            | (((binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 0xFF) << 8)
            | ((binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 0xFF);
        for (var j = 0; j < 4; j++) {
            if (i * 8 + j * 6 > binarray.length * 32) str += md5.b64pad;
            else str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
        }
    }
    return str;
}


}