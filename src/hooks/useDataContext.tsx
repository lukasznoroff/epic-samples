import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactElement,
} from 'react';
import { useFetch } from '../hooks/useFetch';

interface SampleProps {
  id: string;
  fields: {
    name: string;
    genres: string;
    price: number;
    image: {
      url: string;
    }[];
    audio: {
      url: string;
    }[];
  };
}

interface DataContextType {
  data: SampleProps[];
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function useDataContext() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useDataContext must be used within a DataContextProvider');
  }

  return context;
}

type ChildrenType = { children?: ReactElement | ReactElement[] };

export function DataContextProvider({ children }: ChildrenType): ReactElement {
  // const { data } = useFetch(
  //   'https://api.airtable.com/v0/appW9ReVSM8YJzf98/sample_packs'
  // );
  const [dataState, setDataState] = useState<any[]>([]);

  // useEffect(() => {
  //   if (data) {
  //     setDataState(data);
  //   }
  // }, [data]);

  return (
    <DataContext.Provider value={{ data: dataState }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
