import SoundSpeaker, { mockPlaySoundFile } from './sound-speaker';
import SoundPlayerConsumer from './sound-player-consumer';
jest.mock('./sound-speaker'); // SoundPlayer is now a mock constructor
const MockSoundSpeaker = SoundSpeaker as jest.Mock;
beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  MockSoundSpeaker.mockClear();
  mockPlaySoundFile.mockClear();
});

it('We can check if the consumer called the class constructor', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(MockSoundSpeaker).toHaveBeenCalledTimes(1);
});

it('We can check if the consumer called a method on the class instance', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
});