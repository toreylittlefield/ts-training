type Status = 'idle' | 'downloading' | 'complete';

const downloadStatus = (status: Status) => {
  switch (status) {
    case 'idle':
      console.log('Download');
      break;
    case 'downloading':
      console.log('Downloading');
      break;
    case 'complete':
      console.log('Your download is complete!');
      break;
  }
};

downloadStatus('idle');
downloadStatus('downloading');
downloadStatus('complete');
