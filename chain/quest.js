/*bhxb:v8:ec587773eb7f*/
var _bhxb=function(h){var s='',i=0;while(i<h.length){s+=String.fromCharCode(parseInt(h.substr(i,2),16));i+=2;}return s;};


// il2cpp export map intentionally empty.
// supplied at runtime by symbols.js, injected by loader.py ahead of this file.
// keeping it out of here is what makes this file generation-independent.
Il2Cpp.$config.exports = Object.assign(Il2Cpp.$config.exports || {}, {});
const QUEST_PLATFORM = 1;

function loadQuestServers() {
  console.log("\n");
  console.log(_bhxb("2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d"));
  console.log(_bhxb("51756573747365727665727320576f726b696e67"));
  console.log(_bhxb("2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d"));

  Il2Cpp.perform(() => {
    const findClass = (n) => {
      for (const a of Il2Cpp.domain.assemblies) {
        try {
          const k = a.image.tryClass(n);
          if (k) return k;
        } catch (_) {}
      }
      return null;
    };

    const AppUtils = findClass(_bhxb("416e696d616c436f6d70616e792e4170705574696c73"));
    if (!AppUtils) {
      console.log(_bhxb("204170705574696c7320776173206e6f7420666f756e64"));
      return;
    }

    let method = null;
    for (const m of AppUtils.methods) {
      if (
        /CalculatePhotonAppVersion/i.test(m.name) &&
        (m.returnType?.name || _bhxb("")) === _bhxb("53797374656d2e537472696e67")
      ) {
        method = m;
        break;
      }
    }

    if (!method) {
      console.log(_bhxb("43616c63756c61746550686f746f6e41707056657273696f6e20776173206e6f7420666f756e64"));
      return;
    }

    Interceptor.attach(method.virtualAddress, {
      onEnter(args) {
        try {
          args[2] = ptr(QUEST_PLATFORM);
        } catch (_) {}
      },
    });
  });
}

loadQuestServers();