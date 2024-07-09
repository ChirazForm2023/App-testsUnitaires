function regroupObj(T, cle) {
  return T.reduce((res, item) => {
    (res[item[cle]] = res[item[cle]] || []).push(item);
    return res;
  }, {});
}
module.exports = regroupObj;
