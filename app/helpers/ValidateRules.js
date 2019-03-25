/* eslint-disable */

const REG_EMAIL = new RegExp('^([A-Za-z0-9_\\-]+\\.)*[A-Za-z0-9_\\-]+@([A-Za-z0-9\\-]*[A-Za-z0-9]\\.)+[A-Za-z]{2,63}$');
const REG_PASSWORD_CHARS = new RegExp('^[a-zA-Z0-9]{6,}$');
const REG_NUMBER = new RegExp('^[\\d]{1,}$');
const REG_STRING = new RegExp('^[\\w]{1,}$');
const REG_STRING_RUS = new RegExp('^[А-Яа-яЁё]+([\\-\\s]?[А-Яа-яЁё]+)?$');
const REG_INN = new RegExp('^([\\d]{10}|[\\d]{12})$');
const REG_KPP = new RegExp('^([0-9]{1}[1-9]{1}|[1-9]{1}[0-9]{1})([0-9]{2})([0-9A-Z]{2})([0-9]{3})$');
const REG_OGRN = new RegExp('^([\\d]{13})$');
const REG_OGRNIP = new RegExp('^([\\d]{15})$');
const REG_PHONE = new RegExp('^\\+7\\s?\\([\\d]{3}\\)\\s?[\\d]{3}\\-[\\d]{2}\\-[\\d]{2}$');
const REG_POSTCODE = new RegExp('^[\\d]{6}$');
const REG_PINCODE = new RegExp('^[\\d]{4}$');
const REG_REGION = new RegExp('^[\\d]{2}\\s.+$');
const REG_TIME = new RegExp('^([0-1]\\d|2[0-3])(:[0-5]\\d)$');
const REG_URL = new RegExp(
  '^((http|https):\\/\\/)([a-zа-я0-9]+([\\-]{1})?[a-zа-я0-9]+[\\.]{1})*[a-zа-я]{2,5}(:[0-9]{1,5})?(\\/.*)?$',
);
const REG_PROMOCODE = new RegExp('^(T)[0-9]{11}$');

const ValidateRules = {
  require: function(value) {
    const isEmptyObject = value !== null && typeof value === 'object' && Object.keys(value).length === 0;

    return Boolean(value && !isEmptyObject);
  },

  url: function(value) {
    return Boolean(REG_URL.test(value));
  },

  email: function(value) {
    return Boolean(REG_EMAIL.test(value));
  },

  password: function(value) {
    return Boolean(REG_PASSWORD_CHARS.test(value));
  },

  confirm: function(first, second) {
    return Boolean(first === second);
  },

  number: function(value) {
    return Boolean(REG_NUMBER.test(value));
  },

  string: function(value) {
    return Boolean(REG_STRING.test(value));
  },

  stringRus: function(value) {
    return Boolean(REG_STRING_RUS.test(value));
  },

  inn: function(value) {
    return Boolean(REG_INN.test(value));
  },

  kpp: function(value) {
    return Boolean(REG_KPP.test(value));
  },

  ogrn: function(value) {
    return Boolean(REG_OGRN.test(value));
  },

  ogrnip: function(value) {
    return Boolean(REG_OGRNIP.test(value));
  },

  phone: function(value) {
    return Boolean(REG_PHONE.test(value));
  },

  postCode: function(value) {
    return Boolean(REG_POSTCODE.test(value));
  },

  pinCode: function(value) {
    return Boolean(REG_PINCODE.test(value));
  },

  region: function(value) {
    return Boolean(REG_REGION.test(value));
  },

  reqExp: function(value, rule) {
    return rule.test(value);
  },

  time: function(value) {
    return Boolean(REG_TIME.test(value));
  },

  hour: function(value) {
    return /[01]\d|2[0-3]/.test(value);
  },

  minutes: function(value) {
    return /[0-5]\d/.test(value);
  },

  promoCode: function(value) {
    return Boolean(REG_PROMOCODE.test(value));
  },
};

export default ValidateRules;
