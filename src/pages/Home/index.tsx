import { usePhotos } from '../../api/photo';

function Home() {
  const { data } = usePhotos();
  const pages = data?.pages;

  return (
    <div>
      {pages?.map((pageData) =>
        pageData.map((photo) => <div key={photo.id}>{photo.author}</div>)
      )}
    </div>
  );
}

export default Home;
