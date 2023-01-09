import SoundSpeaker from './manualMockedDir/sound-speaker';
// import SoundSpeaker, {mockPlaySoundFile} from './manualMockedDir/sound-speaker'; // ERROR!!!! mockPlaySoundFile
// 元のクラスに存在する関数などと異なる名前のものは呼び出すことができない？
import SoundSpeakerConsumer from './sound-speaker-consumer';
jest.mock('./manualMockedDir/sound-speaker'); // SoundPlayer is now a mock constructor
const MockSoundSpeaker = SoundSpeaker as jest.Mock;
const mockPlaySoundFile = SoundSpeaker.prototype.playSoundFile as jest.Mock;
beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  MockSoundSpeaker.mockClear();
});

it('We can check if the consumer called the class constructor', () => {
  const soundPlayerConsumer = new SoundSpeakerConsumer();
  expect(MockSoundSpeaker).toHaveBeenCalledTimes(1);
});

it('We can check if the consumer called a method on the class instance', () => {
  const soundPlayerConsumer = new SoundSpeakerConsumer();
  console.dir(MockSoundSpeaker,{depth:null})
  // const mockPlaySoundFile = MockSoundSpeaker.mock.instances[0].playSoundFile; // instanceの時点でundefined
  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
});