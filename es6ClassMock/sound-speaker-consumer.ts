import SoundSpeaker from './sound-speaker';

export default class SoundSpeakerConsumer {
  private soundSpeaker;
  constructor() {
    this.soundSpeaker = new SoundSpeaker();
  }

  playSomethingCool() {
    const coolSoundFileName = 'song.mp3';
    this.soundSpeaker.playSoundFile(coolSoundFileName);
  }
}