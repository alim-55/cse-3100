import { useState, useEffect } from 'react';

const availableCats = [
  { name: 'Luna', age: '3', breed: 'Birman' },
  { name: 'Simba', age: '4', breed: 'Abyssinian' },
  { name: 'Pumpkin', age: '2', breed: 'Bengal' },
  { name: 'Whiskers', age: '2', breed: 'Siamese' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Peterbald' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      const responses = await Promise.all(
        availableCats.map(() =>
          fetch('https://api.thecatapi.com/v1/images/search').then(res => res.json())
        )
      );
      const catsWithImages = availableCats.map((cat, index) => ({
        ...cat,
        image: responses[index][0].url,
      }));
      setCats(catsWithImages);
      setFilteredCats(catsWithImages);
    };
    fetchCatImages();
  }, []);

  useEffect(() => {
    const filtered = cats.filter(
      cat =>
        cat.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (selectedBreed === '' || cat.breed === selectedBreed)
    );
    setFilteredCats(filtered);
  }, [searchText, selectedBreed, cats]);

  return (
    <section>
      <h2 className="text-center">Available Cats</h2>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search by name"
          onChange={e => setSearchText(e.target.value)}
        />
        <select onChange={e => setSelectedBreed(e.target.value)}style={{ marginLeft: '10px' }}>
          <option value="">All Breeds</option>
          <option value="Birman">Birman</option>
          <option value="Bengal">Bengal</option>
          <option value="Abyssinian">Abyssinian</option>
          <option value="Siamese">Siamese</option>
          <option value="Persian">Persian</option>
          <option value="Peterbald">Peterbald</option>
        </select>
      </div>
      <div className="row g-4">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{
                  borderRadius: '8px',
                  height: '200px',
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
              <h3>{cat.name}</h3>
              <p>Age: {cat.age}</p>
              <p>Breed: {cat.breed}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
