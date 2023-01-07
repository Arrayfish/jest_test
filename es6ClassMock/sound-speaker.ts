export default class SoundSpeaker{
  private foo: string;
  constructor() {
    this.foo = 'bar';
  }

  playSoundFile(fileName: string) {
    if (fileName === "throw") throw new Error("throw required")
    console.log('Playing sound file ' + fileName);
  }
}