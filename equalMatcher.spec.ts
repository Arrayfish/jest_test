/** 
 * toEqualとtoStrictEqualの違いを調べる
 * toEqualはobjとaddUndefObjの違いが分からないらしい
 * */ 
describe('toEqual and toStrictEqual',()=>{
  const data = "data";
  const undef = undefined;
  const obj = {
    data0: "data0",
    data1: "data1"
  }

  const undefObj = {
    data0: "data0",
    data1: undefined
  }
  const addUndefObj = {
    data0: "data0",
    data1: "data1",
    data2: undefined
  }
  it('check toEqual', async ()=>{
    expect(data).toEqual("data");
    expect(data).toEqual(undef)
  });
  it('check toStrictEqual', async ()=>{
    expect(data).toStrictEqual("data");
    expect(data).toStrictEqual(undef);
  })
  it("check toEqual object",async () => {
    expect(obj).toEqual({
      data0: "data0",
      data1: "data1"
    });
    expect(obj).toEqual(addUndefObj);
    expect(obj).toEqual(undefObj);
  });
  it("check toStrictEqual object",async () => {
    expect(obj).toStrictEqual({
      data0: "data0",
      data1: "data1"
    });
    expect(obj).toStrictEqual(addUndefObj);
    expect(obj).toStrictEqual(undefObj);
  });
  it("check toEqual object reverse",async () => {
    expect(addUndefObj).toEqual(obj);
  });

})