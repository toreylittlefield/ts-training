// Write an interface here
interface Directory1 {
  addFile: (name: string) => void;
}

class DesktopDirectory1 implements Directory1 {
  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory1();

Desktop.addFile('lesson-notes.txt');
Desktop.showPreview('lesson-notes.txt');
