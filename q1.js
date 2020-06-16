function Promise_A() {
  return setTimeout(() => console.log('Promise A resolved'), 1000);
}
function Promise_B() {
  return setTimeout(() => console.log('Promise B resolved'), 1000);
}
function Promise_C() {
  return setTimeout(() => console.log('Promise C resolved'), 1000);
}
function Promise_D() {
  return setTimeout(() => console.log('Promise D resolved'), 1000);
}
function Promise_E() {
  return setTimeout(() => console.log('Promise E resolved'), 1000);
}


const startPromising = async () => {
  try {
    let a = await Promise_A();
    let b = Promise_B();
    let c = Promise_C();
    await Promise.all([a, b]);
    await startPromiseD();
  } catch (error) {
      console.error(error)
  }
}

const startPromiseD = async () => {
  let d = await Promise_D();
  try {
    let e = await Promise_E();
  } catch (error) {
    await startPromiseD();
  }
}

startPromising();