import { useFetch } from '../hooks/useFetch';
import GridItems from './GridItems';
// import AudioPlayer from './AudioPlayer';

function SampleList() {
  const { data } = useFetch(
    'https://api.airtable.com/v0/appW9ReVSM8YJzf98/sample_packs'
  );

  return (
    <div>
      {data && <GridItems data={data} />}
      {/* <AudioPlayer data={data} /> */}
    </div>
  );
}

export default SampleList;
