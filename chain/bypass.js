/*bhxb:v8:ec587773eb7f*/
// il2cpp export map intentionally empty.
// supplied at runtime by symbols.js, injected by loader.py ahead of this file.
// keeping it out of here is what makes this file generation-independent.
Il2Cpp.$config.exports = Object.assign(Il2Cpp.$config.exports || {}, {});
Il2Cpp.perform(() => {
    try {
        const gameAssembly = Il2Cpp.domain.assembly("AnimalCompany").image;
        const eacManager = gameAssembly.class("AnimalCompany.EACClientManager");
        const setPhase = eacManager.method("SetPhase", 1);
        const originalSetPhase = setPhase.implementation;
        setPhase.implementation = function () {
            if (originalSetPhase) return originalSetPhase.call(this, 1);
            return this.method("SetPhase", 1).invoke(1);
        };

        eacManager.method("get_HasFinished", 0).implementation = function () {
            return true;
        };
        eacManager.method("IsClientValidated", 0).implementation = function () {
            return true;
        };
        eacManager.method("DidFailUnprotected", 0).implementation = function () {
            return false;
        };
        eacManager.method("DecodePhase", 0).implementation = function () {
            return 1;
        };
    } catch (error) {
}
  console.log("------------------------------");
  console.log("[+] Bypassed");
  console.log("[+] Made ItzDaTree");
  console.log("------------------------------");
});
