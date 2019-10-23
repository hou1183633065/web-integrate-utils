export default {
  REGEXS: {

    AllSpecialString: /\u0060|\u007e|\u0021|\u0040|\u0023|\u0024|\u0025|\u005e|\u0026|\u002a|\u0028|\u0029|\u002d|\u003d|\u002b|\u003c|\u003e|\u003f|\u002c|\u002e|\u002f|\u003a|\u0022|\u003b|\u0027|\u007b|\u007d|\u005b|\u005d|\u005c|\u007c|\uff01|\u0040|\u0023|\uffe5|\u0025|\u2026|\u2026|\u0026|\u002a|\uff08|\uff09|\u2014|\u2014|\u002b|\u300c|\u300d|\u3010|\u3011|\u300a|\u300b|\uff1f|\uff1a|\u201c|\u201d|\uff1b|\u2018|\u2019|\u007c|\u3001|\u0020/,
    SpecialString: /\u0060|\u0024|\u0026|\u002a|\u005c|\u003c|\u003e/,
    email: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    url: /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/,
    password: /[\w\`~!@#$%^&*()-=_+{}\[\]:";'<>?,./*-+.\|]{8,12}$/,
    code: /^[A-Za-z0-9]{4}$/,
    drivingLicense: /^[0-9]{12}$/,
    phone: /^1[345678]\d{9}$/,
    name: /^[\u4E00-\u9FA5A-Za-z]+$/,
    EnString: /^[A-Za-z]+$/,
    EnNumber: /^[A-Za-z0-9]+$/,
    Number: /^[0-9]+$/,
    CnString: /^[\u4E00-\u9FA5]+$/,
    CnNumber: /^[\u4E00-\u9FA50-9]+$/,
    RegisterNumber: /(^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$)|(^\d{15}$)/,
    CarNo: /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5,6}$/,
    PersonNo: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
  },

}