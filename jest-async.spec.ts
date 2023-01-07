async function fetchData() {
  return new Promise((resolve, _) => {
    resolve('peanut butter')
  })
}
function fetchData_reject() {
  return new Promise((_, reject) => {
    reject('error');
  })
}

describe('await async', () => {
  it('default await test', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
  });
  it('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
      await fetchData_reject();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });
  it('async await with .resolves', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
  });

  it('async await with .rejects', async () => {
    await expect(fetchData_reject()).rejects.toMatch('error');
  });
});


