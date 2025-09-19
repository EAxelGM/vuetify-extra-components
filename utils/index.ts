import CryptoJS from 'crypto-js'

export const formatIntl = (value = 0, {style = "decimal", lang = "en-In", currency = "USD", minimumFractionDigits = 2, maximumFractionDigits = 2 } = {}) => {
  const hasDecimals = !Number.isInteger(value);

  const options:any = {
    style: style,
    currency: currency
  }

  if(hasDecimals){
    options.minimumFractionDigits = minimumFractionDigits
    options.maximumFractionDigits = maximumFractionDigits
  }

  if(["currency"].includes(style)){
    options.currency = currency
  }

  return new Intl.NumberFormat(lang, options).format(value);
}

export const projectName = 'Vuetify Extra Components';

export const getGravatarUrl = (email: string, size = 200) => {
  const hash = CryptoJS.MD5(email.trim().toLowerCase()).toString()
  return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon`
}

export const getRandomNumber = (min = 1, max = 100)  => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const stringToSlug = (str:string) => {
  if(!str){
    return str
  }
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  const from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
  const to   = "aaaaaeeeeeiiiiooooouuuunc------";
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
           .replace(/\s+/g, '-') // collapse whitespace and replace by -
           .replace(/-+/g, '-'); // collapse dashes

  return str;
};

export const isValidUrl = (url:string) => {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
};

export const copyToClipboard = (text:string, { showAlert=true, messageAlert = null } = {}) => {
  const $store:any = useStore()
  let elementoTemporar = document.createElement("input");
  document.body.appendChild(elementoTemporar);
  elementoTemporar.setAttribute("value", text);
  elementoTemporar.select();
  document.execCommand("copy");
  document.body.removeChild(elementoTemporar);
  if(showAlert){
    $store.setAlertData({
      message: messageAlert || `Copied to clipboard: ${text}`,
      color: 'green',
      timeout: 3000,
    });
  }
}

export const handleDownloadFile = (content: string, { nameFile = new Date().toISOString(), type = "txt", contentType = "application/json" } = {}) => {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = stringToSlug(nameFile)+"."+type;
  a.click();
};

export const handleOpenJSONinBlob = (content: string, { contentType = "application/json" } = {}) => {
  //const auxNameFile = options.nameFile || "swagger"
  //const auxType = options.type || "json"
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  //console.log({url})

  window.open(url, "_blank");
}