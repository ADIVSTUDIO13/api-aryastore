// YTTA

//settings
global.creator = 'ARYASTORE';
global.listkey = ["ARYASTORE", "turusek"];

//isi agar fitur fitur bisa di gunakan.
global.lolkey = 'b9972cae27237ab59e8aa1a6'; // Dapatkan di https://api.lolhuman.xyz
global.botkey = 'Admin'; // Dapatkan di https://api.botcahx.biz.id

global.loghandler = {
    error: {
        status: false,
        code: 503,
        message: '[!] Service Unavaible, Sedang dalam perbaikan',
        maintained_by: `${creator}`
    },
    notapikey: {
        status: false,
        code: 403,
        message: '[!] Forbidden or Error, masukan parameter apikey',
        maintained_by: `${creator}`
    },
    noturl: {
        status: false,
        code: 403,
        message: '[!] Forbidden or Error, masukan parameter url',
        maintained_by: `${creator}`
    },
    notq: {
        status: false,
        code: 404,
        message: '[!] Forbidden or Error, masukan parameter q',
        maintained_by: `${creator}`
    },
    notid: {
        status: false,
        code: 403,
        message: '[!] Forbidden or Error, masukan parameter id',
        maintained_by: `${creator}`
    },
    notusername: {
        status: false,
        code: 403,
        message: '[!] Forbidden or Error, masukan parameter username',
        maintained_by: `${creator}`
    },
    notserver: {
        status: false,
        code: 403,
        message: '[!] Forbidden or Error, masukan parameter server',
        maintained_by: `${creator}`
    },
    nottext: {
        status: false,
        code: 404,
        message: '[!] Forbidden or Error, masukan parameter text',
        maintained_by: `${creator}`
    },
    nottext1: {
        status: false,
        code: 404,
        message: '[!] Forbidden or Error, masukan parameter text1',
        maintained_by: `${creator}`
    },
    nottext2: {
        status: false,
        code: 403,
        message: '[!] Forbidden or Error, masukan parameter text2',
        maintained_by: `${creator}`
    },
    nottext3: {
        status: false,
        code: 403,
        message: '[!] Forbidden or Error, masukan parameter text3',
        maintained_by: `${creator}`
    },
    notquestion: {
        status: false,
        code: 403,
        message: '[!] Forbidden or Error, masukan parameter question',
        maintained_by: `${creator}`
    }
};
