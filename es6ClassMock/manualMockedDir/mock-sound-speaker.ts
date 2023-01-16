// Import this named export into your test file:
export const mockPlaySoundFile = jest.fn(()=>{console.log("play sound nomal mock")});
export const mockFuncs = {playSoundFile: mockPlaySoundFile};
const mock = jest.fn().mockImplementation(() => {
  return {
    playSoundFile: mockPlaySoundFile,
  };
});

export default mock;