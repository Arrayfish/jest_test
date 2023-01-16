/**
 * typescriptでES6のマニュアルモックもどきをやる方法
 * 別ファイルでclassの関数をjest.fn()で定義する。関数をオブジェクトとしてまとめてエクスポート
 * jest.mockでクラスをオートモック
 * まとめたオブジェクトをクラスモックにmockInplementation
 * 
 */
import mockSoundSpeaker,{mockPlaySoundFile, mockFuncs} from './manualMockedDir/mock-sound-speaker';
import SoundSpeaker from './manualMockedDir/sound-speaker';
// import SoundSpeaker, {mockPlaySoundFile} from './manualMockedDir/sound-speaker'; // ERROR!!!! mockPlaySoundFile
// 元のクラスに存在する関数などと異なる名前のものは呼び出すことができない？
// import { mockPlaySoundFile } from './manualMockedDir/__mocks__/sound-speaker';// 呼ばれてない扱い
import SoundSpeakerConsumer from './sound-speaker-consumer';
jest.mock('./manualMockedDir/sound-speaker'); // SoundPlayer is now a mock constructor
const MockSoundSpeaker = SoundSpeaker as jest.Mock;
// const mockPlaySoundFile = SoundSpeaker.prototype.playSoundFile as jest.Mock;
beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  MockSoundSpeaker.mockClear();
});

it('We can check if the consumer called the class constructor', () => {
  const soundPlayerConsumer = new SoundSpeakerConsumer();
  expect(MockSoundSpeaker).toHaveBeenCalledTimes(1);
});
it('When Mocked Class is instanceated in test function toHaveBeenCalled, Dose the call count increase?',()=>{
  const soundSpeaker = new SoundSpeaker();
  expect(MockSoundSpeaker).toHaveBeenCalledTimes(1);
})
it('We can check if the consumer called a method on the class instance', () => {
  const soundPlayerConsumer = new SoundSpeakerConsumer();
  console.dir(SoundSpeaker,{depth:null})
  const spyPlaySoundFile = jest.spyOn(SoundSpeaker.prototype, 'playSoundFile') // できない
  // const mockPlaySoundFile = MockSoundSpeaker.mock.instances[0].playSoundFile; // instanceの時点でundefined
  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
});
it("import mock def and mockInplementation() here",async ()=>{
  const soundPlayerConsumer = new SoundSpeakerConsumer();
  MockSoundSpeaker.mockImplementation(mockSoundSpeaker);
  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
})
it("import mock function def and mockInplementation() here",async ()=>{
  const soundPlayerConsumer = new SoundSpeakerConsumer();
  MockSoundSpeaker.mockImplementation(
    jest.fn(()=>{
    return mockFuncs;
  }));
  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();
  expect(mockFuncs.playSoundFile).toHaveBeenCalledWith(coolSoundFileName);
})