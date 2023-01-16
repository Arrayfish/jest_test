import SoundPlayer from './sound-player';
import SoundPlayerConsumer from './sound-player-consumer';
jest.mock('./sound-player'); // SoundPlayer is now a mock constructor
const MockSoundPlayer = SoundPlayer as jest.Mock;
beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  MockSoundPlayer.mockClear();
});

it('We can check if the consumer called the class constructor', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(MockSoundPlayer).toHaveBeenCalledTimes(1);
});

it('We can check if the consumer called a method on the class instance', () => {
  // Show that mockClear() is working:
  expect(MockSoundPlayer).not.toHaveBeenCalled();

  const soundPlayerConsumer = new SoundPlayerConsumer();
  // Constructor should have been called again:
  expect(MockSoundPlayer).toHaveBeenCalledTimes(1);

  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();

  // mock.instances is available with automatic mocks:
  const mockSoundPlayerInstance = MockSoundPlayer.mock.instances[0];
  const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;
  expect(mockPlaySoundFile.mock.calls[0][0]).toBe(coolSoundFileName);
  // Equivalent to above check:
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
  expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
});

it('mock class method', () => {
  const logfunc = jest.fn(() => {
    console.log("mock sound~~~");
  })
  MockSoundPlayer.mockImplementationOnce(() => {
    return {
      playSoundFile: logfunc
      // playSoundFile:jest.fn(()=>{// mockImplementationを使って後から自動モックの関数を自動化するとクラスのインスタンスから関数が辿れないっぽい
      //   console.log("mock sound~~~");
      // })
    }
  })
  // Show that mockClear() is working:
  expect(MockSoundPlayer).not.toHaveBeenCalled();
  const soundPlayerConsumer = new SoundPlayerConsumer();
  // Constructor should have been called again:
  expect(MockSoundPlayer).toHaveBeenCalledTimes(1);

  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();

  // mock.instances is available with automatic mocks:
  const mockSoundPlayerInstance = MockSoundPlayer.mock.instances[0];
  console.dir(mockSoundPlayerInstance, { depth: null })
  console.dir(logfunc.mock.calls[0], { depth: true })
  expect(logfunc).toHaveBeenCalledTimes(1);
  expect(logfunc.mock.calls[0]).toEqual([coolSoundFileName]);
  // expect(mockPlaySoundFile.mock.calls[0][0]).toBe(coolSoundFileName);
  // Equivalent to above check:
  // expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
  // expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
});
it('mock class method second', () => {
  // 一回mockImplementation してもmockClearでやれば大丈夫っぽいね
  // Show that mockClear() is working:
  expect(MockSoundPlayer).not.toHaveBeenCalled();
  const soundPlayerConsumer = new SoundPlayerConsumer();
  // Constructor should have been called again:
  expect(MockSoundPlayer).toHaveBeenCalledTimes(1);

  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();

  // mock.instances is available with automatic mocks:
  const mockSoundPlayerInstance = MockSoundPlayer.mock.instances[0];
  const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;
  expect(mockPlaySoundFile.mock.calls[0][0]).toBe(coolSoundFileName);
  // Equivalent to above check:
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
  expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
});
